import React, { useRef, useEffect } from 'react';
import './Skills.css';

const SKILLS = [
  { name: 'React', level: 88, color: '#61dafb', category: 'Frontend' },
  { name: 'JavaScript', level: 85, color: '#f7df1e', category: 'Language' },
  { name: 'HTML5', level: 95, color: '#e34f26', category: 'Frontend' },
  { name: 'CSS3', level: 90, color: '#1572b6', category: 'Frontend' },
  { name: 'Node.js', level: 75, color: '#6da55f', category: 'Backend' },
  { name: 'PHP', level: 70, color: '#777bb4', category: 'Backend' },
  { name: 'MongoDB', level: 65, color: '#4ea94b', category: 'Database' },
  { name: 'MySQL', level: 70, color: '#4479a1', category: 'Database' },
  { name: 'Firebase', level: 72, color: '#ffca28', category: 'Backend' },
  { name: 'Express.js', level: 74, color: '#00e5ff', category: 'Backend' },
  { name: 'Git', level: 80, color: '#f05032', category: 'Tools' },
  { name: 'Python', level: 55, color: '#3776ab', category: 'Language' },
];

const TOOLS = [
  'Vite', 'Tailwind CSS', 'Postman', 'Vercel', 'EJS', 'Pug', 'REST APIs', 'Framer Motion',
];

const SkillBar = ({ skill, index }) => {
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && barRef.current) {
          setTimeout(() => {
            if (barRef.current) {
              barRef.current.style.width = skill.level + '%';
            }
          }, index * 80);
        }
      },
      { threshold: 0.3 }
    );
    if (barRef.current) observer.observe(barRef.current.closest('.skill-item'));
    return () => observer.disconnect();
  }, [skill.level, index]);

  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{skill.name}</span>
        <div className="skill-right">
          <span className="skill-cat">{skill.category}</span>
          <span className="skill-pct" style={{ color: skill.color }}>{skill.level}%</span>
        </div>
      </div>
      <div className="skill-track">
        <div
          ref={barRef}
          className="skill-fill"
          style={{
            '--skill-color': skill.color,
            width: '0%',
          }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="grid-decoration" />
      <div className="glow-blob" style={{ width: 500, height: 500, background: 'rgba(124,58,237,0.06)', bottom: 0, left: '20%' }} />

      <div className="container">
        <div className="skills-header reveal">
          <div className="section-label">Tech Stack</div>
          <h2 className="section-title">Skills<span>.</span></h2>
        </div>

        <div className="skills-layout">
          <div className="skills-bars reveal-left">
            {SKILLS.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} />
            ))}
          </div>

          <div className="skills-right reveal">
            <div className="tools-section">
              <h3 className="tools-title">
                <span className="mono-text">// </span>Also using
              </h3>
              <div className="tools-grid">
                {TOOLS.map((tool) => (
                  <div key={tool} className="tool-chip">
                    <span className="tool-dot" />
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            <div className="stats-section">
              <div className="big-stat">
                <div className="big-stat-num">27</div>
                <div className="big-stat-label">Public Repos</div>
              </div>
              <div className="big-stat">
                <div className="big-stat-num" style={{ color: '#a78bfa' }}>6+</div>
                <div className="big-stat-label">Core Technologies</div>
              </div>
            </div>

            <div className="learning-section">
              <h3 className="tools-title"><span className="mono-text">// </span>Currently learning</h3>
              <div className="learning-tags">
                <span className="tag purple">Python</span>
                <span className="tag purple">AI/ML Basics</span>
                <span className="tag amber">TypeScript</span>
                <span className="tag amber">Next.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
