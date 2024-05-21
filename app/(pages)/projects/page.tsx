"use client"

import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a192f] text-[#ccd6f6] flex flex-col items-center py-5">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="mt-4 max-w-screen-md text-gray-400">
        Here are some of the projects I have worked on:
        <ul className="list-disc mt-4">
          <li>Project 1: A full-stack web application using React and Node.js</li>
          <li>Project 2: A blockchain-based solution using Solidity and Ethereum</li>
          <li>Project 3: An open-source contribution to a major library</li>
        </ul>
      </p>
    </div>
  );
};

export default Projects;
