import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';
import { FeaturesSection } from '@/components/sections/features';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { CtaSection } from '@/components/sections/cta';
import { ContactSection } from '@/components/sections/contact';
import { AiOptimizerSection } from '@/components/sections/ai-optimizer';
import { BlogPreviewSection } from '@/components/sections/blog-preview';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <BlogPreviewSection />
        <AiOptimizerSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
