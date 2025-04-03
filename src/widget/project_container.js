/**
 * ProjectShowcase Component
 * 
 * This component displays a single project in a carousel format, showcasing images, tags, a description, and a title.
 * It allows users to navigate through multiple images using previous and next buttons. The tags are styled dynamically
 * based on the technologies used in the project. Prop validation is handled with PropTypes.
 * 
 * Dependencies:
 * - React (for managing state and rendering)
 * - PropTypes (for validating the component's props)
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {Array} props.images - An array of image URLs for the project.
 * @param {Array} props.tags - An array of tags representing the technologies used.
 * @param {string} props.description - A brief description of the project.
 * @param {string} [props.title] - An optional title for the project.
 * @returns {JSX.Element} The rendered project showcase.
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';  // Import PropTypes to validate the props
import '../css/projects_container.css';
import '../css/qualifications.css';

const ProjectShowcase = ({ images, tags, description, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle the navigation for the previous image (left arrow click)
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Handle the navigation for the next image (right arrow click)
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Mapping of technology tags to CSS classes for styling
  const tagClassMapping = {
    Java: 'js-tag',
    JavaScript: 'js-tag',
    TypeScript: 'js-tag',
    NodeJS: 'js-tag',
    ReactJS: 'js-tag',
    ExpressJS: 'js-tag',
    Axios: 'js-tag',
    Ajax: 'js-tag',
    CSS: 'css-tag',
    SCSS: 'css-tag',
    Bootstrap: 'css-tag',
    HTML: 'html-tag',
    PHP: 'php-tag',
    Python: 'python-tag',
    SQL: 'sql-tag',
  };

  return (
    <div className="project-showcase-container">
      <div className="image-container">
        {/* The current project image displayed, with previous/next image navigation */}
        <img src={images[currentIndex]} alt="Project Screenshot" className="project-image" />
        
        {/* Render the tags */}
        <div className="tags">
          {tags.map((tag, index) => {
            // Assign the corresponding CSS class based on the tag
            const tagClass = tagClassMapping[tag] || 'default-tag';  // Default class if tag not in mapping
            return (
              <span key={index} className={`programming-language ${tagClass}`}>{tag}</span>
            );
          })}
        </div>
        
        {/* Project Title and Description */}
        <div className="description-container">
          {title && <h2 className="project-title">{title}</h2>} {/* Optional title */}
          <p className="description">{description}</p> {/* Description text */}
        </div>
        
        {/* Image navigation buttons */}
        <div className="navigation-arrows">
          <button onClick={handlePrev} className="arrow prev">&#10094;</button>  {/* Previous button */}
          <button onClick={handleNext} className="arrow next">&#10095;</button>  {/* Next button */}
        </div>
      </div>
    </div>
  );
};

// PropTypes validation for ensuring the component receives the correct types of props
ProjectShowcase.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,   // An array of image URLs
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,     // An array of strings for tags (technologies)
  description: PropTypes.string.isRequired,                 // A string for the project description
  title: PropTypes.string,                                  // A string for the project title (optional)
};

export default ProjectShowcase;


