import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  let title = '';
  switch (location.pathname) {
    case '/':
      title = 'Home';
      break;
    case '/validate':
      title = 'Validate';
      break
    case '/input_drama':
      title = 'Input New Drama';
      break;
    case '/dramas':
      title = 'Drama';
      break;
    case '/countries':
      title = 'Countries';
      break;
    default:
      title = 'Movie Hub';
      break;
  }

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
