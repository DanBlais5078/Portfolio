import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactComponent as Github } from './assets/github.svg';
import { ReactComponent as Linkedin } from './assets/linkedin.svg';
import { ReactComponent as CV } from './assets/cv.svg';
import LandingPage from './landing';
import './css/app.css';

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main>
        <LandingPage />
      </main>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-logo-link">
        <Logo className="nav-logo"/>
      </Link>
      <div className="nav-links">
        <Link to="/about" className="nav-link">About</Link>
          <p className="nav-link-spacer">/</p>
        <Link to="/about" className="nav-link">Qualifications</Link>
          <p className="nav-link-spacer">/</p>
        <Link to="/about" className="nav-link">Projects</Link>
          <p className="nav-link-spacer">/</p>
        <Link to="/about" className="nav-link">Contact</Link>
      </div>
    </nav>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-items">
        <a href="https://github.com/DanBlais5078" className="sidebar-link">
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
