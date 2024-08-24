import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageTransition from '@/components/PageTransition';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Ola",
  description: "Hi, I&apos;m Ola, a software developer. I create websites, dsc bots, mobile apps, windows apps, custom scripts, browser extensions and more, explore my work to see how I can help bring your ideas to life. Let&apos;s connect",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='family-poppins'><PageTransition>{children}</PageTransition></body>
    </html>
  );
}
