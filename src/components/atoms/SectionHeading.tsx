import { cn } from '@/lib/cn';

interface SectionHeadingProps {
  children:   React.ReactNode;
  as?:        'h1' | 'h2' | 'h3';
  className?: string;
}

export function SectionHeading({ children, as: Tag = 'h2', className }: SectionHeadingProps) {
  return (
    <Tag
      className={cn(
        'font-serif font-medium',
        'text-headline-lg-mobile leading-headline-lg-mobile',
        'md:text-headline-lg md:leading-headline-lg',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
