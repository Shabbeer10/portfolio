import React from 'react';
import projectData from '../data/projectData'

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div className="card" key={index}>
            <h5>{project.title}</h5>
            <p>{project.description}</p>
            <a href={project.link} className="btn">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
