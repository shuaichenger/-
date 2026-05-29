import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col overflow-x-clip bg-[#0C0C0C]">
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8
          text-[#D7E2EA] font-medium uppercase tracking-wider
          text-sm md:text-lg lg:text-[1.4rem]">
          {[
            { label: '关于', href: '#about' },
            { label: '服务', href: '#service' },
            { label: '作品', href: '#projects' },
            { label: '联系', href: '#contact' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-opacity duration-200 hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="overflow-hidden flex-1 flex items-center justify-center relative">
        <FadeIn delay={0.15} y={40}>
          <div className="relative inline-block">
            {/* Decorative line accents */}
            <span className="absolute -top-8 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D7E2EA]/30 to-transparent" />
            <h1 className="
              hero-heading font-black leading-none whitespace-nowrap w-full
              text-[10vw] sm:text-[11vw] md:text-[12vw] lg:text-[13vw]
              tracking-[0.02em]
            ">
              你好 我是昭成
            </h1>
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2">
              <span className="inline-block w-1 h-1 rounded-full bg-[#D7E2EA]/40 mx-1" />
              <span className="inline-block w-2 h-2 rounded-full bg-[#D7E2EA]/60 mx-1" />
              <span className="inline-block w-1 h-1 rounded-full bg-[#D7E2EA]/40 mx-1" />
            </span>
          </div>
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="mt-auto flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug
            max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}>
            视觉品牌 &amp; AIGC 创作者 — 打造令人过目不忘的设计体验
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <a href="#projects">
            <ContactButton />
          </a>
        </FadeIn>
      </div>

      {/* Hero Portrait */}
      <FadeIn delay={0.6} y={30}>
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="absolute left-1/2 -translate-x-1/2 z-10
            w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]
            top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
        >
          <img
            src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85"
            alt="昭成头像"
            className="w-full h-auto object-contain"
          />
        </Magnet>
      </FadeIn>
    </section>
  );
}
