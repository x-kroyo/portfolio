"use client";
import { useLanguage } from "./useLanguage";
import { Language } from "./types";

export const LanguageSwitch: React.FC = () => {
  const [language, changeLanguage] = useLanguage();

  const toggleLanguage = () => {
    const newLanguage: Language = language === Language.EN ? Language.FR : Language.EN;
    changeLanguage(newLanguage);
  }

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 shadow-md"
      aria-label="Switch language"
    >
      {language === Language.EN ? "FR" : "EN"}
    </button>
  );
};
