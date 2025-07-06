"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const sections = navItems.map(item => document.querySelector(item.href));
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        if (
          section instanceof HTMLElement &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(`#${section.id}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinks = ({ inSheet }) => (
    <>
      {navItems.map(({ href, label }) => {
        const linkProps = {
          href,
          className: cn(
            "text-sm font-medium transition-colors hover:text-primary",
            activeSection === href ? "text-primary" : "text-muted-foreground",
            inSheet && "block py-2 text-lg"
          )
        };

        if (inSheet) {
          return (
            <SheetClose asChild key={href}>
              <Link {...linkProps}>{label}</Link>
            </SheetClose>
          );
        }

        return (
          <Link key={href} {...linkProps}>{label}</Link>
        );
      })}
    </>
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all",
        isScrolled ? "border-border bg-background/95 backdrop-blur-sm" : "border-transparent bg-background"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="#home" className="flex items-center gap-2 font-bold font-headline text-lg">
          <Code2 className="h-6 w-6 text-primary" />
          <span>Balusu Vignesh</span>
        </Link>
        <nav className="hidden items-center space-x-6 md:flex">
          <NavLinks />
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-6 p-6">
                <Link href="#home" className="flex items-center gap-2 font-bold font-headline text-lg">
                  <Code2 className="h-6 w-6 text-primary" />
                  <span>Balusu Vignesh</span>
                </Link>
                <nav className="flex flex-col space-y-4">
                  <NavLinks inSheet />
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
