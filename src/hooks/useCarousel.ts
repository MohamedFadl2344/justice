import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import type { EmblaOptionsType } from 'embla-carousel';

interface UseCarouselOptions {
    autoplay?: boolean;
    autoplayDelay?: number;
    loop?: boolean;
    direction?: 'rtl' | 'ltr';
}

export const useCarousel = (options: UseCarouselOptions = {}) => {
    const {
        autoplay = true,
        autoplayDelay = 5000,
        loop = true,
        direction = 'rtl',
    } = options;

    const emblaOptions: EmblaOptionsType = {
        loop,
        align: 'start',
        direction,
        slidesToScroll: 1,
    };

    const plugins = autoplay
        ? [Autoplay({ delay: autoplayDelay, stopOnInteraction: false })]
        : [];

    const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions, plugins);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);

        return () => {
            emblaApi.off('select', onSelect);
            emblaApi.off('reInit', onSelect);
        };
    }, [emblaApi, onSelect]);

    return {
        emblaRef,
        emblaApi,
        canScrollPrev,
        canScrollNext,
        scrollPrev,
        scrollNext,
    };
};
