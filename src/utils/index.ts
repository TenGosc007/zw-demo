import { headers } from "next/headers";

import i18nConfig from "@/i18nConfig";

export function getLanguageCodeFromPath() {
  const url = new URL(headers().get("x-url")!);
  const segments = url.pathname.split("/");
  const locales = i18nConfig.locales;
  const lng = segments.find((segment) =>
    locales.includes(segment as (typeof i18nConfig.locales)[number])
  );

  return lng ?? "pl";
}
