import type { Metadata, Viewport } from "next";
import { Geist, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qüesty — Asistente virtual 24h para huéspedes vía QR",
  description:
    "Qüesty es el asistente virtual que resuelve las dudas de tus huéspedes al instante, escaneando un código QR. Sin llamadas, sin esperas, en 6 idiomas.",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${jakarta.variable} ${geist.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white font-sans text-[1.0625rem] leading-[1.65] text-ink">
        {children}
      </body>
    </html>
  );
}
