"use client";

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
];

const Logo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-primary"
  >
    <circle cx="12" cy="12" r="12" fill="currentColor" />
    <path
      d="M8.33331 10.5C8.33331 9.42333 8.94998 8.49333 9.83331 8.05C10.7166 7.60667 11.7583 7.74333 12.55 8.3L13.4333 8.91667C14.225 9.47333 15.2666 9.61 16.15 9.16667C17.0333 8.72333 17.65 7.79333 17.65 6.71667C17.65 5.64 17.0333 4.71 16.15 4.26667C15.2666 3.82333 14.225 3.96 13.4333 4.51667L12.55 5.13333C10.1916 6.57333 8.33331 8.89333 8.33331 11.6667V12.5C8.33331 13.5767 7.42664 14.4833 6.34998 14.4833C5.27331 14.4833 4.36664 13.5767 4.36664 12.5V11.6667C4.36664 8.16333 6.44164 5.16333 9.47498 3.56667L10.3583 3.08333C12.3333 2.02333 14.6583 2.21 16.425 3.51667C18.1916 4.82333 19.1666 6.84333 19.1666 9.01667C19.1666 11.19 18.1916 13.21 16.425 14.5167C14.6583 15.8233 12.3333 16.01 10.3583 14.95L9.47498 14.4667C8.94164 14.1933 8.33331 13.6367 8.33331 12.9833V10.5Z"
      fill="black"
    />
  </svg>
);


export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
            <span className="font-bold sm:inline-block">Robotix Club, IITH</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 pt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
