import React from 'react';
import { Download, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DevelopersSection from '@/components/DevelopersSection';
import OpenSourceInfo from '@/components/OpenSourceInfo';
import TechnicalInfo from '@/components/TechnicalInfo';
import LanguageSelector from '@/components/LanguageSelector';
import SnowEffect from '@/components/SnowEffect';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t } = useTranslation();

  const handleDownload = () => {
    const downloadUrl = 'https://raw.githubusercontent.com/Likuur/UlixLauncher/refs/heads/master/Installer/UlixInstaller.exe';
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'UlixInstaller.exe';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen w-full bg-background overflow-hidden relative">
      <SnowEffect />
      <div className="relative">
        <div className="container mx-auto px-4 py-16">
          <div className="absolute top-4 right-4">
            <LanguageSelector />
          </div>

          {/* Hero Section */}
          <div className="flex flex-col items-center justify-center text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-pixel text-launcher-100 mb-6 animate-float minecraft-text">
              UlixLauncher
            </h1>
            <p className="text-lg md:text-xl text-launcher-200 mb-8 max-w-2xl font-pixel leading-relaxed">
              {t('description')}
            </p>
            <div className="flex gap-4">
              <Button 
                size="lg"
                className="bg-launcher-500 hover:bg-launcher-600 text-white font-pixel transform hover:scale-105 transition-all duration-300 minecraft-button"
                onClick={handleDownload}
              >
                <Download className="mr-2" />
                {t('downloadButton')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-launcher-500 text-launcher-100 font-pixel hover:bg-launcher-500/20 minecraft-button"
                onClick={() => window.open('https://github.com/Likuur/UlixLauncher', '_blank')}
              >
                <Github className="mr-2" />
                {t('sourceCode')}
              </Button>
            </div>
          </div>

          {/* Technical Info */}
          <TechnicalInfo />

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