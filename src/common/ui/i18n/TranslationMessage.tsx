"use client";
import { Trans, useTranslation } from "react-i18next";

interface TranslationMessageProps {
  tKey: string;
  values?: Record<string, unknown>;
  components?: Readonly<Record<string, React.ReactElement>> | readonly React.ReactElement[];
  count?: number;
  context?: string;
  defaults?: string;
  nameSpace?: string;
  shouldUnescape?: boolean;
}

export const TranslationMessage: React.FC<TranslationMessageProps> = ({ tKey, ...props }) => {
  const { t } = useTranslation();
  return <Trans t={t} i18nKey={tKey} {...props} />
};
