import { useEffect, useState } from 'react';
import { useLanguageStore } from './i18n';
import { Home } from './pages/Home';
import { SimpleLoader } from './components/common/SimpleLoader';

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

  // Show simple loader while translations load
  if (!isReady) {
    return <SimpleLoader />;
  }

  return <Home />;
}

export default App;
