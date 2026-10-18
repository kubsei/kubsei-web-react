import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalDocument } from "@/components/LegalDocument";
import { getDictionary, isLocale } from "@/lib/i18n";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: getDictionary(locale).legal.notice.title,
    alternates: { canonical: `/${locale}/legal`, languages: { es: "/es/legal", en: "/en/legal" } },
  };
}

export default async function LegalNoticePage({ params }: Params) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);
  return <LegalDocument doc={t.legal.notice} locale={locale} t={t} />;
}
