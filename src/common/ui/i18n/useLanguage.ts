import { useTranslation } from "react-i18next";
import { Language } from "./types";
import { TFunction } from "i18next";

export function useLanguage(): [Language, (lng: Language) => Promise<TFunction>] {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: Language) => i18n.changeLanguage(lng);
  return [i18n.language as Language, changeLanguage];
}