import React from 'react';
import './navbar.css';

const Navbar = () => (
    <nav className="navbar mb-1 navigation">
      <div className="navbar-header">
        <a className="navbar-brand" href="/">Scooby-Doo Clicky-Game!</a>
      </div>
      <ul className="nav navbar-nav">
        <a href="https://github.com/PReijerkerk/Clicky-Game">GitHub Repo</a>
      </ul>
    </nav>
);

export default Navbar;