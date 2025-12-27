"use client";
import { StrictMode } from "react"
import { TranslationProvider } from "./i18n/TranslationProvider";
import { InversifyContainerProvider } from "@/src/common/infra/di/InversifyContainerProvider";

export const Providers : React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <StrictMode>
      <InversifyContainerProvider>
        <TranslationProvider>{children}</TranslationProvider>
      </InversifyContainerProvider>
    </StrictMode>
  );
}
