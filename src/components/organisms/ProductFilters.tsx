'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/cn';
import { CATEGORIES, SORT_OPTIONS } from '@/constants/products';

export function ProductFilters() {
  const router      = useRouter();
  const searchParams = useSearchParams();
  const categoria   = searchParams.get('categoria') ?? '';
  const orden       = searchParams.get('orden')     ?? 'novedades';

  function handleSort(valor: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (valor === 'novedades') {
      params.delete('orden');
    } else {
      params.set('orden', valor);
    }
    router.push(`/productos${params.size ? `?${params}` : ''}`);
  }

  return (
    <aside className="w-full md:w-56 shrink-0 space-y-stack-lg" aria-label="Filtros">

      <div>
        <h3 className="mb-stack-md border-b border-outline-variant pb-2 font-sans text-label-lg font-semibold uppercase tracking-label text-on-surface">
          Categorías
        </h3>
        <ul className="space-y-stack-sm" role="list">
          {CATEGORIES.map(({ label, value }) => {
            const isActive = value === categoria;
            const href = value ? `/productos?categoria=${value}` : '/productos';
            return (
              <li key={value}>
                <Link
                  href={href}
                  className={cn(
                    'flex items-center gap-2 font-sans text-body-md transition-colors duration-300 ease-out hover:text-primary',
                    isActive ? 'font-semibold text-primary' : 'text-on-surface-variant',
                  )}
                >
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                  )}
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <h3 className="mb-stack-md border-b border-outline-variant pb-2 font-sans text-label-lg font-semibold uppercase tracking-label text-on-surface">
          Ordenar por
        </h3>
        <select
          value={orden}
          onChange={(e) => handleSort(e.target.value)}
          className="w-full border-0 border-b-2 border-outline-variant bg-transparent py-2 font-sans text-body-md text-on-surface transition-colors duration-300 ease-out focus:border-primary focus:outline-none"
          aria-label="Ordenar productos"
        >
          {SORT_OPTIONS.map(({ label, value }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>

    </aside>
  );
}
