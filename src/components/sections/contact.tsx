import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const contactDetails = [
  {
    icon: <Mail className="h-6 w-6 text-primary" />,
    text: 'balusuvignesh@example.com',
    href: 'mailto:balusuvignesh@example.com',
  },
  {
    icon: <Phone className="h-6 w-6 text-primary" />,
    text: '+91 12345 67890',
    href: 'tel:+911234567890',
  },
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    text: 'Andhra Pradesh, India',
    href: '#',
  },
];

const socialLinks = [
  {
    icon: <Github className="h-6 w-6" />,
    href: 'https://github.com',
    label: 'GitHub',
  },
  {
    icon: <Linkedin className="h-6 w-6" />,
    href: 'https://linkedin.com',
    label: 'LinkedIn',
  },
];

export function Contact() {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-2xl mx-auto text-center">
        <p className="mb-8 text-lg text-muted-foreground">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        <div className="space-y-4 mb-8">
          {contactDetails.map((detail, index) => (
            <a key={index} href={detail.href} className="flex items-center justify-center gap-4 text-lg hover:text-primary transition-colors">
              {detail.icon}
              <span>{detail.text}</span>
            </a>
          ))}
        </div>
        <div className="flex justify-center gap-4">
          {socialLinks.map((social, index) => (
            <Button key={index} variant="outline" size="icon" asChild>
              <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                {social.icon}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </Section>
  );
}
