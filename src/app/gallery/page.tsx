import Header from '@/components/header';
import GallerySection from '@/components/gallery-section';
import Footer from '@/components/footer';

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-dvh animated-bg">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
}
