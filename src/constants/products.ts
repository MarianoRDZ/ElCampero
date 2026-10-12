export const CATEGORIES = [
  { label: 'Ver Todo',       value: ''           },
  { label: 'Con Cierre',     value: 'con-cierre' },
  { label: 'Eco Pino',       value: 'eco-pino'   },
  { label: 'Rectangulares',  value: 'rectangular'},
] as const;

export const SORT_OPTIONS = [
  { label: 'Novedades',             value: 'novedades'   },
  { label: 'Precio: Menor a Mayor', value: 'precio-asc'  },
  { label: 'Precio: Mayor a Menor', value: 'precio-desc' },
] as const;

export const CATEGORY_LABELS: Record<string, string> = {
  'con-cierre':  'Con Cierre',
  'eco-pino':    'Eco Pino',
  'rectangular': 'Rectangular',
};

export const PRODUCT_COLORS = ['chocolate', 'negro', 'suela'] as const;
export type ProductColor = typeof PRODUCT_COLORS[number];
