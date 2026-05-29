import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col overflow-x-clip bg-[#0C0C0C]">
      {/* ── Navbar ── */}
      <FadeIn delay={0} y={-20}>
        <nav
          className="flex items-center justify-between
            px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider
            text-sm md:text-lg lg:text-[1.4rem]"
        >
          <a href="#" className="transition-opacity duration-200 hover:opacity-70">
            成城野
          </a>
          <a href="#about" className="transition-opacity duration-200 hover:opacity-70">
            关于
          </a>
          <a href="#projects" className="transition-opacity duration-200 hover:opacity-70">
            作品
          </a>
          <a href="#service" className="transition-opacity duration-200 hover:opacity-70">
            服务
          </a>
          <a href="#contact" className="transition-opacity duration-200 hover:opacity-70">
            联系
          </a>
        </nav>
      </FadeIn>

      {/* ── Hero Portrait (centered) ── */}
      <FadeIn delay={0.6} y={30}>
        <div className="absolute left-1/2 -translate-x-1/2 z-10
          top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0
          w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
        >
          <Magnet padding={150} strength={3}>
            <img
              src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85"
              alt="成城野"
              className="w-full h-auto object-cover select-none pointer-events-none"
            />
          </Magnet>
        </div>
      </FadeIn>

      {/* ── Hero Heading ── */}
      <div className="flex-1 flex items-center justify-center overflow-hidden">
        <FadeIn delay={0.15} y={40}>
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none
              whitespace-nowrap w-full text-center mt-6 sm:mt-4 md:-mt-5
              text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]"
          >
            你好，我是 成城野
          </h1>
        </FadeIn>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug
              max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            AIGC 设计师，用 AI 拓宽视觉边界
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton text="联系我" />
        </FadeIn>
      </div>
    </section>
  );
}
