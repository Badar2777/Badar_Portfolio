import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

const ROLES = [
  'Full Stack Developer',
  'React Specialist',
  'Node.js Engineer',
  'UI/UX Craftsman',
  'Problem Solver',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,229,255,${p.alpha})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,229,255,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <section id="hero" className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />

      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      {/* Scanline */}
      <div className="scanline" />

      <div className="hero-content">
        <div className="hero-tag reveal" style={{ animationDelay: '0.2s' }}>
          <span className="hero-tag-dot" />
          <span>Available for opportunities</span>
        </div>

        <h1 className="hero-name reveal" style={{ animationDelay: '0.4s' }}>
          <span className="hero-name-first">BADAR</span>
          <span className="hero-name-last glitch" data-text="UL ZAMAN">UL ZAMAN</span>
        </h1>

        <div className="hero-role reveal" style={{ animationDelay: '0.6s' }}>
          <span className="role-prefix">&gt; </span>
          <span className="role-text">{displayed}</span>
          <span className="role-cursor" />
        </div>

        <p className="hero-desc reveal" style={{ animationDelay: '0.8s' }}>
          Crafting immersive digital experiences with modern web technologies.
          <br />
          <span className="mono-text">React · Node.js · PHP · MongoDB · Firebase</span>
        </p>

        <div className="hero-actions reveal" style={{ animationDelay: '1s' }}>
          <a href="https://github.com/Badar2777" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            View GitHub
          </a>
          <button
            className="btn btn-outline"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </button>
        </div>

        <div className="hero-stats reveal" style={{ animationDelay: '1.2s' }}>
          <div className="stat">
            <span className="stat-num">27</span>
            <span className="stat-label">Repositories</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">6+</span>
            <span className="stat-label">Technologies</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">∞</span>
            <span className="stat-label">Curiosity</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
};

export default Hero;
