import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '../animated-section';

export function Hero() {
  return (
    <section
      id="home"
      className="container mx-auto px-4 py-24 sm:py-32 md:py-40"
      aria-label="Hero section"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <AnimatedSection>
          <div className="text-center md:text-left">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-green-500">
              Balusu Vignesh
            </h1>
            <p className="mt-4 text-lg md:text-xl lg:text-2xl text-primary font-medium font-headline">
              AI & Data Science Enthusiast | Full-Stack Developer
            </p>
            <p className="mt-6 max-w-xl mx-auto md:mx-0 text-muted-foreground">
              A passionate developer transforming complex problems into elegant, data-driven solutions.
            </p>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <Link href="#contact" aria-label="Contact Me section link">
                  Contact Me
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#projects" aria-label="View Projects section link">
                  View Projects
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* Profile Image */}
        <AnimatedSection delay={200}>
          <div className="flex justify-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-[6px] border-[#f0f0f0]">
              <Image
                src="/profile.jpg"
                alt="Balusu Vignesh"
                fill
                priority
                className="object-cover object-[center_12%]" // Focus on upper face
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
