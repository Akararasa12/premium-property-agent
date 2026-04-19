import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FeaturedProperties from '@/components/FeaturedProperties';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SectionWrapper from '@/components/SectionWrapper';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SectionWrapper>
        <Hero />
      </SectionWrapper>
      <SectionWrapper>
        <About />
      </SectionWrapper>
      <SectionWrapper>
        <FeaturedProperties />
      </SectionWrapper>
      <SectionWrapper>
        <Services />
      </SectionWrapper>
      
      <SectionWrapper>
        <Contact />
      </SectionWrapper>

      <Footer />
    </main>
  );
}


