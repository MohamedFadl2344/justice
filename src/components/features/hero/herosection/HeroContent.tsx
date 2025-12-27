import { motion } from 'framer-motion';
import { useTranslation } from '../../../../i18n';

export const HeroContent = () => {
    const { t } = useTranslation('hero');

    return (
        <div className="text-center space-y-6 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <p className="text-[#d4a574] text-sm md:text-base font-medium mb-4" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                    {t('badge')}
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                    {t('title.main')}
                    <br />
                    <span className="text-[#d4a574]">{t('title.highlight')}</span>
                </h1>
                <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                    {t('description')}
                </p>
            </motion.div>
        </div>
    );
};
