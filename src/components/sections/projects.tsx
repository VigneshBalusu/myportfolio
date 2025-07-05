import { Section } from '@/components/ui/section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '../animated-section';

const projects = [
  {
    title: 'NLP Chatbot Website',
    description: 'A responsive chatbot built with Natural Language Processing to understand and respond to user queries in real-time.',
    image: 'https://placehold.co/600x400.png',
    tags: ['NLP', 'Python', 'React'],
    aiHint: 'chatbot conversation',
  },
  {
    title: 'Weather Forecast Website',
    description: 'A web application that provides current weather and forecasts by integrating with third-party weather APIs.',
    image: 'https://placehold.co/600x400.png',
    tags: ['API', 'JavaScript', 'CSS'],
    aiHint: 'weather map',
  },
  {
    title: 'Sales Prediction Model',
    description: 'A regression model developed to predict future sales based on historical data, helping in business decision-making.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Machine Learning', 'Regression', 'Data Analysis'],
    aiHint: 'business chart',
  },
  {
    title: 'Second-Hand Marketplace',
    description: 'A full-stack web application for buying and selling used goods, featuring user authentication and product listings.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Full-Stack', 'MongoDB', 'Express', 'React', 'Node.js'],
    aiHint: 'online shopping',
  },
];

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <AnimatedSection key={project.title} delay={index * 100}>
            <Card className="overflow-hidden h-full flex flex-col bg-card hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-52 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={project.aiHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <CardDescription className="flex-grow">{project.description}</CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
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
