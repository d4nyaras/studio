import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Github, Twitter, Linkedin } from 'lucide-react';

const footerNavs = [
  {
    label: 'Product',
    items: [
      { href: '#features', name: 'Features' },
      { href: '#', name: 'Pricing' },
      { href: '#', name: 'Integrations' },
    ],
  },
  {
    label: 'Company',
    items: [
      { href: '#', name: 'About' },
      { href: '#', name: 'Careers' },
      { href: '#', name: 'Blog' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { href: '#', name: 'Documentation' },
      { href: '#', name: 'Support' },
      { href: '#contact', name: 'Contact' },
    ],
  },
];

const socialLinks = [
  { icon: <Twitter className="h-5 w-5" />, href: '#', name: 'Twitter' },
  { icon: <Github className="h-5 w-5" />, href: '#', name: 'GitHub' },
  { icon: <Linkedin className="h-5 w-5" />, href: '#', name: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-full lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Logo className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline">LandingFlow</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              The modern way to manage user identity and workflows.
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
            &copy; {new Date().getFullYear()} LandingFlow, Inc. All rights reserved.
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
