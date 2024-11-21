import React, { useState } from 'react';
import projectData from '../data/projectData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="projects" className="projects-section">
        <h2>My Projects</h2>
        <p style={{textAlign:"center"}}>click on a card to see more about the project</p>
        <div className="projects-container">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject()}
          />
        )
      }
      </>
    )};

export default Projects;
