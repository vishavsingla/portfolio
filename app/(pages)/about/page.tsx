import Image from 'next/image';
import React from 'react';
const About: React.FC = () => (
  <section id="about" className="py-20">
    <h2 className="text-3xl font-bold mb-4">About Me</h2>
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-2/3 pr-8">
        <p className="mb-4">
          Ia m a third-year undergraduate at Thapar University, pursuing a degree in Electronics and Computer Engineering. 
          My passion lies in full-stack development and blockchain technology, where I have honed my skills through various projects and internships.
        </p>
        <p>
          As a GSoC&apos;24 Contributor at Aossie and former SDE Intern at Globe Teleservices, I&apos;ve gained valuable experience in developing robust applications 
          and working with cutting-edge technologies. I&apos;m always eager to take on new challenges and contribute to innovative solutions.
        </p>
      </div>
      {/* <div className="md:w-1/3 mt-8 md:mt-0">
        <Image src="/profile-pic.jpg" alt="Vishav Singla" width={300} height={300} className="rounded-full" />
      </div> */}
    </div>
  </section>
);