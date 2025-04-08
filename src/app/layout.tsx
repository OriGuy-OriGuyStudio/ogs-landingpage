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
      <body className="overflow-x-hidden px-4 sm:px-20">{children}</body>
    </html>
  );
}
