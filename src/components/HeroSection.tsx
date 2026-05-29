import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import WordsPullUp from './WordsPullUp';

const navLinks = [
  { label: '关于', href: '#about' },
  { label: '作品', href: '#projects' },
  { label: '服务', href: '#service' },
  { label: '联系', href: '#contact' },
];

export default function HeroSection() {
  const descRef = useRef<HTMLDivElement>(null);
  const descInView = useInView(descRef, { once: true });
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true });

  const fadeUp = (delay: number, inView: boolean) => ({
    initial: { y: 20, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay },
  });

  return (
    <section className="relative h-screen p-3 sm:p-4 md:p-6 bg-black overflow-hidden">
      {/* Inset container */}
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        {/* ── Background image ── */}
        <div className="absolute inset-0">
          <img
            src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85"
            alt=""
            className="w-full h-full object-cover scale-105 animate-[slowZoom_20s_ease-in-out_infinite_alternate]"
          />
        </div>

        {/* ── Noise overlay ── */}
        <div
          className="absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
          }}
        />

        {/* ── Gradient overlay ── */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 pointer-events-none" />

        {/* ── Navbar pill ── */}
        <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
          <div
            className="bg-black/80 backdrop-blur-md rounded-b-2xl md:rounded-b-3xl
              px-4 py-2 md:px-8 flex items-center justify-center
              gap-3 sm:gap-6 md:gap-10 lg:gap-14"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="uppercase tracking-wider transition-colors duration-200
                  text-[10px] sm:text-xs md:text-sm"
                style={{
                  color: 'rgba(225, 224, 204, 0.8)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#E1E0CC'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)'; }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        {/* ── Hero content (bottom-aligned) ── */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 md:pb-10">
          <div className="grid grid-cols-12 gap-4 md:gap-6 max-w-[1400px] mx-auto">
            {/* Heading - left 8 cols */}
            <div className="col-span-12 md:col-span-8">
              <WordsPullUp
                text="成城野"
                className="font-medium leading-[0.85] tracking-[-0.07em]"
                style={{ fontSize: 'clamp(4rem, 26vw, 20vw)', color: '#E1E0CC' }}
              />
            </div>

            {/* Description + CTA - right 4 cols */}
            <div
              ref={descRef}
              className="col-span-12 md:col-span-4 flex flex-col justify-end gap-4
                md:pl-4 md:pb-[0.5em]"
            >
              <motion.p
                {...fadeUp(0.5, descInView)}
                className="leading-[1.3] text-xs sm:text-sm md:text-sm lg:text-base"
                style={{ color: 'rgba(225, 224, 204, 0.7)' }}
              >
                AIGC 设计师，专注于品牌视觉、动态设计与数字创意。
                用 AI 工作流把每一个项目做到更快、更准、更出彩。
              </motion.p>

              <div ref={ctaRef}>
                <motion.a
                  href="#projects"
                  {...fadeUp(0.7, ctaInView)}
                  className="group inline-flex items-center gap-2
                    rounded-full px-5 py-2 sm:px-6 sm:py-2.5
                    font-medium text-xs sm:text-sm
                    transition-all duration-300 hover:gap-3
                    bg-[#DEDBC8] text-black"
                >
                  <span>查看作品</span>
                  <span className="bg-black rounded-full w-7 h-7 sm:w-9 sm:h-9
                    flex items-center justify-center
                    transition-transform duration-300 group-hover:scale-110"
                  >
                    <ArrowRight size={16} className="text-[#DEDBC8]" strokeWidth={2} />
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
