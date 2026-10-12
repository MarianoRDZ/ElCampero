export const buttonVariants = {
  primary:   'bg-primary text-on-primary hover:opacity-90',
  secondary: 'bg-transparent text-on-surface border-[1.5px] border-on-surface hover:bg-surface-container-low',
  ghost:     'border-2 border-white text-white hover:bg-white/10',
  cta:       'bg-tertiary text-on-tertiary hover:opacity-90',
  dark:      'bg-on-surface text-surface hover:opacity-90',
} as const;

export const buttonSizes = {
  sm: 'h-9  px-4 text-label-sm font-medium',
  md: 'h-11 px-6 text-label-lg font-semibold tracking-label',
  lg: 'h-14 px-8 text-label-lg font-semibold uppercase tracking-widest',
} as const;

export const buttonBase =
  'inline-flex items-center justify-center gap-2 rounded font-sans whitespace-nowrap ' +
  'transition duration-300 ease-out ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ' +
  'disabled:opacity-50 disabled:cursor-not-allowed';

export type ButtonVariant = keyof typeof buttonVariants;
export type ButtonSize    = keyof typeof buttonSizes;
