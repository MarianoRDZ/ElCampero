import { FAQ } from '@/constants/landing';

export function FaqSection() {
  return (
    <section
      className="py-stack-xl"
      aria-label="Preguntas frecuentes"
    >
      <div className="mx-auto max-w-3xl px-margin-mobile md:px-margin-desktop">
        <h2 className="mb-stack-lg text-center font-serif text-headline-lg-mobile font-medium leading-headline-lg-mobile md:text-headline-lg md:leading-headline-lg">
          Preguntas Frecuentes
        </h2>

        <dl className="space-y-1">
          {FAQ.map(({ question, answer }) => (
            <details
              key={question}
              className="group border-b border-outline-variant py-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-sans text-label-lg font-semibold uppercase tracking-label text-on-surface">
                <dt>{question}</dt>
                <span
                  className="shrink-0 text-outline transition-transform duration-300 ease-out group-open:rotate-180"
                  aria-hidden
                >
                  ▾
                </span>
              </summary>
              <dd className="mt-4 font-sans text-body-md leading-body-md text-on-surface-variant">
                {answer}
              </dd>
            </details>
          ))}
        </dl>
      </div>
    </section>
  );
}
