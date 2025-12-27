import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Language = 'ar' | 'en' | 'fr' | 'de' | 'it';

export interface LanguageConfig {
    code: Language;
    name: string;
    nativeName: string;
    flag: string;
    dir: 'rtl' | 'ltr';
}

export const languages: Record<Language, LanguageConfig> = {
    ar: {
        code: 'ar',
        name: 'Arabic',
        nativeName: 'العربية',
        flag: '🇸🇦',
        dir: 'rtl',
    },
    en: {
        code: 'en',
        name: 'English',
        nativeName: 'English',
        flag: '🇬🇧',
        dir: 'ltr',
    },
    fr: {
        code: 'fr',
        name: 'French',
        nativeName: 'Français',
        flag: '🇫🇷',
        dir: 'ltr',
    },
    de: {
        code: 'de',
        name: 'German',
        nativeName: 'Deutsch',
        flag: '🇩🇪',
        dir: 'ltr',
    },
    it: {
        code: 'it',
        name: 'Italian',
        nativeName: 'Italiano',
        flag: '🇮🇹',
        dir: 'ltr',
    },
};

interface LanguageStore {
    currentLanguage: Language;
    translations: Record<string, any>;
    isLoading: boolean;
    setLanguage: (language: Language) => Promise<void>;
    loadTranslations: (language: Language) => Promise<void>;
}

export const useLanguageStore = create<LanguageStore>()(
    persist(
        (set, get) => ({
            currentLanguage: 'ar',
            translations: {},
            isLoading: false,

            setLanguage: async (language: Language) => {
                set({ isLoading: true });
                const config = languages[language];

                // Update document direction and lang
                document.documentElement.dir = config.dir;
                document.documentElement.lang = language;

                // Update body direction for compatibility
                document.body.dir = config.dir;

                // Load translations
                await get().loadTranslations(language);

                // Update state
                set({ currentLanguage: language, isLoading: false });
            },

            loadTranslations: async (language: Language) => {
                try {
                    // Dynamically import all translation files for the language
                    const translations: Record<string, any> = {};

                    // Features
                    const hero = await import(`../locales/${language}/features/hero.json`);
                    const about = await import(`../locales/${language}/features/about.json`);
                    const services = await import(`../locales/${language}/features/services.json`);
                    const statistics = await import(`../locales/${language}/features/statistics.json`);
                    const testimonials = await import(`../locales/${language}/features/testimonials.json`);
                    const contact = await import(`../locales/${language}/features/contact.json`);

                    // Layout
                    const navbar = await import(`../locales/${language}/layout/navbar.json`);
                    const footer = await import(`../locales/${language}/layout/footer.json`);

                    translations.hero = hero.default;
                    translations.about = about.default;
                    translations.services = services.default;
                    translations.statistics = statistics.default;
                    translations.testimonials = testimonials.default;
                    translations.contact = contact.default;
                    translations.navbar = navbar.default;
                    translations.footer = footer.default;

                    set({ translations });
                } catch (error) {
                    console.error(`Failed to load translations for ${language}:`, error);
                    set({ isLoading: false });
                }
            },
        }),
        {
            name: 'language-storage',
            partialize: (state) => ({ currentLanguage: state.currentLanguage }),
        }
    )
);
