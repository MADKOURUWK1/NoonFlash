import React from 'react';
import { GlobeIcon } from './icons'; // Assuming LogoIcon is no longer needed or replaced by direct img tag
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  onOpenGuide: () => void;
  extensionLink: string; // New prop for the extension link
}

export const Header: React.FC<HeaderProps> = ({ onOpenGuide, extensionLink }) => {
  const { language, toggleLanguage, t } = useLanguage(); // Get 't' for translations

  // Determine flex direction based on language
  const headerDirectionClass = language === 'ar' ? 'flex-row-reverse' : 'flex-row';
  const contentDirectionClass = language === 'ar' ? 'justify-start' : 'justify-end';

  return (
    <header className="py-4 px-4 sm:px-8 lg:px-12 bg-white shadow-sm"> {/* Added shadow and adjusted padding */}
      <div className={`flex ${headerDirectionClass} items-center justify-between max-w-7xl mx-auto`}>

        {/* Logo - Positioned left for LTR, right for RTL */}
        <div className={`flex-shrink-0 ${language === 'ar' ? 'ml-4' : 'mr-4'}`}> {/* Margin based on language */}
          <img
            src="/logo.png" // Path to your logo in the public folder
            alt="Company Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg object-contain" // Adjusted sizes
          />
        </div>

        {/* Right-side (or Left-side for RTL) buttons and language switch */}
        <div className={`flex items-center gap-4 text-base sm:text-lg`}> {/* Adjusted font size for buttons */}
          {/* Language Switch Button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 border border-gray-400 rounded-full px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors font-medium"
          >
            <GlobeIcon className="w-5 h-5" />
            <span>{t('switchTo')}</span> {/* Use translation for language name */}
          </button>

          {/* Seller Guide Button */}
          <button
            onClick={onOpenGuide}
            className="px-4 py-2 font-medium bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors border border-gray-300"
          >
            {t('sellerGuide')} {/* Using translation key */}
          </button>

          {/* Get Now / Extension Link Button */}
          <a
            href={extensionLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors font-medium shadow"
          >
            {t('getNow')} {/* Using translation key */}
          </a>
        </div>
      </div>
    </header>
  );
};
