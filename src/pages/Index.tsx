import React, { useState } from 'react';
import LauncherButton from '@/components/LauncherButton';
import VersionInfo from '@/components/VersionInfo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Shield, Zap, Settings2 } from 'lucide-react';

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLaunch = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const features = [
    {
      icon: <Shield className="w-10 h-10 text-launcher-100" />,
      title: "Безопасность",
      description: "Встроенная защита от вредоносных модификаций и проверка целостности файлов"
    },
    {
      icon: <Zap className="w-10 h-10 text-launcher-100" />,
      title: "Быстрая загрузка",
      description: "Оптимизированная система загрузки модов и ресурспаков"
    },
    {
      icon: <Settings2 className="w-10 h-10 text-launcher-100" />,
      title: "Гибкая настройка",
      description: "Простое управление версиями, модами и настройками игры"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-launcher-gradient">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center mb-16 animate-fade-in">
          <h1 className="text-6xl font-bold text-launcher-100 mb-6">
            UlixLauncher
          </h1>
          <p className="text-xl text-launcher-200 mb-8 max-w-2xl">
            Современный лаунчер для Minecraft с продвинутым управлением модами, оптимизированной производительностью и удобным интерфейсом
          </p>
          <div className="flex gap-4">
            <Button 
              size="lg"
              className="bg-launcher-500 hover:bg-launcher-600 text-white"
              onClick={handleLaunch}
            >
              <Download className="mr-2" />
              Скачать лаунчер
            </Button>
            <VersionInfo version="1.20.1" status="online" />
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-launcher-800/50 border-launcher-700">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-launcher-100">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-launcher-200">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-launcher-100 mb-6">
            Почему UlixLauncher?
          </h2>
          <div className="text-launcher-200 max-w-3xl mx-auto space-y-4">
            <p>
              UlixLauncher - это не просто программа для запуска Minecraft. Это комплексное решение, 
              разработанное с учётом потребностей как новичков, так и опытных игроков.
            </p>
            <p>
              Наш лаунчер обеспечивает максимальную производительность, безопасность и удобство 
              использования, позволяя вам сосредоточиться на самом главном - игре.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-launcher-300 text-sm">
          UlixLauncher &copy; 2024
        </div>
      </div>
    </div>
  );
};

export default Index;