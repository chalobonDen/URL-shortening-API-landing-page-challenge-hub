import React from 'react';
import logo from '../../images/logo.svg';
import './Header.css';

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-left">
        <img src={logo} alt="" />
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#resources">Resources</a>
      </div>

      <div className="menu-right">
        <a href="#login">Login</a>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Menu;
