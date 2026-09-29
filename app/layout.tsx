import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const display = localFont({ src: [
  { path: "../public/fonts/playfair-display-latin-400-normal.woff2", weight: "400", style: "normal" },
  { path: "../public/fonts/playfair-display-latin-ext-400-normal.woff2", weight: "400", style: "normal" },
  { path: "../public/fonts/playfair-display-latin-400-italic.woff2", weight: "400", style: "italic" },
  { path: "../public/fonts/playfair-display-latin-ext-400-italic.woff2", weight: "400", style: "italic" },
], variable: "--font-display", display: "swap" });
const sans = localFont({ src: [
  { path: "../public/fonts/inter-latin-400-normal.woff2", weight: "400", style: "normal" },
  { path: "../public/fonts/inter-latin-ext-400-normal.woff2", weight: "400", style: "normal" },
], variable: "--font-sans", display: "swap" });
const base = process.env.NEXT_PUBLIC_BASE_PATH || process.env.DEMO_BASE_PATH || "";
export const metadata: Metadata = {
  metadataBase: new URL("https://demo.plexrs.com"),
  title: "Purr Purr — kocia kawiarnia i azjatyckie smaki w Warszawie",
  description: "Kawa, azjatyckie smaki i kocie towarzystwo. Poznaj menu Purr Purr i zaplanuj wizytę przy Pokornej 2/U4 w Warszawie. Kocia Strefa 12+.",
  robots: { index: false, follow: false },
  icons: { icon: `${base}/icon.svg` },
  openGraph: { title: "Purr Purr · kawa, koty i coś dobrego", description: "Przytulna chwila na warszawskim Muranowie. Zobacz projekt strony Purr Purr.", images: [{ url: `${base}/images/taiyaki.webp`, width: 756, height: 1134 }], locale: "pl_PL", type: "website" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pl" className={`${display.variable} ${sans.variable}`}><body>{children}</body></html>;
}
