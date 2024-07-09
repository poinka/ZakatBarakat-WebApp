import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zakat Barakat",
  description: "Islamic Finances Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
        {children}
        <Footer />
        </main>
        </body>
    </html>
  );
}
