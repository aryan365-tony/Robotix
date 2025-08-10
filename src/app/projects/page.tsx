import Header from '@/components/header';
import ProjectsSection from '@/components/projects-section';
import Footer from '@/components/footer';

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-dvh animated-bg">
      <Header />
      <main className="flex-1">
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
