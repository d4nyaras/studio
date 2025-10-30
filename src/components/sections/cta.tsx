import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <section id="cta" className="py-20 md:py-24 bg-primary/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
          Ready to Build Better?
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of developers and businesses using LandingFlow to power their applications.
        </p>
        <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="#">Start Your Free Trial</Link>
        </Button>
      </div>
    </section>
  );
}
