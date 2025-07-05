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
        <div className="absolute top-0 left-6 w-0.5 h-full bg-border -translate-x-1/2 md:left-1/2" />
        <div className="space-y-12">
          {experienceData.map((exp, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="relative flex items-start md:grid md:grid-cols-2 md:gap-x-12">
                <div className="absolute top-1 left-6 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center -translate-x-1/2 md:left-1/2">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div className={`pl-20 md:pl-0 ${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1 md:text-right'}`}>
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
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </Section>
  );
}
