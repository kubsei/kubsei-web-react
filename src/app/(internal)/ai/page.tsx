import { ExternalLink } from "lucide-react";

// Placeholder: the content of the internal area is still to be decided
const LINKS = [
  { name: "plaart (producción)", url: "https://plaart.app" },
  { name: "GitHub · kubsei", url: "https://github.com/kubsei" },
  { name: "Vercel", url: "https://vercel.com" },
  { name: "Hetzner Cloud", url: "https://console.hetzner.com" },
  { name: "MongoDB Atlas", url: "https://cloud.mongodb.com" },
  { name: "Cloudflare", url: "https://dash.cloudflare.com" },
];

export default function InternalHome() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand">kubsei · interno</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">Área interna</h1>
      <p className="mt-4 text-muted">Solo para el equipo de Kubsei. Esta página no es pública ni aparece en buscadores.</p>
      <ul className="mt-10 grid gap-3 sm:grid-cols-2">
        {LINKS.map((link) => (
          <li key={link.url}>
            <a
              href={link.url}
              className="flex items-center justify-between rounded-xl border border-line px-4 py-3 font-medium hover:bg-surface-alt">
              {link.name}
              <ExternalLink aria-hidden className="h-4 w-4 text-muted" />
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
