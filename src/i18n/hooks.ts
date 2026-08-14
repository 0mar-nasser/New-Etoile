"use client";

import { useTranslation, UseTranslationOptions } from 'react-i18next';
import { NAMESPACES } from './constants';

export type AppNamespace = (typeof NAMESPACES)[number];

export function useAppTranslation(
  ns?: AppNamespace | AppNamespace[] | string | string[],
  options?: UseTranslationOptions<string>
) {
  return useTranslation(ns, options);
}

export { useTranslation };
