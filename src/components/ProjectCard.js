import React from 'react';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h5>{project.title}</h5>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;