import { useEffect, useState } from 'react';
import { useLanguageStore } from './i18n';
import { Home } from './pages/Home';

function App() {
  const { currentLanguage, translations } = useLanguageStore();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Set document direction based on language
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  useEffect(() => {
    // Check if translations are loaded
    if (Object.keys(translations).length > 0) {
      setIsReady(true);
    }
  }, [translations]);

  // Show nothing while loading (invisible preloader)
  if (!isReady) {
    return (
      <div className="min-h-screen bg-white">
        {/* Invisible preloader - just white screen */}
      </div>
    );
  }

  return <Home />;
}

export default App;
