"use client";
import { StrictMode } from "react"
import { TranslationProvider } from "./i18n/TranslationProvider";

export const Providers : React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <StrictMode>
      <TranslationProvider>{children}</TranslationProvider>
    </StrictMode>
  );
}