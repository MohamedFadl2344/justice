import { useEffect } from 'react';
import { useLanguageStore } from './i18n';
import { Home } from './pages/Home';

function App() {
  const { isLoading, currentLanguage, loadTranslations } = useLanguageStore();

  useEffect(() => {
    // Load translations on mount
    const initTranslations = async () => {
      await loadTranslations(currentLanguage);
    };

    initTranslations();
  }, [currentLanguage, loadTranslations]);

  useEffect(() => {
    // Set document direction based on language
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#d4a574] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
            Loading...
          </p>
        </div>
      </div>
    );
  }

  return <Home />;
}

export default App;
