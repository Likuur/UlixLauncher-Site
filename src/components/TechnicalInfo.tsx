import React from 'react';
import { Code2, Package, Layout, Box } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TechnicalInfo = () => {
  const { t } = useTranslation();

  const techDetails = [
    { icon: <Code2 />, label: t('programmingLanguage'), value: 'C#' },
    { icon: <Layout />, label: t('interface'), value: 'GunaUI 2' },
    { icon: <Package />, label: t('functionality'), value: 'CmlLib' },
  ];

  return (
    <div className="mb-16 animate-slide-up">
      <h2 className="text-2xl md:text-3xl font-pixel text-launcher-100 text-center mb-8">
        {t('technicalInfo')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {techDetails.map((detail, index) => (
          <div
            key={index}
            className="bg-launcher-800/30 border border-launcher-700 p-6 rounded-lg hover:bg-launcher-800/50 transition-all duration-300 minecraft-card"
          >
            <div className="flex justify-center mb-4 text-launcher-100">
              {React.cloneElement(detail.icon, { className: 'w-8 h-8' })}
            </div>
            <h3 className="text-launcher-100 font-pixel text-center mb-2">{detail.label}</h3>
            <p className="text-launcher-200 text-center">{detail.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalInfo;