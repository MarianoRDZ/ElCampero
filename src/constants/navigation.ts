export type NavLink = {
  label: string;
  href:  string;
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio',     href: '/'           },
  { label: 'Productos',  href: '/productos'  },
  { label: 'Nosotros',   href: '/nosotros'   },
  { label: 'Mayoristas', href: '/mayoristas' },
  { label: 'Contacto',   href: '/contacto'   },
];
