import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ben Amado - Full Stack Developer',
  description: 'Portfolio website of Ben Amado, Full Stack Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

