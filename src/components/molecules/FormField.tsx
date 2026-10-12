import { cn } from '@/lib/cn';

export const fieldClass = (hasError: boolean) =>
  cn(
    'w-full border-0 border-b-2 bg-transparent px-0 py-2',
    'font-sans text-body-md text-on-surface placeholder:text-outline',
    'transition-colors duration-300 ease-out focus:outline-none',
    hasError
      ? 'border-error focus:border-error'
      : 'border-outline-variant/30 focus:border-primary',
  );

interface FormFieldProps {
  id:       string;
  label:    string;
  error?:   string;
  children: React.ReactNode;
}

export function FormField({ id, label, error, children }: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block font-sans text-label-sm uppercase tracking-label text-on-surface-variant"
      >
        {label}
      </label>
      {children}
      {error && (
        <p id={`error-${id}`} role="alert" className="mt-1 font-sans text-label-sm text-error">
          {error}
        </p>
      )}
    </div>
  );
}
