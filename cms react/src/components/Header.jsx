import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const getTitle = (pathname) => {
    switch (pathname) {
      case '/':
        return 'Home';
      case '/validate':
        return 'Validate';
      case '/input_drama':
        return 'Input New Drama';
      case '/dramas':
        return 'Drama';
      case '/countries':
        return 'Countries';
      default:
        return 'Movie Hub';
    }
  };

  const title = getTitle(location.pathname);

  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">{title}</span>
      <div className="navbar-nav">
        <span className="nav-item nav-link">Admin</span>
      </div>
    </nav>
  );
};

export default Header;
