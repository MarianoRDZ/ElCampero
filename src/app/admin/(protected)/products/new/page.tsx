import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { ProductForm } from '../_components/ProductForm';
import { createProduct } from './actions';

export default function NewProductPage() {
  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <Link href="/admin/products" className="text-gray-400 hover:text-gray-600">
          <ChevronLeft size={20} />
        </Link>
        <h2 className="text-xl font-semibold text-gray-900">Nuevo producto</h2>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <ProductForm action={createProduct} />
      </div>
    </div>
  );
}
