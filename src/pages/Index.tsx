import React, { useState } from 'react';
import { Download, Shield, Zap, Settings2, Cpu, Cloud, Code, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import VersionInfo from '@/components/VersionInfo';
import DevelopersSection from '@/components/DevelopersSection';
import OpenSourceInfo from '@/components/OpenSourceInfo';

const minecraftVersions = [
  { version: "1.20.2", type: "Release", date: "2023-09-21" },
  { version: "1.20.1", type: "Release", date: "2023-06-14" },
  { version: "1.19.4", type: "Release", date: "2023-03-14" },
  { version: "1.19.3", type: "Release", date: "2022-12-07" },
  { version: "1.19.2", type: "Release", date: "2022-08-05" },
  { version: "1.18.2", type: "Release", date: "2022-02-28" },
];

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

const additionalFeatures = [
  {
    icon: <Cpu className="w-8 h-8 text-launcher-100" />,
    title: "Оптимизация",
    description: "Автоматическая настройка параметров для максимальной производительности"
  },
  {
    icon: <Cloud className="w-8 h-8 text-launcher-100" />,
    title: "Облачное хранение",
    description: "Синхронизация настроек и сохранений между устройствами"
  },
  {
    icon: <Code className="w-8 h-8 text-launcher-100" />,
    title: "Модпаки",
    description: "Простая установка и управление модпаками в один клик"
  },
  {
    icon: <Users className="w-8 h-8 text-launcher-100" />,
    title: "Мультиплеер",
    description: "Удобное управление серверами и быстрое подключение"
  }
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
              Современный лаунчер для Minecraft с продвинутым управлением модами
            </p>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <Button 
                size="lg"
                className="bg-launcher-500 hover:bg-launcher-600 text-white font-pixel transform hover:scale-105 transition-all duration-300"
                onClick={handleLaunch}
              >
                <Download className="mr-2" />
                Скачать лаунчер
              </Button>
              <VersionInfo version={selectedVersion.version} status="online" />
            </div>
          </div>

          {/* Minecraft Versions Section */}
          <div className="mb-16 animate-slide-up">
            <h2 className="text-2xl md:text-3xl font-pixel text-launcher-100 text-center mb-8">
              Популярные версии
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

          {/* Main Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-launcher-800/50 border-launcher-700 hover:bg-launcher-800/70 transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="mb-4 animate-float">{feature.icon}</div>
                  <CardTitle className="text-launcher-100 font-pixel text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-launcher-200">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Features Grid */}
          <div className="mb-16 animate-slide-up">
            <h2 className="text-2xl md:text-3xl font-pixel text-launcher-100 text-center mb-8">
              Расширенные возможности
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-launcher-800/30 p-6 rounded-lg border border-launcher-700 hover:bg-launcher-800/50 transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 animate-float">{feature.icon}</div>
                    <h3 className="font-pixel text-launcher-100 mb-2 text-sm">{feature.title}</h3>
                    <p className="text-launcher-200 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Developers Section */}
          <DevelopersSection />

          {/* Open Source Info */}
          <OpenSourceInfo />

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-slide-up">
            <div className="text-center p-6 bg-launcher-800/30 rounded-lg border border-launcher-700">
              <div className="text-4xl font-pixel text-launcher-100 mb-2">100K+</div>
              <div className="text-launcher-200">Активных пользователей</div>
            </div>
            <div className="text-center p-6 bg-launcher-800/30 rounded-lg border border-launcher-700">
              <div className="text-4xl font-pixel text-launcher-100 mb-2">50K+</div>
              <div className="text-launcher-200">Доступных модов</div>
            </div>
            <div className="text-center p-6 bg-launcher-800/30 rounded-lg border border-launcher-700">
              <div className="text-4xl font-pixel text-launcher-100 mb-2">99.9%</div>
              <div className="text-launcher-200">Время работы</div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-launcher-300 text-sm font-pixel">
            UlixLauncher &copy; 2024
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;