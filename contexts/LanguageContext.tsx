// context/LanguageContext.tsx
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface Translations {
  [key: string]: {
    en: string;
    ar: string;
  };
}

interface LanguageContextType {
  language: 'en' | 'ar';
  t: (key: string) => string;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// SEO: Enhance translations with keywords where natural and relevant
const translations: Translations = {
  introduction: { en: 'Introduction to NoonFlash', ar: 'مقدمة عن نون فلاش' },
  // Emphasize "Noon data scraping" and "product data extraction"
  scrapeThisPage: { en: 'Scrape Noon Product Data from Current Page', ar: 'سحب بيانات منتجات نون من الصفحة الحالية' },
  scrapeMultiUrls: { en: 'Scrape Noon Product Data from Multiple URLs', ar: 'سحب بيانات منتجات نون من روابط متعددة' },
  dataCopyingNotes: { en: 'Important Notes on Noon Data Copying', ar: 'ملاحظات هامة حول نسخ بيانات نون' },
  exportAsExcel: { en: 'Export Noon Data as Excel', ar: 'تحميل بيانات نون كملف Excel' },
  contactNow: { en: 'Contact Now', ar: 'تواصل الآن' },
  switchTo: { en: 'العربية', ar: 'English' },

  // --- Pricing Table Translations (already good with keywords) ---
  chooseYourPlan: { en: 'Choose Your Data Extraction Plan', ar: 'اختر خطة سحب البيانات الخاصة بك' }, // Added keyword
  oneMonth: { en: '1 Month Plan', ar: 'خطة شهر واحد' }, // Added "Plan" for clarity
  threeMonths: { en: '3 Months Plan', ar: 'خطة 3 شهور' },
  sixMonths: { en: '6 Months Plan', ar: 'خطة 6 شهور' },
  twelveMonths: { en: '12 Months Plan', ar: 'خطة 12 شهر' },
  save50LE: { en: 'Save 50 L.E', ar: 'وفر 50 جنيه' },
  save100LE: { en: 'Save 100 L.E', ar: 'وفر 100 جنيه' },
  save150LE: { en: 'Save 150 L.E', ar: 'وفر 150 جنيه' },
  subscribeNow: { en: 'Subscribe Now for Data Scraping', ar: 'اشترك الآن لسحب البيانات' }, // Added keyword

  // --- Help Translations ---
  helpButtonText: { en: 'Need Help with Noon Scraper?', ar: 'هل تحتاج للمساعدة في سحب بيانات نون؟' }, // Added keyword
  helpPopupTitle: { en: 'NoonFlash Support', ar: 'دعم نون فلاش' }, // Changed to be more descriptive
  contactSupport: { en: 'Contact Support', ar: 'اتصل بالدعم الفني' },

  // --- New Header Translations ---
  sellerGuide: { en: 'Noon Seller Guide', ar: 'دليل بائع نون' }, // Added "Noon"
  getNow: { en: 'Start Noon Scraping Now', ar: 'أبدا سحب بيانات نون الآن' }, // More action-oriented and keyword-rich
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'ar' : 'en'));
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  useEffect(() => {
    const storedLang = localStorage.getItem('appLanguage');
    if (storedLang && (storedLang === 'en' || storedLang === 'ar')) {
      setLanguage(storedLang);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('appLanguage', language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
