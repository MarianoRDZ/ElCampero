import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/constants/landing';

export function TestimonialsSection() {
  return (
    <section
      className="bg-surface-container py-stack-xl"
      aria-label="Testimonios de clientes"
    >
      <div className="mx-auto max-w-[var(--container-max)] px-margin-mobile md:px-margin-desktop">
        <h2 className="mb-stack-xl text-center font-serif text-headline-lg-mobile font-medium leading-headline-lg-mobile md:text-headline-lg md:leading-headline-lg">
          Lo que dicen nuestros clientes
        </h2>

        <ul className="grid grid-cols-1 gap-gutter md:grid-cols-3" role="list">
          {TESTIMONIALS.map(({ stars, body, author }) => (
            <li
              key={author}
              className="rounded-xl bg-surface p-8 shadow-card"
            >
              <div className="mb-4 flex gap-1 text-tertiary" aria-label={`${stars} estrellas`}>
                {Array.from({ length: stars }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} aria-hidden />
                ))}
              </div>
              <blockquote className="mb-stack-md font-sans text-body-md italic leading-body-md text-on-surface-variant">
                {body}
              </blockquote>
              <p className="font-sans text-label-lg font-semibold uppercase tracking-label text-on-surface">
                — {author}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
