import { useEffect, useState, useRef } from 'react';
import FadeIn from './FadeIn';

/* ───────── Count-up hook ───────── */
function useCountUp(target: number, play: boolean) {
  const [value, setValue] = useState(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!play) return;
    setValue(0);
    const duration = 1200;
    const start = performance.now();

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frameRef.current = requestAnimationFrame(step);
    };

    frameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameRef.current);
  }, [play, target]);

  return value;
}

function StatItem({ num, label }: { num: number; label: string; suffix?: string }) {
  const [viewed, setViewed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(num, viewed);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setViewed(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <p className="text-white font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl tabular-nums">
        {count}{num >= 100 ? '+' : '年'}
      </p>
      <p className="text-[#D7E2EA]/30 text-xs sm:text-sm tracking-widest uppercase mt-1">{label}</p>
    </div>
  );
}

/* ───────── Data ───────── */
const navLinks = [
  { label: '关于', href: '#about' },
  { label: '作品', href: '#projects' },
  { label: '服务', href: '#service' },
  { label: '联系', href: '#contact' },
];

const nameChars = [
  { char: '成', color: '#8B5CF6' },
  { char: '城', color: '#EC4899' },
  { char: '野', color: '#F97316' },
];

/* ───────── Component ───────── */
export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col overflow-hidden bg-[#0C0C0C]">
      {/* ── Full-bleed blurred background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85"
          alt=""
          className="w-full h-full object-cover scale-110 blur-2xl opacity-30"
        />
        {/* Dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/60 via-[#0C0C0C]/40 to-[#0C0C0C]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/5 to-[#EC4899]/5" />
      </div>

      {/* ── Gradient orbs (slow float) ── */}
      <div className="absolute top-[15%] -left-[10%] w-[45%] h-[35%] rounded-full
        bg-[#8B5CF6]/10 blur-[120px] animate-pulse pointer-events-none"
        style={{ animationDuration: '6s', animationTimingFunction: 'ease-in-out' }}
      />
      <div className="absolute top-[40%] -right-[8%] w-[35%] h-[40%] rounded-full
        bg-[#EC4899]/8 blur-[100px] animate-pulse pointer-events-none"
        style={{ animationDuration: '8s', animationTimingFunction: 'ease-in-out' }}
      />

      {/* ── Nav ── */}
      <FadeIn delay={0} y={-20}>
        <nav className="relative z-20 flex items-center justify-between
          px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider
          text-sm md:text-lg lg:text-[1.4rem]"
        >
          <span className="opacity-70 select-none text-[#D7E2EA]/80">成城野</span>
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
          <span className="w-0 md:w-auto" />
        </nav>
      </FadeIn>

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-16 w-full max-w-6xl">
          {/* Portrait + floating tags */}
          <div className="relative shrink-0">
            <FadeIn delay={0.6} y={30}>
              <div className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[340px]">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-[30px] md:rounded-[40px]
                  bg-gradient-to-br from-[#8B5CF6]/20 to-[#EC4899]/20 blur-xl" />
                <img
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85"
                  alt="成城野"
                  className="relative w-full h-auto object-cover rounded-[30px] md:rounded-[40px]
                    border border-white/10 shadow-2xl"
                />
              </div>
            </FadeIn>

          </div>

          {/* Text block */}
          <div className="text-center lg:text-left">
            {/* Pre-heading */}
            <FadeIn delay={0.2} y={20}>
              <span className="inline-block px-4 py-1.5 rounded-full
                bg-white/5 border border-white/10 text-[#D7E2EA]/50
                text-xs sm:text-sm tracking-[0.2em] uppercase mb-4"
              >
                高级视觉设计师
              </span>
            </FadeIn>

            {/* Split characters */}
            <FadeIn delay={0.3} y={25}>
              <h1 className="mb-1">
                <span className="block text-[#D7E2EA]/60 font-light tracking-wide
                  text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed"
                >
                  你好，我是
                </span>
                <span className="flex justify-center lg:justify-start gap-1 sm:gap-2
                  font-black leading-none tracking-tight
                  text-[16vw] sm:text-[15vw] md:text-[14vw] lg:text-[12vw] xl:text-[10vw]"
                >
                  {nameChars.map((n) => (
                    <span
                      key={n.char}
                      className="inline-block transition-transform duration-300 hover:scale-105"
                      style={{ color: n.color, textShadow: `0 0 30px ${n.color}40` }}
                    >
                      {n.char}
                    </span>
                  ))}
                </span>
              </h1>
            </FadeIn>

            {/* Description */}
            <FadeIn delay={0.45} y={20}>
              <p className="text-[#D7E2EA]/50 font-light max-w-md mx-auto lg:mx-0
                text-sm sm:text-base leading-relaxed mt-2"
              >
                AIGC 设计师，用 AI 拓宽视觉边界
              </p>
            </FadeIn>

            {/* CTA */}
            <FadeIn delay={0.55} y={20}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2
                    rounded-full bg-white text-[#0C0C0C]
                    px-6 py-3 sm:px-8 sm:py-3.5
                    text-sm sm:text-base font-medium tracking-wider
                    transition-all duration-300
                    hover:bg-white/90 hover:gap-3"
                >
                  <span>查看作品</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2
                    rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA]
                    px-6 py-3 sm:px-8 sm:py-3.5
                    text-sm sm:text-base font-medium tracking-wider
                    transition-all duration-300
                    hover:border-[#D7E2EA] hover:bg-white/5"
                >
                  开始合作
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* ── Stats bar (count-up) ── */}
      <FadeIn delay={0.6} y={20}>
        <div className="relative z-10 flex justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-24
          px-6 md:px-10 pb-6 sm:pb-8 md:pb-10"
        >
          <div className="w-px bg-white/10 self-stretch" />
          <StatItem num={3} label="经验" />
          <div className="w-px bg-white/10 self-stretch" />
          <StatItem num={100} label="项目" />
          <div className="w-px bg-white/10 self-stretch" />
          <StatItem num={30} label="客户" />
          <div className="w-px bg-white/10 self-stretch" />
        </div>
      </FadeIn>
    </section>
  );
}
