"use client";

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { resources } from './resources';
import { DEFAULT_LANGUAGE, DEFAULT_NAMESPACE, NAMESPACES } from './constants';

if (!i18n.isInitialized) {
  const i18nInstance = i18n.use(initReactI18next);

  if (typeof window !== 'undefined') {
    i18nInstance.use(LanguageDetector);
  }

  i18nInstance.init({
    resources,
    lng: typeof window !== 'undefined' ? undefined : DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    defaultNS: DEFAULT_NAMESPACE,
    ns: Array.from(NAMESPACES),
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
}

export default i18n;
