import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import type { Product, ProductImage } from '@prisma/client';
import { ButtonLink } from '@/components/atoms/ButtonLink';
import { CATEGORY_LABELS } from '@/constants/products';
import { CONTACT } from '@/constants/landing';

type ProductWithImage = Product & { images: ProductImage[] };

const PLACEHOLDER = '/images/products/set-asado-4.jpg';

interface ProductCardProps {
  product: ProductWithImage;
}

export function ProductCard({ product }: ProductCardProps) {
  const imageUrl = product.images[0]?.url ?? PLACEHOLDER;

  const waHref = `${CONTACT.waHref}?text=${encodeURIComponent(
    `Hola! Me interesa el producto: ${product.name}`,
  )}`;

  return (
    <article className="group overflow-hidden rounded-xl bg-surface shadow-card transition-transform duration-300 ease-out hover:-translate-y-1">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-container">
        <Image
          src={imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      <div className="p-stack-md">
        <span className="mb-2 block font-sans text-label-sm uppercase tracking-label text-on-surface-variant">
          {CATEGORY_LABELS[product.category] ?? product.category}
          {product.variant && ` · ${product.variant}`}
        </span>

        <h2 className="mb-2 font-serif text-headline-sm font-medium leading-headline-sm text-on-surface">
          {product.name}
        </h2>

        <p className="mb-stack-md font-sans text-body-lg font-bold text-primary">
          {product.price != null
            ? `ARS ${product.price.toLocaleString('es-AR')}`
            : 'Consultar precio'}
        </p>

        <ButtonLink
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          size="md"
          className="w-full justify-center"
        >
          <MessageCircle size={18} strokeWidth={1.5} aria-hidden />
          Consultar por WhatsApp
        </ButtonLink>
      </div>
    </article>
  );
}
