export const dynamic = 'force-dynamic';

import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import Footer from '@/components/footer';
import ProjectsSection from '@/components/projects-section';
import TeamSection from '@/components/team-section';
import GallerySection from '@/components/gallery-section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh animated-bg">
      <Header />
      <main className="flex-1 animate-fade-in-up">
        <div className="container mx-auto">
          <HeroSection />
        </div>

        <div id="summary-sections" className="py-12 md:py-24 lg:py-32 space-y-12 md:space-y-24">
          
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl font-headline mb-12">Our Work</h2>
            <ProjectsSection summary={true} />
            <div className="text-center mt-8">
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">
                  View All Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="container mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl font-headline mb-12">Our Team</h2>
            <TeamSection />
          </div>

          <div className="container mx-auto">
             <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl font-headline mb-12">Gallery Highlights</h2>
            <GallerySection summary={true} />
             <div className="text-center mt-8">
              <Button asChild variant="outline" size="lg">
                <Link href="/gallery">
                  Explore Full Gallery <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
