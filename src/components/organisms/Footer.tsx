import React from 'react';
import Link from 'next/link';
import { CreditCard, Landmark, Banknote } from 'lucide-react';
import {
  FOOTER_TAGLINE,
  FOOTER_COLUMNS,
  FOOTER_SOCIAL,
  FOOTER_COPYRIGHT,
} from '@/constants/footer';

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
      <path d="M12 0C8.74 0 8.33.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 110 12.324 6.162 6.162 0 010-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 110 2.88 1.44 1.44 0 010-2.88z" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
      <path d="M24 12.073C24 5.446 18.627 0 12 0S0 5.446 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971h-1.514c-1.491 0-1.956.93-1.956 1.884v2.266h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a9.86 9.86 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 0h-.004C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005C18.605 23.794 24 18.428 24 11.892 24 5.335 18.605 0 12.05 0z" />
    </svg>
  );
}

const SOCIAL_ICONS: Record<string, (() => React.JSX.Element) | undefined> = {
  Instagram: IconInstagram,
  Facebook:  IconFacebook,
  WhatsApp:  IconWhatsApp,
};

export function Footer() {
  return (
    <footer className="border-t border-outline-variant/30 bg-surface-container-highest">

      {/* Cuerpo principal */}
      <div className="mx-auto flex max-w-[var(--container-max)] flex-col gap-stack-lg px-margin-mobile py-stack-lg md:flex-row md:items-start md:justify-between md:px-margin-desktop">

        {/* Columna marca */}
        <div className="max-w-xs">
          <Link href="/" className="mb-4 block font-serif text-headline-sm font-semibold text-on-surface">
            El Campero
          </Link>
          <p className="mb-6 text-label-lg text-on-surface-variant">
            {FOOTER_TAGLINE}
          </p>
          <nav aria-label="Redes sociales" className="flex gap-4">
            {FOOTER_SOCIAL.map(({ label, href }) => {
              const Icon = SOCIAL_ICONS[label];
              return (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-on-surface-variant transition-colors duration-300 ease-out hover:text-primary"
                >
                  {Icon && <Icon />}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Columnas de links */}
        <div className="grid grid-cols-2 gap-stack-lg">
          {FOOTER_COLUMNS.map(({ title, links }) => (
            <nav key={title} aria-label={title}>
              <h4 className="mb-4 text-label-lg font-semibold uppercase tracking-widest text-on-surface">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-label-lg text-on-surface-variant opacity-80 transition-opacity duration-300 ease-out hover:opacity-100 hover:text-on-surface"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-outline-variant/30">
        <div className="mx-auto flex max-w-[var(--container-max)] flex-col items-center justify-between gap-4 px-margin-mobile py-stack-md text-label-lg text-on-surface-variant md:flex-row md:px-margin-desktop">
          <p>{FOOTER_COPYRIGHT}</p>
          <div className="flex items-center gap-4 opacity-60" aria-label="Medios de pago aceptados">
            <CreditCard size={20} strokeWidth={1.5} aria-hidden />
            <Landmark   size={20} strokeWidth={1.5} aria-hidden />
            <Banknote   size={20} strokeWidth={1.5} aria-hidden />
          </div>
        </div>
      </div>

    </footer>
  );
}
