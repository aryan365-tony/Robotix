import Header from '@/components/header';
import TeamSection from '@/components/team-section';
import Footer from '@/components/footer';

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-dvh animated-bg">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-12rem)]">
          <TeamSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
