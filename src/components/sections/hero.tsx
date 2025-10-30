import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ChevronRight } from 'lucide-react';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-dashboard-app');

  return (
    <section className="relative bg-background pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      <div className="absolute top-0 right-0 h-[150%] w-1/2 bg-primary/10 transform -skew-x-12 origin-top-left"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 !leading-tight">
              Build and Launch Your Apps, Faster
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              LandingFlow provides the ultimate toolkit for developers to create, launch, and scale modern web applications with unparalleled speed and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="#">
                  Get Started Free
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#">
                  Request a Demo <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            {heroImage && (
              <div className="relative w-full max-w-2xl">
                 <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent/20 rounded-full filter blur-3xl"></div>
                 <div className="absolute bottom-0 -right-8 w-48 h-48 bg-primary/20 rounded-full filter blur-3xl"></div>
                 <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    width={1200}
                    height={800}
                    className="rounded-lg shadow-2xl relative"
                    data-ai-hint={heroImage.imageHint}
                    priority
                  />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
