/**
 * App Component
 * 
 * This is the main application component that renders the entire webpage, including the Navbar, Sidebar, and different pages like 
 * LandingPage, AboutPage, QualificationsPage, ProjectsPage, and ContactPage. The component also manages the scroll position 
 * and active state of the navigation links.
 * 
 * Dependencies:
 * - React (for managing state and rendering)
 * 
 * The app scrolls to the top when first loaded, and updates the active navigation link based on the user's scroll position.
 * 
 * @returns {JSX.Element} The entire App component structure including the Navbar, Sidebar, and Page Content.
 */

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
    // Scroll to the top of the page on initial load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Navbar and Sidebar are global and appear on every page */}
      <Navbar />
      <Sidebar />
      
      {/* Main content of the app */}
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

/**
 * Navbar Component
 * 
 * This component manages the navigation bar at the top of the page. It highlights the current section in view based on 
 * scroll position and allows users to smoothly scroll to different sections via the navigation links.
 * 
 * The navigation bar also includes a logo that scrolls to the top of the page when clicked.
 * 
 * @returns {JSX.Element} The Navbar structure.
 */
function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  /**
   * handleScroll - Updates the active navigation link based on the current scroll position.
   */
  const handleScroll = () => {
    const sections = document.querySelectorAll('div[id]');
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      // Determine the active section based on scroll position
      if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    setActiveLink(current);
  };

  /**
   * handleLinkClick - Scrolls to the clicked section smoothly and updates the active navigation link.
   */
  const handleLinkClick = (event, sectionId) => {
    event.preventDefault();
    setActiveLink(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    // Set the initial active link based on the URL hash (if any)
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setActiveLink(hash);
    }

    // Add the scroll event listener to update active link during scrolling
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="nav">
      {/* Logo that scrolls to the top when clicked */}
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
      
      {/* Navigation links */}
      <div className="nav-links">
        <a href="#about" 
           className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} 
           onClick={(e) => handleLinkClick(e, 'about')}>
          About
        </a>
        <p className="nav-link-spacer">/</p>
        <a href="#qualifications" 
           className={`nav-link ${activeLink === 'qualifications' ? 'active' : ''}`} 
           onClick={(e) => handleLinkClick(e, 'qualifications')}>
          Qualifications
        </a>
        <p className="nav-link-spacer">/</p>
        <a href="#projects" 
           className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`} 
           onClick={(e) => handleLinkClick(e, 'projects')}>
          Projects
        </a>
        <p className="nav-link-spacer">/</p>
        <a href="#contact" 
           className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`} 
           onClick={(e) => handleLinkClick(e, 'contact')}>
          Contact
        </a>
      </div>
    </nav>
  );
}

/**
 * Sidebar Component
 * 
 * This component renders a sidebar with links to external resources such as the resume (CV), GitHub, and LinkedIn profiles.
 * The sidebar is positioned on the left or right side of the screen and includes icons that navigate to each external link.
 * 
 * @returns {JSX.Element} The Sidebar structure.
 */
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-items">
        {/* Download Resume */}
        <a href="/DanBlaisResume.pdf" className="sidebar-link" download>
          <CV className="sidebar-icon" />
        </a>
        
        {/* GitHub link */}
        <a href="https://github.com/DanBlais5078" className="sidebar-link">
          <Github className="sidebar-icon" />
        </a>
        
        {/* LinkedIn link */}
        <a href="https://www.linkedin.com/in/dan-blais-2127042b3" className="sidebar-link">
          <Linkedin className="sidebar-icon" />
        </a>
      </div>
    </div>
  )
}

export default App;

