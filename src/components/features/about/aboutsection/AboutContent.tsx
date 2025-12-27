import { motion } from 'framer-motion';
import { useTranslation } from '../../../../i18n';

export const AboutContent = () => {
    const { t } = useTranslation('about');

    const commitments = [
        {
            id: 1,
            title: t('commitments.expertise.title'),
            description: t('commitments.expertise.description'),
        },
        {
            id: 2,
            title: t('commitments.support.title'),
            description: t('commitments.support.description'),
        },
        {
            id: 3,
            title: t('commitments.results.title'),
            description: t('commitments.results.description'),
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
        >
            <div className="flex items-center gap-3">
                <div className="h-0.5 w-12 bg-[#d4a574]" />
                <p className="text-[#d4a574] font-medium text-sm" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                    {t('badge')}
                </p>
            </div>

            <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a3a52] dark:text-white leading-tight" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                    {t('title.main')}
                    <br />
                    <span className="text-[#d4a574]">{t('title.highlight')}</span>
                </h2>
            </div>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                {t('description')}
            </p>

            <div className="space-y-4">
                {commitments.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
                    >
                        <h4 className="font-bold text-[#1a3a52] dark:text-white mb-2 text-lg" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                            {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};
