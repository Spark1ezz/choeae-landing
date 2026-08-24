import type { Metadata } from "next";
import { Sora, Manrope, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const sora = Sora({ 
  subsets: ["latin"],
  variable: "--font-sora",
  display: 'swap',
});

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: "--font-manrope",
  display: 'swap',
});

const notokr = Noto_Sans_KR({ 
  subsets: ["latin"],
  variable: "--font-noto-kr",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "CHOEAE — K-pop Photocard Gacha & Collector Marketplace",
  description: "Open authentic physical K-pop photocards, find your bias, build your collection and join a new global collector community.",
  openGraph: {
    title: "CHOEAE — Your favorite is one pull away.",
    description: "Pull. Keep. Sell. Swap. Collect your choeae.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable} ${notokr.variable}`}>
      <body className="antialiased bg-midnight-plum text-pearl selection:bg-choeae-pink selection:text-midnight-plum">
        {children}
      </body>
    </html>
  );
}
