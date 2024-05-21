"use client"

import React from 'react';
import Project from './Project';

const projects = [
    {
      title: 'Anti Corrupto',
      description: 'This project leverages cutting-edge technologies like blockchain and machine learning to build trust and combat corruption in government systems. Automated Traffic & Challan System (using edge computing): Ensures transparency in traffic enforcement and reduces bribery. Secure Land Registry: Eliminates fraud with tamper-proof land ownership records.',
      projectLink: '',
      imageUrl: '/ac.png',
      repoLink: 'https://github.com/vishavsingla/Capstone_Anti-Corrupto',
      technologies: ['React.js','React Native', 'Express.js', 'PostgreSQL', 'Solidity', 'Ethereum', 'Docker', 'Machine Learning'],
    },
    {
      title: 'Landchain',
      description: 'Decentralized and transparent application for Real Estate transactions to eliminate fraud and corruption. It uses blockchain technology to store land records and transactions securely. It also uses machine learning to predict the price of land based on various factors like location, area, etc.',
      projectLink: '',
      imageUrl: '/lc.png',
      repoLink: 'https://github.com/vishavsingla/Landchain',
      technologies: ['Express.js', 'React.js', 'PostgreSQL', 'Solidity', 'Random Forest', 'Machine Learning', 'python'],
    },
    {
        title: 'Distracted Driver Detection',
        description: 'This project tackles the critical issue of distracted driving, a major safety hazard. Deep learning models are utilized to analyze in-vehicle dashboard camera footage and distinguish between safe driving and various forms of distraction.',
        projectLink: '',
        imageUrl: '/p3.png',
        repoLink: 'https://github.com/vishavsingla/Distracted-driver-detection',
        technologies: ['Python', 'tensorflow', 'CNN', 'VGG16', 'Restnet50', 'Deep Learning'],
      },
  ];
  

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a192f] text-[#ccd6f6] flex flex-col items-center py-5">
      <h1 className="text-4xl font-bold mt-10">My Projects</h1>
      <div className="mt-10 space-y-10">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectLink={project.projectLink}
            repoLink={project.repoLink}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
