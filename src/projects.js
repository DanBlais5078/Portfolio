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
    gsap.registerPlugin(ScrollTrigger);

    const panels = gsap.utils.toArray('.panel');

    panels.forEach((panel) => {
        ScrollTrigger.create({
            trigger: panel,
            start: 'top-=145 top',  // Start pinning after 100px from the top (adjust this gap as needed)
            end: 'bottom top',     // Stop pinning when the panel scrolls out of the viewport
            scrub: true,
            pin: true,             // Pin the panels during scrolling
            pinSpacing: false      // Prevent extra space after pinning
          });
      });
  }, []);

  return (
    <div id="projects" className="projects">
      <h2 className="projects-header">My Projects.</h2>
      <div className="projects-container">
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
            tags={['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL']}
            description={'A mock shopping website using HTML, CSS, JavaScript, PHP, and SQL to create a responsive front-end.'}
            title="Shopping Website"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;



