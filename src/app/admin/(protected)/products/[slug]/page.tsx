import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { ProductForm } from '../_components/ProductForm';
import { ImageManager } from '../_components/ImageManager';
import { updateProduct, uploadImageAction, deleteImageAction } from './actions';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function EditProductPage({ params }: PageProps) {
  const { slug } = await params;

  const product = await prisma.product.findUnique({
    where: { slug },
    include: { images: { orderBy: { order: 'asc' } } },
  });

  if (!product) notFound();

  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <Link href="/admin/products" className="text-gray-400 hover:text-gray-600">
          <ChevronLeft size={20} />
        </Link>
        <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
      </div>

      <div className="space-y-8">
        <section className="rounded-xl border border-gray-200 bg-white p-6">
          <h3 className="mb-5 text-base font-semibold text-gray-900">Datos del producto</h3>
          <ProductForm product={product} action={updateProduct} />
        </section>

        <section className="rounded-xl border border-gray-200 bg-white p-6">
          <h3 className="mb-5 text-base font-semibold text-gray-900">Imágenes por color</h3>
          <ImageManager
            product={product}
            images={product.images}
            uploadAction={uploadImageAction}
            deleteAction={deleteImageAction}
          />
        </section>
      </div>
    </div>
  );
}
