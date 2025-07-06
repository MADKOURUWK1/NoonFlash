import React from 'react';
import { GlobeIcon, LogoIcon } from './icons';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  onOpenGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenGuide }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="py-6 px-4 sm:px-8 lg:px-12">
      <div className="flex justify-between items-center max-w-7xl mx-auto">

        {/* Left-side buttons */}
        <div className="flex items-center gap-3">
          {/* Language Switch Button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 border border-gray-400 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <GlobeIcon className="w-5 h-5" />
            <span>{language === 'ar' ? 'English' : 'العربية'}</span>
          </button>

          {/* Seller Guide Button */}
          <button id="guide-btn" onClick={onOpenGuide}>
            {language === 'ar' ? 'دليل البائع' : 'Seller Guide'}
          </button>
        </div>

        {/* Right-side logo */}
        <LogoIcon className="w-12 h-12 shadow-md rounded-lg" />
      </div>
    </header>
  );
};
