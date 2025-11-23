import enMessages from "./locales/en.json";
import frMessages from "./locales/fr.json";
import i18next, { Resource } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { Language } from "./types";

const defaultNS = "translation";
const defaultLanguage = Language.EN;
const isDevelopment = process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test";

const resources: Resource = {
  fr: { [defaultNS]: frMessages },
  en: { [defaultNS]: enMessages },
};

export const i18nInitializer = () => {
  return i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      lng: defaultLanguage,
      defaultNS,
      resources,
      debug: isDevelopment,
      load: "languageOnly",
      saveMissing: true,
      returnEmptyString: false,
      missingKeyNoValueFallbackToKey: false,
      react: {
        useSuspense: false,
      },
      interpolation: {
        escapeValue: false,
      },
    })
    .then(() => {
      return i18next;
    });
}
