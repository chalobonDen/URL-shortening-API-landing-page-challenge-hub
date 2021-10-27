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
          <button>
            <a href="#shortlink">Get Started</a>
          </button>
        </div>
        <div className="working">
          <img className="img-working" src={working} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
