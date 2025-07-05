import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AnimatedSection } from '../animated-section';

export function Hero() {
  return (
    <section id="home" className="container mx-auto px-4 py-24 sm:py-32 md:py-40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <AnimatedSection>
          <div className="text-center md:text-left">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
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
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-primary/20">
              <Image
                src="https://placehold.co/400x400.png"
                alt="Balusu Vignesh"
                width={400}
                height={400}
                priority
                className="object-cover w-full h-full"
                data-ai-hint="portrait man"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
