import React from 'react';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const contactDetails = [
  {
    icon: <Mail className="h-6 w-6 text-primary" />,
    text: 'vigneshbalusuu@gmail.com',
    href: 'mailto:vigneshbalusuu@gmail.com',
  },
  {
    icon: <Phone className="h-6 w-6 text-primary" />,
    text: '+91 9059379789',
    href: 'tel:+919059379789',
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
    href: 'https://github.com/VigneshBalusu',
    label: 'GitHub',
  },
  {
    icon: <Linkedin className="h-6 w-6" />,
    href: 'https://www.linkedin.com/in/balusu-vignesh-905828258/',
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
            <a
              key={index}
              href={detail.href}
              className="flex items-center justify-center gap-4 text-lg hover:text-primary transition-colors"
              aria-label={detail.text}
            >
              {detail.icon}
              <span>{detail.text}</span>
            </a>
          ))}
        </div>
        <div className="flex justify-center gap-4">
          {socialLinks.map((social, index) => (
            <Button key={index} variant="outline" size="icon" asChild>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </Section>
  );
}
