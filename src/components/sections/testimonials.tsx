import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    id: '1',
    quote: "LandingFlow has been a game-changer for our development process. We've saved countless hours on authentication, allowing us to ship features faster than ever.",
    name: 'Jane Doe',
    title: 'CEO, TechCorp',
    avatarId: 'testimonial-avatar-1',
  },
  {
    id: '2',
    quote: "The security features are top-notch, and the scalability is exactly what we needed. I can't recommend LandingFlow enough for any growing startup.",
    name: 'John Smith',
    title: 'CTO, Innovate Inc.',
    avatarId: 'testimonial-avatar-2',
  },
  {
    id: '3',
    quote: "As a developer, I appreciate the clean API and excellent documentation. It's a joy to work with and has made my life so much easier.",
    name: 'Alex Johnson',
    title: 'Lead Engineer, DevSolutions',
    avatarId: 'testimonial-avatar-3',
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Loved by Teams Worldwide</h2>
          <p className="text-muted-foreground text-lg mb-12">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => {
            const avatar = PlaceHolderImages.find((img) => img.id === testimonial.avatarId);
            return (
              <Card key={testimonial.id} className="flex flex-col">
                <CardContent className="pt-6 flex-grow">
                  <blockquote className="text-muted-foreground italic border-l-2 pl-4">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
                <div className="p-6 pt-0 mt-4 flex items-center gap-4">
                  {avatar && (
                    <Avatar>
                      <AvatarImage src={avatar.imageUrl} alt={testimonial.name} data-ai-hint={avatar.imageHint} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
