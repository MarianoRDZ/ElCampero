'use server';

import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';

export async function createProduct(
  _prev: { error?: string } | null,
  formData: FormData,
): Promise<{ error?: string }> {
  const name = formData.get('name') as string;
  const slug = formData.get('slug') as string;
  const category = formData.get('category') as string;
  const variant = (formData.get('variant') as string) || null;
  const priceRaw = formData.get('price') as string;
  const price = priceRaw ? parseInt(priceRaw, 10) : null;
  const contentsRaw = formData.get('contents') as string;
  const contents = JSON.stringify(
    contentsRaw.split('\n').map((l) => l.trim()).filter(Boolean),
  );
  const available = formData.get('available') === 'on';

  try {
    await prisma.product.create({
      data: { name, slug, category, variant, price, contents, available },
    });
  } catch (e) {
    const err = e as { code?: string };
    if (err.code === 'P2002') return { error: 'Ya existe un producto con ese slug.' };
    return { error: 'Error al crear el producto.' };
  }

  redirect(`/admin/products/${slug}`);
}
