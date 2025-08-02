import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ContactProvider } from "./context/ContactContext";
import { ToastProvider } from "./components/ui/custom-toast-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import './globals.css'

export const metadata: Metadata = {
  title: "Matrix Aviation",
  description: "Specialists in Aviation Fueling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ContactProvider>
          <ToastProvider>
            {children}
          </ToastProvider>
        </ContactProvider>
      </body>
    </html>
  );
}
