import Header from '@/components/header';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
