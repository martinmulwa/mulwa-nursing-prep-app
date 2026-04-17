import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata = {
  title: 'Mulwa Nursing Prep — Part 1 Exam',
  description: 'Interactive study guide for the Karen Hospital Medical Training College Promotional Exam.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${mono.variable}`}>
      <body className="antialiased bg-[#faf8f3] text-[#0f1117]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
