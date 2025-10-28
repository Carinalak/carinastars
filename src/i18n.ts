import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from '../src/locales/en/translation.json';
import svTranslations from '../src/locales/sv/translation.json';

i18n.use(initReactI18next).init({
  lng: localStorage.getItem('lng') || 'en',
  fallbackLng: 'en',
  resources: {
    en: { translation: enTranslations },
    sv: { translation: svTranslations }
  }
});

export default i18n;