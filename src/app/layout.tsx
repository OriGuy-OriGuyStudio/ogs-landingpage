import type { Metadata } from 'next';
import './globals.css';
import { Rubik } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: 'הלקוחות שלך יגידו: זה בדיוק מה שחיפשתי',
  description: 'פותח על ידי סטודיו אורי גיא',
};
const rubik = Rubik({
  subsets: ['hebrew'],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="he">
      <body className={`overflow-x-hidden ${rubik.className}`}>
        {children}
        <GoogleTagManager gtmId={'GTM-TDKTJVBL'} />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TDKTJVBL"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <script
          src="https://cdn.jsdelivr.net/npm/@tsparticles/confetti@3.0.3/tsparticles.confetti.bundle.min.js"
          async
        ></script>
      </body>
    </html>
  );
}
