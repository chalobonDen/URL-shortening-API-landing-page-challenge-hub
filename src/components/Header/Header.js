import React from 'react';
import Menu from './Menu';
import working from '../../images/illustration-working.svg';

const Header = () => {
  return (
    <div className="header">
      <Menu />
      <div className="header-content">
        <div className="title">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button>Get Started</button>
        </div>
        <img src={working} alt="" />
      </div>
    </div>
  );
};

export default Header;
