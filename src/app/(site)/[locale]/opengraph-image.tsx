import { ImageResponse } from "next/og";
import { getDictionary, isLocale, DEFAULT_LOCALE } from "@/lib/i18n";

// Provisional share image (1200x630) until the branding assets exist
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Kubsei";

export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getDictionary(isLocale(locale) ? locale : DEFAULT_LOCALE);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0b0b12",
          color: "#ffffff",
        }}>
        <div style={{ fontSize: 40, color: "#a5b4fc", fontWeight: 600 }}>kubsei</div>
        <div style={{ fontSize: 72, fontWeight: 700, marginTop: 24, lineHeight: 1.1 }}>{t.hero.title}</div>
        <div style={{ fontSize: 32, marginTop: 28, color: "#d4d4d8", lineHeight: 1.4 }}>{t.hero.mission}</div>
      </div>
    ),
    size
  );
}
