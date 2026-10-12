'use client';

import { type ButtonHTMLAttributes, type Ref } from 'react';
import { cn } from '@/lib/cn';

const variants = {
  primary:
    'bg-primary-container text-on-primary hover:bg-primary',
  secondary:
    'bg-transparent text-on-surface border-[1.5px] border-on-surface hover:bg-surface-container-low',
  cta:
    'bg-tertiary text-on-tertiary hover:bg-tertiary/90',
} as const;

const sizes = {
  sm: 'h-9  px-4  text-label-sm  font-medium',
  md: 'h-11 px-6  text-label-lg  font-semibold tracking-label',
  lg: 'h-14 px-8  text-body-lg   font-semibold',
} as const;

type Variant = keyof typeof variants;
type Size    = keyof typeof sizes;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:   Variant;
  size?:      Size;
  isLoading?: boolean;
  ref?:       Ref<HTMLButtonElement>;
}

export function Button({
  ref,
  variant    = 'primary',
  size       = 'md',
  isLoading  = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      ref={ref}
      disabled={disabled || isLoading}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded font-sans whitespace-nowrap',
        'transition-colors duration-300 ease-out',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {isLoading && (
        <span
          aria-hidden
          className="h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-current border-t-transparent"
        />
      )}
      {children}
    </button>
  );
}
