'use server';

import { writeFile, mkdir, unlink } from 'fs/promises';
import path from 'path';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';

export async function updateProduct(
  _prev: { error?: string } | null,
  formData: FormData,
): Promise<{ error?: string }> {
  const id = formData.get('id') as string;
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
    await prisma.product.update({
      where: { id },
      data: { name, slug, category, variant, price, contents, available },
    });
  } catch {
    return { error: 'Error al actualizar el producto.' };
  }

  redirect(`/admin/products/${slug}`);
}

export async function uploadImageAction(formData: FormData): Promise<{ error?: string }> {
  const productId = formData.get('productId') as string;
  const color = formData.get('color') as string;
  const file = formData.get('file') as File | null;

  if (!file || file.size === 0) return { error: 'Seleccioná una imagen.' };

  const ext = file.name.split('.').pop() ?? 'jpg';
  const filename = `${color}-${Date.now()}.${ext}`;
  const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'products', productId);

  await mkdir(uploadDir, { recursive: true });
  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(path.join(uploadDir, filename), buffer);

  const existing = await prisma.productImage.findMany({
    where: { productId, color },
    orderBy: { order: 'desc' },
    take: 1,
  });
  const order = existing[0] ? existing[0].order + 1 : 0;

  await prisma.productImage.create({
    data: {
      productId,
      color,
      url: `/uploads/products/${productId}/${filename}`,
      order,
    },
  });

  revalidatePath('/admin/products');
  return {};
}

export async function deleteImageAction(formData: FormData): Promise<void> {
  const imageId = formData.get('imageId') as string;

  const image = await prisma.productImage.findUnique({ where: { id: imageId } });
  if (!image) return;

  const filePath = path.join(process.cwd(), 'public', image.url);
  try {
    await unlink(filePath);
  } catch {
    // file may have been removed already
  }

  await prisma.productImage.delete({ where: { id: imageId } });
  revalidatePath('/admin/products');
}
