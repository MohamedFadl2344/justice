import { useTranslation } from '../../../../i18n';

export const FooterServices = () => {
    const { t } = useTranslation('footer');

    const services: string[] = t('services.items', []);

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#1a3a52] dark:text-white" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                {t('services.title')}
            </h3>
            <ul className="space-y-2">
                {Array.isArray(services) && services.map((service, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-400 text-sm" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                        {service}
                    </li>
                ))}
            </ul>
        </div>
    );
};
