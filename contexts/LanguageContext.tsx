import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Define the shape of the translations object
interface Translations {
  [key: string]: {
    en: string;
    ar: string;
  };
}

// Define the context shape
interface LanguageContextType {
  language: 'en' | 'ar';
  t: (key: string) => string;
  toggleLanguage: () => void;
}

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Define translations
const translations: Translations = {
  introduction: { en: 'Introduction', ar: 'مقدمة' },
  scrapeThisPage: { en: 'Scrape this page', ar: 'سحب بيانات الصفحة الحالية' },
  scrapeMultiUrls: { en: 'Scrape multi urls', ar: 'سحب بيانات اكثر من منتج' },
  dataCopyingNotes: { en: 'Data copying notes', ar: 'ملاحظات نسخ و لصق البيانات' },
  exportAsExcel: { en: 'Export as Excel', ar: 'تحميل كملف Excel' },
  contactNow: { en: 'contact now', ar: 'تواصل الآن' },
  switchTo: { en: 'العربية', ar: 'English' }
};

// Create the provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'ar' : 'en'));
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Create a custom hook for easy context consumption
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
