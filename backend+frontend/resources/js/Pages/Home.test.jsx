import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Pages/Home'; // Sesuaikan path dengan lokasi file `Home`

// Mock `@inertiajs/react` untuk memblokir fungsi-fungsi aslinya
jest.mock('@inertiajs/react', () => ({
  Head: ({ title }) => <title>{title}</title>, // Mock Head untuk menguji title
}));

// Mock komponen yang digunakan dalam `Home`
jest.mock('@/Components/Topbar', () => () => <div>Mocked Topbar</div>);
jest.mock('@/Components/Home/HeroSection', () => () => <div>Mocked Hero Section</div>);

describe('Home Page', () => {
  test('Home Page : Render Component Home dengan bener', () => {
    const props = { title: 'Home Page' };
    render(<Home {...props} />);
    expect(document.title).toBe('Home Page');
    expect(screen.getByText(/Mocked Topbar/i)).toBeInTheDocument();
    expect(screen.getByText(/Mocked Hero Section/i)).toBeInTheDocument();
  });
});
