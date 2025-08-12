import Header from '@/components/header';
import GallerySection from '@/components/gallery-section';
import Footer from '@/components/footer';

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-dvh animated-bg">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-12rem)]">
          <GallerySection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
