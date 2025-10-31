import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    id: '1',
    quote: "لندینگ‌فلو برای فرآیند توسعه ما یک تغییردهنده بازی بوده است. ما ساعت‌های بی‌شماری را در زمینه احراز هویت صرفه‌جویی کرده‌ایم که به ما امکان می‌دهد ویژگی‌ها را سریع‌تر از همیشه عرضه کنیم.",
    name: 'سارا رضایی',
    title: 'مدیرعامل، تک‌کورپ',
    avatarId: 'testimonial-avatar-1',
  },
  {
    id: '2',
    quote: "ویژگی‌های امنیتی درجه یک هستند و مقیاس‌پذیری دقیقاً همان چیزی است که ما نیاز داشتیم. من لندینگ‌فلو را به هر استارتاپ در حال رشدی به شدت توصیه می‌کنم.",
    name: 'علی احمدی',
    title: 'مدیر ارشد فناوری، نوآوران',
    avatarId: 'testimonial-avatar-2',
  },
  {
    id: '3',
    quote: "به عنوان یک توسعه‌دهنده، از API تمیز و مستندات عالی آن قدردانی می‌کنم. کار با آن لذت‌بخش است و زندگی من را بسیار آسان‌تر کرده است.",
    name: 'مریم محمدی',
    title: 'مهندس ارشد، راه‌حل‌های توسعه',
    avatarId: 'testimonial-avatar-3',
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">محبوب تیم‌ها در سراسر جهان</h2>
          <p className="text-muted-foreground text-lg mb-12">
            فقط به حرف ما اکتفا نکنید. در اینجا چیزی است که مشتریان ما می‌گویند.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => {
            const avatar = PlaceHolderImages.find((img) => img.id === testimonial.avatarId);
            return (
              <Card key={testimonial.id} className="flex flex-col">
                <CardContent className="pt-6 flex-grow">
                  <blockquote className="text-muted-foreground italic border-r-2 pr-4">
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
