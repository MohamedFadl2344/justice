import { motion } from 'framer-motion';
import { useTranslation } from '../../../../i18n';

export const HeroActions = () => {
    const { t } = useTranslation('hero');

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
            <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-[#d4a574] hover:bg-[#c49563] text-white rounded-lg transition-all duration-300 font-medium text-base"
                style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}
            >
                {t('buttons.contact')}
            </button>
            <button
                onClick={() => scrollToSection('services')}
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 rounded-lg transition-all duration-300 font-medium text-base"
                style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}
            >
                {t('buttons.services')}
            </button>
        </motion.div>
    );
};
