import { Mail, Phone } from 'lucide-react';
import { CONTACT } from '@/constants/landing';

export function ContactSection() {
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
                <a href={`mailto:${CONTACT.email}`} className="font-sans text-body-lg text-on-surface hover:text-primary transition-colors duration-300 ease-out">
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
                <a href={CONTACT.waHref} className="font-sans text-body-lg text-on-surface hover:text-primary transition-colors duration-300 ease-out">
                  {CONTACT.whatsapp}
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Formulario — acción pendiente conectar al backend */}
        <form className="space-y-6 rounded-xl bg-surface p-stack-lg shadow-card" noValidate>
          <div>
            <label htmlFor="contact-name" className="mb-2 block font-sans text-label-sm uppercase tracking-label text-on-surface-variant">
              Nombre Completo
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Tu nombre"
              className="w-full border-0 border-b-2 border-outline-variant/30 bg-transparent px-0 py-2 font-sans text-body-md text-on-surface placeholder:text-outline transition-colors duration-300 ease-out focus:border-primary focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="mb-2 block font-sans text-label-sm uppercase tracking-label text-on-surface-variant">
              Correo Electrónico
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="email@ejemplo.com"
              className="w-full border-0 border-b-2 border-outline-variant/30 bg-transparent px-0 py-2 font-sans text-body-md text-on-surface placeholder:text-outline transition-colors duration-300 ease-out focus:border-primary focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="mb-2 block font-sans text-label-sm uppercase tracking-label text-on-surface-variant">
              Mensaje
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              placeholder="¿En qué podemos ayudarte?"
              className="w-full resize-none border-0 border-b-2 border-outline-variant/30 bg-transparent px-0 py-2 font-sans text-body-md text-on-surface placeholder:text-outline transition-colors duration-300 ease-out focus:border-primary focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-on-surface py-4 font-sans text-label-lg font-semibold uppercase tracking-widest text-surface transition-opacity duration-300 ease-out hover:opacity-90"
          >
            Enviar Mensaje
          </button>
        </form>

      </div>
    </section>
  );
}
