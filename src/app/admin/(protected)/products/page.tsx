import Link from 'next/link';
import { Plus } from 'lucide-react';
import { prisma } from '@/lib/prisma';
import { CATEGORY_LABELS } from '@/constants/products';

export default async function AdminProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-serif text-headline-sm font-medium text-on-surface">Productos</h2>
        <Link
          href="/admin/products/new"
          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-sans text-label-lg font-semibold text-on-primary hover:opacity-90"
        >
          <Plus size={16} />
          Nuevo producto
        </Link>
      </div>

      <div className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest">
        {products.length === 0 ? (
          <p className="px-4 py-10 text-center font-sans text-label-lg text-on-surface-variant">
            No hay productos todavía.
          </p>
        ) : (
          <table className="w-full font-sans text-label-lg">
            <thead className="border-b border-outline-variant bg-surface-container-low text-left">
              <tr>
                <th className="px-4 py-3 font-semibold text-on-surface-variant">Nombre</th>
                <th className="px-4 py-3 font-semibold text-on-surface-variant">Categoría</th>
                <th className="px-4 py-3 font-semibold text-on-surface-variant">Variante</th>
                <th className="px-4 py-3 font-semibold text-on-surface-variant">Precio</th>
                <th className="px-4 py-3 font-semibold text-on-surface-variant">Estado</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-surface-container-low">
                  <td className="px-4 py-3 font-medium text-on-surface">{product.name}</td>
                  <td className="px-4 py-3 text-on-surface-variant">
                    {CATEGORY_LABELS[product.category] ?? product.category}
                  </td>
                  <td className="px-4 py-3 text-on-surface-variant">
                    {product.variant ?? '—'}
                  </td>
                  <td className="px-4 py-3 text-on-surface-variant">
                    {product.price != null
                      ? `ARS ${product.price.toLocaleString('es-AR')}`
                      : 'Consultar'}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex rounded-full px-2 py-0.5 text-label-sm font-medium ${
                        product.available
                          ? 'bg-primary-fixed text-on-primary-fixed'
                          : 'bg-surface-container text-on-surface-variant'
                      }`}
                    >
                      {product.available ? 'Activo' : 'Oculto'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Link
                      href={`/admin/products/${product.slug}`}
                      className="text-primary hover:underline"
                    >
                      Editar
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
