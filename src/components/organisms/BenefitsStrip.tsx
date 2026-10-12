import { BENEFITS } from '@/constants/landing';

export function BenefitsStrip() {
  return (
    <section
      className="bg-surface-container-low py-stack-xl"
      aria-label="Beneficios"
    >
      <ul
        className="mx-auto grid max-w-[var(--container-max)] grid-cols-1 gap-gutter px-margin-mobile sm:grid-cols-2 md:grid-cols-4 md:px-margin-desktop"
        role="list"
      >
        {BENEFITS.map(({ icon: Icon, title, body }) => (
          <li key={title} className="flex flex-col items-center rounded-xl bg-surface p-8 text-center shadow-card">
            <div className="mb-stack-md flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Icon
                size={32}
                strokeWidth={1.5}
                className="text-primary"
                aria-hidden
              />
            </div>
            <h3 className="mb-2 font-sans text-body-md font-semibold uppercase tracking-label text-on-surface">
              {title}
            </h3>
            <p className="font-sans text-body-md leading-body-md text-on-surface-variant">
              {body}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
