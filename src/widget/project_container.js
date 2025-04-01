import React, { useState } from 'react';
import PropTypes from 'prop-types';  // Import PropTypes
import '../css/projects_container.css';
import '../css/qualifications.css';

const ProjectShowcase = ({ images, tags, description, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle previous image (left arrow click)
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Handle next image (right arrow click)
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Map of tags to classes
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
        {/* The image that cycles */}
        <img src={images[currentIndex]} alt="Project Screenshot" className="project-image" />
        
        {/* Tags */}
        <div className="tags">
          {tags.map((tag, index) => {
            // Get the corresponding tag class from tagClassMapping
            const tagClass = tagClassMapping[tag] || 'default-tag';  // Default class if not found in the mapping
            return (
              <span key={index} className={`programming-language ${tagClass}`}>{tag}</span>
            );
          })}
        </div>
        
        {/* Title and Description */}
        <div className="description-container">
          {title && <h2 className="project-title">{title}</h2>} {/* Title */}
          <p className="description">{description}</p> {/* Description */}
        </div>
        
        {/* Navigation arrows */}
        <div className="navigation-arrows">
          <button onClick={handlePrev} className="arrow prev">&#10094;</button>
          <button onClick={handleNext} className="arrow next">&#10095;</button>
        </div>
      </div>
    </div>
  );
};

// PropTypes validation for the component props
ProjectShowcase.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,   // An array of image URLs
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,     // An array of strings for tags
  description: PropTypes.string.isRequired,                 // A string for the project description
  title: PropTypes.string,                                  // A string for the project title (optional)
};

export default ProjectShowcase;

