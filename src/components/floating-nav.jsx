"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const socialLinks = [
  {
    href: 'https://drive.google.com/file/d/1avEEHfCW_ftYdTm_d2EOj2oA5kpFc6me/view?usp=drive_link',
    icon: <Download className="h-6 w-6" />,
    label: 'Download Resume',
  },
  {
    href: 'https://github.com/VigneshBalusu',
    icon: <Github className="h-6 w-6" />,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/balusu-vignesh-905828258/',
    icon: <Linkedin className="h-6 w-6" />,
    label: 'LinkedIn',
  },
];

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="flex flex-col gap-4 items-center">
        {socialLinks.map(({ href, icon, label }, index) => (
          <div key={href} className="relative flex flex-col items-center group">
            {/* Tooltip/Card */}
            <div
              className={cn(
                "absolute bottom-full mb-2 px-3 py-1 rounded-md bg-gray-800 text-white text-sm whitespace-nowrap opacity-0 pointer-events-none transition-opacity duration-300",
                hoverIndex === index && "opacity-100 pointer-events-auto"
              )}
            >
              {label}
            </div>

            {/* Button */}
            <Button
              asChild
              variant="outline"
              size="icon"
              className="rounded-full w-14 h-14 bg-background/80 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                {icon}
              </a>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
