import { Star } from 'lucide-react';
import { SectionHeading } from '@/components/atoms/SectionHeading';
import { TESTIMONIALS } from '@/constants/landing';

export function TestimonialsSection() {
  const items = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      className="bg-surface-container py-stack-xl overflow-hidden"
      aria-label="Testimonios de clientes"
    >
      <SectionHeading className="mb-stack-xl px-margin-mobile text-center md:px-margin-desktop">
        Lo que dicen nuestros clientes
      </SectionHeading>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface-container to-transparent" aria-hidden />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface-container to-transparent" aria-hidden />

        <ul
          className="flex animate-marquee gap-gutter hover:[animation-play-state:paused] motion-reduce:animate-none"
          role="list"
          aria-label="Carrusel de reseñas"
        >
          {items.map(({ stars, body, author }, i) => (
            <li
              key={i}
              className="w-[320px] shrink-0 rounded-xl bg-surface p-8 shadow-card"
            >
              <div className="mb-4 flex gap-1 text-tertiary" aria-label={`${stars} estrellas`}>
                {Array.from({ length: stars }).map((_, j) => (
                  <Star key={j} size={16} fill="currentColor" strokeWidth={0} aria-hidden />
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
