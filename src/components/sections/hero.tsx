import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ChevronRight } from 'lucide-react';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image-new');

  return (
    <section className="relative h-[80vh] min-h-[500px] md:min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-6 !leading-tight">
            Build, Launch, and Scale Your Next Big Idea
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            An entire toolkit for developers to create amazing applications. LandingFlow handles the complexity so you can focus on your product.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#">
                Start Building Now <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
              <Link href="#features">Explore Features</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
