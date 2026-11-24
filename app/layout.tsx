import type { Metadata } from "next";
import { Clicker_Script, Dancing_Script, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/base/header/header";
import Footer from "@/base/footer/footer";

const playfair = Playfair_Display({
  variable: "--font-family-playfair",
  subsets: ["latin"],
});
const clicker = Clicker_Script({
  variable: "--font-family-script",
  subsets: ["latin"],
  weight: "400",
});
const dancing = Dancing_Script({
  variable: "--font-family-logo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bean Scene — Coffee",
  description: "Bean Scene coffee shop landing page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${clicker.variable} ${dancing.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
