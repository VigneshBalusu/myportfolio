'use client';

import React from 'react';
import { Section } from '@/components/ui/section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookOpenCheck, ExternalLink } from 'lucide-react';
import { AnimatedSection } from '../animated-section';
import { Button } from '@/components/ui/button';

const certifications = [
  { name: 'C Structured Programming', provider: 'Coursera', link: "https://drive.google.com/file/d/1gWFFQJyt0s4BUby7MSj7dbu7Ko2IhBai/view?usp=drive_link" },
  { name: 'C Programming Fundamentals', provider: 'Coursera', link: "https://drive.google.com/file/d/1wReZJ80wNSdsXSsaQ-V3Rysf3kVIpD7B/view?usp=drive_link" },
  { name: 'Python', provider: 'Coursera', link: "https://drive.google.com/file/d/1dBOjMSkwK0xskX_gMN7VLN4RbiWyx2Db/view?usp=drive_link" },
  { name: 'Crash Course on Python', provider: 'Google', link: "https://drive.google.com/file/d/1czEwZnM5AUK4rwH0hMBvz-KumIxktoQQ/view?usp=drive_link" },
  { name: 'Machine Learning With Python', provider: 'IBM', link: "https://drive.google.com/file/d/1eegB2v8wXBHVZnsnvo7pd8UOsXJ_f-6P/view?usp=drive_link" },
  { name: 'Machine Learning Fundamentals', provider: 'Infosys', link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_0130944347611955202379_shared/1-59265512-ede2-490b-ae59-bbdab3a5081d.pdf" },
  { name: 'Java Programming', provider: 'LearnQuest', link: "https://drive.google.com/file/d/1b6kYqi4e5fmfTiu-K_bs0U_iaJVrxQQR/view?usp=drive_link" },
  { name: 'Natural Language Processing (NLP)', provider: 'Microsoft Azure', link: "https://drive.google.com/file/d/1qP0BG522joJiK1s9DDbnyJjDjC82ZZSh/view?usp=drive_link" },
  { name: 'Python Data Structures', provider: 'University of Michigan', link: "https://drive.google.com/file/d/12zOOy-ohfTVfxExCWL95tlgNE8OEWNMH/view?usp=drive_link" },
  { name: 'HTML', provider: 'Simplilearn', link:"https://drive.google.com/file/d/16-QJrUxu2l_QUbixhvN5lQ1KEU5sqHfS/view?usp=drive_link"  },
  { name: 'CSS', provider: 'Simplilearn', link: "https://drive.google.com/file/d/12_NG0iQVx8gpG0hX4HQQ8m-3r9ctgYH3/view?usp=drive_link" },
  { name: 'JavaScript', provider: 'Simplilearn', link: "https://drive.google.com/file/d/1qZ-yV202EK-fg1b3_V1NayN0wrN6W3BM/view?usp=drive_link" },
  { name: 'Certified System Administrator (CSA)', provider: 'ServiceNow', link: "https://drive.google.com/file/d/14IQ4Ottavh18r1mMPVcbwnxgVepZpWaT/view?usp=drive_link" },
  { name: 'Micro Certification', provider: 'ServiceNow', link: "https://drive.google.com/file/d/1ctqbtxl-bfgxT2-tlFi_BuLeR6T_60vH/view?usp=drive_link" },
  {name:'Introduction to Artifical Intelligence', provider:'Simplilearn',link:"https://drive.google.com/file/d/14p7Dqvst-6Z8dpED58vuDsHpSZ_uXKuR/view?usp=sharing"},
  {name:"Introduction to Cloud Computing", provider:'Simplilearn',link:"https://drive.google.com/file/d/1Fdo9RRdKStkkubMlbWwyQJu2Fm0jdxyp/view?usp=drive_link"},
  {name:"Introduction to Sorting Algorithms", provider:'Simplilearn',link:"https://drive.google.com/file/d/1lOjgKuvl8Z4Q84fUbnOzxDZQQcWbjbpB/view?usp=drive_link"}
  ,
];


export function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <AnimatedSection key={index} delay={index * 100}>
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader className="flex gap-4 items-start">
                <BookOpenCheck className="h-7 w-7 text-primary mt-1" />
                <div>
                  <CardTitle className="text-lg font-semibold">{cert.name}</CardTitle>
                  <CardDescription>{cert.provider}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                {cert.link && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    aria-label={`View certificate for ${cert.name}`}
                  >
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="inline mr-1" />
                      View Certificate
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
