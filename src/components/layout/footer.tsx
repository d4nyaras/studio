import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Github, Twitter, Linkedin } from 'lucide-react';

const footerLinks = [
  { href: '#features', name: 'ویژگی‌ها' },
  { href: '#', name: 'قیمت‌گذاری' },
  { href: '/blog', name: 'وبلاگ' },
  { href: '#', name: 'درباره ما' },
  { href: '#contact', name: 'تماس با ما' },
];

const socialLinks = [
  { icon: <Twitter className="h-5 w-5" />, href: '#', name: 'توییتر' },
  { icon: <Github className="h-5 w-5" />, href: '#', name: 'گیت‌هاب' },
  { icon: <Linkedin className="h-5 w-5" />, href: '#', anme: 'لینکدین' },
];

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="flex items-center space-x-2 mb-4">
            <Logo className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold font-headline">لندینگ‌فلو</span>
          </Link>
          <p className="text-muted-foreground max-w-md mb-6">
            راه مدرن برای مدیریت هویت کاربر و گردش کار.
          </p>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4 space-x-reverse mb-6">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {social.icon}
                <span className="sr-only">{social.name}</span>
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
