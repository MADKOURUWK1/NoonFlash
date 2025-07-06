
import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { VideoSection } from './components/VideoSection';
import { Background } from './components/Background';
import { useLanguage } from './contexts/LanguageContext';

const rawVideoData = [
  { 
    key: 'introduction', 
    url: 'https://www.youtube.com/embed/mfDAyIKYpkY' 
  },
  { 
    key: 'scrapeThisPage', 
    url: 'https://www.youtube.com/embed/yR_UntOnyvM' 
  },
  { 
    key: 'scrapeMultiUrls', 
    url: 'https://www.youtube.com/embed/MS0bIlihAN4' 
  },
  { 
    key: 'dataCopyingNotes', 
    url: 'https://www.youtube.com/embed/n4bbwbas-wk' 
  },
  { 
    key: 'exportAsExcel', 
    url: 'https://www.youtube.com/embed/81OfyZKjmac' 
  }
];

const App: React.FC = () => {
  const { language, t } = useLanguage();

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const videoData = rawVideoData.map(video => ({
    title: t(video.key),
    url: video.url,
  }));

  return (
    <div className="relative min-h-screen bg-white">
      <Background />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
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
    </div>
  );
};

export default App;