"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const socialLinks = {
    resume: 'https://drive.google.com/file/d/16CjsSDogkWWqBVT4b_gYYbtoFIcPqPEB/view?usp=sharing',
    github: 'https://github.com/VigneshBalusu',
    linkedin: 'https://www.linkedin.com/in/balusu-vignesh-905828258/',
};

export function FloatingNav() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className={cn("fixed bottom-6 right-6 z-50 transition-opacity duration-300", isVisible ? "opacity-100" : "opacity-0 pointer-events-none")}>
            <div className="flex flex-col gap-4">
                <Button asChild variant="outline" size="icon" className="rounded-full w-14 h-14 bg-background/80 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform">
                    <a href={socialLinks.resume} target="_blank" rel="noopener noreferrer" aria-label="Download Resume">
                        <Download className="h-6 w-6" />
                    </a>
                </Button>
                <Button asChild variant="outline" size="icon" className="rounded-full w-14 h-14 bg-background/80 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform">
                    <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                       <Github className="h-6 w-6" />
                    </a>
                </Button>
                <Button asChild variant="outline" size="icon" className="rounded-full w-14 h-14 bg-background/80 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform">
                    <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                       <Linkedin className="h-6 w-6" />
                    </a>
                </Button>
            </div>
        </div>
    );
}
