import React from 'react';
import { render, screen, fireEvent , waitFor } from '@testing-library/react';
import Detail from '../Pages/Detail';
import '@testing-library/jest-dom';

jest.mock('../Components/Topbar', () => () => <div>Mocked Topbar</div>);

jest.mock('@inertiajs/react', () => ({
    Head: ({ title }) => <title>{title}</title>,
    route: jest.fn((name) => `/${name}`)

  }));

  jest.mock('@inertiajs/inertia', () => ({
    Inertia: {
      post: jest.fn(),
    },
  }));
  

describe('Detail Page', () => {
  const mockProps = {
    user: { id: 1, name: 'Test User' },
    myMovie: {
      id_movies: 1,
      title: 'Test Movie',
      alternative_title: 'Alternative Title',
      link_posters: '/path/to/poster.jpg',
      link_trailers: 'https://www.youtube.com/watch?v=test',
      synopsis: 'This is a test synopsis.',
      genres: 'Action, Drama',
      year: 2023,
      availability: 'Available',
    },
    actors: [
      { id: 1, actor_name: 'actor1'},
      { id: 2, actor_name: 'actor2'},
    ],
    comments: [
      { id: 1, rating: 5, comment: 'Amazing movie!', user: { id: 1, name: 'User 1' } },
      { id: 1, rating: 2, comment: 'Trash Movie', user: { id: 1, name: 'User 1' } },

    ],
  };

  test('Render Halaman Detail', () => {
    render(<Detail {...mockProps} />);
    expect(screen.getByText('Test Movie', { selector: '.real-title' })).toBeInTheDocument();
    expect(screen.getByText(/Alternative Title/)).toBeInTheDocument();
    expect(screen.getByText(/Year :/)).toBeInTheDocument();
    expect(screen.getByText(/Availability :/)).toBeInTheDocument();
  });

  test('Render Actor', () => {
    render(<Detail {...mockProps} />);
    expect(screen.getByText(/actor1/)).toBeInTheDocument();
    expect(screen.getByText(/actor2/)).toBeInTheDocument();
  });

  test('Render Komentar', () => {
    render(<Detail {...mockProps} />);
    expect(screen.getByText('Amazing movie!')).toBeInTheDocument();
    expect(screen.getByText('Trash Movie')).toBeInTheDocument();
  });

  test('Muncul Peringatan ketika mencoba memberi komentar tetapi tidak login ', () => {
    const mockPropsNoUser = { ...mockProps, user:"" };
    render(<Detail {...mockPropsNoUser} />);
    fireEvent.click(screen.getByText('Leave a Comment'));
    expect(screen.getByText('Anda harus login untuk menambahkan komentar')).toBeInTheDocument();
  }); 

  test('Muncul peringatan untuk film yang belum ada komentar', () => {
    const mockPropsNoComment = { ...mockProps, comments:"" };
    render(<Detail {...mockPropsNoComment} />);
    expect(screen.getByText('Film ini belum ada komentar')).toBeInTheDocument();
  });




});
