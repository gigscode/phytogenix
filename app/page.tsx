import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { ProductsSection } from '@/components/products-section';
import { CTASection } from '@/components/cta-section';
import { Footer } from '@/components/footer';
import { AboutSection } from '@/components/about-us';

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      {/* <Features /> */}
      <ProductsSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </main>
  );
}
