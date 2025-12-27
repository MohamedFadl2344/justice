import { SectionHeader } from './servicessection/SectionHeader';
import { ServicesGrid } from './servicessection/ServicesGrid';
import { useTranslation } from '../../../i18n';

export const Services = () => {
    const { t } = useTranslation('services');

    return (
        <section id="services" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    badge={t('badge')}
                    title={t('title.main')}
                    highlight={t('title.highlight')}
                    subtitle={t('subtitle')}
                    showButton={true}
                    buttonText={t('viewAll')}
                />
                <ServicesGrid />
            </div>
        </section>
    );
};
