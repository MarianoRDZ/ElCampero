'use client';

import { useActionState } from 'react';
import { loginAction } from './actions';

export default function LoginPage() {
  const [state, action, pending] = useActionState(loginAction, null);

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface-container-low">
      <div className="w-full max-w-sm rounded-xl bg-surface-container-lowest p-8 shadow-popover">
        <h1 className="mb-6 text-center font-serif text-headline-sm font-medium text-on-surface">
          El Campero · Admin
        </h1>

        <form action={action} className="space-y-4">
          <div>
            <label
              className="mb-1 block font-sans text-label-lg font-medium text-on-surface"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full rounded-lg border border-outline px-3 py-2 font-sans text-label-lg text-on-surface outline-none placeholder:text-on-surface-variant focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          <div>
            <label
              className="mb-1 block font-sans text-label-lg font-medium text-on-surface"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="w-full rounded-lg border border-outline px-3 py-2 font-sans text-label-lg text-on-surface outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          {state?.error && (
            <p className="rounded-lg bg-error-container px-3 py-2 font-sans text-label-lg text-on-error-container">
              {state.error}
            </p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-lg bg-primary px-4 py-2.5 font-sans text-label-lg font-semibold text-on-primary hover:opacity-90 disabled:opacity-50"
          >
            {pending ? 'Ingresando...' : 'Ingresar'}
          </button>
        </form>
      </div>
    </div>
  );
}
