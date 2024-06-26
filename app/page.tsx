"use client"
import React from 'react';
import Link from 'next/link';
import Projects from './(pages)/projects/page';
import Contact from './(pages)/contact/page';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a192f] text-[#ccd6f6] flex flex-col items-center py-5">
       <nav className="w-full flex justify-end p-4 space-x-10 pr-10">
      <Link href="/about" className="text-[#64ffda] text-sm hover:border-b-2 hover:pb-2 hover:border-[#64ffda] transition duration-300">1. About</Link>
      {/* <Link href="/experience" className="text-[#64ffda] text-sm hover:border-b-2 hover:pb-2 hover:border-[#64ffda] transition duration-300">2. Experience</Link> */}
      <Link href="/projects" className="text-[#64ffda] text-sm hover:border-b-2 hover:pb-2 hover:border-[#64ffda] transition duration-300">2. Projects</Link>
      <Link href="/contact" className="text-[#64ffda] text-sm hover:border-b-2 hover:pb-2 hover:border-[#64ffda] transition duration-300">3. Contact</Link>
      <a href="/Resume.pdf" className="text-[#64ffda] text-sm hover:border-b-2 hover:pb-2 hover:border-[#64ffda] transition duration-300">4. Resume</a>
    </nav>
      <div className="mt-16 max-w-screen-lg">
        <h1 className="text-[#64ffda] text-2xl">Hi, my name is</h1>
        <h2 className="text-7xl font-bold mt-4">Vishav Singla.</h2>
        <h3 className="text-4xl text-[#25647F] font-bold mt-2 text-gray-300">I am a third year undergraduate at Thapar University, India.</h3>
        <p className="mt-4 text-gray-400">
          I’m a software engineer based in India specializing in building Full Stack applications and Blockchain based applications. 
          I have experience working with a range of technologies including React.js, Next.js, Node.js, Express.js, Solidity, Typescript, SQL, PostgreSQL, Docker and Ethereum.
        </p>
        <a href="https://github.com/vishavsingla" className="inline-block mt-8 border border-[#64ffda] text-[#64ffda] py-2 px-4 rounded text-sm">Check out my Github!</a>
      </div>
      <div className='mt-14 mx-14'>
        <Projects />
      </div>
      <div className=''>
        <Contact />
      </div>
      
    </div>
  );
};

export default Home;
