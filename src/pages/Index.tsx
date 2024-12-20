import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DevelopersSection from '@/components/DevelopersSection';
import OpenSourceInfo from '@/components/OpenSourceInfo';

const minecraftVersions = [
  { version: "1.21", type: "Release", date: "2024" },
  { version: "1.19.2", type: "Release", date: "2022-08-05" },
  { version: "1.18.2", type: "Release", date: "2022-02-28" },
  { version: "1.16.5", type: "Release", date: "2021-01-14" },
  { version: "1.12.2", type: "Release", date: "2017-09-18" },
];

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedVersion, setSelectedVersion] = useState(minecraftVersions[0]);

  const handleLaunch = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen w-full bg-launcher-gradient overflow-hidden relative">
      <div className="absolute inset-0 bg-launcher-glow animate-pulse-glow"></div>
      <div className="relative">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="flex flex-col items-center justify-center text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-pixel text-launcher-100 mb-6 animate-float">
              UlixLauncher
            </h1>
            <p className="text-lg md:text-xl text-launcher-200 mb-8 max-w-2xl font-pixel leading-relaxed">
              Портативный мини лаунчер для Minecraft! Простой и удобный в использовании
            </p>
            <Button 
              size="lg"
              className="bg-launcher-500 hover:bg-launcher-600 text-white font-pixel transform hover:scale-105 transition-all duration-300"
              onClick={handleLaunch}
            >
              <Download className="mr-2" />
              Скачать лаунчер
            </Button>
          </div>

          {/* Minecraft Versions Section */}
          <div className="mb-16 animate-slide-up">
            <h2 className="text-2xl md:text-3xl font-pixel text-launcher-100 text-center mb-8">
              Популярные версии
            </h2>
            <div className="flex flex-col items-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                {minecraftVersions.map((ver) => (
                  <div
                    key={ver.version}
                    onClick={() => setSelectedVersion(ver)}
                    className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                      selectedVersion.version === ver.version
                        ? 'bg-launcher-800 border-launcher-500'
                        : 'bg-launcher-800/50 border-launcher-700 hover:bg-launcher-800/70'
                    }`}
                  >
                    <div className="text-launcher-100 font-pixel text-lg mb-2">{ver.version}</div>
                    <div className="text-launcher-200 text-sm">{ver.type}</div>
                    <div className="text-launcher-300 text-xs">{ver.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Developers Section */}
          <DevelopersSection />

          {/* Open Source Info */}
          <OpenSourceInfo />
        </div>
      </div>
    </div>
  );
};

export default Index;