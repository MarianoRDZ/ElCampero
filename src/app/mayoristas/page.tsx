import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Banknote, Truck, Stamp, Headphones,
  FileText, Download, ShieldCheck, Award,
} from 'lucide-react';
import { IMAGES } from '@/constants/images';
import { WholesaleForm } from './_components/WholesaleForm';

export const metadata: Metadata = {
  title: 'Mayoristas | El Campero',
  description: 'Programa B2B premium. Condiciones exclusivas para distribuidores y comercios que valoran la calidad artesanal.',
};

const BENEFICIOS = [
  {
    icon:  Banknote,
    title: 'Precios Diferenciados',
    body:  'Margen de ganancia competitivo con escalas de descuento según volumen de compra mensual.',
  },
  {
    icon:  Truck,
    title: 'Envíos Prioritarios',
    body:  'Logística acelerada y despachos directos de fábrica para asegurar su stock en todo momento.',
  },
  {
    icon:  Stamp,
    title: 'Grabado Láser',
    body:  'Personalización de piezas con su logo corporativo o marcas de sus clientes finales.',
  },
  {
    icon:  Headphones,
    title: 'Soporte Comercial',
    body:  'Ejecutivo de cuentas dedicado y material de marketing digital para sus puntos de venta.',
  },
] as const;

const PROCESO = [
  { n: '01', label: 'Solicitud',  body: 'Complete el formulario con sus datos fiscales y comerciales.' },
  { n: '02', label: 'Validación', body: 'Nuestro equipo revisa su perfil comercial en menos de 24 hs hábiles.' },
  { n: '03', label: 'Cotización', body: 'Acceso a nuestra plataforma B2B con lista de precios actualizada.' },
  { n: '04', label: 'Despacho',   body: 'Preparación artesanal y envío por transporte prioritario.' },
] as const;

const CHECKLIST = [
  { icon: ShieldCheck, text: 'Stock permanente garantizado' },
  { icon: Award,       text: 'Certificado de autenticidad en cada pieza' },
] as const;

export default function MayoristasPage() {
  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative flex h-[600px] items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.wholesale}
            alt="Taller artesanal El Campero"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-[60%] grayscale-[20%]"
          />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[var(--container-max)] px-margin-mobile md:px-margin-desktop">
          <div className="max-w-2xl text-white">
            <span className="mb-4 block font-sans text-label-lg font-semibold uppercase tracking-widest text-primary-fixed">
              Programa B2B Premium
            </span>
            <h1 className="mb-stack-md font-serif text-headline-lg-mobile font-medium leading-tight md:text-display-lg">
              Alianzas Mayoristas
            </h1>
            <p className="mb-stack-lg font-sans text-body-lg leading-body-lg opacity-90">
              Lleve la tradición criolla y la excelencia del acero forjado a su clientela. Ofrecemos
              condiciones exclusivas para distribuidores que valoran la calidad suprema y el diseño
              de autor.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#formulario"
                className="flex items-center gap-2 rounded-lg bg-primary-container px-stack-lg py-4 font-sans text-label-lg font-semibold text-white transition-all hover:brightness-110"
              >
                <FileText size={18} aria-hidden />
                Aplicar ahora
              </a>
              <button
                type="button"
                className="flex items-center gap-2 rounded-lg border-2 border-white px-stack-lg py-4 font-sans text-label-lg font-semibold text-white transition-all hover:bg-white hover:text-primary"
              >
                <Download size={18} aria-hidden />
                Descargar Catálogo Mayorista PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Beneficios Exclusivos ─────────────────────────────── */}
      <section className="mx-auto max-w-[var(--container-max)] px-margin-mobile py-stack-xl md:px-margin-desktop">
        <div className="mb-stack-xl text-center">
          <h2 className="mb-4 font-serif text-headline-md font-medium leading-headline-md text-on-surface">
            Beneficios Exclusivos
          </h2>
          <div className="mx-auto h-1 w-24 bg-primary opacity-30" />
        </div>
        <div className="grid grid-cols-1 gap-stack-lg sm:grid-cols-2 lg:grid-cols-4">
          {BENEFICIOS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group flex h-full flex-col rounded-xl border border-surface-variant bg-surface-container-lowest p-stack-lg shadow-[0_20px_40px_rgba(28,28,28,0.04)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-fixed text-primary">
                <Icon size={28} strokeWidth={1.5} aria-hidden />
              </div>
              <h3 className="mb-3 font-serif text-headline-sm font-medium leading-headline-sm text-on-surface">
                {title}
              </h3>
              <p className="font-sans text-body-md leading-body-md text-on-surface-variant">
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Proceso de Compra ─────────────────────────────────── */}
      <section className="bg-surface-container py-stack-xl">
        <div className="mx-auto max-w-[var(--container-max)] px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 items-center gap-gutter md:grid-cols-12">

            <div className="md:col-span-4">
              <h2 className="mb-stack-md font-serif text-headline-md font-medium leading-headline-md text-on-surface">
                Proceso de Compra Paso a Paso
              </h2>
              <p className="font-sans text-body-lg leading-body-lg text-on-surface-variant">
                Hemos simplificado nuestra logística para que su negocio nunca se detenga. Un
                camino claro desde la solicitud hasta la góndola.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-stack-md sm:grid-cols-2 md:col-span-8">
              {PROCESO.map(({ n, label, body }) => (
                <div key={n} className="flex items-start gap-4 rounded-xl bg-surface p-6">
                  <span className="select-none font-serif text-display-lg font-medium leading-none text-primary/10">
                    {n}
                  </span>
                  <div>
                    <h4 className="mb-1 font-sans text-label-lg font-semibold uppercase text-primary">
                      {label}
                    </h4>
                    <p className="font-sans text-body-md leading-body-md text-on-surface">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Formulario de Alianza ─────────────────────────────── */}
      <section
        id="formulario"
        className="mx-auto grid max-w-[var(--container-max)] grid-cols-1 items-center gap-stack-xl px-margin-mobile py-stack-xl md:px-margin-desktop lg:grid-cols-2"
      >
        <div>
          <h2 className="mb-stack-md font-serif text-headline-md font-medium leading-headline-md text-on-surface">
            Comience su alianza con El Campero
          </h2>
          <p className="mb-stack-lg font-sans text-body-lg leading-body-lg text-on-surface-variant">
            Complete los datos de su empresa para recibir nuestra propuesta comercial y catálogo
            mayorista. Estamos listos para potenciar su negocio con piezas de valor incalculable.
          </p>
          <ul className="space-y-4">
            {CHECKLIST.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-4 text-on-surface-variant">
                <Icon size={20} strokeWidth={1.5} className="shrink-0 text-primary" aria-hidden />
                <span className="font-sans text-body-md">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-surface-variant bg-surface-container-lowest p-8 shadow-[0_30px_60px_rgba(28,28,28,0.06)] md:p-12">
          <WholesaleForm />
        </div>
      </section>

      {/* ── Banner Cierre ─────────────────────────────────────── */}
      <section className="mx-auto mb-stack-xl max-w-[var(--container-max)] px-margin-mobile md:px-margin-desktop">
        <div className="relative aspect-[21/9] overflow-hidden rounded-2xl">
          <Image
            src={IMAGES.product1}
            alt="Colección corporativa El Campero"
            fill
            sizes="100vw"
            className="object-cover brightness-[70%]"
          />
          <div className="relative z-10 flex h-full flex-col items-center justify-center gap-stack-md px-6 text-center text-white">
            <h3 className="font-serif text-headline-md font-medium leading-headline-md">
              Calidad que Trasciende Generaciones
            </h3>
            <Link
              href="/productos"
              className="rounded-lg bg-white px-stack-lg py-3 font-sans text-label-lg font-semibold text-on-surface transition-all hover:bg-primary-fixed"
            >
              Ver Colección Corporativa
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
