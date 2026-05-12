import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-line" />
      <div className="container footer-inner">
        <div className="footer-left">
          <span className="footer-logo">
            <span className="logo-bracket">[</span>BZ<span className="logo-bracket">]</span>
          </span>
          <span className="footer-copy">
            &copy; {year} Badar Ul Zaman. Built with React.
          </span>
        </div>

        <div className="footer-center">
          <span className="footer-mono">// made with focus & coffee</span>
        </div>

        <div className="footer-right">
          <a href="https://github.com/Badar2777" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
          <a href="https://wa.me/qr/OU7HFAWZBGY5F1" target="_blank" rel="noopener noreferrer" className="footer-link">WhatsApp</a>
          <a href="https://instagram.com/badarulzaman56" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
