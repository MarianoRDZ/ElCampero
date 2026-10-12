import { Truck, Paintbrush, Store, Headphones } from 'lucide-react';

export const HERO = {
  eyebrow:      'Tradición & Calidad',
  headline:     'Sets de Asado Premium para los Verdaderos Parrilleros',
  body:         'Regalos únicos y productos de alta calidad para disfrutar la tradición del asado argentino con la elegancia que tu fuego merece.',
  ctaPrimary:   { label: 'Ver Productos',        href: '/productos'          },
  ctaSecondary: { label: 'Comprar por WhatsApp', href: 'https://wa.me/elcampero' },
} as const;

export const BENEFITS = [
  { icon: Truck,       title: 'Envíos a todo el país',    body: 'Llegamos a cada rincón de la Argentina.'              },
  { icon: Paintbrush,  title: 'Productos artesanales',    body: 'Cada pieza es única y hecha a mano.'                  },
  { icon: Store,       title: 'Venta mayorista',          body: 'Oportunidades exclusivas para comercios.'             },
  { icon: Headphones,  title: 'Atención personalizada',   body: 'Asesoramiento directo en cada compra.'               },
] as const;

export const WHOLESALE = {
  eyebrow: 'Alianzas Comerciales',
  headline: 'Venta Mayorista para Comercios & Regalos Empresariales',
  body:     'Ofrecemos soluciones personalizadas para tu local o empresa. Calidad garantizada en grandes volúmenes con la misma atención al detalle que una pieza única.',
  perks: [
    'Descuentos exclusivos por volumen',
    'Personalización con logo (láser o grabado)',
    'Catálogo digital actualizado mensualmente',
    'Envíos prioritarios a todo el país',
  ],
  cta: { label: 'Solicitar Catálogo Mayorista', href: 'https://wa.me/elcampero' },
} as const;

export const ABOUT = {
  eyebrow:  'Nuestra Historia',
  headline: 'Pasión por el Asado Argentino',
  paragraphs: [
    'El Campero nació de una mesa familiar, de esos domingos donde el fuego es el centro de todo. Entendemos que el asado no es solo comida, es un ritual.',
    'Nuestra misión es elevar esa experiencia. Seleccionamos los mejores materiales —acero inoxidable, maderas nativas y cueros curtidos artesanalmente— para crear piezas que no solo funcionen a la perfección, sino que se conviertan en herencia.',
  ],
  quote: '"Tradición criolla en cada forja."',
} as const;

export const TESTIMONIALS = [
  {
    stars: 5,
    body:   '"Compré un set premium para regalar y quedé como un rey. La presentación y la calidad de los cuchillos es realmente de otro nivel."',
    author: 'Javier M., Buenos Aires',
  },
  {
    stars: 5,
    body:   '"La tabla de madera es eterna. Se nota que cuidan cada detalle en la fabricación. Ya pedí dos más para mis hermanos."',
    author: 'Ricardo S., Córdoba',
  },
  {
    stars: 5,
    body:   '"Excelente atención mayorista. El proceso fue muy simple y los productos llegaron impecables a mi local en Neuquén."',
    author: 'Mariana P., Neuquén',
  },
  {
    stars: 5,
    body:   '"Los cuchillos tienen un filo impresionante y el mango es muy cómodo. Se nota que están hechos para durar toda una vida."',
    author: 'Sebastián L., Rosario',
  },
  {
    stars: 5,
    body:   '"Lo regalé en un casamiento y fue el presente más comentado de la noche. Envolvieron todo perfecto, llegó como de joyería."',
    author: 'Claudia R., Mendoza',
  },
  {
    stars: 5,
    body:   '"Tengo sets de otras marcas pero ninguno se compara. El acero inoxidable es de primera, ya lleva tres años de uso intenso."',
    author: 'Gustavo T., Santa Fe',
  },
  {
    stars: 5,
    body:   '"Pedí personalización con el nombre de mi viejo y quedó espectacular. Lloró cuando lo vio, no exagero."',
    author: 'Nicolás F., La Plata',
  },
  {
    stars: 5,
    body:   '"Como restaurante compramos al por mayor y la calidad es consistente en todos los sets. Muy recomendables para profesionales."',
    author: 'Hernán V., Parrilla Don Julio',
  },
  {
    stars: 5,
    body:   '"El envío fue rapidísimo y el packaging protegió todo perfecto. El asador llegó como si lo hubieran enviado en mano."',
    author: 'Florencia B., Tucumán',
  },
  {
    stars: 5,
    body:   '"Atención de diez. Me asesoraron para elegir el set adecuado para el presupuesto que tenía. Genuinamente querían ayudarme."',
    author: 'Andrés M., Salta',
  },
  {
    stars: 5,
    body:   '"La madera de la tabla tiene un olor increíble y el acabado es impecable. Parece una obra de arte más que un utensilio."',
    author: 'Patricia G., Mar del Plata',
  },
  {
    stars: 5,
    body:   '"Cuatro Navidades regalando El Campero a distintos familiares. Nunca me fallaron, siempre el mismo lujo y la misma emoción."',
    author: 'Diego A., San Juan',
  },
] as const;

export const FAQ = [
  {
    question: '¿Hacen envíos a todo el país?',
    answer:   'Sí, realizamos envíos a todas las provincias a través de Correo Argentino y transportes privados según la necesidad del cliente.',
  },
  {
    question: '¿Cuánto demora la entrega?',
    answer:   'El despacho se realiza dentro de las 48hs hábiles. El tiempo de llegada depende de tu ubicación, generalmente entre 3 y 7 días hábiles.',
  },
  {
    question: '¿Venden al por mayor?',
    answer:   '¡Exacto! Tenemos una línea específica para venta mayorista con precios competitivos y mínimos de compra accesibles para emprendedores y locales.',
  },
  {
    question: '¿Se puede personalizar el producto?',
    answer:   'Ofrecemos servicio de grabado láser para nombres o logos en tablas y cabos de cuchillos. Ideal para regalos de empresa o fechas especiales.',
  },
] as const;

export const CONTACT = {
  headline: 'Estamos para ayudarte',
  body:     '¿Tenés alguna consulta sobre un producto o querés un presupuesto mayorista personalizado? Escribinos y te responderemos a la brevedad.',
  email:    'contacto@elcampero.com',
  whatsapp: '+54 11 1234-5678',
  waHref:   'https://wa.me/elcampero',
} as const;
