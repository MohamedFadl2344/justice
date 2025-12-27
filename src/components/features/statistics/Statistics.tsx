import { StatsGrid } from './statisticssection/StatsGrid';
import { useTranslation } from '../../../i18n';
import { motion } from 'framer-motion';

export const Statistics = () => {
    const { t } = useTranslation('statistics');

    return (
        <section id="statistics" className="py-20 bg-[#1a3a52] dark:bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Custom Header for Statistics */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-block px-6 py-2 bg-[#d4a574]/20 text-[#d4a574] rounded-full text-sm font-medium mb-6"
                        style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}
                    >
                        {t('badge')}
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                        style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}
                    >
                        {t('title.main')}{' '}
                        <span className="text-[#d4a574]">{t('title.highlight')}</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto"
                        style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}
                    >
                        {t('subtitle')}
                    </motion.p>
                </motion.div>

                <StatsGrid />
            </div>
        </section>
    );
};
