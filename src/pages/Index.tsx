import React, { useState } from 'react';
import LauncherButton from '@/components/LauncherButton';
import VersionInfo from '@/components/VersionInfo';

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLaunch = () => {
    setIsLoading(true);
    // Здесь будет логика запуска игры
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen w-full bg-launcher-gradient flex flex-col items-center justify-center gap-8 p-4">
      <div className="text-4xl font-bold text-launcher-100 mb-8 animate-fade-in">
        UlixLauncher
      </div>
      
      <LauncherButton onClick={handleLaunch} isLoading={isLoading} />
      
      <VersionInfo version="1.20.1" status="online" />
      
      <div className="absolute bottom-4 text-launcher-300 text-sm animate-fade-in">
        UlixLauncher &copy; 2024
      </div>
    </div>
  );
};

export default Index;