'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/cn';
import { NAV_LINKS } from '@/constants/navigation';

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-outline-variant bg-surface">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex h-16 max-w-[var(--container-max)] items-center justify-between px-margin-mobile md:px-margin-desktop"
      >
        <Link href="/" className="font-serif text-xl font-medium text-on-surface" aria-label="El Campero — inicio">
          El Campero
        </Link>

        <ul className="hidden items-center gap-8 md:flex" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  'text-label-lg font-semibold tracking-label transition-colors duration-300 ease-out',
                  pathname === href
                    ? 'text-primary-container'
                    : 'text-on-surface-variant hover:text-on-surface',
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link
            href="/carrito"
            aria-label="Ver carrito"
            className="relative text-on-surface transition-colors duration-300 ease-out hover:text-primary-container"
          >
            <ShoppingBag size={22} strokeWidth={1.5} aria-hidden />
          </Link>

          {/* TODO: botón de menú mobile */}
        </div>
      </nav>
    </header>
  );
}
