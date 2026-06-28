import type { ReactNode } from "react";
import { ThemeProvider } from "../../components/ThemeProvider";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { LocaleProvider } from "../../components/LocaleProvider";
import "./globals.css";

export function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "en" }];
}

const siteConfig = {
  ru: {
    title: "DoctorM&Ai — AI-лаборатория 24/7",
    description:
      "Автономные AI-агенты решают реальные задачи: медицина, инфраструктура, сервисы. 8 агентов, 23 проекта, 627 тестов.",
  },
  en: {
    title: "DoctorM&Ai — 24/7 AI Laboratory",
    description:
      "Autonomous AI agents solve real-world problems: medicine, infrastructure, services. 8 agents, 23 projects, 627 tests.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const config = siteConfig[locale as "ru" | "en"] || siteConfig.ru;
  const base = "https://shtab-ai.ru";

  return {
    title: config.title,
    description: config.description,
    alternates: {
      canonical: `${base}/${locale}`,
      languages: {
        "ru-RU": `${base}/ru`,
        "en-US": `${base}/en`,
      },
    },
    openGraph: {
      title: config.title,
      description: config.description,
      url: `${base}/${locale}`,
      siteName: "DoctorM&Ai",
      locale: locale === "ru" ? "ru_RU" : "en_US",
      alternateLocale: locale === "ru" ? "en_US" : "ru_RU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const base = "https://shtab-ai.ru";

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate" hrefLang="ru-RU" href={`${base}/ru`} />
        <link rel="alternate" hrefLang="en-US" href={`${base}/en`} />
        <link rel="alternate" hrefLang="x-default" href={`${base}/ru`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#040A14" />
      </head>
      <body className="min-h-screen bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text transition-colors duration-300">
        <a href="#main-content" className="skip-link">
          {locale === "en" ? "Skip to content" : "Перейти к содержимому"}
        </a>
        <LocaleProvider locale={locale as "ru" | "en"}>
          <ThemeProvider>
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
