'use client';

import { type ButtonHTMLAttributes, type Ref } from 'react';
import { cn } from '@/lib/cn';
import {
  buttonBase, buttonVariants, buttonSizes,
  type ButtonVariant, type ButtonSize,
} from './buttonStyles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:   ButtonVariant;
  size?:      ButtonSize;
  isLoading?: boolean;
  ref?:       Ref<HTMLButtonElement>;
}

export function Button({
  ref,
  variant   = 'primary',
  size      = 'md',
  isLoading = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      ref={ref}
      disabled={disabled || isLoading}
      className={cn(buttonBase, buttonVariants[variant], buttonSizes[size], className)}
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
