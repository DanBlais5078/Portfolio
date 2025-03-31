import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';  // Import PropTypes
import '../css/projects_container.css';

const ProjectShowcase = ({ images, tags, description, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="project-showcase-container">
      <div className="image-container">
        {/* The image that cycles */}
        <img src={images[currentIndex]} alt="Project Screenshot" className="project-image" />
        
        {/* Tags */}
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
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

