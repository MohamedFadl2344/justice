import { useState, useRef, useEffect } from 'react';
import { HiGlobeAlt, HiChevronDown } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguageStore, type Language } from '../../../../i18n';
import SA from 'country-flag-icons/react/3x2/SA';
import GB from 'country-flag-icons/react/3x2/GB';
import FR from 'country-flag-icons/react/3x2/FR';
import DE from 'country-flag-icons/react/3x2/DE';
import IT from 'country-flag-icons/react/3x2/IT';

const languageOptions = [
    { code: 'ar' as Language, name: 'العربية', englishName: 'Arabic', FlagIcon: SA },
    { code: 'en' as Language, name: 'English', englishName: 'English', FlagIcon: GB },
    { code: 'fr' as Language, name: 'Français', englishName: 'French', FlagIcon: FR },
    { code: 'de' as Language, name: 'Deutsch', englishName: 'German', FlagIcon: DE },
    { code: 'it' as Language, name: 'Italiano', englishName: 'Italian', FlagIcon: IT },
];

export const LanguageSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { currentLanguage, setLanguage } = useLanguageStore();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageChange = async (lang: Language) => {
        await setLanguage(lang);
        setIsOpen(false);
    };

    const currentLang = languageOptions.find(lang => lang.code === currentLanguage) || languageOptions[0];
    const CurrentFlag = currentLang.FlagIcon;

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                aria-label="Select language"
            >
                <HiGlobeAlt className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                <CurrentFlag className="w-6 h-4 rounded-sm" />
                <HiChevronDown className={`w-4 h-4 text-gray-700 dark:text-gray-300 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
                    >
                        {languageOptions.map((lang) => {
                            const FlagIcon = lang.FlagIcon;
                            return (
                                <button
                                    key={lang.code}
                                    onClick={() => handleLanguageChange(lang.code)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 ${currentLanguage === lang.code ? 'bg-gray-50 dark:bg-gray-700' : ''
                                        }`}
                                >
                                    <FlagIcon className="w-6 h-4 rounded-sm flex-shrink-0" />
                                    <div className="flex flex-col items-start">
                                        <span className="text-sm font-medium text-gray-900 dark:text-white" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                                            {lang.name}
                                        </span>
                                        <span className="text-xs text-gray-500 dark:text-gray-400">
                                            {lang.englishName}
                                        </span>
                                    </div>
                                    {currentLanguage === lang.code && (
                                        <span className="ml-auto text-[#d4a574]">✓</span>
                                    )}
                                </button>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
