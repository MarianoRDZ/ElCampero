import Image from 'next/image';
import { ButtonLink } from '@/components/atoms/ButtonLink';
import { HERO } from '@/constants/landing';
import { IMAGES } from '@/constants/images';

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-[90svh] items-center overflow-hidden bg-inverse-surface pt-0"
      aria-label="Hero"
    >
      <Image
        src={IMAGES.heroBg}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden
      />
      <div className="absolute inset-0 bg-on-surface/60" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-[var(--container-max)] px-margin-mobile md:px-margin-desktop">
        <div className="max-w-2xl">

          <span className="mb-4 block font-sans text-label-lg font-semibold uppercase tracking-[0.2em] text-on-primary opacity-80">
            {HERO.eyebrow}
          </span>

          <h1 className="mb-stack-md font-serif text-headline-lg-mobile font-medium leading-headline-lg-mobile text-white md:text-display-lg md:leading-display-lg md:tracking-display">
            {HERO.headline}
          </h1>

          <p className="mb-stack-lg max-w-lg font-sans text-body-lg leading-body-lg text-white opacity-90">
            {HERO.body}
          </p>

          <div className="flex flex-wrap gap-gutter">
            <ButtonLink href={HERO.ctaPrimary.href} variant="primary" size="lg">
              {HERO.ctaPrimary.label}
            </ButtonLink>
            <ButtonLink href={HERO.ctaSecondary.href} variant="ghost" size="lg">
              {HERO.ctaSecondary.label}
            </ButtonLink>
          </div>

        </div>
      </div>
    </section>
  );
}
