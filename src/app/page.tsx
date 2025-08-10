import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import ProjectsSection from '@/components/projects-section';
import GallerySection from '@/components/gallery-section';
import TeamSection from '@/components/team-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProjectsSection />
        <GallerySection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
