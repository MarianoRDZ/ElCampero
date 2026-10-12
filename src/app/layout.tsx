import type { Metadata } from "next";
import { EB_Garamond, Hanken_Grotesk } from "next/font/google";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import { CartDrawer } from "@/components/organisms/CartDrawer";
import { ReduxProvider } from "@/components/providers/ReduxProvider";
import "./globals.css";

const serif = EB_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sans = Hanken_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "El Campero | Sets de Asado Artesanales",
  description:
    "Sets de asado artesanales con madera de algarrobo y acero inoxidable. Fabricación propia. Envíos a todo el país.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-surface text-charcoal">
        <ReduxProvider>
          <Navbar />
          <CartDrawer />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
