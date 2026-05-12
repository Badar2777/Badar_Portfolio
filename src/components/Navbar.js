import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      const offsets = sections.map((id) => {
        const el = document.getElementById(id);
        return el ? el.getBoundingClientRect().top : Infinity;
      });
      const closest = offsets.reduce((best, val, i) =>
        Math.abs(val) < Math.abs(offsets[best]) ? i : best, 0
      );
      setActiveSection(sections[closest]);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const links = ['about', 'projects', 'skills', 'contact'];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <button className="nav-logo" onClick={() => scrollTo('hero')}>
          <span className="logo-bracket">[</span>
          BZ Dev
          <span className="logo-bracket">]</span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <li key={link}>
              <button
                className={`nav-link ${activeSection === link ? 'active' : ''}`}
                onClick={() => scrollTo(link)}
              >
                <span className="nav-num">0{links.indexOf(link) + 1}</span>
                {link}
              </button>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/qr/OU7HFAWZBGY5F1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary nav-cta"
            >
              Hire Me
            </a>
          </li>
        </ul>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
