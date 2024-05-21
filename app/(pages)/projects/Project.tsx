import React from 'react';
import Image from 'next/image';

interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  projectLink: string;
  repoLink: string;
  technologies: string[];
}

const Project: React.FC<ProjectProps> = ({ title, description, imageUrl, projectLink, repoLink, technologies }) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-[#0a192f] text-[#ccd6f6] my-10 p-5 rounded-lg shadow-lg">
      <div className="md:w-1/2">
        <img src={imageUrl} alt={title} className="rounded-lg shadow-md" />
        <Image src={imageUrl} alt={title} width={100} height={50} className="rounded-lg shadow-md" />        

      </div>
      <div className="md:w-1/2 md:ml-10 mt-5 md:mt-0">
        <p className="text-[#64ffda] text-sm">Featured Project</p>
        <h3 className="text-3xl font-bold mt-2">{title}</h3>
        <p className="bg-[#112240] p-4 rounded-lg mt-4 text-gray-300">{description}</p>
        <div className="flex space-x-3 mt-4">
          {technologies.map((tech, index) => (
            <span key={index} className="text-gray-400 text-sm">{tech}</span>
          ))}
        </div>
        <div className="flex space-x-3 mt-4">

          <a href={repoLink} className="text-[#64ffda] hover:underline" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.162 19.491c.5.091.682-.217.682-.483v-1.7c-2.78.604-3.368-1.342-3.368-1.342-.454-1.146-1.11-1.453-1.11-1.453-.908-.62.069-.608.069-.608 1.002.07 1.529 1.031 1.529 1.031.892 1.528 2.34 1.087 2.906.832.092-.647.349-1.087.635-1.338-2.22-.252-4.555-1.113-4.555-4.953 0-1.093.39-1.986 1.03-2.686-.104-.253-.446-1.272.097-2.65 0 0 .84-.269 2.75 1.026a9.58 9.58 0 0 1 2.5-.336c.848.004 1.7.116 2.5.336 1.91-1.295 2.75-1.026 2.75-1.026.543 1.378.201 2.397.097 2.65.64.7 1.03 1.593 1.03 2.686 0 3.848-2.338 4.696-4.566 4.942.36.31.68.924.68 1.86v2.76c0 .269.18.58.688.48A10.003 10.003 0 0 0 12 2z"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
