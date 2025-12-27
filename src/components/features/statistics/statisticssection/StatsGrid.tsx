import { motion } from 'framer-motion';
import { StatCard } from './StatCard';
import { useTranslation } from '../../../../i18n';

export const StatsGrid = () => {
    const { t } = useTranslation('statistics');

    const stats = [
        {
            id: 1,
            value: t('stats.cases.value'),
            label: t('stats.cases.label'),
        },
        {
            id: 2,
            value: t('stats.clients.value'),
            label: t('stats.clients.label'),
        },
        {
            id: 3,
            value: t('stats.experience.value'),
            label: t('stats.experience.label'),
        },
        {
            id: 4,
            value: t('stats.awards.value'),
            label: t('stats.awards.label'),
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
            {stats.map((stat, index) => (
                <StatCard
                    key={stat.id}
                    value={stat.value}
                    label={stat.label}
                    index={index}
                />
            ))}
        </motion.div>
    );
};
