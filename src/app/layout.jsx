import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import { FloatingNav } from '@/components/floating-nav';

export const metadata = {
  title: 'Vignesh Portfolio',
  description: 'Personal portfolio website for Balusu Vignesh, an AI & Data Science Enthusiast and Full-Stack Developer.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn("font-body antialiased")}>
        {children}
        <Toaster />
        <FloatingNav />
      </body>
    </html>
  );
}
