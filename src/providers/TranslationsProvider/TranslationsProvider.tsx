"use client";

import { createInstance } from "i18next";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";

import initTranslations from "@/i18n";

type InitTranslationsType = Parameters<typeof initTranslations>;

type TranslationsProviderType = {
  children: ReactNode;
  locale: InitTranslationsType[0];
  namespaces: InitTranslationsType[1];
  resources: InitTranslationsType[3];
};

export function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources,
}: TranslationsProviderType) {
  const i18n = createInstance();

  initTranslations(locale, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
