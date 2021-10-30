import React from 'react';
import Menu from './Menu';
import { useState } from 'react';
import working from '../../images/illustration-working.svg';

const Header = () => {
  const [burger, setBurger] = useState(false);

  const clickBurger = () => {
    setBurger(burger === false ? true : false);
  };

  return (
    <div className="header">
      <Menu clickBurger={clickBurger} />
      <div className="header-content">
        <div className="title">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button>
            <a href="#shortlink">Get Started</a>
          </button>
        </div>

        <div className="working">
          <img className="img-working" src={working} alt="" />
        </div>

        <div className={burger === false ? 'menuberger-none' : 'menuberger'}>
          <a href="features">Features</a>
          <a href="pricing">Pricing</a>
          <a href="resources">Resources</a>
          <a href="login">Login</a>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
