import React, { useState } from 'react';
import './Projects.css';

const PROJECTS = [
  {
    id: 'coderrush',
    title: 'CodeRush',
    featured: true,
    description: 'A full-featured developer platform built with React — a community hub where developers collaborate, share code snippets, and accelerate their growth through peer learning and structured challenges.',
    tags: ['React', 'Node.js', 'Firebase', 'Tailwind'],
    category: 'Full Stack',
    github: 'https://github.com/Badar2777/coderrush',
    live: 'https://coder-rush2026.vercel.app/',
    color: '#00e5ff',
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    featured: true,
    description: 'A sleek, real-time weather application that fetches live meteorological data — current conditions, forecasts, wind, humidity, UV index, and animated weather states based on live API responses.',
    tags: ['React', 'Weather API', 'CSS Animations'],
    category: 'Frontend',
    github: 'https://github.com/Badar2777/weather-app',
    live: 'https://weather-app-drab-seven-79.vercel.app',
    color: '#7c3aed',
  },
  {
    id: 'nft-marketplace',
    title: 'NFT Marketplace',
    featured: true,
    description: 'A visually stunning NFT marketplace UI with collection browsing, wallet-connect flow, live bidding panels, and creator profiles — built with React and a dark luxury aesthetic.',
    tags: ['React', 'Web3 UI', 'Tailwind', 'Vite'],
    category: 'Frontend',
    github: 'https://github.com/Badar2777/nft-marketplace',
    live: 'https://nft-snowy-five.vercel.app',
    color: '#f59e0b',
  },
  {
    id: 'devconnect',
    title: 'DevConnect',
    featured: false,
    description: 'A role-based web platform connecting developers and clients through a structured environment, simplifying collaboration with profiles, messaging, and project scoping.',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS'],
    category: 'Full Stack',
    github: 'https://github.com/Badar2777/DevConnect',
    color: '#06b6d4',
  },
  {
    id: 'todo-app',
    title: 'Todo App',
    featured: false,
    description: 'A modern, animated, category-based React Todo App with edit, delete, completion toggling, filtering, progress tracking, and localStorage persistence — futuristic UI with reusable components.',
    tags: ['React', 'JavaScript', 'CSS'],
    category: 'Frontend',
    github: 'https://github.com/Badar2777/ToDo-App',
    color: '#4ade80',
  },
  {
    id: 'components-library',
    title: 'Components Library',
    featured: false,
    description: 'A React component library built from scratch using Vite — includes a growing collection of reusable UI primitives: Buttons, Cards, Modals, and more, designed for extensibility.',
    tags: ['React', 'Vite', 'JavaScript'],
    category: 'Library',
    github: 'https://github.com/Badar2777/Components-library',
    color: '#e879f9',
  },
  {
    id: 'html-css-projects',
    title: 'HTML & CSS Projects',
    featured: false,
    description: 'A curated collection of pure HTML and CSS projects demonstrating layout mastery, responsive design, animations, and creative visual techniques without JavaScript.',
    tags: ['HTML', 'CSS', 'Responsive'],
    category: 'Frontend',
    github: 'https://github.com/Badar2777/HTML-CSS-projects',
    color: '#f97316',
  },
  {
    id: 'web-development',
    title: 'Web Development',
    featured: false,
    description: 'A comprehensive resource repository containing all web development lecture notes, code examples, and exercises — covering HTML, CSS, JavaScript, and beyond.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Education',
    github: 'https://github.com/Badar2777/Web-Development',
    color: '#a3a3a3',
  },
];

const FILTERS = ['All', 'Full Stack', 'Frontend', 'Library', 'Education'];

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`project-card ${project.featured ? 'featured' : ''} reveal`}
      style={{ transitionDelay: `${index * 0.08}s`, '--card-color': project.color }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="card-glow" style={{ opacity: hovered ? 1 : 0 }} />
      <div className="card-top-line" style={{ background: project.color }} />

      <div className="card-content">
        <div className="card-meta">
          <span className="card-category">{project.category}</span>
          {project.featured && <span className="card-featured-badge">Featured</span>}
        </div>

        <h3 className="card-title">{project.title}</h3>
        <p className="card-desc">{project.description}</p>

        <div className="card-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <div className="card-actions">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="card-link">
            <GitHubIcon /> Code
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="card-link primary">
              <ExternalIcon /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="glow-blob" style={{ width: 600, height: 600, background: 'rgba(0,229,255,0.05)', top: '30%', right: '-200px' }} />

      <div className="container">
        <div className="projects-header reveal">
          <div className="section-label">What I Build</div>
          <h2 className="section-title">Projects<span>.</span></h2>
          <p className="projects-subtitle">
            A selection of projects ranging from developer tools to marketplace UIs — all shipped and deployed.
          </p>
        </div>

        <div className="filter-bar reveal">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="projects-footer reveal">
          <p>And many more on GitHub</p>
          <a href="https://github.com/Badar2777" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <GitHubIcon />
            View All 27 Repos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
