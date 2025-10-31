import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, ShieldCheck, BarChart, Code2 } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: 'یکپارچه‌سازی بی‌نقص',
    description: 'به راحتی با پشته فناوری فعلی خود یکپارچه شوید. API دوستدار توسعه‌دهنده ما راه‌اندازی را آسان می‌کند.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: 'امنیت قوی',
    description: 'کاربران خود را با امنیت درجه یک سازمانی، از جمله MFA و تشخیص نفوذ، محافظت کنید.',
  },
  {
    icon: <BarChart className="w-8 h-8 text-primary" />,
    title: 'زیرساخت مقیاس‌پذیر',
    description: 'پلتفرم ما برای رشد همراه با شما ساخته شده است و با افزایش پایگاه کاربری شما، قابلیت اطمینان را تضمین می‌کند.',
  },
  {
    icon: <Code2 className="w-8 h-8 text-primary" />,
    title: 'متمرکز بر توسعه‌دهنده',
    description: 'ساخته شده توسط توسعه‌دهندگان، برای توسعه‌دهندگان. مستندات جامع و SDK برای راحتی شما.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">ویژگی‌های قدرتمند برای برنامه‌های مدرن</h2>
          <p className="text-muted-foreground text-lg mb-12">
            هر آنچه برای مدیریت کاربران و احراز هویت نیاز دارید، تا بتوانید بر روی ساخت محصول خود تمرکز کنید.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={feature.title} className="text-center transition-transform transform hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  {feature.icon}
                </div>
                <CardTitle className="font-headline pt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
