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
