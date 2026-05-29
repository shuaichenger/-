import SplashScreen from './components/SplashScreen';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';

export default function App() {
  return (
    <div className="relative">
      <SplashScreen />
      <main className="main-wrapper font-kanit">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <footer id="contact" className="bg-[#0C0C0C] py-16 sm:py-20 text-center">
        <p
          className="hero-heading font-black uppercase mb-6"
          style={{ fontSize: 'clamp(2rem, 8vw, 100px)' }}
        >
          一起搞点
        </p>

        <div className="flex flex-col items-center gap-3 mb-8">
          <a href="tel:17377840129"
            className="text-[#D7E2EA] font-light text-lg sm:text-xl hover:text-white transition-colors"
          >
            173-7784-0129
          </a>
          <a href="mailto:2452699270@qq.com"
            className="text-[#D7E2EA] font-light text-lg sm:text-xl hover:text-white transition-colors"
          >
            2452699270@qq.com
          </a>
        </div>

        <p className="text-[#D7E2EA]/40 text-sm">
          &copy; {new Date().getFullYear()} 成城野 版权所有
        </p>
      </footer>
    </main>
    </div>
  );
}
