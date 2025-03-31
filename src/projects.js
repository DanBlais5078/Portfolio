import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ProjectShowcase from './widget/project_container';
import './css/projects.css'; // Assuming you have this file
import ShoppingProject1 from './assets/project-shopping.png';
import VinylDestination1 from './assets/vd1.png';
import VinylDestination2 from './assets/vd2.png';
import VinylDestination3 from './assets/vd3.png';
import VinylDestination4 from './assets/vd4.png';
import VinylDestination5 from './assets/vd5.png';

function ProjectsPage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Select all panels (projects)
    const panels = gsap.utils.toArray('.panel');

    // Pin each panel and set scroll behaviors
    panels.forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: 'top top',  // Pin the project at the top of the page
        end: 'bottom top', // Stop when the project fully scrolls out
        scrub: true,       // Smooth scrubbing
        pin: true,         // Pin the panel in place
        pinSpacing: false  // Don't add extra space after pinning
      });
    });

    // Scroll behavior for snapping between projects
    ScrollTrigger.create({
      trigger: '.projects-container',
      start: 'top top',
      end: panels.length, // The length of the panels determines scroll duration
      scrub: true,
      snap: {
        snapTo: 1 / (panels.length - 1), // Snap to each project
        duration: 0.5, // Snap duration
        delay: 0,      // No delay
        ease: 'power2.inOut' // Smooth easing
      },
    });
  }, []);

  return (
    <div id="projects" className="projects">
      <div className="projects-container">
      <h2 className="projects-header">My Projects.</h2>
        {/* Project 1 */}
        <div className="panel">
          <ProjectShowcase
            images={[VinylDestination1, VinylDestination2, VinylDestination3, VinylDestination4, VinylDestination5]}
            tags={['NodeJS', 'ReactJS', 'ExpressJS', 'Bootstrap', 'SQL']}
            description={'An in-development full stack web application with a responsive, user-friendly front-end and a back-end API.'}
            title="Vinyl Destination Webapp and API"
          />
        </div>

        {/* Project 2 */}
        <div className="panel">
          <ProjectShowcase
            images={[ShoppingProject1]}
            tags={['HTML', 'CSS', 'Javascript', 'PHP', 'SQL']}
            description={'A mock shopping website using HTML, CSS, Javascript, PHP, and SQL to create a responsive front-end.'}
            title="Shopping Website"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;



