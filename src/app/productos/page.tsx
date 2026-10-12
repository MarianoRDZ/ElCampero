import { Suspense } from 'react';
import type { Metadata } from 'next';
import { SectionHeading } from '@/components/atoms/SectionHeading';
import { ProductCard } from '@/components/molecules/ProductCard';
import { ProductFilters } from '@/components/organisms/ProductFilters';
import { prisma } from '@/lib/prisma';

export const instant = false;

export const metadata: Metadata = {
  title: 'Productos | El Campero',
  description: 'Sets de asado artesanales en cuero. Fabricación propia, envíos a todo el país.',
};

interface PageProps {
  searchParams: Promise<{ categoria?: string; orden?: string }>;
}

export default async function ProductosPage({ searchParams }: PageProps) {
  const { categoria = '', orden = 'novedades' } = await searchParams;

  const products = await prisma.product.findMany({
    where: {
      available: true,
      ...(categoria ? { category: categoria } : {}),
    },
    orderBy:
      orden === 'precio-asc'  ? { price: 'asc'  } :
      orden === 'precio-desc' ? { price: 'desc' } :
      { createdAt: 'desc' },
    include: {
      images: {
        where:   { color: 'chocolate' },
        orderBy: { order: 'asc' },
        take: 1,
      },
    },
  });

  return (
    <div className="mx-auto max-w-[var(--container-max)] px-margin-mobile py-stack-xl md:px-margin-desktop">

      {/* Header */}
      <section className="mb-stack-xl text-center">
        <span className="mb-stack-sm block font-sans text-label-lg font-semibold uppercase tracking-[0.2em] text-primary">
          Calidad de Herencia
        </span>
        <SectionHeading className="mb-stack-md">
          Nuestra Colección
        </SectionHeading>
        <p className="mx-auto max-w-2xl font-sans text-body-lg leading-body-lg text-on-surface-variant">
          Cada pieza de El Campero es el resultado de décadas de tradición artesanal. Forjamos el acero
          y trabajamos el cuero de manera manual, creando herramientas destinadas a durar toda una vida.
        </p>
      </section>

      {/* Layout */}
      <div className="flex flex-col gap-stack-lg md:flex-row md:gap-gutter">
        <Suspense>
          <ProductFilters />
        </Suspense>

        {products.length > 0 ? (
          <ul className="grid flex-1 grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-3" role="list">
            {products.map((product) => (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="flex-1 py-stack-xl text-center font-sans text-body-lg text-on-surface-variant">
            No hay productos en esta categoría.
          </p>
        )}
      </div>

    </div>
  );
}
