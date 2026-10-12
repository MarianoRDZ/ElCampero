'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Trash2, Upload } from 'lucide-react';
import type { Product, ProductImage } from '@prisma/client';
import { PRODUCT_COLORS, type ProductColor } from '@/constants/products';

interface ImageManagerProps {
  product: Product;
  images: ProductImage[];
  uploadAction: (formData: FormData) => Promise<{ error?: string }>;
  deleteAction: (formData: FormData) => Promise<void>;
}

export function ImageManager({ product, images, uploadAction, deleteAction }: ImageManagerProps) {
  const router = useRouter();

  return (
    <div className="space-y-6">
      {PRODUCT_COLORS.map((color) => (
        <div key={color}>
          <h4 className="mb-3 font-sans text-label-sm font-semibold uppercase tracking-label text-on-surface-variant">
            {color}
          </h4>
          <div className="flex flex-wrap gap-3">
            {images
              .filter((img) => img.color === color)
              .map((img) => (
                <ImageTile
                  key={img.id}
                  image={img}
                  deleteAction={deleteAction}
                  onDeleted={() => router.refresh()}
                />
              ))}
            <UploadButton
              productId={product.id}
              color={color}
              uploadAction={uploadAction}
              onUploaded={() => router.refresh()}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function ImageTile({
  image,
  deleteAction,
  onDeleted,
}: {
  image: ProductImage;
  deleteAction: (formData: FormData) => Promise<void>;
  onDeleted: () => void;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <div className="relative">
      <div
        className={`relative h-24 w-24 overflow-hidden rounded-lg border border-outline-variant transition-opacity ${
          isPending ? 'opacity-40' : ''
        }`}
      >
        <Image src={image.url} alt="" fill className="object-cover" />
      </div>
      <button
        type="button"
        disabled={isPending}
        onClick={() => {
          const fd = new FormData();
          fd.append('imageId', image.id);
          startTransition(async () => {
            await deleteAction(fd);
            onDeleted();
          });
        }}
        className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-error text-on-error hover:opacity-90 disabled:opacity-50"
      >
        <Trash2 size={10} />
      </button>
    </div>
  );
}

function UploadButton({
  productId,
  color,
  uploadAction,
  onUploaded,
}: {
  productId: string;
  color: ProductColor;
  uploadAction: (formData: FormData) => Promise<{ error?: string }>;
  onUploaded: () => void;
}) {
  const [error, setError] = useState<string>();
  const [isPending, startTransition] = useTransition();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const fd = new FormData();
    fd.append('productId', productId);
    fd.append('color', color);
    fd.append('file', file);

    startTransition(async () => {
      setError(undefined);
      const result = await uploadAction(fd);
      if (result?.error) {
        setError(result.error);
      } else {
        onUploaded();
      }
      e.target.value = '';
    });
  }

  return (
    <div>
      <label
        className={`flex h-24 w-24 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border-2 border-dashed transition-colors ${
          isPending
            ? 'border-outline-variant text-on-surface-variant opacity-50'
            : 'border-outline text-on-surface-variant hover:border-primary hover:text-primary'
        }`}
      >
        <Upload size={18} />
        <span className="font-sans text-label-sm">{isPending ? '...' : 'Subir'}</span>
        <input
          type="file"
          accept="image/*"
          className="sr-only"
          disabled={isPending}
          onChange={handleChange}
        />
      </label>
      {error && (
        <p className="mt-1 font-sans text-label-sm text-on-error-container">{error}</p>
      )}
    </div>
  );
}
