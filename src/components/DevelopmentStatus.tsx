import React from 'react';
import { useTranslation } from 'react-i18next';
import { Badge } from "@/components/ui/badge";

const DevelopmentStatus = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6 animate-slide-up">
      <div className="bg-launcher-800/50 p-6 rounded-lg border border-launcher-500 minecraft-card">
        <h3 className="text-xl font-pixel text-launcher-100 mb-4 minecraft-text animate-float">
          {t('developmentStatus')}
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center gap-2 animate-pulse-glow">
            <Badge variant="default" className="bg-green-500">
              {t('active')}
            </Badge>
            <span className="text-launcher-100">{t('activelyDeveloped')}</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-launcher-700/30 rounded-lg animate-fade-in">
              <h4 className="font-pixel text-launcher-200 mb-2">{t('lastUpdate')}</h4>
              <p className="text-launcher-100">2024-03-20</p>
            </div>
            
            <div className="p-4 bg-launcher-700/30 rounded-lg animate-fade-in delay-100">
              <h4 className="font-pixel text-launcher-200 mb-2">{t('nextUpdate')}</h4>
              <p className="text-launcher-100">{t('comingSoon')}</p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-pixel text-launcher-200">{t('recentChanges')}</h4>
            <ul className="list-disc list-inside text-launcher-100 space-y-1">
              <li className="animate-slide-up delay-100">{t('feature1')}</li>
              <li className="animate-slide-up delay-200">{t('feature2')}</li>
              <li className="animate-slide-up delay-300">{t('feature3')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentStatus;