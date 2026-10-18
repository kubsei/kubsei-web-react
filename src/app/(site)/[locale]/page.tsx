import { ArrowUpRight, Check, GraduationCap, Mail, Sprout, Store, Wallet } from "lucide-react";
import { getDictionary, isLocale } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { notFound } from "next/navigation";

// Same order as upcoming.items in the locale files
const UPCOMING_ICONS = [Store, GraduationCap, Wallet, Sprout];

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,var(--brand-soft),transparent_65%)]">
        <div className="animate-rise mx-auto max-w-4xl px-4 pb-24 pt-20 text-center sm:px-6 sm:pb-32 sm:pt-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand">{t.hero.eyebrow}</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">{t.hero.title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{t.hero.mission}</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={SITE.plaartUrl}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 font-medium text-brand-contrast transition-opacity hover:opacity-90">
              {t.hero.ctaPrimary}
              <ArrowUpRight aria-hidden className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-line bg-surface px-6 py-3 font-medium transition-colors hover:bg-surface-alt">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.products.title}</h2>
          <p className="mt-3 text-muted">{t.products.subtitle}</p>

          <article className="mt-10 grid gap-10 rounded-3xl border border-line bg-surface-alt p-6 sm:p-10 md:grid-cols-2 md:items-center">
            <div>
              <span className="inline-block rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
                {t.products.available}
              </span>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight">plaart</h3>
              <p className="mt-4 leading-relaxed text-muted">{t.products.plaart.description}</p>
              <ul className="mt-6 space-y-2">
                {t.products.plaart.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check aria-hidden className="h-4 w-4 shrink-0 text-brand" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={SITE.plaartUrl}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-medium text-surface transition-opacity hover:opacity-90">
                {t.products.plaart.cta}
                <ArrowUpRight aria-hidden className="h-4 w-4" />
              </a>
            </div>

            {/* Decorative sketch of the editor: canvas, shapes and layers panel */}
            <div aria-hidden className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-surface shadow-sm">
              <div className="flex h-8 items-center gap-1.5 border-b border-line px-3">
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
              </div>
              <div className="absolute inset-x-0 bottom-0 top-8 flex">
                <div className="relative flex-1">
                  <div className="absolute left-[14%] top-[18%] h-[38%] w-[34%] rounded-xl border-2 border-ink/80" />
                  <div className="absolute bottom-[16%] right-[18%] h-[40%] w-[30%] rounded-full bg-brand/80" />
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M8 80 C 25 50, 40 95, 60 60 S 85 30, 95 45" fill="none" stroke="var(--ink)" strokeWidth="1.2" />
                  </svg>
                </div>
                <div className="w-1/4 space-y-2 border-l border-line p-2">
                  {[0, 1, 2].map((i) => <div key={i} className="h-5 rounded bg-surface-alt" />)}
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Upcoming */}
      <section className="border-t border-line bg-surface-alt">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.upcoming.title}</h2>
          <p className="mt-3 text-muted">{t.upcoming.subtitle}</p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.upcoming.items.map((item, i) => {
              const Icon = UPCOMING_ICONS[i] ?? Store;
              return (
                <li key={item.title} className="rounded-2xl border border-line bg-surface p-6">
                  <Icon aria-hidden className="h-6 w-6 text-brand" />
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                  <span className="mt-4 inline-block rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">
                    {t.upcoming.badge}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* About and mission */}
      <section id="mission" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.about.title}</h2>
            {t.about.paragraphs.map((p) => (
              <p key={p} className="mt-5 leading-relaxed text-muted">{p}</p>
            ))}
          </div>
          <ul className="space-y-6 self-center">
            {t.about.values.map((value) => (
              <li key={value.title} className="border-l-2 border-brand pl-5">
                <h3 className="font-semibold">{value.title}</h3>
                <p className="mt-1 text-muted">{value.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 bg-ink text-surface">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.contact.title}</h2>
          <p className="mt-4 text-lg text-surface/80">{t.contact.text}</p>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-surface px-6 py-3 font-medium text-ink transition-opacity hover:opacity-90">
            <Mail aria-hidden className="h-4 w-4" />
            {t.contact.cta}: {SITE.email}
          </a>
        </div>
      </section>
    </>
  );
}
