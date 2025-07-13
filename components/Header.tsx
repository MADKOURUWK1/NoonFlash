import React from 'react';
import { GlobeIcon } from './icons'; // Assuming GlobeIcon is still used
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  onOpenGuide: () => void;
  extensionLink: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenGuide, extensionLink }) => {
  const { language, toggleLanguage, t } = useLanguage();

  const headerDirectionClass = language === 'ar' ? 'flex-row-reverse' : 'flex-row';
  const contentDirectionClass = language === 'ar' ? 'justify-start' : 'justify-end'; // This variable isn't used here, remove if not used elsewhere in this component

  return (
    <header className="py-4 px-4 sm:px-8 lg:px-12 bg-white shadow-sm">
      <div className={`flex ${headerDirectionClass} items-center justify-between max-w-7xl mx-auto`}>

        {/* SEO: More descriptive alt text for the logo */}
        <div className={`flex-shrink-0 ${language === 'ar' ? 'ml-4' : 'mr-4'}`}>
          <img
            src="/logo.png"
            alt="NoonFlash Extension Logo for Noon.com Data Scraping" // Improved alt text
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg object-contain"
          />
        </div>

        <div className={`flex items-center gap-4 text-base sm:text-lg`}>
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 border border-gray-400 rounded-full px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors font-medium"
          >
            <GlobeIcon className="w-5 h-5" />
            <span>{t('switchTo')}</span>
          </button>

          <button
            onClick={onOpenGuide}
            className="px-4 py-2 font-medium bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors border border-gray-300"
          >
            {t('sellerGuide')}
          </button>

          <a
            href={extensionLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors font-medium shadow"
          >
            {t('getNow')}
          </a>
        </div>
      </div>
    </header>
  );
};
