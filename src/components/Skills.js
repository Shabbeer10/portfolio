import React from 'react';
import SkillsData from '../data/skillsData'

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>My Tech Skills</h2>
      <h4 style={{textAlign:"center"}}>click on the icons to learn more about the technologies</h4>
      <div className="skills-container">
        {SkillsData.map((skill, index) => (
          <div className="card" key={index}>
            <a href={skill.link} target="blank" rel='noreferrer' className="btn"><img src={skill.image.toString()} width="60" alt={skill.title} /></a>
            <span>{skill.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
