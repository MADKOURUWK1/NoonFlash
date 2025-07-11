// context/LanguageContext.tsx
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
  switchTo: { en: 'العربية', ar: 'English' },
  // --- New Pricing Table Translations ---
  chooseYourPlan: { en: 'Choose Your Plan', ar: 'اختر خطتك' },
  oneMonth: { en: '1 Month', ar: 'شهر واحد' },
  threeMonths: { en: '3 Months', ar: '3 شهور' },
  sixMonths: { en: '6 Months', ar: '6 شهور' },
  twelveMonths: { en: '12 Months', ar: '12 شهر' },
  save50LE: { en: 'save 50 L.E', ar: 'وفر 50 جنيه' },
  save100LE: { en: 'save 100 L.E', ar: 'وفر 100 جنيه' },
  save150LE: { en: 'save 150 L.E', ar: 'وفر 150 جنيه' },
  subscribeNow: { en: 'Subscribe Now', ar: 'اشترك الآن' },
  // --- Help Popup Button Translation ---
  help: { en: 'Need Help?', ar: 'هل تحتاج للمساعدة؟' }, // Changed key to 'help' and adjusted text
  contactSupport: { en: 'Contact Support', ar: 'اتصل بالدعم' },
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

  // Optional: If you want to persist language choice across sessions
  useEffect(() => {
    const storedLang = localStorage.getItem('appLanguage');
    if (storedLang && (storedLang === 'en' || storedLang === 'ar')) {
      setLanguage(storedLang);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('appLanguage', language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'; // Set dir attribute for RTL
  }, [language]);

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
