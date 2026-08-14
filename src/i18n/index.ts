"use client";

export { default as i18n } from './config';
export { default as I18nProvider } from './I18nProvider';
export { useAppTranslation, useTranslation } from './hooks';
export { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, NAMESPACES } from './constants';
export type { LanguageMeta } from './constants';
