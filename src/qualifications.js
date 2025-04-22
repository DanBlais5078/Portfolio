/**
 * QualificationsPage Component
 * 
 * This component displays a qualifications section that includes details about programming languages, education, 
 * and relevant professional experience. It also includes an interactive search feature to filter through the programming languages.
 * Animations are triggered when each section enters the viewport, enhancing the user experience.
 * 
 * Dependencies:
 * - React (for state management and rendering)
 * - anime.js (for animations)
 * 
 * @returns {JSX.Element} The rendered Qualifications page.
 */

import React, { useState, useEffect, useRef } from 'react';
import './css/qualifications.css';
import { ReactComponent as LinkIcon } from './assets/link.svg';
import { ReactComponent as SearchIcon } from './assets/search.svg';
import AlgonquinImage from './assets/algonquin-college.png';
import CatchDupeImage from './assets/catch-dupe.png';
import anime from 'animejs';

function QualificationsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Refs for the different sections to trigger animations
  const programmingLanguagesRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);

  // Handles the search query input
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // Function to trigger animations when an element enters the viewport
  const triggerAnimation = (element) => {
    // Slide in from the left with a fade effect
    anime({
      targets: element,
      translateX: ['-100%', '0%'],
      opacity: [0, 1],
      easing: 'easeOutQuad',
      duration: 1000,
      delay: 300, // Stagger delay for a smooth effect
    });
  };

  // IntersectionObserver callback to detect when elements enter the viewport
  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Trigger animation when the element enters the viewport
        triggerAnimation(entry.target);

        // Unobserve the element after it has been animated (so it only animates once)
        observer.unobserve(entry.target);
      }
    });
  };

  // Initialize IntersectionObserver on mount
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the element is in view
    });

    // Observe each section element
    if (programmingLanguagesRef.current) {
      observer.observe(programmingLanguagesRef.current);
    }
    if (educationRef.current) {
      observer.observe(educationRef.current);
    }
    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    // Cleanup the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="qualifications" className="qualifications">
      <h2 className="qualifications-header">My Qualifications.</h2>

      {/* Programming Languages Section */}
      <div ref={programmingLanguagesRef} className="programming-languages">
        <h3 className="programming-languages-header">Programming Languages and Frameworks</h3>
        <div className="search-container">
          {/* Search input for filtering programming languages */}
          <SearchIcon className="search-icon" />
          <input 
            type="text" 
            placeholder="Filter Languages or Frameworks" 
            className="search-bar" 
            onChange={handleSearchChange} 
            value={searchQuery}
          />
        </div>
        <ul className="programming-languages-list">
          {/* List of programming languages with conditional rendering based on the search query */}
          <li className="programming-language js-tag" hidden={searchQuery && !'Java'.toLowerCase().includes(searchQuery)}>Java</li>
          <li className="programming-language js-tag" hidden={searchQuery && !'JavaScript'.toLowerCase().includes(searchQuery)}>JavaScript</li>
          <li className="programming-language js-tag" hidden={searchQuery && !'TypeScript'.toLowerCase().includes(searchQuery)}>TypeScript</li>
          <li className="programming-language js-tag" hidden={searchQuery && !'NodeJS'.toLowerCase().includes(searchQuery)}>NodeJS</li>
          <li className="programming-language js-tag" hidden={searchQuery && !'ReactJS'.toLowerCase().includes(searchQuery)}>ReactJS</li>
          <li className="programming-language js-tag" hidden={searchQuery && !'ExpressJS'.toLowerCase().includes(searchQuery)}>ExpressJS</li>
          <li className="programming-language js-tag" hidden={searchQuery && !'Axios'.toLowerCase().includes(searchQuery)}>Axios</li>
          <li className="programming-language js-tag" hidden={searchQuery && !'Ajax'.toLowerCase().includes(searchQuery)}>Ajax</li>
          <li className="programming-language css-tag" hidden={searchQuery && !'CSS'.toLowerCase().includes(searchQuery)}>CSS</li>
          <li className="programming-language css-tag" hidden={searchQuery && !'SCSS'.toLowerCase().includes(searchQuery)}>SCSS</li>
          <li className="programming-language css-tag" hidden={searchQuery && !'Bootstrap'.toLowerCase().includes(searchQuery)}>Bootstrap</li>
          <li className="programming-language html-tag" hidden={searchQuery && !'HTML'.toLowerCase().includes(searchQuery)}>HTML</li>
          <li className="programming-language php-tag" hidden={searchQuery && !'PHP'.toLowerCase().includes(searchQuery)}>PHP</li>
          <li className="programming-language python-tag" hidden={searchQuery && !'Python'.toLowerCase().includes(searchQuery)}>Python</li>
          <li className="programming-language sql-tag" hidden={searchQuery && !'SQL'.toLowerCase().includes(searchQuery)}>SQL</li>
          <li className="programming-language sql-tag" hidden={searchQuery && !'NoSQL'.toLowerCase().includes(searchQuery)}>NoSQL</li>
        </ul>
      </div>

      {/* Education Section */}
      <div ref={educationRef} className="education">
        <h3 className="education-header">Education</h3>
        <div className="education-outer-container">
          {/* Algonquin College logo */}
          <img src={AlgonquinImage} alt="Algonquin College Logo" className="algonquin-image" />
          <div className="education-inner-container">
            <h4 className="school">Algonquin College</h4>
            <div className="program-container">
              <h5 className="program">Computer Programmming Diploma</h5>
              <h5 className="year">2023-2024</h5>
            </div>
            {/* Program description */}
            <p className="program-description">
              The computer programming program at Algonquin College is a highly reputable two-year program
              that provides students with a solid foundation in programming concepts, algorithms, and data structures, while
              also equipping them with the necessary skills to interact with clients and become successful software developers.
            </p>
            <a href="https://www.algonquincollege.com/sat/program/computer-programming/" className="algonquin-link">
              Visit the AC Computer Programming Homepage <LinkIcon className="link-icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div ref={experienceRef} className="experience">
        <h3 className="experience-header">Relevant Professional Experience</h3>
        <div className="experience-outer-container">
          {/* Project image */}
          <img src={CatchDupeImage} alt="Screenshot of project for Yutechs LLC" className="catch-dupe-image" />
          <div className="experience-container">
            <h2 className="job-title">Student Development Project</h2>
            <div className="career-container">
              <h3 className="company">Client: Yutechs LLC</h3>
              <h3 className="date">2024</h3>
            </div>
            {/* Project description */}
            <p className="job-description">
              Developed a web application for the client, Yutechs LLC, which consisted of a function to sync Zoho CRM data with
              a local SQL database, an algorithm to identify duplicate records from the database using boolean and conditional logic
              and a reporting feature to generate a report of the duplicate records.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QualificationsPage;



