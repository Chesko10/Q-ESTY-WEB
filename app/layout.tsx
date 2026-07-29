import type { Metadata } from "next";
import { Baloo_2, Work_Sans } from "next/font/google";
import "./globals.css";

const baloo2 = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Güesty — Asistente virtual 24h para huéspedes vía QR",
  description:
    "Güesty es el asistente virtual que resuelve las dudas de tus huéspedes al instante, escaneando un código QR. Sin llamadas, sin esperas, en 6 idiomas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${baloo2.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-brown-dark font-sans">
        {children}
      </body>
    </html>
  );
}
