import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const HelpPopup: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl p-6 shadow-lg max-w-md w-full text-center">
        <h2 className="text-xl font-bold mb-4">
          {language === 'en' ? 'Need Help?' : 'هل تحتاج إلى مساعدة؟'}
        </h2>
        <p className="mb-2">
          {language === 'en'
            ? 'If you have any questions or need support, feel free to contact me:'
            : 'إذا كان لديك أي أسئلة أو تحتاج إلى دعم، لا تتردد في التواصل معي:'}
        </p>
        <p className="mb-1">
          Email: <a className="text-blue-600" href="mailto:omarmadkouruwk@gmail.com">omarmadkouruwk@gmail.com</a>
        </p>
        <p className="mb-4">
          WhatsApp: <a className="text-blue-600" href="https://api.whatsapp.com/send?phone=201147570732" target="_blank" rel="noopener noreferrer">
            {language === 'en' ? 'Chat on WhatsApp' : 'الدردشة على واتساب'}
          </a>
        </p>
        <button
          onClick={onClose}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          {language === 'en' ? 'Close' : 'إغلاق'}
        </button>
      </div>
    </div>
  );
};

export default HelpPopup;
