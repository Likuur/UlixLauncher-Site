import React from 'react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useTranslation } from 'react-i18next';

type Theme = 'dark' | 'light' | 'classic' | 'minecraft';

interface ThemeSwitcherProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
  gradientColors?: { from: string; to: string };
  onGradientChange?: (colors: { from: string; to: string }) => void;
}

const ThemeSwitcher = ({ currentTheme, onThemeChange, gradientColors, onGradientChange }: ThemeSwitcherProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 p-4 bg-launcher-800/50 rounded-lg border border-launcher-500 animate-fade-in">
      <Select value={currentTheme} onValueChange={(value) => onThemeChange(value as Theme)}>
        <SelectTrigger className="w-[180px] minecraft-button">
          <SelectValue placeholder={t('selectTheme')} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="dark">{t('darkTheme')}</SelectItem>
          <SelectItem value="light">{t('lightTheme')}</SelectItem>
          <SelectItem value="classic">{t('classicTheme')}</SelectItem>
          <SelectItem value="minecraft">{t('minecraftTheme')}</SelectItem>
        </SelectContent>
      </Select>

      {currentTheme === 'classic' && onGradientChange && (
        <div className="flex flex-col gap-2 animate-slide-up">
          <Input
            type="color"
            value={gradientColors?.from}
            onChange={(e) => onGradientChange({ ...gradientColors!, from: e.target.value })}
            className="h-8 cursor-pointer"
            placeholder={t('fromColor')}
          />
          <Input
            type="color"
            value={gradientColors?.to}
            onChange={(e) => onGradientChange({ ...gradientColors!, to: e.target.value })}
            className="h-8 cursor-pointer"
            placeholder={t('toColor')}
          />
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;