import cx from "classnames";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { Toaster } from "react-hot-toast";

import { Footer, Header } from "@/components";
import { defaultMetadata } from "@/constants/metadata";
import initTranslations from "@/i18n";
import i18nConfig from "@/i18nConfig";
import { TranslationsProvider } from "@/providers";
import "@/styles/global.scss";

import styles from "./layout.module.scss";

const sora = Sora({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: (typeof i18nConfig.locales)[number] };
}): Promise<Metadata> {
  const dev = process.env.NODE_ENV !== "production";
  const server = dev ? "http://localhost:3000" : "https://www.zaplanujwypad.pl";

  return {
    title: "ZaplanujWypad",
    keywords:
      "zaplanujwypad, zaplanuj, wypad, podróże, travel, trip, miasto, wycieczka, zwiedzanie, wolny czas",
    metadataBase: new URL(server),
    alternates: {
      canonical: "/",
      languages: {
        pl: "/",
        en: "/en",
      },
    },
    openGraph: {
      type: "website",
      title: "Zaplanuj Wypad",
      url: server,
      siteName: "zaplanujwypad.pl",
      locale: locale,
    },
    verification: {
      google: "o0lyKJ2j8NBus1mL5A-E1WC2muiaFZBXxgz3pElKnKw",
    },
    ...defaultMetadata[locale],
  };
}

export const revalidate = 3600; // revalidate at most every hour

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

const i18nNamespaces = ["common"];

type LayoutType = Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>;

export default async function RootLayout({
  children,
  params: { locale },
}: LayoutType) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <html lang={locale}>
        <body className={cx(styles.container, sora.className)}>
          <Header />
          <main className={styles.content}>{children}</main>
          <Footer />
          <Toaster position="top-center" />
        </body>
      </html>
    </TranslationsProvider>
  );
}
