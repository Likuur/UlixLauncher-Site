import React, { useState, useEffect } from 'react';
import { Download, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DevelopersSection from '@/components/DevelopersSection';
import OpenSourceInfo from '@/components/OpenSourceInfo';
import TechnicalInfo from '@/components/TechnicalInfo';
import LanguageSelector from '@/components/LanguageSelector';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import DevelopmentStatus from '@/components/DevelopmentStatus';
import { useTranslation } from 'react-i18next';

type Theme = 'dark' | 'light' | 'classic' | 'minecraft';

const minecraftVersions = [
  { version: "1.21", type: "Release", date: "2024" },
  { version: "1.19.2", type: "Release", date: "2022-08-05" },
  { version: "1.18.2", type: "Release", date: "2022-02-28" },
  { version: "1.16.5", type: "Release", date: "2021-01-14" },
  { version: "1.12.2", type: "Release", date: "2017-09-18" },
];

const Index = () => {
  const { t } = useTranslation();
  const [selectedVersion, setSelectedVersion] = useState(minecraftVersions[0]);
  const [theme, setTheme] = useState<Theme>('dark');
  const [gradientColors, setGradientColors] = useState({ from: '#4c795d', to: '#0b130e' });

  const handleDownload = () => {
    window.location.href = "example.com/ulix.exe";
  };

  useEffect(() => {
    const root = document.documentElement;
    switch (theme) {
      case 'light':
        root.classList.remove('dark', 'minecraft', 'classic');
        root.style.setProperty('--background', '0 0% 100%');
        root.style.setProperty('--foreground', '222.2 84% 4.9%');
        break;
      case 'dark':
        root.classList.add('dark');
        root.classList.remove('minecraft', 'classic');
        root.style.setProperty('--background', '158 47% 8%');
        root.style.setProperty('--foreground', '0 0% 98%');
        break;
      case 'classic':
        root.classList.add('classic');
        root.classList.remove('dark', 'minecraft');
        root.style.background = `linear-gradient(to bottom right, ${gradientColors.from}, ${gradientColors.to})`;
        break;
      case 'minecraft':
        root.classList.add('minecraft');
        root.classList.remove('dark', 'classic');
        root.style.setProperty('--background', '0 0% 0%');
        root.style.setProperty('--foreground', '0 0% 100%');
        break;
    }
  }, [theme, gradientColors]);

  return (
    <div className="min-h-screen w-full bg-launcher-gradient overflow-hidden relative">
      <div className="absolute inset-0 bg-launcher-glow animate-pulse-glow"></div>
      <div className="relative">
        <div className="container mx-auto px-4 py-16">
          <div className="absolute top-4 right-4 flex gap-4">
            <LanguageSelector />
            <ThemeSwitcher
              currentTheme={theme}
              onThemeChange={setTheme}
              gradientColors={gradientColors}
              onGradientChange={setGradientColors}
            />
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

          {/* Development Status */}
          <DevelopmentStatus />

          {/* Minecraft Versions Section */}
          <div className="mb-16 animate-slide-up">
            <h2 className="text-2xl md:text-3xl font-pixel text-launcher-100 text-center mb-8">
              {t('popularVersions')}
            </h2>
            <div className="flex flex-col items-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {minecraftVersions.map((ver) => (
                  <div
                    key={ver.version}
                    onClick={() => setSelectedVersion(ver)}
                    className={`p-6 rounded-lg border cursor-pointer transition-all duration-300 transform hover:scale-105 minecraft-card ${
                      selectedVersion.version === ver.version
                        ? 'bg-launcher-800 border-launcher-500'
                        : 'bg-launcher-800/50 border-launcher-700 hover:bg-launcher-800/70'
                    }`}
                  >
                    <div className="text-launcher-100 font-pixel text-2xl mb-2">{ver.version}</div>
                    <div className="text-launcher-200 text-sm">{ver.type}</div>
                    <div className="text-launcher-300 text-xs">{ver.date}</div>
                  </div>
                ))}
              </div>
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