import { Space_Grotesk, Space_Mono } from 'next/font/google';
import './globals.css';

const sans = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '500', '700'],
  variable: '--font-sans',
});

const mono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
});

export const metadata = {
  title: 'Mulwa Prep',
  description: 'Interactive study guide for the Karen Hospital Medical Training College Promotional Exam.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="antialiased bg-paper text-ink font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
