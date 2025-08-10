import { Button } from '@/components/ui/button';
import Link from 'next/link';
import TypingEffect from './typing-effect';

export default function HeroSection() {
  return (
    <section className="container flex flex-col items-center justify-center text-center py-20 md:py-32">
      <div className="space-y-6 max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none font-headline">
          <TypingEffect text="Welcome to the Robotix Club of IIT Hyderabad" />
        </h1>
        <p className="text-lg text-muted-foreground md:text-xl">
          Innovating the Future, One Robot at a Time. We are a community of passionate students dedicated to exploring the vast world of robotics, from competitive challenges to cutting-edge research.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row justify-center">
          <Button asChild size="lg">
            <Link href="/#summary-sections">Explore Our Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
