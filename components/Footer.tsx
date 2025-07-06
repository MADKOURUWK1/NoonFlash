
import React from 'react';
import { WhatsAppIcon } from './icons';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-8">
      <a href="https://wa.me/201147570732" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
        <WhatsAppIcon className="w-7 h-7" />
        <span className="font-semibold">{t('contactNow')}</span>
      </a>
    </footer>
  );
};