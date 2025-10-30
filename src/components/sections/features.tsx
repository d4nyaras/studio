import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, ShieldCheck, BarChart, Code2 } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: 'Seamless Integration',
    description: 'Easily integrate with your existing stack. Our developer-friendly API makes setup a breeze.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: 'Robust Security',
    description: 'Protect your users with enterprise-grade security, including MFA and breach detection.',
  },
  {
    icon: <BarChart className="w-8 h-8 text-primary" />,
    title: 'Scalable Infrastructure',
    description: 'Our platform is built to scale with you, ensuring reliability as your user base grows.',
  },
  {
    icon: <Code2 className="w-8 h-8 text-primary" />,
    title: 'Developer Focused',
    description: 'Built by developers, for developers. Extensive documentation and SDKs for your convenience.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Powerful Features for Modern Apps</h2>
          <p className="text-muted-foreground text-lg mb-12">
            Everything you need to manage users and authentication, so you can focus on building your product.
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
