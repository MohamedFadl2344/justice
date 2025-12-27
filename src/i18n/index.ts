import { useLanguageStore } from './languageStore';

/**
 * Custom hook for accessing translations
 * @param namespace - The translation namespace (e.g., 'hero', 'navbar')
 * @returns Translation function and current language
 */
export const useTranslation = (namespace: string) => {
    const { translations, currentLanguage } = useLanguageStore();

    /**
     * Get translation by key
     * @param key - Translation key (supports nested keys with dot notation)
     * @param fallback - Optional fallback value if translation not found
     */
    const t = (key: string, fallback?: any): any => {
        const namespaceTranslations = translations[namespace];

        if (!namespaceTranslations) {
            return fallback || key;
        }

        // Support nested keys like "section.title"
        const keys = key.split('.');
        let value: any = namespaceTranslations;

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                return fallback || key;
            }
        }

        // Return the value as-is (could be string, array, or object)
        return value !== undefined ? value : (fallback || key);
    };

    return { t, currentLanguage };
};

/**
 * Initialize i18n system
 * Call this once when the app starts
 */
export const initI18n = async () => {
    const { currentLanguage, loadTranslations, setLanguage } = useLanguageStore.getState();

    // Load initial translations
    await loadTranslations(currentLanguage);

    // Set initial language (this will update document direction)
    await setLanguage(currentLanguage);
};

export { useLanguageStore, languages } from './languageStore';
export type { Language, LanguageConfig } from './languageStore';
