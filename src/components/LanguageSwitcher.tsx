"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALES, type Locale } from "@/lib/i18n";

/** Links to the same page in each language: /es/privacy <-> /en/privacy. */
export const LanguageSwitcher = ({ current, label }: { current: Locale; label: string }) => {
  const rest = usePathname().split("/").slice(2).join("/");

  return (
    <nav aria-label={label} className="flex gap-1 text-sm">
      {LOCALES.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}${rest ? `/${rest}` : ""}`}
          hrefLang={locale}
          lang={locale}
          aria-current={locale === current ? "true" : undefined}
          className={`rounded-full px-3 py-1.5 font-medium uppercase transition-colors ${
            locale === current ? "bg-ink text-surface" : "text-muted hover:text-ink"
          }`}>
          {locale}
        </Link>
      ))}
    </nav>
  );
};
