import React from 'react';
import {Github, Linkedin} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Social Links Below</p>
      <p>
        <a href="https://github.com/shabbeer10" target="_blank" rel="noopener noreferrer"><Github /></a>
        <a href="https://www.linkedin.com/in/shabbeer-petersen-342868277" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
      </p>
      <a href="https://github.com/shabbeer10/portfolio" target="_blank" rel="noopener noreferrer">Portfolio Source Code Here</a>
      
    </footer>
  );
};

export default Footer;
