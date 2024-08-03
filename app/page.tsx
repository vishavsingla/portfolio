'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCalendarAlt, FaBriefcase } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0a192f] text-[#383838] font-sans">
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a192f] shadow-lg' : 'bg-transparent'}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <span className="text-[#64ffda] text-2xl font-bold">VS</span>
            <div className="hidden md:flex space-x-6">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-lg text-gray-300 hover:text-[#64ffda] transition-colors duration-300 pt-2">
                  {item}
                </a>
              ))}
              <a href="/Resume.pdf" className="text-lg text-[#64ffda] border border-[#64ffda] px-4 py-2 rounded hover:bg-[#64ffda] hover:text-[#0a192f] transition-colors duration-300">Resume</a>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="hero" className="min-h-screen flex flex-col justify-center items-start">
          <h1 className="text-[#64ffda] text-2xl mb-4 font-semibold">Hi, my name is</h1>
          <h2 className="text-7xl font-bold mb-4 text-[#ccd6f6]">Vishav Singla</h2>
          <h3 className="text-5xl font-bold mb-6 text-[#8892b0]">I build things for the web and blockchain.</h3>
          <p className="text-xl text-[#8892b0] max-w-2xl mb-8">
            I&apos;m a software engineer specializing in building exceptional digital experiences. 
            Currently, I&apos;m focused on creating accessible, human-centered products at Globe Teleservices 
            and contributing to open-source projects.
          </p>
          <div className="bg-[#112240] p-6 rounded-lg shadow-xl mb-8">
            <h4 className="text-2xl font-bold text-[#64ffda] mb-2">GSoC 2024 Contributor</h4>
            <p className="text-[#8892b0]">Selected as a Google Summer of Code contributor for AOSSIE organization.</p>
          </div>
          <div className="flex space-x-6 mb-12">
            {[
              { href: "https://github.com/vishavsingla", icon: <FaGithub /> },
              { href: "https://linkedin.com/in/vishav-singla", icon: <FaLinkedin /> },
              { href: "https://twitter.com/vishav_singla", icon: <FaTwitter /> },
              { href: "https://leetcode.com/vishavsingla", icon: <SiLeetcode /> },
              { href: "mailto:vishavsinglaofficial@gmail.com", icon: <FaEnvelope /> }
            ].map((social, index) => (
              <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="text-3xl text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300">
                {social.icon}
              </a>
            ))}
          </div>
          <a href="#projects" className="text-lg text-[#64ffda] border-2 border-[#64ffda] px-8 py-4 rounded-md hover:bg-[#64ffda] hover:text-[#0a192f] transition-colors duration-300">
            Check out my work
          </a>
        </section>

        <section id="about" className="py-20">
          <h2 className="text-4xl font-bold mb-8 text-[#ccd6f6]">About Me</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 pr-8">
              <p className="text-xl mb-6 text-[#8892b0]">
                I&apos;m a third-year undergraduate at Thapar University, pursuing a degree in Electronics and Computer Engineering. 
                My passion lies in full-stack development and blockchain technology, where I&apos;ve honed my skills through various projects and internships.
              </p>
              <p className="text-xl mb-6 text-[#8892b0]">
                As a GSoC&apos;24 Contributor at Aossie and former SDE Intern at Globe Teleservices, I&apos;ve gained valuable experience in developing robust applications 
                and working with cutting-edge technologies. I&apos;m always eager to take on new challenges and contribute to innovative solutions.
              </p>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0">
            <img src="profile-pic.png" alt="Vishav Singla" className="rounded-lg shadow-xl" />

            </div>
          </div>
        </section>

        <section id="experience" className="py-20">
        <h2 className="text-4xl font-bold mb-12 text-[#ccd6f6] text-center">Professional Experience</h2>
        <div className="space-y-12">
          {[
            {
              title: "Google Summer of Code (GSoC)",
              company: "Student Developer for Social Street Smart at AOSSIE",
              date: "May 2024 – August 2024",
              description: [
                "Migrated the project repository from GitLab to GitHub",
                "Upgraded outdated ML models, and deployed them on Flask APIs",
                "Refactored and migrated the frontend codebase to React, reducing load times by 40% and improving user engagement"
              ],
              logo: "/gsoc.png"
            },
            {
              title: "Software Development Intern",
              company: "Globe Teleservices",
              date: "June 2024 – July 2024",
              description: [
                "Gained proficiency in Spring, Spring Boot, Hibernate, Terraform, Kafka, and Microservices",
                "Developed backend models for validation and JSON input conversion using Spring Boot and Node.js",
                "Worked on frontend validations and user interface development in React.js for internal tools"
              ],
              logo: "/image.png"
            }
          ].map((job, index) => (
            <div key={index} className="bg-[#112240] p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <img src={job.logo} alt={job.company} className="w-12 h-12 mr-4 rounded-full" />
                <div>
                  <h3 className="text-2xl font-bold text-[#64ffda]">{job.title}</h3>
                  <p className="text-xl text-[#8892b0]">{job.company}</p>
                </div>
              </div>
              <div className="flex items-center text-[#8892b0] mb-4">
                <FaCalendarAlt className="mr-2" />
                <span>{job.date}</span>
              </div>
              <ul className="list-none text-[#8892b0] space-y-2">
                {job.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <FaBriefcase className="mr-2 mt-1 text-[#64ffda]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

        <section id="projects" className="py-20">
          <h2 className="text-4xl font-bold mb-12 text-[#ccd6f6]">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "ANTI CORRUPTO",
                description: "A decentralized automated fine system with mobile app and website for traffic and speeding violations. Implemented a blockchain-based Real Estate platform with ML model for fraud detection.",
                technologies: ["React.js", "React Native", "Express.js", "Solidity", "PostgreSQL", "Ethereum"],
                githubLink: "https://github.com/vishavsingla/Capstone_Anti-Corrupto",
                image: "/ac.png"
              },
              {
                title: "LANDCHAIN",
                description: "Decentralized and transparent application for Real Estate transactions to eliminate fraud and corruption. It uses blockchain technology to store land records and transactions securely.",
                technologies: ["Express.js", "React.js", "PostgreSQL", "Solidity", "Random Forest", "Machine Learning"],
                githubLink: "https://github.com/vishavsingla/Landchain",
                image: "/lc.png"
              },
              {
                title: "DISTRACTED DRIVER DETECTION",
                description: "Implemented a deep learning model using Tensorflow and Keras to classify driver behavior from dashboard camera images. Achieved an accuracy rate of 90% in distinguishing safe driving from distractions.",
                technologies: ["Tensorflow", "Keras", "CNN", "Batch Normalisation", "Dropout"],
                githubLink: "https://github.com/vishavsingla/Distracted-driver-detection",
                image: "/p3.png"
              }
            ].map((project, index) => (
              <div key={index} className="bg-[#112240] rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105">
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#64ffda] mb-4">{project.title}</h3>
                  <p className="text-[#8892b0] mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-[#233554] text-[#64ffda] px-3 py-1 rounded-full text-sm">{tech}</span>
                    ))}
                  </div>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#64ffda] text-[#112240] px-6 py-3 rounded-md font-semibold hover:bg-[#4da892] transition-colors duration-300">
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="py-20">
          <h2 className="text-4xl font-bold mb-12 text-[#ccd6f6]">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "Languages", skills: ["Java", "Python", "TypeScript", "Solidity", "C++"] },
              { title: "Frameworks", skills: ["Spring Boot", "Express.js", "React.js", "GraphQL", "Next.js", "Flask", "Django"] },
              { title: "AWS Services", skills: ["EC2", "S3", "Lambda", "EKS", "ECR", "ECS", "RDS", "DynamoDB"] },
              { title: "Blockchain", skills: ["Ethereum", "Ethers.js", "Hardhat", "Remix", "Chainlink Oracle"] },
              { title: "ML & Data Science", skills: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Classification", "Regression"] },
              { title: "Deep Learning", skills: ["CNN", "RNN", "LSTM", "Transfer Learning", "NLP"] },
              { title: "DevOps", skills: ["Docker", "Kubernetes", "Jenkins", "GitLab CI/CD", "Terraform"] },
              { title: "Databases", skills: ["MySQL", "MongoDB", "Redis", "PostgreSQL", "Cassandra"] }
            ].map((category, index) => (
              <div key={index} className="bg-[#112240] p-6 rounded-lg shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#64ffda] mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-[#8892b0] text-lg">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-20">
          <h2 className="text-4xl font-bold mb-8 text-[#ccd6f6] max-w-2xl mx-auto text-center">Get In Touch</h2>
          <p className="text-xl text-[#8892b0] mb-12 max-w-2xl mx-auto text-center">
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
          <div className="text-center">
            <a href="mailto:vishavsinglaofficial@gmail.com" className="inline-block bg-[#64ffda] text-[#0a192f] text-xl py-4 px-8 rounded-md font-bold hover:bg-[#4da892] transition-colors duration-300 transform hover:-translate-y-1 hover:scale-105">
              Say Hello
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-[#0a192f] text-center py-8">
        <p className="text-lg text-[#8892b0]">Designed & Built by Vishav Singla</p>
      </footer>
    </div>
  );
};

export default Portfolio;