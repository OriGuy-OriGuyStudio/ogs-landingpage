'use client';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'הלקוחות שלך יגידו: זה בדיוק מה שחיפשתי',
  description: 'פותח על ידי סטודיו אורי גיא',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="he">
      <body className="overflow-x-hidden">
        {children}

        <script
          src="https://cdn.jsdelivr.net/npm/@tsparticles/confetti@3.0.3/tsparticles.confetti.bundle.min.js"
          async
        ></script>
      </body>
    </html>
  );
}
