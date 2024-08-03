import React from 'react';
import { ExperienceItem } from './ExperienceItem';

const Experience: React.FC = () => (
  <section id="experience" className="py-20">
    <h2 className="text-3xl font-bold mb-8">Experience</h2>
    <div className="space-y-8">
      <ExperienceItem 
        title="Google Summer of Code (GSoC)"
        company="Student Developer for Social Street Smart at AOSSIE"
        date="May 2024 – August 2024"
        description={[
          "Migrated the project repository from GitLab to GitHub, upgraded outdated ML models, and deployed them on Flask APIs",
          "Refactored and migrated the frontend codebase to React, reducing load times by 40% and improving user engagement"
        ]}
      />
      <ExperienceItem 
        title="Software Development Intern"
        company="Globe Teleservices"
        date="June 2024 – July 2024"
        description={[
          "Gained proficiency in Spring, Spring Boot, Hibernate, Terraform, Kafka, and Microservices",
          "Developed backend models for validation and JSON input conversion using Spring Boot and Node.js",
          "Worked on frontend validations and user interface development in React.js for internal tools"
        ]}
      />
      <ExperienceItem 
        title="Machine Learning Teaching Assistant Intern"
        company="Sunrise Mentors"
        date="January 2024 – April 2024"
        description={[
          "Guided 100+ students, solved 400+ doubts, and reviewed their projects, earning a rating of 4.75/5",
          "Assisted students in understanding complex concepts, debugging code, and providing feedback on projects",
          "Collaborated with instructors to review course materials, ensuring quality and coherence in the curriculum"
        ]}
      />
    </div>
  </section>
);

