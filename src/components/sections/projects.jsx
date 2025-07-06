import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/ui/section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { AnimatedSection } from '../animated-section';

const projects = [
  {
    title: 'Aurora Intel',
    description:
      'A responsive chatbot built with Natural Language Processing to understand and respond to user queries in real-time.',
    image: '/chatbot.jpeg',
    tags: ['NLP', 'Python', 'React'],
    liveLink: 'https://auroraintel.netlify.app',
    sourceLink: 'https://github.com/VigneshBalusu/AURORA-INTEL',
    aiHint: 'chatbot conversation',
  },
  {
    title: 'WeatherPeeks',
    description:
      'A web application that provides current weather and forecasts by integrating with third-party weather APIs.',
    image: '/weather logo.jpg',
    tags: ['API', 'JavaScript', 'CSS'],
    liveLink: 'https://weatherpeeks.netlify.app',
    sourceLink: 'https://github.com/VigneshBalusu/weather-web',
    aiHint: 'weather map',
  },
  {
    title: 'Pattern Sense',
    description: 'A machine learning application for detecting and identifying patterns in data.',
    image: '/patternsense.png',
    tags: ['Machine Learning', 'Python', 'Data Analysis'],
    liveLink: 'https://pattern-sense-1qe4.onrender.com/',
    sourceLink: 'https://github.com/VigneshBalusu/Pattern-Sense',
    aiHint: 'data pattern',
  },
  {
    title: 'Rupee Relief',
    description: 'A smart shopping budget calculator that prioritizes items to help you manage your spending effectively.',
    image: '/Rupeerelief.png',
    tags: ['Budgeting', 'React', 'JavaScript'],
    liveLink: 'http://rupeerelief.netlify.app',
    sourceLink: 'https://github.com/RaviKiran-2005/Rupee-Relief',
    aiHint: 'shopping list',
  },
  {
    title: 'Sales Prediction Model',
    description: 'A model to predict sales using historical data and machine learning techniques.',
    image: '/salesprection.png',
    tags: ['Machine Learning', 'Python', 'Pandas'],
    liveLink: null,
    sourceLink: 'https://github.com/VigneshBalusu',
    aiHint: 'sales chart',
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
                  alt={`${project.title} project screenshot`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={project.aiHint}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <CardDescription className="flex-grow">{project.description}</CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" aria-label={`Technology tag: ${tag}`}>
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.liveLink && (
                    <Button asChild variant="outline" size="sm">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Live demo of ${project.title}`}
                      >
                        <ExternalLink className="inline mr-1" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.sourceLink && (
                    <Button asChild variant="outline" size="sm">
                      <a
                        href={project.sourceLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Source code of ${project.title}`}
                      >
                        <Github className="inline mr-1" />
                        Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
