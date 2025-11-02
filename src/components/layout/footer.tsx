import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Github, Twitter, Linkedin } from 'lucide-react';

const footerSections = [
  {
    title: 'محصول',
    links: [
      { href: '#features', name: 'ویژگی‌ها' },
      { href: '#', name: 'قیمت‌گذاری' },
      { href: '#ai-optimizer', name: 'بهینه‌ساز AI' },
      { href: '#', name: 'دمو' },
    ],
  },
  {
    title: 'شرکت',
    links: [
      { href: '#', name: 'درباره ما' },
      { href: '/blog', name: 'وبلاگ' },
      { href: '#', name: 'فرصت‌های شغلی' },
      { href: '#contact', name: 'تماس با ما' },
    ],
  },
  {
    title: 'حقوقی',
    links: [
      { href: '#', name: 'سیاست حفظ حریم خصوصی' },
      { href: '#', name: 'شرایط خدمات' },
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
    <footer className="bg-secondary/30 border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 space-x-reverse mb-4">
              <Logo className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline">لندینگ‌فلو</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              راه مدرن برای مدیریت هویت کاربر و گردش کار.
            </p>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-headline font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t pt-8 flex flex-col sm:flex-row-reverse items-center justify-between gap-4">
          <div className="flex items-center space-x-4 space-x-reverse">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </Link>
            ))}
          </div>
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} لندینگ‌فلو. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}
