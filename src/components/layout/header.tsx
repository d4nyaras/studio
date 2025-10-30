'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#ai-optimizer', label: 'AI Optimizer' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 px-4',
        isScrolled ? 'border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60' : 'bg-background'
      )}
    >
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline">LandingFlow</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
           <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" asChild>
              <Link href="#">Log in</Link>
            </Button>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="#">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 top-14 z-40 grid h-[calc(100vh-3.5rem)] grid-flow-row auto-rows-max overflow-y-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="grid grid-flow-row auto-rows-max text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2">
                 <Button variant="ghost" asChild>
                    <Link href="#">Log in</Link>
                </Button>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="#">Get Started</Link>
                </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
