
import React from 'react';

interface VideoSectionProps {
  title: string;
  videoUrl: string;
  orientation: 'left' | 'right';
}

export const VideoSection: React.FC<VideoSectionProps> = ({ title, videoUrl, orientation }) => {
  const isTextFirst = orientation === 'left';
  
  return (
    <section className="py-16 md:py-24">
      <div className={`flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 ${isTextFirst ? 'md:flex-row-reverse' : ''}`}>
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-blue-600 text-white font-black text-3xl md:text-4xl lg:text-5xl uppercase rounded-full px-10 md:px-16 py-5 md:py-7 transform hover:scale-105 transition-transform shadow-lg text-center">
            {title}
          </div>
        </div>
        <div className="flex-1 w-full max-w-xl">
          <div className="aspect-video bg-black rounded-xl shadow-2xl overflow-hidden border-4 border-gray-800">
            <iframe
              width="100%"
              height="100%"
              src={videoUrl}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
