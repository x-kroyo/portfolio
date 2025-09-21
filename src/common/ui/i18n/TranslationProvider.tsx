import { I18nextProvider } from "react-i18next";
import { i18nInitializer } from ".";
import i18next from "i18next";
import { useEffect } from "react";

export const TranslationProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    i18nInitializer();
  }, []);
  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
};
