import React, { useState, useEffect } from 'react';
import { BsLockFill, BsGearFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const MainNavBar = ({ onLogout }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100; // 50px 이상 스크롤되면 true
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`c-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="c-navbar-inner">
        <div className="c-navbar-logo">
          <a href="/">IT Asset</a>
        </div>

        <div className="c-navbar-controls">
          <Link to="/registersolution" className="c-navbar-menu">
            <BsGearFill size={24} />
            <span>Setting</span>
          </Link>
          <div className="c-navbar-menu" onClick={onLogout}>
            <BsLockFill size={24} />
            <span>Logout</span>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default MainNavBar;
