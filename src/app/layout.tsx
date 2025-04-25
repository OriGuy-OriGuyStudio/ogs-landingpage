import type { Metadata } from 'next';
import './globals.css';
import { Rubik } from 'next/font/google';

export const metadata: Metadata = {
  title: 'הלקוחות שלך יגידו: זה בדיוק מה שחיפשתי',
  description: 'פותח על ידי סטודיו אורי גיא',
};
const rubik = Rubik();
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="he">
      <body className={`overflow-x-hidden ${rubik.className}`}>
        {children}

        <script
          src="https://cdn.jsdelivr.net/npm/@tsparticles/confetti@3.0.3/tsparticles.confetti.bundle.min.js"
          async
        ></script>
      </body>
    </html>
  );
}
