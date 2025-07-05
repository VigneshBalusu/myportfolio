import { Section } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import { BookOpenCheck } from 'lucide-react';
import { AnimatedSection } from '../animated-section';

const certifications = [
  { name: 'Machine Learning', provider: 'IBM' },
  { name: 'Python for Everybody', provider: 'Coursera' },
  { name: 'Google Python', provider: 'Google' },
  { name: 'Natural Language Processing', provider: 'Microsoft Azure' },
  { name: 'Java Programming', provider: 'LearnQuest' },
  { name: 'HTML, CSS, & JavaScript', provider: 'Simplilearn' },
];

export function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <AnimatedSection key={index} delay={index * 100}>
            <div className="p-6 bg-card rounded-lg border flex items-center gap-4 hover:border-primary transition-colors">
              <BookOpenCheck className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg">{cert.name}</h3>
                <p className="text-muted-foreground">{cert.provider}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
