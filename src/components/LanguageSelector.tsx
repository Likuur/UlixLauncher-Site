import React from 'react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'uk', name: 'Українська', flag: '🇺🇦' },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant="ghost"
          size="sm"
          className={`font-pixel ${
            i18n.language === lang.code
              ? 'bg-launcher-500/20 text-launcher-100'
              : 'text-launcher-200 hover:bg-launcher-500/10'
          }`}
          onClick={() => i18n.changeLanguage(lang.code)}
        >
          <span className="mr-2">{lang.flag}</span>
          <span className="hidden md:inline">{lang.name}</span>
        </Button>
      ))}
    </div>
  );
};

export default LanguageSelector;