import { BENEFITS } from '@/constants/landing';

export function BenefitsStrip() {
  return (
    <section
      className="bg-surface-container-low py-stack-xl"
      aria-label="Beneficios"
    >
      <ul
        className="mx-auto grid max-w-[var(--container-max)] grid-cols-1 gap-stack-lg px-margin-mobile text-center sm:grid-cols-2 md:grid-cols-4 md:px-margin-desktop"
        role="list"
      >
        {BENEFITS.map(({ icon: Icon, title, body }) => (
          <li key={title} className="flex flex-col items-center">
            <Icon
              size={40}
              strokeWidth={1.5}
              className="mb-stack-sm text-primary"
              aria-hidden
            />
            <h3 className="mb-2 font-sans text-label-lg font-semibold uppercase tracking-label text-on-surface">
              {title}
            </h3>
            <p className="font-sans text-body-md text-on-surface-variant">
              {body}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
