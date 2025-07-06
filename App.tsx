// src/App.tsx

import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { VideoSection } from './components/VideoSection';
import { Background } from './components/Background';
import { useLanguage } from './contexts/LanguageContext';

const rawVideoData = [
  { key: 'introduction', url: 'https://www.youtube.com/embed/mfDAyIKYpkY' },
  { key: 'scrapeThisPage', url: 'https://www.youtube.com/embed/yR_UntOnyvM' },
  { key: 'scrapeMultiUrls', url: 'https://www.youtube.com/embed/MS0bIlihAN4' },
  { key: 'dataCopyingNotes', url: 'https://www.youtube.com/embed/n4bbwbas-wk' },
  { key: 'exportAsExcel', url: 'https://www.youtube.com/embed/81OfyZKjmac' }
];

const App: React.FC = () => {
  const { language, t } = useLanguage();
  
  // 1. ADD STATE FOR THE MODAL
  const [isGuideModalOpen, setGuideModalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const videoData = rawVideoData.map(video => ({
    title: t(video.key),
    url: video.url,
  }));

  // We are adding the button in the Header component now
  // To keep your code clean, you should pass the function to open the modal
  const openGuide = () => setGuideModalOpen(true);

  return (
    <div className="relative min-h-screen bg-white">
      <Background />
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Pass the 'openGuide' function to your existing Header component */}
        {/* You will need to edit Header.tsx to add the button (see previous instructions for how) */}
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
        <Footer />
      </div>

      {/* 2. ADD THE ENTIRE MODAL CODE HERE */}
      {isGuideModalOpen && (
        <div id="guide-modal" className="modal" onClick={() => setGuideModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setGuideModalOpen(false)}>×</span>
            
            {language === 'ar' ? (
              <div className="guide-text" lang="ar" dir="rtl">
                <h2 className="text-2xl font-bold mb-4">مرحبًا بك في دليل البائع! ✨</h2>
                <p>... (Paste the full Arabic text here) ...</p>
              </div>
            ) : (
              <div className="guide-text" lang="en">
                <h2 className="text-2xl font-bold mb-4">Welcome to the Seller Guide! ✨</h2>
                <p className="mb-4">This guide contains essential instructions to help sellers scrape and handle Noon product data correctly and effortlessly.</p>
                <h3 className="text-xl font-bold mt-6 mb-2">🔧 How to Use the Scraper</h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li><strong>Scrape This Page:</strong> Navigate to any Noon product page and click this button to instantly extract its data.</li>
                  <li><strong>Scrape Multiple URLs:</strong> Paste a list of Noon product URLs (one per line) into the text box. The extension will process all of them and generate a single downloadable XLSX file.</li>
                </ul>
                <h3 className="text-xl font-bold mt-6 mb-2">📤 After Scraping: What to Do</h3>
                <ol className="list-decimal list-inside space-y-2 mb-4">
                  <li>After scraping, you'll get a downloadable Excel sheet...</li>
                  {/* ... PASTE THE REST OF THE ENGLISH TEXT HERE ... */}
                </ol>
                <p className="mt-6 font-semibold">Thank you for using the Noon Scraper Extension! 🙏</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
