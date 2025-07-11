import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { VideoSection } from './components/VideoSection';
import { Background } from './components/Background';
import { GuideModal } from './components/GuideModal';
import { useLanguage } from './contexts/LanguageContext';
import HelpPopup from './components/HelpPopup';

const PricingTable: React.FC = () => {
  const { t } = useLanguage();

  const plans = [
    { periodKey: 'oneMonth', price: '300', saveKey: '' },
    { periodKey: 'threeMonths', price: '850', saveKey: 'save50LE' },
    { periodKey: 'sixMonths', price: '1700', saveKey: 'save100LE' },
    { periodKey: 'twelveMonths', price: '3450', saveKey: 'save150LE' },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
          {t('chooseYourPlan')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out border border-gray-200 dark:border-gray-700"
            >
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {t(plan.periodKey)}
                </h3>
                <div className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-2">
                  {plan.price}
                </div>
                {plan.saveKey && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                    {t(plan.saveKey)}
                  </p>
                )}
                <a
                  href="https://wa.me/+201147570732"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition duration-150 ease-in-out"
                >
                  {t('subscribeNow')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const rawVideoData = [
  { key: 'introduction', url: 'https://www.youtube.com/embed/mfDAyIKYpkY' },
  { key: 'scrapeThisPage', url: 'https://www.youtube.com/embed/yR_UntOnyvM' },
  { key: 'scrapeMultiUrls', url: 'https://www.youtube.com/embed/MS0bIlihAN4' },
  { key: 'dataCopyingNotes', url: 'https://www.youtube.com/embed/n4bbwbas-wk' },
  { key: 'exportAsExcel', url: 'https://www.youtube.com/embed/81OfyZKjmac' }
];

const App: React.FC = () => {
  const { language, t } = useLanguage();

  const [isGuideModalOpen, setGuideModalOpen] = useState(false);
  const [isHelpOpen, setHelpOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const videoData = rawVideoData.map(video => ({
    title: t(video.key),
    url: video.url,
  }));

  const openGuide = () => setGuideModalOpen(true);
  const closeGuide = () => setGuideModalOpen(false);
  const toggleHelp = () => setHelpOpen(prev => !prev);

  return (
    <div className="relative min-h-screen bg-white">
      <Background />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header onOpenGuide={openGuide} />

        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
          {videoData.map((video, index) => (
            <VideoSection
              key={rawVideoData[index].key}
              title={video.title}
              videoUrl={video.url}
              orientation={index % 2 === 0 ? 'right' : 'left'}
            />
          ))}
        </main>

        <PricingTable />

        <Footer />
      </div>

      <GuideModal isOpen={isGuideModalOpen} onClose={closeGuide} />

      {/* Help Button and Popup */}
      <button
        onClick={toggleHelp}
        className="fixed bottom-6 right-6 z-50 bg-indigo-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-indigo-700 flex items-center gap-2"
      >
        <span className="text-lg">❓</span>
        <span>{t('help')}</span>
      </button>
      <HelpPopup isOpen={isHelpOpen} onClose={toggleHelp} />
    </div>
  );
};

export default App;
