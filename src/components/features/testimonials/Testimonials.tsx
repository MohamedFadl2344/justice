import { SectionHeader } from '../services/servicessection/SectionHeader';
import { TestimonialsCarousel } from './testimonialssection/TestimonialsCarousel';
import { useTranslation } from '../../../i18n';

export const Testimonials = () => {
    const { t } = useTranslation('testimonials');

    return (
        <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    badge={t('badge')}
                    title={t('title.main')}
                    highlight={t('title.highlight')}
                    subtitle={t('subtitle')}
                    centered={true}
                />
                <TestimonialsCarousel />
            </div>
        </section>
    );
};
