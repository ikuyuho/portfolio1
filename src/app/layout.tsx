import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "業務改善・RPA自動化の実績 | [Your Name]",
  description:
    "RPA・業務自動化による改善実績をご紹介します。御社の業務課題を解決するパートナーをお探しの方はお気軽にご相談ください。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
