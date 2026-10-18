import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";
import { fill } from "@/lib/site";

export const SiteFooter = ({ locale, t }: { locale: Locale; t: Dictionary }) => (
  <footer className="border-t border-line bg-surface-alt">
    <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <p>{fill(t.footer.rights, { year: new Date().getFullYear() })}</p>
      <nav aria-label={t.footer.legal} className="flex gap-6">
        <Link href={`/${locale}/legal`} className="hover:text-ink hover:underline">{t.footer.legal}</Link>
        <Link href={`/${locale}/privacy`} className="hover:text-ink hover:underline">{t.footer.privacy}</Link>
      </nav>
    </div>
  </footer>
);
