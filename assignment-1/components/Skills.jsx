import React from 'react';
import { Wrench, Code2, Server, Terminal, Layout } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend Engineering',
      icon: Layout,
      skills: ['React.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5 / CSS3', 'Tailwind CSS', 'Next.js', 'Redux Toolkit']
    },
    {
      category: 'Backend & APIs',
      icon: Server,
      skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'MongoDB', 'PostgreSQL', 'Firebase']
    },
    {
      category: 'Tools & DevOps',
      icon: Terminal,
      skills: ['Git / GitHub', 'Vite', 'Webpack', 'Docker', 'Vercel', 'Jest / RTL', 'Postman']
    }
  ];

  return (
    <section className="a1-section" id="skills">
      <h2 className="a1-section-title">
        <Wrench size={24} color="#38bdf8" /> Skills & Technical Expertise
      </h2>
      <div className="a1-skills-categories">
        {skillCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div key={idx}>
              <h3 className="a1-skill-category-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Icon size={18} color="#38bdf8" /> {cat.category}
              </h3>
              <div className="a1-skills-list">
                {cat.skills.map((skill, sIdx) => (
                  <span className="a1-skill-pill" key={sIdx}>
                    <Code2 size={14} color="#38bdf8" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
