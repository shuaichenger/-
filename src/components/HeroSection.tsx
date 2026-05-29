import { ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';
import Magnet from './Magnet';

const navLinks = [
  { label: '关于', href: '#about' },
  { label: '作品', href: '#projects' },
  { label: '服务', href: '#service' },
  { label: '联系', href: '#contact' },
];

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col overflow-x-clip bg-[#0C0C0C]">
      {/* ── Navbar ── */}
      <FadeIn delay={0} y={-20} as="div">
        <div className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          <span className="opacity-70 select-none">成城野</span>
          <div className="flex items-center gap-8 md:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-opacity duration-200 hover:opacity-70"
              >
                {link.label}
              </a>
            ))}
          </div>
          <span className="w-0" />
        </div>
      </FadeIn>

      {/* ── Gradient orbs ── */}
      <div className="absolute top-[15%] -left-[10%] w-[45%] h-[35%] rounded-full
        bg-[#8B5CF6]/5 blur-[120px] animate-pulse pointer-events-none"
        style={{ animationDuration: '6s', animationTimingFunction: 'ease-in-out' }}
      />
      <div className="absolute top-[40%] -right-[8%] w-[35%] h-[40%] rounded-full
        bg-[#EC4899]/4 blur-[100px] animate-pulse pointer-events-none"
        style={{ animationDuration: '8s', animationTimingFunction: 'ease-in-out' }}
      />

      {/* ── Centered portrait with Magnet effect ── */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <FadeIn delay={0.6} y={30} as="div">
          <Magnet padding={120} strength={4} className="pointer-events-auto">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-full
                bg-gradient-to-br from-[#8B5CF6]/10 to-[#EC4899]/10 blur-2xl"
              />
              <img
                src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
                alt="IP Character"
                className="relative w-[200px] sm:w-[260px] md:w-[320px] lg:w-[380px]
                  h-auto object-contain select-none"
                draggable={false}
              />
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* ── Heading ── */}
      <div className="flex-1 flex flex-col justify-center relative z-20 overflow-hidden">
        <FadeIn delay={0.15} y={40}>
          <div className="overflow-hidden w-full">
            <h1
              className="hero-heading font-black uppercase leading-none tracking-tight whitespace-nowrap text-left px-6 md:px-10"
              style={{
                fontSize: 'clamp(3.5rem, 14vw, 17.5vw)',
                marginTop: 'clamp(0.5rem, 4vw, 2rem)',
              }}
            >
              成城野
            </h1>
          </div>
        </FadeIn>
      </div>

      {/* ── Bottom bar ── */}
      <div className="relative z-20 flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
        <FadeIn delay={0.35} y={20} as="div">
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug"
            style={{
              fontSize: 'clamp(0.65rem, 1.4vw, 1.5rem)',
              maxWidth: 'clamp(120px, 18vw, 260px)',
            }}
          >
            AIGC 设计师 · 探索视觉的无限可能
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20} as="div">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2
              rounded-full px-6 py-3 sm:px-8 sm:py-3.5
              text-xs sm:text-sm font-medium uppercase tracking-wider
              transition-all duration-300 hover:gap-3 hover:scale-[1.02]
              bg-white text-[#0C0C0C]"
          >
            <span>查看作品</span>
            <ArrowRight size={16} strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
