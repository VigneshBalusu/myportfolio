"use client"

import React from "react"
import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"

export function Section({ id, title, children, className, titleClassName, containerClassName }) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className={cn("container mx-auto px-4", containerClassName)}>
        <AnimatedSection>
          <h2
            className={cn(
              "text-3xl md:text-4xl font-bold text-center mb-12 font-headline text-primary",
              titleClassName
            )}
          >
            {title}
          </h2>
        </AnimatedSection>
        {children}
      </div>
    </section>
  )
}
