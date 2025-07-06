import React from 'react';

export function About() {
  return (
    <section id="about" className="py-12 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl font-bold text-primary">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A highly motivated and enthusiastic B.Tech student with a specialization in AI & Data Science.
            With a strong foundation in Python and Java, I am passionate about crafting innovative solutions
            and have hands-on experience in full-stack development and machine learning.
            I am eager to apply my skills to solve real-world challenges and contribute to impactful projects
            in the tech industry.
          </p>
        </div>
      </div>
    </section>
  );
}
