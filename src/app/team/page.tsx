import Header from '@/components/header';
import TeamSection from '@/components/team-section';
import Footer from '@/components/footer';

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}
