import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { ButtonLink } from '@/components/atoms/ButtonLink';
import { SectionHeading } from '@/components/atoms/SectionHeading';
import { WHOLESALE } from '@/constants/landing';
import { IMAGES } from '@/constants/images';

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
          <SectionHeading className="mb-stack-md">
            {WHOLESALE.headline}
          </SectionHeading>
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

          <ButtonLink href={WHOLESALE.cta.href} variant="primary" size="lg">
            {WHOLESALE.cta.label}
          </ButtonLink>
        </div>

        <div className="relative h-[400px] overflow-hidden rounded-xl lg:h-[500px]">
          <Image
            src={IMAGES.wholesale}
            alt="Taller de fabricación de sets de asado El Campero"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent" aria-hidden />
        </div>

      </div>
    </section>
  );
}
