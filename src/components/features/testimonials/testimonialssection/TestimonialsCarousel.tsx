import { TestimonialCard } from './TestimonialCard';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useCarousel } from '../../../../hooks/useCarousel';
import { useTranslation } from '../../../../i18n';
import { useLanguageStore } from '../../../../i18n';

interface Testimonial {
    name: string;
    role: string;
    content: string;
    rating: number;
}

export const TestimonialsCarousel = () => {
    const { t } = useTranslation('testimonials');
    const { currentLanguage } = useLanguageStore();

    // Determine direction based on language
    const direction = currentLanguage === 'ar' ? 'rtl' : 'ltr';

    const { emblaRef, canScrollPrev, canScrollNext, scrollPrev, scrollNext } = useCarousel({
        autoplay: true,
        autoplayDelay: 5000,
        loop: true,
        direction: direction,
    });

    // Get testimonials from translation
    const testimonials: Testimonial[] = t('items', []);

    // Generate avatar from name
    const generateAvatar = (name: string): string => {
        return name
            .split(' ')
            .map(word => word.charAt(0))
            .join('.');
    };

    return (
        <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {Array.isArray(testimonials) && testimonials.map((testimonial, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                            <TestimonialCard
                                name={testimonial.name}
                                role={testimonial.role}
                                content={testimonial.content}
                                rating={testimonial.rating}
                                avatar={generateAvatar(testimonial.name)}
                                index={index}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 z-10"
                aria-label="Previous testimonial"
            >
                <HiChevronRight className="w-6 h-6 text-[#1a3a52] dark:text-white" />
            </button>
            <button
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 z-10"
                aria-label="Next testimonial"
            >
                <HiChevronLeft className="w-6 h-6 text-[#1a3a52] dark:text-white" />
            </button>
        </div>
    );
};
