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
  const bottomRef = useRef<HTMLDivElement>(null);
  const bottomInView = useInView(bottomRef, { once: true });

  return (
    <section className="relative h-screen p-3 sm:p-4 md:p-6 bg-[#0C0C0C] overflow-hidden">
      {/* Inset container */}
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">

        {/* ── Code-generated background ── */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large gradient orb 1 — purple */}
          <div
            className="absolute w-[55vw] h-[55vw] md:w-[40vw] md:h-[40vw] rounded-full pointer-events-none animate-pulse"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #8B5CF6 0%, transparent 65%)',
              top: '-20%',
              left: '-10%',
              animationDuration: '8s',
            }}
          />
          {/* Gradient orb 2 — pink */}
          <div
            className="absolute w-[50vw] h-[50vw] md:w-[35vw] md:h-[35vw] rounded-full pointer-events-none animate-pulse"
            style={{
              background: 'radial-gradient(circle at 70% 70%, #EC4899 0%, transparent 65%)',
              bottom: '-15%',
              right: '-8%',
              animationDuration: '10s',
              animationDelay: '1s',
            }}
          />
          {/* Subtle ambient orb 3 — orange */}
          <div
            className="absolute w-[30vw] h-[30vw] md:w-[20vw] md:h-[20vw] rounded-full pointer-events-none animate-pulse"
            style={{
              background: 'radial-gradient(circle at 50% 50%, #F97316 0%, transparent 65%)',
              top: '50%',
              left: '60%',
              animationDuration: '12s',
              animationDelay: '2s',
            }}
          />
          {/* Grain texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            }}
          />
          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/30 via-transparent to-[#0C0C0C]/70 pointer-events-none" />
        </div>

        {/* ── Navbar pill ── */}
        <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
          <div
            className="bg-black/60 backdrop-blur-xl rounded-b-2xl md:rounded-b-3xl
              px-4 py-2 md:px-8 flex items-center justify-center
              gap-3 sm:gap-6 md:gap-10 lg:gap-14 border-x border-b border-white/5"
          >
            <span className="text-[#E1E0CC]/40 text-xs sm:text-sm md:text-base font-medium tracking-wider mr-2 md:mr-4">
              成城野
            </span>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="uppercase tracking-wider transition-all duration-200
                  text-[10px] sm:text-xs md:text-sm"
                style={{
                  color: 'rgba(225, 224, 204, 0.6)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#E1E0CC'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(225, 224, 204, 0.6)'; }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        {/* ── Hero content (bottom-aligned) ── */}
        <div ref={bottomRef} className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-10 pb-6 md:pb-10">
          <div className="grid grid-cols-12 gap-4 md:gap-6 max-w-[1400px] mx-auto">
            {/* Heading — left 8 cols */}
            <div className="col-span-12 md:col-span-8">
              <WordsPullUp
                text="成城野"
                style={{
                  fontSize: 'clamp(3.5rem, 26vw, 18vw)',
                  color: '#E1E0CC',
                  fontWeight: 500,
                  lineHeight: 0.85,
                  letterSpacing: '-0.07em',
                }}
              />
            </div>

            {/* Description + CTA — right 4 cols */}
            <div className="col-span-12 md:col-span-4 flex flex-col justify-end gap-4 md:pl-4 md:pb-[0.5em]">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={bottomInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                className="leading-[1.4] text-xs sm:text-sm md:text-sm lg:text-base"
                style={{ color: 'rgba(225, 224, 204, 0.65)' }}
              >
                AIGC 设计师，专注于品牌视觉、动态设计与数字创意。
                用 AI 工作流把每一个项目做到更快、更准、更出彩。
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={bottomInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
              >
                <a
                  href="#projects"
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
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
