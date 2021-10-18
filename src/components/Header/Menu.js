import React from 'react';
import logo from '../../images/logo.svg';
import './Header.css';

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-left">
        <img src={logo} alt="" />
        <a href="">Features</a>
        <a href="">Pricing</a>
        <a href="">Resources</a>
      </div>

      <div className="menu-right">
        <a href="">Login</a>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Menu;
