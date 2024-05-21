import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from 'react-icons/io';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0a192f] text-[#ccd6f6] flex flex-col items-center p-20">
      <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
      <p className="text-center max-w-lg mb-8 text-gray-400">
        I am currently looking for any new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>
      <a href="mailto:vishavsinglaofficial@gmail.com" className="border border-[#64ffda] text-[#64ffda] py-2 px-4 rounded hover:bg-[#64ffda] hover:text-[#0a192f] transition">
        Say Hello
      </a>
      <div className="flex mt-8 space-x-6">
        <a href="https://github.com/vishavsingla" target="_blank" rel="noopener noreferrer" className="text-3xl text-[#ccd6f6] hover:text-[#64ffda] transition">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/vishav-singla" target="_blank" rel="noopener noreferrer" className="text-3xl text-[#ccd6f6] hover:text-[#64ffda] transition">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/vishav_singla" target="_blank" rel="noopener noreferrer" className="text-3xl text-[#ccd6f6] hover:text-[#64ffda] transition">
          <FaSquareXTwitter />
        </a>
        <a href="mailto:your-email@example.com" className="text-3xl text-[#ccd6f6] hover:text-[#64ffda] transition">
          <IoMdMail />
        </a>
      </div>
    </div>
  );
};

export default Contact;
