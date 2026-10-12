import type { Metadata } from 'next';
import { MessageCircle, Mail, MapPin, Camera, Users } from 'lucide-react';
import { CONTACT } from '@/constants/landing';
import { ContactForm } from './_components/ContactForm';

export const metadata: Metadata = {
  title: 'Contacto | El Campero',
  description: 'Contactanos para consultas sobre nuestros productos, pedidos mayoristas o asesoramiento personalizado.',
};

const INFO_CARDS = [
  {
    icon:    MessageCircle,
    label:   'WhatsApp Directo',
    value:   CONTACT.whatsapp,
    href:    CONTACT.waHref,
  },
  {
    icon:    Mail,
    label:   'Email de Soporte',
    value:   CONTACT.email,
    href:    `mailto:${CONTACT.email}`,
  },
  {
    icon:    MapPin,
    label:   'Showroom',
    value:   CONTACT.showroom,
    href:    undefined,
  },
] as const;

export default function ContactoPage() {
  return (
    <main className="pb-stack-xl pt-stack-xl">

      {/* ── Header ───────────────────────────────────────────── */}
      <section className="mx-auto mb-stack-xl mt-stack-lg max-w-[var(--container-max)] px-margin-mobile text-center md:px-margin-desktop">
        <h1 className="mb-stack-sm font-serif text-headline-lg-mobile font-medium leading-headline-lg-mobile text-on-surface md:text-headline-lg md:leading-headline-lg">
          Hablemos de tu pasión por el asado
        </h1>
        <p className="mx-auto max-w-2xl font-sans text-body-lg leading-body-lg text-on-surface-variant">
          Desde la forja del acero hasta la madera del mango, cada detalle cuenta.
          Contáctanos para asesoramiento personalizado sobre nuestras piezas únicas.
        </p>
      </section>

      {/* ── Bento Layout ─────────────────────────────────────── */}
      <section className="mx-auto max-w-[var(--container-max)] px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">

          {/* Form card — 7 cols */}
          <div className="rounded-xl bg-surface-container-lowest p-stack-lg shadow-[0_20px_20px_rgba(28,28,28,0.04)] md:col-span-7">
            <ContactForm />
          </div>

          {/* Info + Map — 5 cols */}
          <div className="flex flex-col gap-gutter md:col-span-5">

            {/* Info cards */}
            <div className="flex flex-col gap-stack-sm">
              {INFO_CARDS.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-center gap-stack-md rounded-xl border border-outline-variant/10 bg-surface-container p-stack-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-fixed text-on-primary-fixed">
                    <Icon size={22} strokeWidth={1.5} aria-hidden />
                  </div>
                  <div>
                    <p className="font-sans text-label-sm uppercase tracking-label text-on-surface-variant">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="font-serif text-headline-sm font-medium text-on-surface transition-colors hover:text-primary"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-serif text-headline-sm font-medium text-on-surface">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="group relative min-h-[280px] flex-grow overflow-hidden rounded-xl border border-outline-variant/20 shadow-card">
              <iframe
                className="absolute inset-0 h-full w-full grayscale transition-all duration-700 group-hover:grayscale-0"
                src="https://maps.google.com/maps?q=Recoleta,Buenos+Aires,Argentina&output=embed&z=14"
                loading="lazy"
                title="Showroom El Campero — Recoleta, Buenos Aires"
              />
              <div className="pointer-events-none absolute inset-0 bg-primary/10" />
              <a
                href="https://maps.google.com/maps?q=Recoleta,Buenos+Aires,Argentina"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 rounded-lg border border-outline-variant/20 bg-surface px-4 py-2 shadow-card"
              >
                <span className="font-sans text-label-lg text-primary">Ver en Google Maps</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── Social ───────────────────────────────────────────── */}
      <section className="mx-auto mt-stack-xl max-w-[var(--container-max)] border-t border-outline-variant/20 px-margin-mobile pt-stack-lg md:px-margin-desktop">
        <div className="flex flex-col items-center justify-center gap-stack-lg md:flex-row">
          <p className="font-serif text-headline-sm font-medium text-on-surface">
            Síguenos en nuestra forja diaria
          </p>
          <div className="flex gap-stack-md">
            <a href="#" className="group flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-outline text-on-surface-variant transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-on-primary">
                <Camera size={18} strokeWidth={1.5} aria-hidden />
              </div>
              <span className="font-sans text-label-lg text-on-surface">Instagram</span>
            </a>
            <a href="#" className="group flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-outline text-on-surface-variant transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-on-primary">
                <Users size={18} strokeWidth={1.5} aria-hidden />
              </div>
              <span className="font-sans text-label-lg text-on-surface">Facebook</span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
