import React from 'react';
import { X } from 'lucide-react';
import '../App.css';

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X />
        </button>
        
        <img
          src={project.image}
          alt={project.title}
          className="modal-image"
        />
        
        <div className="modal-content">
          <h3 className="modal-title">{project.title}</h3>
          <p className="modal-description">{project.longdescription}</p>
          <div className="modal-actions">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-link"
            >
              Visit Website
            </a>
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-link"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;