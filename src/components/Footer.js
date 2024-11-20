import React from 'react';
import {Github, Linkedin} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 My Portfolio</p>
      <p>
        <a href="https://github.com/shabbeer10" target="_blank" rel="noopener noreferrer"><Github /></a>
        <a href="https://www.linkedin.com/in/shabbeer-petersen-342868277" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
      </p>
      
    </footer>
  );
};

export default Footer;
