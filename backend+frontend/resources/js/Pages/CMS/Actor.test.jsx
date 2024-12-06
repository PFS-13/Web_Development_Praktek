import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Actor from '../CMS/Actor';
import '@testing-library/jest-dom';

jest.mock('@/Components/CMS/SidebarCMS', () => ({ children }) => (
  <div data-testid="sidebar">{children}</div>
));
jest.mock('@/Components/Modal', () => ({ show, onClose, children }) =>
  show ? (
    <div data-testid="modal">
      <button data-testid="close-modal" onClick={onClose}>
        Close
      </button>
      {children}
    </div>
  ) : null
);
jest.mock('@inertiajs/react', () => ({
  Head: ({ title }) => <title>{title}</title>,
  Inertia: {
    post: jest.fn(),
    visit: jest.fn(),
  },
}));

describe('Actor', () => {
  const mockProps = {
    title: 'Actor Dashboard',
    flash: { message: 'Success!' },
    user: {id: 1, name:"Keanu", role:"admin"},
    actors: [
      {
        id_actor: 1,
        country: 'USA',
        actor_name: 'Actor 1',
        birth_date: '1980-01-01',
        link_photo: 'https://example.com/actor1.jpg',
      },
      {
        id_actor: 2,
        country: 'UK',
        actor_name: 'Anomali',
        birth_date: '1990-01-01',
        link_photo: 'https://example.com/actor2.jpg',
      },
    ],
  };

  it('Render halaman Actor CMS', () => {
    render(<Actor {...mockProps} />);

    expect(document.title).toBe('Actor Dashboard');

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    expect(screen.getByText('Actor 1')).toBeInTheDocument();
    expect(screen.getByText('Anomali')).toBeInTheDocument();
    expect(screen.getByText('USA')).toBeInTheDocument();
    expect(screen.getByText('UK')).toBeInTheDocument();
  });

  it('Render halaman Actor CMS', () => {
    render(<Actor {...mockProps} />);
    expect(document.title).toBe('Actor Dashboard');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    expect(screen.getByText('Actor 1')).toBeInTheDocument();
    expect(screen.getByText('Anomali')).toBeInTheDocument();
    expect(screen.getByText('USA')).toBeInTheDocument();
    expect(screen.getByText('UK')).toBeInTheDocument();
  });

  it('Buka dan tutup modal Add Actor', () => {
    render(<Actor {...mockProps} />);
    const addButton = screen.getByTestId('add_actor');
    fireEvent.click(addButton);
    expect(screen.getByTestId('modal')).toBeInTheDocument();
    expect(screen.getByText(/Insert New Actor/))
    const closeButton = screen.getByTestId('close-modal');
    fireEvent.click(closeButton);
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });
  it('Menambah Actor', () => {
    render(<Actor {...mockProps} />);
    const addButton = screen.getByTestId('add_actor');
    fireEvent.click(addButton);
    expect(screen.getByTestId('modal')).toBeInTheDocument();
    expect(screen.getByText(/Insert New Actor/))
    fireEvent.change(screen.getByLabelText(/country/i), { target: { value: '1' } });
    fireEvent.change(screen.getByLabelText(/Nama Actor/i), { target: { value: 'Keanu' } });
    fireEvent.change(screen.getByLabelText(/Tanggal Lahir/i), { target: { value: '1964-09-02' } });
    fireEvent.change(screen.getByLabelText(/Link Photo/i), { target: { value: 'http://image.com' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));    
  });

  it('Melakukan pencarian Actor 1',  () => {
    render(<Actor {...mockProps} />);

    const searchInput = screen.getByPlaceholderText('Find actors...');
    const searchButton = screen.getByTestId('search_actor');

    fireEvent.change(searchInput, { target: { value: 'Actor 1' } });
    fireEvent.click(searchButton);
    expect(searchInput.value).toBe('Actor 1');
  });

});
