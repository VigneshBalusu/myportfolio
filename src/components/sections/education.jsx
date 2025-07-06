import React from 'react';
import { Section } from '@/components/ui/section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';
import { AnimatedSection } from '../animated-section';

const educationHistory = [
  {
    degree: 'B.Tech in AI & Data Science',
    institution: 'Ramachandra College of Engineering',
    period: '2022 – 2026',
    details: 'CGPA: 8.0',
  },
  {
    degree: 'Intermediate Education',
    institution: 'Sri New Vision Junior College',
    period: '2020 – 2022',
    details: 'Completed with a focus on Mathematics, Physics, and Chemistry.',
  },
  {
    degree: '10th Standard (SSC)',
    institution: 'A.G.K. Municipal High School',
    period: '2019 – 2020',
    details: 'Graduated with high honors.',
  },
];

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute top-0 left-6 w-0.5 h-full bg-border -translate-x-1/2 md:left-1/2" />
        <div className="space-y-12">
          {educationHistory.map((edu, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="relative flex items-start md:grid md:grid-cols-2 md:gap-x-12">
                {/* Timeline icon */}
                <div className="absolute top-1 left-6 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center -translate-x-1/2 md:left-1/2">
                  <GraduationCap className="h-6 w-6" />
                </div>
                {/* Education card container */}
                <div
                  className={`pl-20 md:pl-0 ${
                    index % 2 === 0 ? 'md:col-start-1 md:text-right' : 'md:col-start-2'
                  }`}
                >
                  <Card className="w-full bg-card hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="font-headline text-xl">{edu.degree}</CardTitle>
                      <CardDescription>{edu.institution}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{edu.period}</p>
                      <p>{edu.details}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </Section>
  );
}
