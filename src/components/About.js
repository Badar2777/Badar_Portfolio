import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="grid-decoration" />
      <div className="glow-blob" style={{ width: 500, height: 500, background: 'rgba(124,58,237,0.08)', top: '50%', left: '-200px' }} />

      <div className="container">
        <div className="about-grid">
          <div className="about-left reveal-left">
            <div className="section-label">Who I Am</div>
            <h2 className="section-title">The Dev<span>.</span></h2>

            <p className="about-text">
              I'm <strong>Badar Ul Zaman</strong> — a passionate full-stack developer based in Pakistan,
              currently honing my craft at UET Lahore. I build things for the web that are fast, beautiful,
              and purposeful.
            </p>

            <p className="about-text">
              From crafting pixel-perfect React UIs to engineering robust Node.js backends, I thrive at
              the intersection of design and engineering. I'm currently collaborating and open to exciting
              opportunities.
            </p>

            <div className="about-links">
              <a href="https://github.com/Badar2777" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub Profile
              </a>
              <a href="https://wa.me/qr/OU7HFAWZBGY5F1" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                WhatsApp Me
              </a>
            </div>
          </div>

          <div className="about-right reveal">
            <div className="about-card-stack">
              <div className="about-card primary-card">
                <div className="card-accent-line" />
                <div className="card-header">
                  <span className="card-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.37 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </span>
                  <h3>Contact Info</h3>
                </div>
                <div className="card-body">
                  <div className="info-row">
                    <span className="info-key">Location</span>
                    <span className="info-val">Pakistan</span>
                  </div>
                  <div className="info-row">
                    <span className="info-key">University</span>
                    <span className="info-val">UET Lahore</span>
                  </div>
                  <div className="info-row">
                    <span className="info-key">Status</span>
                    <span className="info-val status-open">Open to work</span>
                  </div>
                  <div className="info-row">
                    <span className="info-key">Repos</span>
                    <span className="info-val">27 public</span>
                  </div>
                </div>
              </div>

              <div className="about-card secondary-card">
                <div className="card-header">
                  <span className="card-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent2)" strokeWidth="2">
                      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                    </svg>
                  </span>
                  <h3>Currently</h3>
                </div>
                <div className="currently-list">
                  <div className="currently-item">
                    <span className="currently-dot" style={{background: 'var(--accent)'}} />
                    Learning Python & AI
                  </div>
                  <div className="currently-item">
                    <span className="currently-dot" style={{background: 'var(--accent2)'}} />
                    Building React Apps
                  </div>
                  <div className="currently-item">
                    <span className="currently-dot" style={{background: 'var(--accent3)'}} />
                    Open to Collaborate
                  </div>
                </div>
              </div>

              {/* Floating decorative element */}
              <div className="about-orbit-container">
                <div className="orbit-center" />
                <div className="orbit-ring" />
                <div className="orbit-dot" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
