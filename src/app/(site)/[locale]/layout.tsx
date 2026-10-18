import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { geistSans } from "@/app/fonts";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LOCALES, getDictionary, isLocale } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import "@/app/globals.css";

type Params = { params: Promise<{ locale: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);
  return {
    metadataBase: new URL(SITE.url),
    title: { default: t.meta.title, template: `%s · Kubsei` },
    description: t.meta.description,
    alternates: { canonical: `/${locale}`, languages: { es: "/es", en: "/en", "x-default": "/es" } },
    openGraph: {
      type: "website",
      siteName: "Kubsei",
      title: t.meta.title,
      description: t.meta.description,
      locale: t.meta.ogLocale,
      url: `/${locale}`,
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function SiteLayout({ children, params }: Params & { children: React.ReactNode }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} font-sans antialiased`}>
        <SiteHeader locale={locale} t={t} />
        <main id="main">{children}</main>
        <SiteFooter locale={locale} t={t} />
      </body>
    </html>
  );
}
