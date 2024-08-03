const Skills: React.FC = () => (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <SkillCategory title="Languages" skills={["Java", "Python", "TypeScript", "Solidity", "C++"]} />
        <SkillCategory title="Frameworks" skills={["Spring Boot", "Express.js", "React.js", "GraphQL", "Next.js", "Flask", "Django"]} />
        <SkillCategory title="AWS Services" skills={["EC2", "S3", "Lambda", "EKS", "ECR", "ECS", "RDS", "DynamoDB"]} />
        <SkillCategory title="Other" skills={["Docker", "MySQL", "MongoDB", "Redis", "Kafka", "PostgreSQL"]} />
      </div>
    </section>
  );
  
  const SkillCategory: React.FC<{ title: string; skills: string[] }> = ({ title, skills }) => (
    <div>
      <h3 className="text-xl font-bold text-[#64ffda] mb-2">{title}</h3>
      <ul className="list-disc list-inside text-[#8892b0]">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
  