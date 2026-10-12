'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle } from 'lucide-react';

const schema = z.object({
  name:    z.string().min(2,  'Ingresá tu nombre'),
  email:   z.string().email('Correo no válido'),
  phone:   z.string().optional(),
  subject: z.string().min(2,  'Ingresá el asunto'),
  message: z.string().min(10, 'Mínimo 10 caracteres'),
});

type FormValues = z.infer<typeof schema>;

const base =
  'w-full bg-transparent border-0 border-b-2 py-2 font-sans text-body-md text-on-surface placeholder:text-on-surface-variant outline-none focus:ring-0 transition-colors duration-300';
const inputCls    = `${base} border-outline-variant/30 focus:border-primary`;
const inputErrCls = `${base} border-error focus:border-error`;
const labelCls    = 'font-sans text-label-lg uppercase tracking-[0.1em] text-on-surface-variant';

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(_data: FormValues) {
    // TODO: conectar al backend (server action + Resend)
    await new Promise<void>((resolve) => setTimeout(resolve, 800));
  }

  if (isSubmitSuccessful) {
    return (
      <div className="flex flex-col items-center justify-center gap-stack-md py-stack-xl text-center">
        <CheckCircle size={48} strokeWidth={1.5} className="text-primary" aria-hidden />
        <h3 className="font-serif text-headline-sm font-medium text-on-surface">
          ¡Mensaje enviado!
        </h3>
        <p className="font-sans text-body-md text-on-surface-variant">
          Te respondemos a la brevedad.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-stack-md">

      <div className="grid grid-cols-1 gap-stack-md md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={labelCls}>Nombre</label>
          <input
            type="text"
            autoComplete="name"
            placeholder="Juan Pérez"
            className={errors.name ? inputErrCls : inputCls}
            {...register('name')}
          />
          {errors.name && (
            <p className="font-sans text-label-sm text-error">{errors.name.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelCls}>Email</label>
          <input
            type="email"
            autoComplete="email"
            placeholder="juan@ejemplo.com"
            className={errors.email ? inputErrCls : inputCls}
            {...register('email')}
          />
          {errors.email && (
            <p className="font-sans text-label-sm text-error">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-stack-md md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={labelCls}>Teléfono</label>
          <input
            type="tel"
            autoComplete="tel"
            placeholder="+54 11 ..."
            className={inputCls}
            {...register('phone')}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelCls}>Asunto</label>
          <input
            type="text"
            placeholder="Consulta sobre forja"
            className={errors.subject ? inputErrCls : inputCls}
            {...register('subject')}
          />
          {errors.subject && (
            <p className="font-sans text-label-sm text-error">{errors.subject.message}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className={labelCls}>Mensaje</label>
        <textarea
          rows={4}
          placeholder="Escribí aquí tu consulta..."
          className={`resize-none ${errors.message ? inputErrCls : inputCls}`}
          {...register('message')}
        />
        {errors.message && (
          <p className="font-sans text-label-sm text-error">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-stack-sm w-full rounded-lg bg-primary-container py-stack-sm font-sans text-label-lg font-semibold text-on-primary-container transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {isSubmitting ? 'Enviando…' : 'Enviar Mensaje'}
      </button>

    </form>
  );
}
