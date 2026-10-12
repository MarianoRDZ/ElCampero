import Link, { type LinkProps } from 'next/link';
import { cn } from '@/lib/cn';
import {
  buttonBase, buttonVariants, buttonSizes,
  type ButtonVariant, type ButtonSize,
} from './buttonStyles';

interface ButtonLinkProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Link>, 'className'> {
  variant?:   ButtonVariant;
  size?:      ButtonSize;
  className?: string;
  children:   React.ReactNode;
}

export function ButtonLink({
  variant   = 'primary',
  size      = 'md',
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(buttonBase, buttonVariants[variant], buttonSizes[size], className)}
      {...props}
    >
      {children}
    </Link>
  );
}
