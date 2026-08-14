export interface LanguageMeta {
  code: 'en' | 'ar';
  label: string;
  nativeName: string;
  dir: 'ltr' | 'rtl';
  fontClass: string;
}

export const SUPPORTED_LANGUAGES: Record<string, LanguageMeta> = {
  en: {
    code: 'en',
    label: 'English',
    nativeName: 'English',
    dir: 'ltr',
    fontClass: 'font-sans',
  },
  ar: {
    code: 'ar',
    label: 'Arabic',
    nativeName: 'العربية',
    dir: 'rtl',
    fontClass: 'font-tajawal',
  },
};

export const DEFAULT_LANGUAGE = 'en';
export const DEFAULT_NAMESPACE = 'common';
export const NAMESPACES = [
  'common',
  'navbar',
  'footer',
  'home',
  'cart',
  'about',
  'contact',
  'products',
] as const;
