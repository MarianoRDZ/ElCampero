'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { cn } from '@/lib/cn';
import { NAV_LINKS } from '@/constants/navigation';

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-outline-variant bg-surface">
        <nav
          aria-label="Navegación principal"
          className="mx-auto flex h-16 max-w-[var(--container-max)] items-center justify-between px-margin-mobile md:px-margin-desktop"
        >
          {/* Izquierda: hamburger (mobile) + logo */}
          <div className="flex items-center gap-3">
            <button
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-on-surface md:hidden"
            >
              {isOpen
                ? <X    size={22} strokeWidth={2} aria-hidden />
                : <Menu size={22} strokeWidth={2} aria-hidden />}
            </button>

            <Link
              href="/"
              aria-label="El Campero — inicio"
              className="font-serif text-2xl font-semibold tracking-wider text-on-surface"
            >
              El Campero
            </Link>
          </div>

          {/* Centro: links desktop */}
          <ul className="hidden items-center gap-8 md:flex" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    'text-label-lg font-semibold tracking-label transition-colors duration-300 ease-out',
                    pathname === href
                      ? 'text-primary'
                      : 'text-outline hover:text-on-surface',
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Derecha: carrito */}
          <Link
            href="/carrito"
            aria-label="Ver carrito"
            className="text-on-surface transition-colors duration-300 ease-out hover:text-primary"
          >
            <ShoppingBag size={22} strokeWidth={1.5} aria-hidden />
          </Link>
        </nav>
      </header>

      {/* Menú mobile */}
      <div
        id="mobile-menu"
        aria-hidden={!isOpen}
        className={cn(
          'fixed inset-x-0 top-16 z-40 h-[calc(100dvh-4rem)] overflow-y-auto',
          'bg-surface px-margin-mobile py-stack-lg md:hidden',
          'transition-all duration-300 ease-out',
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none',
        )}
      >
        <ul className="flex flex-col" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                tabIndex={isOpen ? 0 : -1}
                className={cn(
                  'flex h-16 items-center border-b border-outline-variant',
                  'font-serif text-headline-sm font-medium',
                  'transition-colors duration-300 ease-out',
                  pathname === href
                    ? 'text-primary'
                    : 'text-on-surface hover:text-primary',
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
