import { ABOUT } from '@/constants/landing';

export function AboutSection() {
  return (
    <section
      className="overflow-hidden py-stack-xl"
      aria-label="Nosotros"
    >
      <div className="mx-auto grid max-w-[var(--container-max)] grid-cols-1 items-center gap-stack-xl px-margin-mobile md:grid-cols-2 md:px-margin-desktop">

        {/* Imagen placeholder — reemplazar con next/image real */}
        <div className="relative order-2 md:order-1">
          <div className="mx-auto h-[380px] max-w-md rounded-xl bg-surface-container shadow-card" aria-hidden />
          <div className="absolute -bottom-6 -right-4 hidden rounded-lg bg-primary-container p-8 lg:block">
            <p className="font-serif text-headline-sm font-medium italic text-on-primary">
              {ABOUT.quote}
            </p>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <span className="mb-4 block font-sans text-label-lg font-semibold uppercase tracking-widest text-primary">
            {ABOUT.eyebrow}
          </span>
          <h2 className="mb-stack-md font-serif text-headline-lg-mobile font-medium leading-headline-lg-mobile md:text-headline-lg md:leading-headline-lg">
            {ABOUT.headline}
          </h2>
          {ABOUT.paragraphs.map((p) => (
            <p key={p.slice(0, 30)} className="mb-stack-md font-sans text-body-lg leading-body-lg text-on-surface-variant last:mb-0">
              {p}
            </p>
          ))}
        </div>

      </div>
    </section>
  );
}
