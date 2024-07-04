import type { Metadata } from "next";
import { Merienda } from "next/font/google";
import { Analytics } from '@vercel/analytics/react'
import "./globals.css";

const merienda = Merienda({ subsets: ["latin"] })

const SITE_TITLE = "Restaurante Almavida Sabor y Ser"
const SITE_DESCRIPTION = "Elaboramos platos de calidad, buscamos dar gusto a los sentidos y generar bienestar en quien nos visita."

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    url: "https://almavida.co/",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "https://almavida.co/logo-almavida.png",
        width: 1700,
        height: 1700,
        alt: "Logo Almavida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "https://almavida.co/logo-almavida.png",
        width: 1700,
        height: 1700,
        alt: "Logo Almavida",
      },
    ],
  },
  icons: {
    icon: [
      { rel: "apple-touch-icon", sizes: "57x57", url: "/apple-icon-57x57.png" },
      { rel: "apple-touch-icon", sizes: "60x60", url: "/apple-icon-60x60.png" },
      { rel: "apple-touch-icon", sizes: "72x72", url: "/apple-icon-72x72.png" },
      { rel: "apple-touch-icon", sizes: "76x76", url: "/apple-icon-76x76.png" },
      { rel: "apple-touch-icon", sizes: "114x114", url: "/apple-icon-114x114.png" },
      { rel: "apple-touch-icon", sizes: "120x120", url: "/apple-icon-120x120.png" },
      { rel: "apple-touch-icon", sizes: "144x144", url: "/apple-icon-144x144.png" },
      { rel: "apple-touch-icon", sizes: "152x152", url: "/apple-icon-152x152.png" },
      { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-icon-180x180.png" },
      { rel: "icon", type: "image/png", sizes: "36x36", url: "/android-icon-36x36.png" },
      { rel: "icon", type: "image/png", sizes: "48x48", url: "/android-icon-48x48.png" },
      { rel: "icon", type: "image/png", sizes: "72x72", url: "/android-icon-72x72.png" },
      { rel: "icon", type: "image/png", sizes: "96x96", url: "/android-icon-96x96.png" },
      { rel: "icon", type: "image/png", sizes: "144x144", url: "/android-icon-144x144.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", url: "/android-icon-192x192.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "96x96", url: "/favicon-96x96.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={merienda.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
