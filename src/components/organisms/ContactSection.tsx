'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/atoms/Button';
import { SectionHeading } from '@/components/atoms/SectionHeading';
import { FormField, fieldClass } from '@/components/molecules/FormField';
import { CONTACT } from '@/constants/landing';

const schema = z.object({
  name:    z.string().min(2,  'Ingresá tu nombre completo'),
  email:   z.string().email('El correo no es válido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type FormValues = z.infer<typeof schema>;

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
          <SectionHeading className="mb-stack-md">
            {CONTACT.headline}
          </SectionHeading>
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
            <FormField id="contact-name" label="Nombre Completo" error={errors.name?.message}>
              <input
                id="contact-name"
                type="text"
                autoComplete="name"
                placeholder="Tu nombre"
                aria-describedby={errors.name ? 'error-contact-name' : undefined}
                aria-invalid={!!errors.name}
                className={fieldClass(!!errors.name)}
                {...register('name')}
              />
            </FormField>

            <FormField id="contact-email" label="Correo Electrónico" error={errors.email?.message}>
              <input
                id="contact-email"
                type="email"
                autoComplete="email"
                placeholder="email@ejemplo.com"
                aria-describedby={errors.email ? 'error-contact-email' : undefined}
                aria-invalid={!!errors.email}
                className={fieldClass(!!errors.email)}
                {...register('email')}
              />
            </FormField>

            <FormField id="contact-message" label="Mensaje" error={errors.message?.message}>
              <textarea
                id="contact-message"
                rows={4}
                placeholder="¿En qué podemos ayudarte?"
                aria-describedby={errors.message ? 'error-contact-message' : undefined}
                aria-invalid={!!errors.message}
                className={`resize-none ${fieldClass(!!errors.message)}`}
                {...register('message')}
              />
            </FormField>

            <Button
              type="submit"
              variant="dark"
              size="lg"
              isLoading={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? 'Enviando…' : 'Enviar Mensaje'}
            </Button>
          </form>
        )}

      </div>
    </section>
  );
}
