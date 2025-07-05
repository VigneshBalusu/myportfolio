import { Section } from '@/components/ui/section';
import { User2 } from 'lucide-react';

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-3xl mx-auto text-center text-lg text-muted-foreground leading-relaxed">
        <p>
          A highly motivated and enthusiastic B.Tech student with a specialization in AI & Data Science. 
          With a strong foundation in Python and Java, I am passionate about crafting innovative solutions 
          and have hands-on experience in full-stack development and machine learning. 
          I am eager to apply my skills to solve real-world challenges and contribute to impactful projects 
          in the tech industry.
        </p>
      </div>
    </Section>
  );
}
