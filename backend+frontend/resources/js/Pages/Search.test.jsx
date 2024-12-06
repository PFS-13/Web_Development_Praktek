import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from '../Pages/Search';
jest.mock('@inertiajs/react', () => ({
  Head: ({ title }) => <title>{title}</title>,
  Link: ({ href, children }) => <a href={href}>{children}</a>
}));
jest.mock('../Components/Topbar', () => ({ selectedCountry }) => (
  <div>Mocked Topbar: {selectedCountry}</div>
));
jest.mock('../Components/Paginator', () => ({ meta }) => (
  <div>{meta?.current_page || 'No Page'}</div>
));
describe('Search Page', () => {
  const mockProps = {
    title: 'Search Page',
    country: 'Indonesia',
    input: 'Avengers',
    movies: {
      data: [
        { id: 1, title: 'Avengers: Endgame' },
        { id: 2, title: 'Avengers: Infinity War' },
      ],
      meta: { current_page: 1, last_page: 2 },
    },
  };
  test('Render Komponen Search dengan input', () => {
    render(<Search {...mockProps} />);
    expect(document.title).toBe(mockProps.title);
    expect(screen.getByText(/Hasil Pencarian: 'Avengers'/i)).toBeInTheDocument();
  });
  test('Render komponen search tanpa input', () => {
    const propsWithoutInput = { ...mockProps, input: '' };
    render(<Search {...propsWithoutInput} />);
    expect(screen.queryByText(/Hasil Pencarian:/i)).not.toBeInTheDocument();
  });
});
