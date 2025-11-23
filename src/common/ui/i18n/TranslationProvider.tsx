import { I18nextProvider } from "react-i18next";
import { i18nInitializer } from ".";
import i18next from "i18next";
import { useEffect, useState } from "react";

export const TranslationProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    i18nInitializer().then(() => {
      setInitialized(true);
    });
  }, []);
  return (
    initialized ? <I18nextProvider i18n={i18next}>{children}</I18nextProvider> : "Loading..."
  );
};
