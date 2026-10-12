import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';

afterEach(cleanup);
import React from 'react';
import { Navbar } from '../Navbar';
import { NAV_LINKS } from '@/constants/navigation';

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

vi.mock('next/link', () => ({
  default: ({ children, href, ...props }: React.ComponentPropsWithoutRef<'a'>) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

describe('Navbar', () => {
  it('renders the brand logo', () => {
    render(<Navbar />);
    expect(screen.getByText('El Campero')).toBeInTheDocument();
  });

  it('renders all nav links', () => {
    render(<Navbar />);
    NAV_LINKS.forEach(({ label }) => {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0);
    });
  });

  it('renders the cart link', () => {
    render(<Navbar />);
    expect(screen.getByRole('link', { name: 'Ver carrito' })).toBeInTheDocument();
  });

  it('renders the hamburger button', () => {
    render(<Navbar />);
    expect(screen.getByRole('button', { name: 'Abrir menú' })).toBeInTheDocument();
  });

  it('hamburger starts with aria-expanded false', () => {
    render(<Navbar />);
    expect(screen.getByRole('button', { name: 'Abrir menú' })).toHaveAttribute('aria-expanded', 'false');
  });

  it('clicking hamburger opens the menu', () => {
    render(<Navbar />);
    fireEvent.click(screen.getByRole('button', { name: 'Abrir menú' }));
    expect(screen.getByRole('button', { name: 'Cerrar menú' })).toHaveAttribute('aria-expanded', 'true');
  });

  it('clicking hamburger again closes the menu', () => {
    render(<Navbar />);
    fireEvent.click(screen.getByRole('button', { name: 'Abrir menú' }));
    fireEvent.click(screen.getByRole('button', { name: 'Cerrar menú' }));
    expect(screen.getByRole('button', { name: 'Abrir menú' })).toHaveAttribute('aria-expanded', 'false');
  });

  it('Escape key closes the menu', () => {
    render(<Navbar />);
    fireEvent.click(screen.getByRole('button', { name: 'Abrir menú' }));
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.getByRole('button', { name: 'Abrir menú' })).toBeInTheDocument();
  });

  it('mobile menu is aria-hidden when closed', () => {
    render(<Navbar />);
    expect(document.getElementById('mobile-menu')).toHaveAttribute('aria-hidden', 'true');
  });

  it('mobile menu is visible when open', () => {
    render(<Navbar />);
    fireEvent.click(screen.getByRole('button', { name: 'Abrir menú' }));
    expect(document.getElementById('mobile-menu')).toHaveAttribute('aria-hidden', 'false');
  });
});
