import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";
import { fill } from "@/lib/site";

interface LegalSection {
  title: string;
  paragraphs?: string[];
  items?: string[];
}

/** Same layout as plaart's LegalPage, rendered on the server. */
export const LegalDocument = ({ doc, locale, t }: {
  doc: { title: string; intro: string; sections: LegalSection[] };
  locale: Locale;
  t: Dictionary;
}) => (
  <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
    <h1 className="mb-2 text-4xl font-light">{doc.title}</h1>
    <p className="mb-8 text-sm text-muted">{fill(t.legal.updated, { date: t.legal.date })}</p>
    <p className="mb-10 leading-relaxed text-muted">{fill(doc.intro)}</p>

    {doc.sections.map((section) => (
      <section key={section.title} className="mb-8">
        <h2 className="mb-3 text-xl font-medium">{section.title}</h2>
        {section.items && (
          <ul className="mb-3 list-disc space-y-2 pl-6 leading-relaxed text-muted">
            {section.items.map((item) => <li key={item}>{fill(item)}</li>)}
          </ul>
        )}
        {section.paragraphs?.map((paragraph) => (
          <p key={paragraph} className="mb-3 leading-relaxed text-muted">{fill(paragraph)}</p>
        ))}
      </section>
    ))}

    <Link href={`/${locale}`} className="mt-6 inline-block text-sm font-medium text-brand hover:underline">
      ← {t.legal.backHome}
    </Link>
  </article>
);
