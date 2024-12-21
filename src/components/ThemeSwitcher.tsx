import React from 'react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useTranslation } from 'react-i18next';

type Theme = 'dark' | 'light' | 'customizable';

interface ThemeSwitcherProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
  gradientColors?: { from: string; to: string };
  onGradientChange?: (colors: { from: string; to: string }) => void;
}

const ThemeSwitcher = ({ currentTheme, onThemeChange, gradientColors, onGradientChange }: ThemeSwitcherProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 p-4 bg-card rounded-lg border border-input animate-fade-in">
      <Select value={currentTheme} onValueChange={(value) => onThemeChange(value as Theme)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={t('selectTheme')} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="dark">{t('darkTheme')}</SelectItem>
          <SelectItem value="light">{t('lightTheme')}</SelectItem>
          <SelectItem value="customizable">{t('customizableTheme')}</SelectItem>
        </SelectContent>
      </Select>

      {currentTheme === 'customizable' && onGradientChange && (
        <div className="flex flex-col gap-2 animate-slide-up">
          <label className="text-sm">{t('fromColor')}</label>
          <Input
            type="color"
            value={gradientColors?.from}
            onChange={(e) => onGradientChange({ ...gradientColors!, from: e.target.value })}
            className="h-8 cursor-pointer"
          />
          <label className="text-sm">{t('toColor')}</label>
          <Input
            type="color"
            value={gradientColors?.to}
            onChange={(e) => onGradientChange({ ...gradientColors!, to: e.target.value })}
            className="h-8 cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;