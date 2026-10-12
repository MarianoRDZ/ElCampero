export interface Product {
  id:       string;
  name:     string;
  category: string;
  price:    number;
  image:    string;
}

export const CATEGORIES = [
  { label: 'Ver Todo',       value: ''              },
  { label: 'Cuchillería',    value: 'cuchilleria'   },
  { label: 'Tablas',         value: 'tablas'        },
  { label: 'Sets Completos', value: 'sets-completos'},
  { label: 'Accesorios',     value: 'accesorios'    },
] as const;

export const SORT_OPTIONS = [
  { label: 'Novedades',              value: 'novedades'  },
  { label: 'Precio: Menor a Mayor',  value: 'precio-asc' },
  { label: 'Precio: Mayor a Menor',  value: 'precio-desc'},
] as const;

export const PRODUCTS: Product[] = [
  {
    id:       'cuchillo-damasco',
    name:     'Cuchillo Criollo de Acero Damasco',
    category: 'cuchilleria',
    price:    85000,
    image:    '/images/products/cuchillo-damasco.jpg',
  },
  {
    id:       'tabla-algarrobo',
    name:     'Tabla de Algarrobo Premium',
    category: 'tablas',
    price:    42500,
    image:    '/images/products/tabla-algarrobo.jpg',
  },
  {
    id:       'set-asado-4',
    name:     'Set de Asado 4 Piezas',
    category: 'sets-completos',
    price:    110000,
    image:    '/images/products/set-asado-4.jpg',
  },
  {
    id:       'vaso-termico',
    name:     'Vaso Térmico de Cuero',
    category: 'accesorios',
    price:    28900,
    image:    '/images/products/vaso-termico.jpg',
  },
  {
    id:       'delantal-cuero',
    name:     'Delantal de Cuero Vacuno',
    category: 'accesorios',
    price:    54000,
    image:    '/images/products/delantal-cuero.jpg',
  },
];

export function filterAndSort(
  products: Product[],
  categoria: string,
  orden: string,
): Product[] {
  const filtered = categoria
    ? products.filter((p) => p.category === categoria)
    : products;

  if (orden === 'precio-asc')  return [...filtered].sort((a, b) => a.price - b.price);
  if (orden === 'precio-desc') return [...filtered].sort((a, b) => b.price - a.price);
  return filtered;
}
