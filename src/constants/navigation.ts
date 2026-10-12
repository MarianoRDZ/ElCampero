export type NavLink = {
  label: string;
  href:  string;
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Productos',  href: '/productos'  },
  { label: 'Nosotros',   href: '/nosotros'   },
  { label: 'Mayoristas', href: '/mayoristas' },
  { label: 'Contacto',   href: '/contacto'   },
];
