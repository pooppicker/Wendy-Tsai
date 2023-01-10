import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import translateEN from "../locales/en.json";
import translateCH from "../locales/ch.json";
const resources = {
  en: {
    translation: translateEN,
  },
  ch: {
    translation: translateCH,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  keyseparator: false,
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
