import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';

export default function App() {
  return (
    <main className="main-wrapper font-kanit">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <footer id="contact" className="bg-[#0C0C0C] py-16 sm:py-20 text-center">
        <p
          className="hero-heading font-black uppercase mb-4"
          style={{ fontSize: 'clamp(2rem, 8vw, 100px)' }}
        >
          Let&apos;s work
        </p>
        <p className="text-[#D7E2EA] font-light text-lg sm:text-xl mb-8">
          zhaocheng@design.studio
        </p>
        <p className="text-[#D7E2EA]/40 text-sm">
          &copy; {new Date().getFullYear()} Zhaocheng Luo. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
