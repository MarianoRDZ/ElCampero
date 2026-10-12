import { HeroSection }         from '@/components/organisms/HeroSection';
import { BenefitsStrip }       from '@/components/organisms/BenefitsStrip';
import { WholesaleSection }    from '@/components/organisms/WholesaleSection';
import { AboutSection }        from '@/components/organisms/AboutSection';
import { TestimonialsSection } from '@/components/organisms/TestimonialsSection';
import { FaqSection }          from '@/components/organisms/FaqSection';
import { ContactSection }      from '@/components/organisms/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsStrip />
      {/* FeaturedProducts — pendiente Bloque 2 (catálogo + backend) */}
      <WholesaleSection />
      <AboutSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
