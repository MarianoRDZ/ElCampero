import { NAV_LINKS } from './navigation';

export const FOOTER_TAGLINE =
  'Tradición Criolla en cada forja. Calidad artesanal para el rito más argentino.';

export const FOOTER_LEGAL_LINKS = [
  { label: 'Medios de Pago',         href: '/medios-de-pago' },
  { label: 'Términos y Condiciones', href: '/terminos'        },
];

export const FOOTER_COLUMNS = [
  { title: 'Navegación', links: NAV_LINKS          },
  { title: 'Legales',    links: FOOTER_LEGAL_LINKS },
] as const;

export const FOOTER_SOCIAL = [
  { label: 'Instagram', href: 'https://www.instagram.com/elcampero.ar' },
  { label: 'Facebook',  href: '#' },
  { label: 'WhatsApp',  href: '#' },
];

export const FOOTER_COPYRIGHT = `© ${new Date().getFullYear()} El Campero. Tradición Criolla en cada forja.`;
