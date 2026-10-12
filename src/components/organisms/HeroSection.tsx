import Image from 'next/image';
import Link from 'next/link';
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

          <h1 className="mb-stack-md font-serif text-headline-lg-mobile font-medium leading-headline-lg-mobile text-on-primary md:text-display-lg md:leading-display-lg md:tracking-display">
            {HERO.headline}
          </h1>

          <p className="mb-stack-lg max-w-lg font-sans text-body-lg leading-body-lg text-on-primary opacity-90">
            {HERO.body}
          </p>

          <div className="flex flex-wrap gap-gutter">
            <Link
              href={HERO.ctaPrimary.href}
              className="inline-flex h-14 items-center rounded px-8 font-sans text-label-lg font-semibold uppercase tracking-widest text-on-primary transition-transform duration-300 ease-out bg-primary-container hover:scale-105"
            >
              {HERO.ctaPrimary.label}
            </Link>
            <Link
              href={HERO.ctaSecondary.href}
              className="inline-flex h-14 items-center rounded border-2 border-on-primary px-8 font-sans text-label-lg font-semibold uppercase tracking-widest text-on-primary transition-all duration-300 ease-out hover:bg-white/10"
            >
              {HERO.ctaSecondary.label}
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
