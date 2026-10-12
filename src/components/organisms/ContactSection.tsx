'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, CheckCircle } from 'lucide-react';
import { CONTACT } from '@/constants/landing';

const schema = z.object({
  name:    z.string().min(2,  'Ingresá tu nombre completo'),
  email:   z.string().email('El correo no es válido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type FormValues = z.infer<typeof schema>;

const inputClass = (hasError: boolean) =>
  `w-full border-0 border-b-2 bg-transparent px-0 py-2 font-sans text-body-md text-on-surface placeholder:text-outline transition-colors duration-300 ease-out focus:outline-none ${
    hasError
      ? 'border-error focus:border-error'
      : 'border-outline-variant/30 focus:border-primary'
  }`;

export function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(_data: FormValues) {
    // TODO: conectar al backend (server action + Resend)
    await new Promise<void>((resolve) => setTimeout(resolve, 800));
  }

  return (
    <section
      className="bg-surface-container-high py-stack-xl"
      aria-label="Contacto"
      id="contacto"
    >
      <div className="mx-auto grid max-w-[var(--container-max)] grid-cols-1 gap-stack-xl px-margin-mobile md:px-margin-desktop lg:grid-cols-2">

        {/* Info */}
        <div>
          <h2 className="mb-stack-md font-serif text-headline-lg-mobile font-medium leading-headline-lg-mobile md:text-headline-lg md:leading-headline-lg">
            {CONTACT.headline}
          </h2>
          <p className="mb-stack-lg font-sans text-body-lg leading-body-lg text-on-surface-variant">
            {CONTACT.body}
          </p>

          <ul className="space-y-6" role="list">
            <li className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-surface">
                <Mail size={20} strokeWidth={1.5} aria-hidden />
              </div>
              <div>
                <p className="font-sans text-label-sm uppercase tracking-label text-on-surface-variant">Email</p>
                <a href={`mailto:${CONTACT.email}`} className="font-sans text-body-lg text-on-surface transition-colors duration-300 ease-out hover:text-primary">
                  {CONTACT.email}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-surface">
                <Phone size={20} strokeWidth={1.5} aria-hidden />
              </div>
              <div>
                <p className="font-sans text-label-sm uppercase tracking-label text-on-surface-variant">WhatsApp</p>
                <a href={CONTACT.waHref} className="font-sans text-body-lg text-on-surface transition-colors duration-300 ease-out hover:text-primary">
                  {CONTACT.whatsapp}
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Formulario */}
        {isSubmitSuccessful ? (
          <div className="flex flex-col items-center justify-center gap-stack-md rounded-xl bg-surface p-stack-lg shadow-card text-center">
            <CheckCircle size={48} strokeWidth={1.5} className="text-primary" aria-hidden />
            <h3 className="font-serif text-headline-sm font-medium leading-headline-sm">
              ¡Mensaje enviado!
            </h3>
            <p className="font-sans text-body-md leading-body-md text-on-surface-variant">
              Te respondemos a la brevedad.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-6 rounded-xl bg-surface p-stack-lg shadow-card"
          >
            {/* Nombre */}
            <div>
              <label htmlFor="contact-name" className="mb-2 block font-sans text-label-sm uppercase tracking-label text-on-surface-variant">
                Nombre Completo
              </label>
              <input
                id="contact-name"
                type="text"
                autoComplete="name"
                placeholder="Tu nombre"
                aria-describedby={errors.name ? 'error-name' : undefined}
                aria-invalid={!!errors.name}
                className={inputClass(!!errors.name)}
                {...register('name')}
              />
              {errors.name && (
                <p id="error-name" role="alert" className="mt-1 font-sans text-label-sm text-error">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="contact-email" className="mb-2 block font-sans text-label-sm uppercase tracking-label text-on-surface-variant">
                Correo Electrónico
              </label>
              <input
                id="contact-email"
                type="email"
                autoComplete="email"
                placeholder="email@ejemplo.com"
                aria-describedby={errors.email ? 'error-email' : undefined}
                aria-invalid={!!errors.email}
                className={inputClass(!!errors.email)}
                {...register('email')}
              />
              {errors.email && (
                <p id="error-email" role="alert" className="mt-1 font-sans text-label-sm text-error">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Mensaje */}
            <div>
              <label htmlFor="contact-message" className="mb-2 block font-sans text-label-sm uppercase tracking-label text-on-surface-variant">
                Mensaje
              </label>
              <textarea
                id="contact-message"
                rows={4}
                placeholder="¿En qué podemos ayudarte?"
                aria-describedby={errors.message ? 'error-message' : undefined}
                aria-invalid={!!errors.message}
                className={`resize-none ${inputClass(!!errors.message)}`}
                {...register('message')}
              />
              {errors.message && (
                <p id="error-message" role="alert" className="mt-1 font-sans text-label-sm text-error">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-on-surface py-4 font-sans text-label-lg font-semibold uppercase tracking-widest text-surface transition-opacity duration-300 ease-out hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? 'Enviando…' : 'Enviar Mensaje'}
            </button>
          </form>
        )}

      </div>
    </section>
  );
}
