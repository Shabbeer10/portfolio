import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Welcome, Curious Visitor!</h1>
      <nav className="sticky-nav" >
        <ul className="nav-list">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
