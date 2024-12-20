import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: {
      description: 'Портативный мини лаунчер для Minecraft! Простой и удобный в использовании',
      downloadButton: 'Скачать лаунчер',
      sourceCode: 'Исходный код',
      popularVersions: 'Популярные версии',
      technicalInfo: 'Техническая информация',
      programmingLanguage: 'Язык программирования',
      interface: 'Интерфейс',
      functionality: 'Функционал',
      activeDevelopment: 'Лаунчер активно развивается!',
    },
  },
  en: {
    translation: {
      description: 'Portable mini launcher for Minecraft! Simple and easy to use',
      downloadButton: 'Download Launcher',
      sourceCode: 'Source Code',
      popularVersions: 'Popular Versions',
      technicalInfo: 'Technical Information',
      programmingLanguage: 'Programming Language',
      interface: 'Interface',
      functionality: 'Functionality',
      activeDevelopment: 'The launcher is actively being developed!',
    },
  },
  fr: {
    translation: {
      description: 'Mini lanceur portable pour Minecraft ! Simple et facile à utiliser',
      downloadButton: 'Télécharger le lanceur',
      sourceCode: 'Code source',
      popularVersions: 'Versions populaires',
      technicalInfo: 'Informations techniques',
      programmingLanguage: 'Langage de programmation',
      interface: 'Interface',
      functionality: 'Fonctionnalité',
      activeDevelopment: 'Le lanceur est en développement actif !',
    },
  },
  de: {
    translation: {
      description: 'Portabler Mini-Launcher für Minecraft! Einfach und benutzerfreundlich',
      downloadButton: 'Launcher herunterladen',
      sourceCode: 'Quellcode',
      popularVersions: 'Beliebte Versionen',
      technicalInfo: 'Technische Informationen',
      programmingLanguage: 'Programmiersprache',
      interface: 'Benutzeroberfläche',
      functionality: 'Funktionalität',
      activeDevelopment: 'Der Launcher wird aktiv entwickelt!',
    },
  },
  uk: {
    translation: {
      description: 'Портативний міні лаунчер для Minecraft! Простий та зручний у використанні',
      downloadButton: 'Завантажити лаунчер',
      sourceCode: 'Вихідний код',
      popularVersions: 'Популярні версії',
      technicalInfo: 'Технічна інформація',
      programmingLanguage: 'Мова програмування',
      interface: 'Інтерфейс',
      functionality: 'Функціонал',
      activeDevelopment: 'Лаунчер активно розробляється!',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru', // default language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;