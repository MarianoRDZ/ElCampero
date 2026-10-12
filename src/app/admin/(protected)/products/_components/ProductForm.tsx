'use client';

import { useActionState, useRef } from 'react';
import type { Product } from '@prisma/client';
import { CATEGORIES } from '@/constants/products';

type ProductActionFn = (
  prevState: { error?: string } | null,
  formData: FormData,
) => Promise<{ error?: string }>;

interface ProductFormProps {
  product?: Product;
  action: ProductActionFn;
}

const inputCls =
  'w-full rounded-lg border border-outline bg-surface-container-lowest px-3 py-2 font-sans text-label-lg text-on-surface outline-none placeholder:text-on-surface-variant focus:border-primary focus:ring-1 focus:ring-primary';
const labelCls = 'mb-1 block font-sans text-label-lg font-medium text-on-surface';

function slugify(str: string) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function ProductForm({ product, action }: ProductFormProps) {
  const [state, formAction, pending] = useActionState(action, null);
  const slugRef = useRef<HTMLInputElement>(null);

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!product && slugRef.current) {
      slugRef.current.value = slugify(e.target.value);
    }
  }

  return (
    <form action={formAction} className="space-y-5">
      {product && <input type="hidden" name="id" value={product.id} />}

      {state?.error && (
        <div className="rounded-lg bg-error-container px-4 py-3 font-sans text-label-lg text-on-error-container">
          {state.error}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="name">Nombre *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            defaultValue={product?.name}
            onChange={handleNameChange}
            className={inputCls}
          />
        </div>

        <div>
          <label className={labelCls} htmlFor="slug">Slug *</label>
          <input
            id="slug"
            name="slug"
            type="text"
            required
            defaultValue={product?.slug}
            ref={slugRef}
            className={inputCls}
          />
        </div>

        <div>
          <label className={labelCls} htmlFor="category">Categoría *</label>
          <select
            id="category"
            name="category"
            required
            defaultValue={product?.category ?? 'con-cierre'}
            className={inputCls}
          >
            {CATEGORIES.filter((c) => c.value !== '').map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelCls} htmlFor="variant">Variante</label>
          <select
            id="variant"
            name="variant"
            defaultValue={product?.variant ?? ''}
            className={inputCls}
          >
            <option value="">— Sin variante —</option>
            <option value="simple">Simple</option>
            <option value="doble">Doble</option>
          </select>
        </div>

        <div>
          <label className={labelCls} htmlFor="price">Precio (ARS)</label>
          <input
            id="price"
            name="price"
            type="number"
            min="0"
            defaultValue={product?.price ?? ''}
            placeholder="Vacío → 'Consultar precio'"
            className={inputCls}
          />
        </div>

        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="contents">Contenido (uno por línea) *</label>
          <textarea
            id="contents"
            name="contents"
            rows={4}
            required
            defaultValue={
              product ? (JSON.parse(product.contents) as string[]).join('\n') : ''
            }
            placeholder={'Cuchillo\nTenedor\nPlato de Pino 22cm'}
            className={`${inputCls} resize-none`}
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            id="available"
            name="available"
            type="checkbox"
            defaultChecked={product?.available ?? true}
            className="h-4 w-4 rounded border-outline accent-primary"
          />
          <label htmlFor="available" className="font-sans text-label-lg text-on-surface">
            Disponible (visible en la tienda)
          </label>
        </div>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="rounded-lg bg-primary px-6 py-2.5 font-sans text-label-lg font-semibold text-on-primary hover:opacity-90 disabled:opacity-50"
      >
        {pending ? 'Guardando...' : 'Guardar'}
      </button>
    </form>
  );
}
