import Header from '@/components/header';
import GallerySection from '@/components/gallery-section';
import Footer from '@/components/footer';

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
}
