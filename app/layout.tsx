import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OtherWorld Legends Wiki",
  description: "OtherWorld Legends Wiki là nơi lưu trữ, các dữ liệu từ game OtherWorld Legends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("relative h-full font-sans antialiased bg-[url(/bg.png)]", inter.className)}
      >
        <Navbar/>
        <main>{children}</main>
        <Footer/>
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
