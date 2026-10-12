import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const products = [
  // ── Con Cierre ──────────────────────────────────────────────
  {
    name:     'Set Con Cierre Simple',
    slug:     'set-con-cierre-simple',
    category: 'con-cierre',
    variant:  'simple',
    contents: JSON.stringify(['Cuchillo', 'Tenedor', 'Plato']),
  },
  {
    name:     'Set Con Cierre Doble',
    slug:     'set-con-cierre-doble',
    category: 'con-cierre',
    variant:  'doble',
    contents: JSON.stringify(['2× Cuchillo', '2× Tenedor', '2× Plato']),
  },

  // ── Eco Pino ────────────────────────────────────────────────
  {
    name:     'Set Eco Pino Simple',
    slug:     'set-eco-pino-simple',
    category: 'eco-pino',
    variant:  'simple',
    contents: JSON.stringify(['Cuchillo', 'Tenedor', 'Plato de Pino 22cm']),
  },

  // ── Rectangulares ───────────────────────────────────────────
  {
    name:     'Rectangular con Elástico Simple',
    slug:     'rectangular-elastico-simple',
    category: 'rectangular',
    variant:  'simple',
    contents: JSON.stringify(['Cuchillo', 'Tenedor', 'Tabla de Pino 27×19cm']),
  },
  {
    name:     'Rectangular con Elástico con Vaso',
    slug:     'rectangular-elastico-con-vaso',
    category: 'rectangular',
    contents: JSON.stringify(['Cuchillo', 'Tenedor', 'Vaso', 'Tabla de Pino 27×19cm']),
  },
  {
    name:     'Rectangular Costurado Simple',
    slug:     'rectangular-costurado-simple',
    category: 'rectangular',
    variant:  'simple',
    contents: JSON.stringify(['Cuchillo', 'Tenedor', 'Vaso', 'Tabla de Pino 27×19cm']),
  },
  {
    name:     'Rectangular Doble',
    slug:     'rectangular-doble',
    category: 'rectangular',
    variant:  'doble',
    contents: JSON.stringify(['2× Cuchillo', '2× Tenedor', '2× Vaso', 'Tabla de Pino 27×19cm']),
  },
  {
    name:     'Rectangular Simple',
    slug:     'rectangular-simple',
    category: 'rectangular',
    variant:  'simple',
    contents: JSON.stringify(['Cuchillo', 'Tenedor', 'Vaso', 'Tabla de Pino 27×19cm']),
  },
];

async function main() {
  console.log('Seeding products...');
  for (const data of products) {
    await prisma.product.upsert({
      where:  { slug: data.slug },
      create: data,
      update: { name: data.name, category: data.category, variant: data.variant, contents: data.contents },
    });
    console.log(`  ✓ ${data.name}`);
  }
  console.log('Done.');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
