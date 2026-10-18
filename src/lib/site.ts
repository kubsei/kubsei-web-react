// Site-wide facts. LEGAL feeds the legal notice (LSSI art. 10) and the privacy policy: fill it before publishing.
export const SITE = {
  url: "https://kubsei.com",
  email: "hola@kubsei.com",
  plaartUrl: "https://plaart.app",
} as const;

export const LEGAL = {
  controller: "POR COMPLETAR (nombre o razón social)",
  taxId: "POR COMPLETAR (NIF/CIF)",
  address: "POR COMPLETAR (domicilio)",
  registry: "POR COMPLETAR (datos registrales, o \"No aplica\" si no hay sociedad)",
} as const;

// The LSSI requires these details: a production deploy (Vercel) fails while any is still a placeholder
if (process.env.VERCEL_ENV === "production" && Object.values(LEGAL).some((value) => value.startsWith("POR COMPLETAR"))) {
  throw new Error("Fill in LEGAL in src/lib/site.ts before publishing kubsei.com");
}

/** Replaces {key} placeholders in translated text. */
export const fill = (text: string, values: Record<string, string | number> = {}) =>
  text.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : key in LEGAL ? LEGAL[key as keyof typeof LEGAL]
      : key === "email" ? SITE.email : match
  );
