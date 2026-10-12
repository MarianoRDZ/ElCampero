import Image from 'next/image';
import type { Metadata } from 'next';
import { Hammer, BadgeCheck, BookOpen } from 'lucide-react';
import { IMAGES } from '@/constants/images';

export const metadata: Metadata = {
  title: 'Nosotros | El Campero',
  description: 'La historia, los valores y el proceso artesanal detrás de cada set de asado El Campero.',
};

const PILARES = [
  {
    icon: Hammer,
    title: 'Artesanía',
    body: 'Cada pieza es única, forjada a mano con la dedicación que solo el tiempo y la experiencia pueden otorgar.',
  },
  {
    icon: BadgeCheck,
    title: 'Calidad Suprema',
    body: 'Utilizamos exclusivamente materiales nobles seleccionados bajo los más rigurosos controles de excelencia.',
  },
  {
    icon: BookOpen,
    title: 'Tradición',
    body: 'Honramos el legado de nuestros antepasados, preservando las formas y rituales de la cultura gaucha.',
  },
] as const;

const PROCESO = [
  {
    title: 'Selección de Maderas',
    body: 'Solo maderas nativas recuperadas como el Urunday y el Guayacán, valoradas por su extrema dureza y patrones de veta únicos.',
  },
  {
    title: 'Acero Inoxidable 440',
    body: 'Nuestras hojas son forjadas en acero inoxidable de alta calidad, garantizando un filo duradero y resistencia absoluta a la corrosión.',
  },
  {
    title: 'Tratamiento Térmico',
    body: 'Cada hoja pasa por un proceso de templado y revenido controlado digitalmente para alcanzar la dureza Rockwell perfecta.',
  },
] as const;

export default function NosotrosPage() {
  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative flex h-[614px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-10 bg-black/50" />
        <Image
          src={IMAGES.heroBg}
          alt="Forge artesanal El Campero"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="relative z-20 px-margin-mobile text-center text-white">
          <h1 className="mb-stack-sm font-serif text-display-lg font-medium leading-display-lg tracking-display">
            El Legado del Fuego
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-body-lg leading-body-lg opacity-90">
            Donde la tradición de la pampa se funde con la precisión del acero inoxidable.
          </p>
        </div>
      </section>

      {/* ── Nuestra Historia ─────────────────────────────────── */}
      <section className="mx-auto max-w-[var(--container-max)] px-margin-mobile py-stack-xl md:px-margin-desktop">
        <div className="grid grid-cols-1 items-center gap-gutter md:grid-cols-12">

          <div className="space-y-stack-md md:col-span-6">
            <span className="block font-sans text-label-lg font-semibold uppercase tracking-[0.2em] text-primary">
              Raíces Criollas
            </span>
            <h2 className="font-serif text-headline-lg font-medium leading-headline-lg text-on-surface">
              Nuestra Historia
            </h2>
            <div className="space-y-stack-sm font-sans text-body-lg leading-body-lg text-on-surface-variant">
              <p>
                Nacimos en el corazón de la llanura pampeana, bajo el cielo infinito que ha sido
                testigo de siglos de tradición criolla. El Campero comenzó como un pequeño taller
                familiar dedicado a honrar el ritual del asado y la herencia del gaucho.
              </p>
              <p>
                Para nosotros, un cuchillo no es solo una herramienta; es el compañero de una vida,
                un objeto destinado a ser heredado de generación en generación. Cada pieza que sale
                de nuestra forja lleva consigo el aroma del cuero crudo, la firmeza del acero y la
                paciencia del artesano.
              </p>
              <p>
                Hoy, mantenemos viva esa llama, combinando técnicas ancestrales con los estándares
                más altos de la industria moderna, para llevar un pedazo de nuestra tierra a cada
                rincón del mundo.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-stack-sm md:col-span-6">
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-card">
              <Image
                src={IMAGES.about}
                alt="Artesano trabajando el cuero"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover grayscale brightness-90"
              />
            </div>
            <div className="relative mt-stack-md h-[300px] w-full overflow-hidden rounded-lg shadow-card">
              <Image
                src={IMAGES.product1}
                alt="Forja artesanal de acero"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover grayscale brightness-75"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── Nuestros Pilares ─────────────────────────────────── */}
      <section className="bg-surface-container py-stack-xl">
        <div className="mx-auto max-w-[var(--container-max)] px-margin-mobile text-center md:px-margin-desktop">
          <h2 className="mb-stack-lg font-serif text-headline-lg font-medium leading-headline-lg text-on-surface">
            Nuestros Pilares
          </h2>
          <div className="grid grid-cols-1 gap-stack-lg md:grid-cols-3">
            {PILARES.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-xl bg-surface-container-lowest p-stack-lg shadow-card transition-shadow duration-300 hover:shadow-popover"
              >
                <div className="mb-stack-sm flex justify-center">
                  <Icon size={40} className="text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="mb-stack-sm font-serif text-headline-sm font-medium leading-headline-sm text-on-surface">
                  {title}
                </h3>
                <p className="font-sans text-body-md leading-body-md text-on-surface-variant">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── El Proceso ───────────────────────────────────────── */}
      <section className="mx-auto max-w-[var(--container-max)] overflow-hidden px-margin-mobile py-stack-xl md:px-margin-desktop">
        <div className="flex flex-col gap-gutter md:flex-row">

          <div className="relative h-[400px] w-full overflow-hidden rounded-lg md:h-[600px] md:w-1/2">
            <Image
              src={IMAGES.product2}
              alt="Materiales premium: madera nativa y acero inoxidable"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center rounded-lg bg-surface-container-lowest p-stack-lg shadow-card md:w-1/2">
            <span className="mb-stack-sm block font-sans text-label-lg font-semibold uppercase tracking-[0.2em] text-primary">
              Maestría en Materiales
            </span>
            <h2 className="mb-stack-md font-serif text-headline-lg font-medium leading-headline-lg text-on-surface">
              El Proceso
            </h2>
            <div className="space-y-stack-md">
              {PROCESO.map(({ title, body }, i) => (
                <div key={title} className="flex gap-stack-sm">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-sans text-label-lg font-bold text-on-primary">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="mb-1 font-serif text-headline-sm font-medium text-primary">
                      {title}
                    </h4>
                    <p className="font-sans text-body-md leading-body-md text-on-surface-variant">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Donde ocurre la magia ────────────────────────────── */}
      <section className="mx-auto max-w-[var(--container-max)] px-margin-mobile py-stack-xl text-center md:px-margin-desktop">
        <h2 className="mb-stack-sm font-serif text-headline-lg font-medium leading-headline-lg text-on-surface">
          Donde ocurre la magia
        </h2>
        <p className="mx-auto mb-stack-lg max-w-2xl font-sans text-body-lg leading-body-lg text-on-surface-variant">
          Nuestro taller es un espacio de silencio y concentración, donde el único sonido es el
          roce de la lija sobre la madera y el martilleo rítmico del metal.
        </p>
        <div className="group relative cursor-crosshair overflow-hidden rounded-xl shadow-popover">
          <div className="relative h-[500px] w-full">
            <Image
              src={IMAGES.wholesale}
              alt="Taller artesanal El Campero"
              fill
              sizes="100vw"
              className="object-cover brightness-90 transition-all duration-500 group-hover:brightness-100"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span className="border-2 border-white px-stack-md py-stack-sm font-serif text-headline-sm font-medium text-white">
              Visitar Taller
            </span>
          </div>
        </div>
      </section>

    </main>
  );
}
