import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export const SiteHeader = ({ locale, t }: { locale: Locale; t: Dictionary }) => (
  <header className="sticky top-0 z-50 border-b border-line bg-surface/85 backdrop-blur-xl">
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-surface">
      {t.nav.skip}
    </a>
    <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
      <Link href={`/${locale}`} className="text-xl font-semibold tracking-tight">
        kubsei
      </Link>
      <nav aria-label={t.nav.label} className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
        <Link href={`/${locale}#products`} className="hover:text-ink">{t.nav.products}</Link>
        <Link href={`/${locale}#mission`} className="hover:text-ink">{t.nav.mission}</Link>
        <Link href={`/${locale}#contact`} className="hover:text-ink">{t.nav.contact}</Link>
      </nav>
      <LanguageSwitcher current={locale} label={t.nav.language} />
    </div>
  </header>
);
