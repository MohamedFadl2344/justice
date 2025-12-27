import { HiScale, HiShieldCheck, HiDocumentText, HiUserGroup } from 'react-icons/hi';
import { ServiceCard } from './ServiceCard';
import { useTranslation } from '../../../../i18n';

export const ServicesGrid = () => {
    const { t } = useTranslation('services');

    const services = [
        {
            id: 1,
            icon: HiShieldCheck,
            title: t('items.criminal.title'),
            features: t('items.criminal.features', []),
        },
        {
            id: 2,
            icon: HiDocumentText,
            title: t('items.corporate.title'),
            features: t('items.corporate.features', []),
        },
        {
            id: 3,
            icon: HiScale,
            title: t('items.arbitration.title'),
            features: t('items.arbitration.features', []),
        },
        {
            id: 4,
            icon: HiUserGroup,
            title: t('items.consulting.title'),
            features: t('items.consulting.features', []),
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
                <ServiceCard
                    key={service.id}
                    icon={service.icon}
                    title={service.title}
                    features={service.features}
                    index={index}
                />
            ))}
        </div>
    );
};
