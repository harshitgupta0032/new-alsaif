import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./public/locales/english/index.json"; 
import arTranslation from "./public/locales/arabic/index.json"; 

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    ar: { translation: arTranslation },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;