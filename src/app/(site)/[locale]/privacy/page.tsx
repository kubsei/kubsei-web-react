import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalDocument } from "@/components/LegalDocument";
import { getDictionary, isLocale } from "@/lib/i18n";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: getDictionary(locale).legal.privacy.title,
    alternates: { canonical: `/${locale}/privacy`, languages: { es: "/es/privacy", en: "/en/privacy" } },
  };
}

export default async function PrivacyPage({ params }: Params) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);
  return <LegalDocument doc={t.legal.privacy} locale={locale} t={t} />;
}
