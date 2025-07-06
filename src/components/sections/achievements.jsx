import React from 'react';
import { Section } from '@/components/ui/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Trophy } from 'lucide-react';
import { AnimatedSection } from '../animated-section';

const achievements = [
  {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    title: 'Shastra Coding Competition',
    description:
      'Secured 6th place among numerous participants, showcasing strong problem-solving and coding skills.',
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'District Chess Finalist',
    description:
      'Reached the finals in the district-level chess tournament, demonstrating strategic thinking and concentration.',
  },
];

export function Achievements() {
  return (
    <Section id="achievements" title="Achievements">
      <div className="grid md:grid-cols-2 gap-8">
        {achievements.map((achievement, index) => (
          <AnimatedSection key={index} delay={index * 100}>
            <Card className="h-full bg-card hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                {achievement.icon}
                <CardTitle className="font-headline text-xl">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
