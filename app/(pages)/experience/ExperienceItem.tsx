
import React from 'react';

export const ExperienceItem: React.FC<{ title: string; company: string; date: string; description: string[] }> = ({ title, company, date, description }) => (
  <div className="bg-[#112240] p-6 rounded-lg">
    <h3 className="text-xl font-bold text-[#64ffda]">{title}</h3>
    <p className="text-[#8892b0] mb-2">{company} | {date}</p>
    <ul className="list-disc list-inside text-[#8892b0]">
      {description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);