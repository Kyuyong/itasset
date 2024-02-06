import React, { useState, useEffect } from 'react';
import { BsLockFill } from 'react-icons/bs';

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
        <div className="c-navbar-logout" onClick={onLogout}>
          <BsLockFill size={24} />
          <i className="fas fa-sign-out-alt"></i>
          Logout
        </div>
      </div>
    </nav>
  );
};

export default MainNavBar;
