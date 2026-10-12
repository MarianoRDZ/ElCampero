'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle } from 'lucide-react';

const schema = z.object({
  razonSocial: z.string().min(2, 'Ingresá la razón social'),
  cuit:        z.string().min(11, 'Ingresá un CUIT válido'),
  localidad:   z.string().min(2, 'Ingresá la localidad'),
  volumen:     z.string().min(1, 'Seleccioná el volumen estimado'),
  email:       z.string().email('Correo no válido'),
});

type FormValues = z.infer<typeof schema>;

const base =
  'w-full bg-transparent border-0 border-b-2 py-3 font-sans text-body-md text-on-surface placeholder:text-on-surface-variant outline-none focus:ring-0 transition-colors duration-300';
const inputCls    = `${base} border-outline-variant/30 focus:border-primary`;
const inputErrCls = `${base} border-error focus:border-error`;
const labelCls    = 'block font-sans text-label-sm uppercase tracking-[0.1em] text-on-surface-variant mb-2';

export function WholesaleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(_data: FormValues) {
    // TODO: conectar al backend
    await new Promise<void>((r) => setTimeout(r, 800));
  }

  if (isSubmitSuccessful) {
    return (
      <div className="flex flex-col items-center justify-center gap-stack-md py-stack-xl text-center">
        <CheckCircle size={48} strokeWidth={1.5} className="text-primary" aria-hidden />
        <h3 className="font-serif text-headline-sm font-medium text-on-surface">
          ¡Solicitud enviada!
        </h3>
        <p className="font-sans text-body-md text-on-surface-variant">
          Nos contactamos en menos de 24 hs hábiles.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className={labelCls}>Razón Social</label>
          <input
            type="text"
            placeholder="Nombre de la empresa"
            className={errors.razonSocial ? inputErrCls : inputCls}
            {...register('razonSocial')}
          />
          {errors.razonSocial && (
            <p className="mt-1 font-sans text-label-sm text-error">{errors.razonSocial.message}</p>
          )}
        </div>
        <div>
          <label className={labelCls}>CUIT</label>
          <input
            type="text"
            placeholder="00-00000000-0"
            className={errors.cuit ? inputErrCls : inputCls}
            {...register('cuit')}
          />
          {errors.cuit && (
            <p className="mt-1 font-sans text-label-sm text-error">{errors.cuit.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className={labelCls}>Localidad</label>
          <input
            type="text"
            placeholder="Provincia, Ciudad"
            className={errors.localidad ? inputErrCls : inputCls}
            {...register('localidad')}
          />
          {errors.localidad && (
            <p className="mt-1 font-sans text-label-sm text-error">{errors.localidad.message}</p>
          )}
        </div>
        <div>
          <label className={labelCls}>Volumen Estimado</label>
          <select
            className={`appearance-none ${errors.volumen ? inputErrCls : inputCls}`}
            defaultValue=""
            {...register('volumen')}
          >
            <option value="" disabled>Seleccione escala</option>
            <option value="1">10–50 unidades/mes</option>
            <option value="2">50–150 unidades/mes</option>
            <option value="3">Más de 150 unidades/mes</option>
          </select>
          {errors.volumen && (
            <p className="mt-1 font-sans text-label-sm text-error">{errors.volumen.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className={labelCls}>Correo Electrónico</label>
        <input
          type="email"
          autoComplete="email"
          placeholder="contacto@empresa.com"
          className={errors.email ? inputErrCls : inputCls}
          {...register('email')}
        />
        {errors.email && (
          <p className="mt-1 font-sans text-label-sm text-error">{errors.email.message}</p>
        )}
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-tertiary-container py-4 font-sans text-label-lg font-semibold text-on-primary shadow-lg transition-all hover:brightness-90 disabled:opacity-50"
        >
          <Send size={16} aria-hidden />
          {isSubmitting ? 'Enviando…' : 'Enviar solicitud de alianza'}
        </button>
      </div>

    </form>
  );
}
