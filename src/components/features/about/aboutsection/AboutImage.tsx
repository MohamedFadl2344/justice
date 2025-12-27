import { motion } from 'framer-motion';
import { useTranslation } from '../../../../i18n';

export const AboutImage = () => {
    const { t } = useTranslation('about');

    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
        >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                    src="/image/about/whyabout.webp"
                    alt="Law office professional"
                    className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a3a52]/95 to-transparent p-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                                {t('founder.name')}
                            </h3>
                            <p className="text-gray-200 text-sm" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                                {t('founder.title')}
                            </p>
                        </div>
                        <div className="bg-[#d4a574] text-white px-4 py-2 rounded-md text-sm font-medium" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                            {t('founder.badge')}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
