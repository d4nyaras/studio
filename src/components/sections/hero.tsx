import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ChevronLeft } from 'lucide-react';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-dashboard-app');

  return (
    <section className="relative bg-background pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      <div className="absolute top-0 left-0 h-[150%] w-1/2 bg-primary/10 transform skew-x-12 origin-top-right"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 !leading-tight">
              برنامه‌های خود را سریع‌تر بسازید و راه‌اندازی کنید
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              لندینگ‌فلو ابزار نهایی را برای توسعه‌دهندگان فراهم می‌کند تا برنامه‌های وب مدرن را با سرعت و کارایی بی‌نظیر ایجاد، راه‌اندازی و مقیاس‌بندی کنند.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="#">
                  شروع رایگان
                </Link>
              </Button>
              <Button size="lg" asChild>
                <Link href="#">
                  درخواست دمو <ChevronLeft className="mr-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-start">
            {heroImage && (
              <div className="relative w-full max-w-2xl">
                 <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/20 rounded-full filter blur-3xl"></div>
                 <div className="absolute bottom-0 -left-8 w-48 h-48 bg-primary/20 rounded-full filter blur-3xl"></div>
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
