import React from 'react';
import { GlobeIcon, LogoIcon } from './icons';
import { useLanguage } from '../contexts/LanguageContext';

// 1. Define an interface for the props our component will accept
interface HeaderProps {
  onOpenGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenGuide }) => {
  const { t, toggleLanguage } = useLanguage();

  return (
    <header className="py-6 px-4 sm:px-8 lg:px-12">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Container for the buttons on the left */}
        <div className="flex items-center gap-3">
          <button  
            onClick={toggleLanguage}
            className="flex items-center gap-2 border border-gray-400 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors">
            <GlobeIcon className="w-5 h-5" />
            <span>{t('switchTo')}</span>
          </button>

          {/* 2. Here is the new button for the Seller Guide */}
          <button id="guide-btn" onClick={onOpenGuide}>
            {t('sellerGuide') || 'Seller Guide'} {/* Uses translation or fallback text */}
          </button>
        </div>
        
        <LogoIcon className="w-12 h-12 shadow-md rounded-lg" />
      </div>
    </header>
  );
};
