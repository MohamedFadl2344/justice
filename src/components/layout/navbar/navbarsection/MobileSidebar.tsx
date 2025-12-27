import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiScale } from 'react-icons/hi';
import { useTranslation, useLanguageStore } from '../../../../i18n';

interface MobileSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export const MobileSidebar = ({ isOpen, onClose }: MobileSidebarProps) => {
    const { t } = useTranslation('navbar');
    const { currentLanguage } = useLanguageStore();
    const isRTL = currentLanguage === 'ar';

    const navLinks = t('links', []);

    const handleLinkClick = (href: string) => {
        onClose();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: isRTL ? '100%' : '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: isRTL ? '100%' : '-100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className={`fixed top-0 ${isRTL ? 'right-0' : 'left-0'} h-full w-80 bg-white shadow-2xl z-50 lg:hidden flex flex-col`}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-200">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#1a3a52] rounded-lg flex items-center justify-center">
                                    <HiScale className="w-6 h-6 text-white" />
                                </div>
                                <div className={isRTL ? 'text-right' : 'text-left'}>
                                    <h2 className="text-xl font-bold text-[#1a3a52]" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                                        العدالة
                                    </h2>
                                    <p className="text-xs text-gray-600" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                                        {t('subtitle')}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                                aria-label="Close menu"
                            >
                                <HiX className="w-6 h-6 text-gray-700" />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex-1 overflow-y-auto py-6">
                            <ul className="space-y-2 px-4">
                                {Array.isArray(navLinks) && navLinks.map((link: any, index: number) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <a
                                            href={link.href}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleLinkClick(link.href);
                                            }}
                                            className={`block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-[#d4a574] transition-all duration-300 ${isRTL ? 'text-right' : 'text-left'
                                                }`}
                                            style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}
                                        >
                                            {link.label}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </nav>

                        {/* CTA Button */}
                        <div className="p-6 border-t border-gray-200">
                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleLinkClick('#contact');
                                }}
                                className="block w-full bg-[#1a3a52] hover:bg-[#2a4a62] text-white px-6 py-4 rounded-lg font-medium transition-colors duration-300 text-center"
                                style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}
                            >
                                {t('cta')}
                            </a>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
