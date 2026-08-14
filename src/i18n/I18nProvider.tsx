"use client";

import React, { useEffect, useSyncExternalStore } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./config";
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from "./constants";

const emptySubscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const mounted = useIsClient();

  useEffect(() => {
    const updateDocumentAttributes = (lng: string) => {
      const activeLang = SUPPORTED_LANGUAGES[lng] || SUPPORTED_LANGUAGES[DEFAULT_LANGUAGE];
      if (typeof document !== "undefined") {
        document.documentElement.dir = activeLang.dir;
        document.documentElement.lang = activeLang.code;
        
        if (activeLang.code === "ar") {
          document.body.classList.add("font-tajawal");
        } else {
          document.body.classList.remove("font-tajawal");
        }
      }
    };

    updateDocumentAttributes(i18n.language || DEFAULT_LANGUAGE);

    const handleLanguageChange = (lng: string) => {
      updateDocumentAttributes(lng);
    };

    i18n.on("languageChanged", handleLanguageChange);
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <div style={{ visibility: mounted ? "visible" : "hidden" }}>
        {children}
      </div>
    </I18nextProvider>
  );
}

export default I18nProvider;
