import { Hero } from '@/components/hero';
import { ProductsSection } from '@/components/products-section';
import { ProcessSection } from '@/components/process-section';
import { FAQSection } from '@/components/faq-section';
import { CTASection } from '@/components/cta-section';
import { Footer } from '@/components/footer';
import { AboutSection } from '@/components/about-us';
import { ContactSection } from '@/components/contact-section';

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <ProductsSection />
      <AboutSection />
      <ProcessSection />
      <CTASection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </main>
  );
}


