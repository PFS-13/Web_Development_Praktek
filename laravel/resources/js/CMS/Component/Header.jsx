import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const getTitle = (pathname) => {
    switch (pathname) {
      case '/admin/dashboard':
        return 'Home';
      case '/admin/validate':
        return 'Validate';
      case '/admin/input_drama':
        return 'Input New Drama';
      case '/admin/dramas':
        return 'Drama';
      case '/admin/countries':
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
        <a className="nav-item nav-link">Admin</a>
      </div>
    </nav>
  );
};

export default Header;
