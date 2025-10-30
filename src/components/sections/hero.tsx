import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Streamline Your Workflow,
              <br />
              <span className="text-primary">Unlock Your Potential</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
              LandingFlow provides the tools you need to build secure, scalable, and user-friendly applications with ease. Focus on your product, we'll handle the flow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" asChild>
                <Link href="#contact">Get a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#">Start for Free</Link>
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={1200}
                height={800}
                className="rounded-lg shadow-2xl"
                data-ai-hint={heroImage.imageHint}
                priority
              />
            )}
             <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
