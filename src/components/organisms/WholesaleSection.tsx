import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { WHOLESALE } from '@/constants/landing';

export function WholesaleSection() {
  return (
    <section
      className="bg-on-surface py-stack-xl text-surface"
      aria-label="Venta mayorista"
    >
      <div className="mx-auto grid max-w-[var(--container-max)] grid-cols-1 items-center gap-stack-lg px-margin-mobile md:px-margin-desktop lg:grid-cols-2">

        <div>
          <span className="mb-4 block font-sans text-label-lg font-semibold uppercase tracking-widest text-primary-fixed">
            {WHOLESALE.eyebrow}
          </span>
          <h2 className="mb-stack-md font-serif text-headline-lg-mobile font-medium leading-headline-lg-mobile md:text-headline-lg md:leading-headline-lg">
            {WHOLESALE.headline}
          </h2>
          <p className="mb-stack-lg font-sans text-body-lg leading-body-lg opacity-80">
            {WHOLESALE.body}
          </p>

          <ul className="mb-stack-lg space-y-stack-sm" role="list">
            {WHOLESALE.perks.map((perk) => (
              <li key={perk} className="flex items-center gap-4 font-sans text-body-md">
                <CheckCircle size={20} strokeWidth={1.5} className="shrink-0 text-primary-fixed" aria-hidden />
                {perk}
              </li>
            ))}
          </ul>

          <Link
            href={WHOLESALE.cta.href}
            className="inline-flex h-14 items-center rounded bg-primary px-8 font-sans text-label-lg font-semibold uppercase tracking-widest text-on-primary transition-transform duration-300 ease-out hover:scale-105"
          >
            {WHOLESALE.cta.label}
          </Link>
        </div>

        {/* Placeholder imagen — reemplazar con next/image real */}
        <div className="relative h-[400px] overflow-hidden rounded-xl bg-primary-container/20 lg:h-[500px]" aria-hidden>
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent" />
        </div>

      </div>
    </section>
  );
}
