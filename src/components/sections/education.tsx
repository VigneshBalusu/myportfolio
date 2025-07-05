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
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
        <div className="space-y-12">
          {educationHistory.map((edu, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
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
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="flex-1 hidden md:block" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </Section>
  );
}
