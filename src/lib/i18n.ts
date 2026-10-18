import es from "@/locales/es.json";
import en from "@/locales/en.json";

// Each language has its own URL (/es, /en) so search engines index both; texts render on the server
export const LOCALES = ["es", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "es";

export type Dictionary = typeof es;

export const isLocale = (value: string): value is Locale =>
  (LOCALES as readonly string[]).includes(value);

export const getDictionary = (locale: Locale): Dictionary => (locale === "en" ? en : es);
