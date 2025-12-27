import { motion } from 'framer-motion';

interface SectionHeaderProps {
    badge?: string;
    title: string;
    highlight?: string;
    subtitle?: string;
    centered?: boolean;
    showButton?: boolean;
    buttonText?: string;
}

export const SectionHeader = ({
    badge,
    title,
    highlight,
    subtitle,
    centered = false,
    showButton = false,
    buttonText
}: SectionHeaderProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
        >
            <div className={`flex items-center ${centered ? 'justify-center' : 'justify-between'}`}>
                <div className={`${centered ? 'text-center' : 'text-right'} ${centered ? 'max-w-3xl' : 'max-w-2xl'}`}>
                    {badge && (
                        <motion.span
                            initial={{ opacity: 0, x: centered ? 0 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-block px-4 py-2 bg-[#d4a574]/10 text-[#d4a574] rounded-full text-sm font-medium mb-4"
                            style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}
                        >
                            {badge}
                        </motion.span>
                    )}

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-3xl md:text-4xl font-bold text-[#1a3a52] dark:text-white mb-4"
                        style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}
                    >
                        {title}{' '}
                        {highlight && (
                            <span className="text-[#d4a574]">{highlight}</span>
                        )}
                    </motion.h2>

                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-gray-600 dark:text-gray-300 text-base leading-relaxed"
                            style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </div>

                {showButton && buttonText && !centered && (
                    <div className="flex-shrink-0">
                        <button
                            className="text-sm text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 px-6 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors whitespace-nowrap font-medium"
                            style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}
                        >
                            {buttonText}
                        </button>
                    </div>
                )}
            </div>
        </motion.div>
    );
};
