import { Section } from '@/components/ui/section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';
import { AnimatedSection } from '../animated-section';

const experienceData = [
  {
    role: 'AI-ML-DS Intern',
    company: 'APSCHE Black Bucks',
    period: 'Summer 2024',
    description: 'Developed a cricket score prediction model using machine learning algorithms. Gained experience in data preprocessing, feature engineering, and model deployment.',
  },
  {
    role: 'Micro-Intern',
    company: 'Tech Shiksha',
    period: 'Winter 2023',
    description: 'Worked on projects involving Natural Language Processing (NLP) and Document Intelligence. Extracted insights from unstructured text data using various NLP techniques.',
  },
];

export function Experience() {
  return (
    <Section id="experience" title="Experience">
       <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
        <div className="space-y-12">
          {experienceData.map((exp, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className={`flex-1 ${index % 2 === 0 ? 'md:order-last' : ''}`}>
                  <Card className="w-full bg-card hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="font-headline text-xl">{exp.role}</CardTitle>
                      <CardDescription>{exp.company}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-medium text-primary mb-2">{exp.period}</p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground">
                  <Briefcase className="h-6 w-6" />
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
