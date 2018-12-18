import React from 'react';
import './header.css';

const Header = () => (
  <div className="container">
    <div className="jumbotron bg text-center">
      <h1 className="logo">Scooby-Doo Clicky-Game!</h1>
      <p className="desc">Click on a monster to earn points, if you click the same monster twice the game will end!</p>
    </div>
  </div>
);

export default Header;