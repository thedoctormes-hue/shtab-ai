import type { ReactNode } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { CustomCursor } from "../../components/CustomCursor";
import { LoadingScreen } from "../../components/LoadingScreen";
import { NoiseOverlay } from "../../components/NoiseOverlay";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "en" }];
}

const siteConfig = {
  ru: {
    title: "DoctorM&Ai — AI-лаборатория 24/7",
    description:
      "Автономные AI-агенты решают реальные задачи: медицина, инфраструктура, сервисы. 8 агентов, 23 проекта, 600+ тестов.",
  },
  en: {
    title: "DoctorM&Ai — 24/7 AI Laboratory",
    description:
      "Autonomous AI agents solve real-world problems: medicine, infrastructure, services. 8 agents, 23 projects, 600+ tests.",
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
    title: {
      default: config.title,
      template: "%s | DoctorM&Ai",
    },
    description: config.description,
    robots: {
      index: true,
      follow: true,
    },
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
  setRequestLocale(locale);
  const messages = await getMessages();
  const base = "https://shtab-ai.ru";

  return (
    <html lang={locale} className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate" hrefLang="ru-RU" href={`${base}/ru`} />
        <link rel="alternate" hrefLang="en-US" href={`${base}/en`} />
        <link rel="alternate" hrefLang="x-default" href={`${base}/ru`} />
        <meta name="theme-color" content="#030712" />
      </head>
      <body className="min-h-screen bg-deep-black text-white antialiased">
        <a href="#main-content" className="skip-link">
          {locale === "en" ? "Skip to content" : "Перейти к содержимому"}
        </a>
        <LoadingScreen />
        <NoiseOverlay />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <NextIntlClientProvider messages={messages}>
            <CustomCursor />
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
