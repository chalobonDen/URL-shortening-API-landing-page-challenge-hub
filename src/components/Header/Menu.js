import React from 'react';
import logo from '../../images/logo.svg';
import './Header.css';

const Menu = () => {
  return (
    <div className="menubar">
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

      <div className="burger">
        <img src={logo} alt="" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          // className="burger"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Menu;
