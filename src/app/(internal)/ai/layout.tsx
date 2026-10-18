import type { Metadata } from "next";
import { geistSans } from "@/app/fonts";
import "@/app/globals.css";

// Internal area (Basic Auth in proxy.ts): own root layout, no public header or footer, never indexed
export const metadata: Metadata = {
  title: "Kubsei · Interno",
  robots: { index: false, follow: false },
};

export default function InternalLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
