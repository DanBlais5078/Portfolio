import React, { useEffect, useState } from 'react';
import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactComponent as Github } from './assets/github.svg';
import { ReactComponent as Linkedin } from './assets/linkedin.svg';
import { ReactComponent as CV } from './assets/cv.svg';
import LandingPage from './landing';
import AboutPage from './about';
import QualificationsPage from './qualifications';
import ProjectsPage from './projects';
import ContactPage from './contact';
import './css/app.css';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main>
        <LandingPage />
        <AboutPage />
        <QualificationsPage />
        <ProjectsPage />
        <ContactPage />
      </main>
    </div>
  );
}

function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  const handleScroll = () => {
    const sections = document.querySelectorAll('div[id]');
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    setActiveLink(current);
  };

  const handleLinkClick = (event, sectionId) => {
    event.preventDefault();
    setActiveLink(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setActiveLink(hash);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="nav">
      <a
        href="#"
        className="nav-logo-link"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({
            top: 0, 
            behavior: 'smooth', 
          });
        }}
      >
        <Logo className="nav-logo" />
      </a>
      <div className="nav-links">
        <a href="#about" className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, 'about')}>About</a>
        <p className="nav-link-spacer">/</p>
        <a href="#qualifications" className={`nav-link ${activeLink === 'qualifications' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, 'qualifications')}>Qualifications</a>
        <p className="nav-link-spacer">/</p>
        <a href="#projects" className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, 'projects')}>Projects</a>
        <p className="nav-link-spacer">/</p>
        <a href="#contact" className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a>
      </div>
    </nav>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-items">
        <a href="/DanBlaisResume.pdf" className="sidebar-link" download>
          <CV className="sidebar-icon" />
        </a>
        <a href="https://github.com/DanBlais5078" className="sidebar-link">
          <Github className="sidebar-icon" />
        </a>
        <a href="https://www.linkedin.com/in/dan-blais-2127042b3" className="sidebar-link">
          <Linkedin className="sidebar-icon" />
        </a>
      </div>
    </div>
  )
}

export default App;
