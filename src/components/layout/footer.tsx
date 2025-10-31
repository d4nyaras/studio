import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Github, Twitter, Linkedin } from 'lucide-react';

const footerNavs = [
  {
    label: 'محصول',
    items: [
      { href: '#features', name: 'ویژگی‌ها' },
      { href: '#', name: 'قیمت‌گذاری' },
      { href: '/blog', name: 'وبلاگ' },
    ],
  },
  {
    label: 'شرکت',
    items: [
      { href: '#', name: 'درباره ما' },
      { href: '#', name: 'فرصت‌های شغلی' },
      { href: '#', name: 'اخبار' },
    ],
  },
  {
    label: 'منابع',
    items: [
      { href: '#', name: 'مستندات' },
      { href: '#', name: 'پشتیبانی' },
      { href: '#contact', name: 'تماس با ما' },
    ],
  },
];

const socialLinks = [
  { icon: <Twitter className="h-5 w-5" />, href: '#', name: 'توییتر' },
  { icon: <Github className="h-5 w-5" />, href: '#', name: 'گیت‌هاب' },
  { icon: <Linkedin className="h-5 w-5" />, href: '#', name: 'لینکدین' },
];

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-full lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Logo className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline">لندینگ‌فلو</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              راه مدرن برای مدیریت هویت کاربر و گردش کار.
            </p>
          </div>
          {footerNavs.map((nav) => (
            <div key={nav.label}>
              <h3 className="font-semibold mb-4">{nav.label}</h3>
              <ul className="space-y-3">
                {nav.items.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} لندینگ‌فلو. تمامی حقوق محفوظ است.
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            {socialLinks.map((social) => (
              <Link key={social.name} href={social.href} className="text-muted-foreground hover:text-primary transition-colors">
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
