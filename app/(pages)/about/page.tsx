import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a192f] text-[#ccd6f6] flex flex-col items-center py-5">
      <h1 className="text-4xl font-bold">About Me</h1>
      <p className="mt-4 max-w-screen-md text-gray-400">
        I am a third-year undergraduate student at Thapar University, pursuing a degree in Computer Science. I am passionate about software development, particularly in full-stack and blockchain technologies. In my free time, I enjoy contributing to open-source projects and exploring new advancements in technology.
      </p>
    </div>
  );
};

export default About;
