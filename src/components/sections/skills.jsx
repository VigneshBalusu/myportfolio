import { Section } from '@/components/ui/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Cpu, Users } from 'lucide-react';
import { AnimatedSection } from '../animated-section';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <Code2 className="h-6 w-6 text-primary" aria-hidden="true" />,
    skills: ['Python', 'Java', 'C', 'SQL'],
  },
  {
    title: 'Web Development',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-primary"
        aria-hidden="true"
        role="img"
      >
        <path d="M10 12.5 8 15l-4-4 2.5-2.5" />
        <path d="m14 12.5 2-2.5 4 4-2.5 2.5" />
        <path d="m8 8 2-2 4 4-2 2Z" />
        <path d="m12 2 2 2-4 4-2-2Z" />
        <path d="m12 22 2-2-4-4-2 2Z" />
      </svg>
    ),
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Express.js', 'Node.js', 'Git', 'MongoDB'],
  },
  {
    title: 'AI & Machine Learning',
    icon: <Cpu className="h-6 w-6 text-primary" aria-hidden="true" />,
    skills: [
      'Natural Language Processing (NLP)',
      'Computer Vision (CV)',
      'Data Analysis',
      'Scikit-learn',
      'Pandas',
    ],
  },
  {
    title: 'Soft Skills',
    icon: <Users className="h-6 w-6 text-primary" aria-hidden="true" />,
    skills: ['Communication', 'Leadership', 'Problem-Solving', 'Teamwork', 'Adaptability'],
  },
];

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <AnimatedSection key={category.title} delay={index * 100}>
            <Card className="h-full bg-card hover:border-primary/50 transition-colors">
              <CardHeader className="flex items-center gap-4">
                {category.icon}
                <CardTitle className="font-headline text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <Badge
                      key={skill}
                      variant="default"
                      className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20"
                      aria-label={`Skill: ${skill}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
