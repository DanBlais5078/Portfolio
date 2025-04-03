/**
 * ProjectsPage Component
 * 
 * This component renders the projects section, showcasing various projects. Each project is displayed in a scrollable panel 
 * that gets pinned during the scrolling process, with animations triggered by GSAP and ScrollTrigger. The projects are 
 * displayed using the `ProjectShowcase` widget component which accepts an array of images, tags, descriptions, and titles.
 * 
 * Dependencies:
 * - React (for rendering and component management)
 * - GSAP (for animations and scroll-triggered effects)
 * - ScrollTrigger (for pinning the panels during scroll)
 * 
 * @returns {JSX.Element} The rendered Projects page, displaying all project panels.
 */

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ProjectShowcase from './widget/project_container';
import './css/projects.css';
import ShoppingProject1 from './assets/project-shopping.png';
import VinylDestination1 from './assets/vd1.png';
import VinylDestination2 from './assets/vd2.png';
import VinylDestination3 from './assets/vd3.png';
import VinylDestination4 from './assets/vd4.png';
import VinylDestination5 from './assets/vd5.png';

function ProjectsPage() {
  useEffect(() => {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Select all elements with the class 'panel' to apply the scroll-triggering effect
    const panels = gsap.utils.toArray('.panel');

    // Loop through each panel and create a ScrollTrigger instance for pinning
    panels.forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,  // Element to observe for scrolling
        start: 'top-=145 top',  // Start pinning after 145px from the top of the viewport
        end: 'bottom top',  // Stop pinning when the panel scrolls out of the viewport
        scrub: true,  // Smooth the scroll interaction
        pin: true,    // Pin the panel in place during scrolling
        pinSpacing: false  // Prevent extra space after pinning the panel
      });
    });
  }, []);

  return (
    <div id="projects" className="projects">
      {/* Header for the Projects section */}
      <h2 className="projects-header">My Projects.</h2>

      {/* Container for all the project panels */}
      <div className="projects-container">
        {/* Project 1 - Vinyl Destination Webapp */}
        <div className="panel">
          <ProjectShowcase
            images={[VinylDestination1, VinylDestination2, VinylDestination3, VinylDestination4, VinylDestination5]} // Array of project images
            tags={['NodeJS', 'ReactJS', 'ExpressJS', 'Bootstrap', 'SQL']} // Project tags for technologies used
            description={'An in-development full stack web application with a responsive, user-friendly front-end and a back-end API featuring a working, animated record player on the landing page. The application provides a modern and minimalistic user interface, allowing users to create accounts, log in, and easily browse and place orders for vinyl records and music equipment. The application also features a secure role-based authentication system, ensuring that only authorized users can insert, update, and delete records and equipment and action orders. The application uses a SQL database to store and manage the records and equipment, and a NodeJS server to handle the API requests and responses. This app is being developed for a local business.'} // Project description
            title="Vinyl Destination Webapp and API" // Title of the project
          />
        </div>

        {/* Project 2 - Mock Shopping Website */}
        <div className="panel">
          <ProjectShowcase
            images={[ShoppingProject1]}  // Array of project images
            tags={['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL']}  // Technologies used in the project
            description={'A mock shopping website using HTML, CSS, JavaScript, PHP, and SQL to create a responsive front-end and secure back-end. The site allows users to create accounts, login, and place orders. The site uses a SQL database to store and manage the orders and users, and a PHP server to handle the API requests and responses. The design of the site is meant to mimic popular e-commerce websites featuring a recent products section, a comprehensive product catalog, a cart, and a checkout page.'} // Description of the project
            title="Mock Shopping Website" // Title of the project
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;




