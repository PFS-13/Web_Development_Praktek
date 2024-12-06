import '@testing-library/jest-dom';
import React from 'react';
global.route = jest.fn((name, params) => {
    // Contoh implementasi sederhana
    const routes = {
      'admin-movies': '/admin/movies',
      'admin-input_movie': '/admin/movies/input',
      'logout': '/logout',
      'insert-comment': '/comments',
    };
    return routes[name] || `/${name}`;
  });