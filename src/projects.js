import React from 'react';
import './css/projects.css';
import ShoppingProject from './assets/project-shopping.png';

function ProjectsPage() {
    return(
        <div id="projects" className="projects">
            <h2 className="projects-header">My Projects.</h2>
            <div className="projects-container">
                <div className="project">
                    <img src={ShoppingProject} alt="Shopping Project" className="project-image" />

                </div>
            </div>
        </div>
    )   
}

export default ProjectsPage;