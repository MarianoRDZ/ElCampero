import Link from 'next/link';
import { cookies } from 'next/headers';
import { getIronSession } from 'iron-session';
import { redirect } from 'next/navigation';
import { sessionOptions, type SessionData } from '@/lib/session';
import { logoutAction } from '@/app/admin/actions';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getIronSession<SessionData>(await cookies(), sessionOptions);
  if (!session.isLoggedIn) redirect('/admin/login');

  return (
    <div className="min-h-screen bg-surface-container-low">
      <header className="border-b border-outline-variant bg-surface-container-lowest px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link
            href="/admin/products"
            className="font-serif text-xl font-medium text-on-surface hover:text-primary"
          >
            El Campero · Admin
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/admin/products"
              className="font-sans text-label-lg text-on-surface-variant hover:text-on-surface"
            >
              Productos
            </Link>
            <form action={logoutAction}>
              <button
                type="submit"
                className="font-sans text-label-lg text-on-surface-variant hover:text-on-surface"
              >
                Salir
              </button>
            </form>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-8">{children}</main>
    </div>
  );
}
