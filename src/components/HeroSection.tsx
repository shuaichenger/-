import { useEffect, useState, useRef, useMemo } from 'react';
import { Briefcase, FolderGit2, Users } from 'lucide-react';
import FadeIn from './FadeIn';

/* ───────── Types ───────── */
interface Star {
  id: number;
  top: string;
  left: string;
  size: number;
  delay: number;
  duration: number;
  twinkle: boolean;
}

/* ───────── Constants ───────── */
const AVATAR_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png';

const navLinks = [
  { label: '关于', href: '#about' },
  { label: '作品', href: '#projects' },
  { label: '服务', href: '#service' },
  { label: '联系', href: '#contact' },
];

/* ───────── Star generator (stable via useMemo) ───────── */
function generateStars(count: number): Star[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2.5 + 0.5,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2,
    twinkle: Math.random() > 0.5,
  }));
}

/* ───────── Count-up hook ───────── */
function useCountUp(target: number, play: boolean) {
  const [value, setValue] = useState(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!play) return;
    setValue(0);
    const duration = 1500;
    const start = performance.now();

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frameRef.current = requestAnimationFrame(step);
    };

    frameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameRef.current);
  }, [play, target]);

  return value;
}

/* ───────── Glass stat item ───────── */
function StatItem({
  icon: Icon,
  num,
  suffix,
  label,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  num: number;
  suffix: string;
  label: string;
}) {
  const [viewed, setViewed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(num, viewed);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setViewed(true);
          obs.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex items-center gap-3 px-4 sm:px-5 py-3 rounded-xl
        bg-white/[0.03] backdrop-blur-md border border-white/[0.06]
        transition-all duration-500 hover:bg-white/[0.06] hover:border-white/[0.12]"
    >
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/[0.04] flex items-center justify-center shrink-0">
        <Icon size={16} className="text-white/40" />
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-white font-bold text-lg sm:text-xl tabular-nums">{count}</span>
        <span className="text-white/30 text-sm">{suffix}</span>
      </div>
      <span className="text-white/25 text-xs tracking-wider whitespace-nowrap ml-1">{label}</span>
    </div>
  );
}

/* ───────── Glass panel (midground decoration) ───────── */
function GlassPanel({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`absolute rounded-3xl border border-white/[0.04] pointer-events-none ${className ?? ''}`}
      style={{
        background:
          'radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 70%)',
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
        ...style,
      }}
    />
  );
}

/* ══════════════════════════════════════════════════════════
   HERO SECTION
   ══════════════════════════════════════════════════════════ */
export default function HeroSection() {
  const stars = useMemo(() => generateStars(50), []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#060512]">
      {/* ═══ LAYER 1: Far background – gradient + stars ═══ */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base radial gradients */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 20% 30%, rgba(139,92,255,0.15) 0%, transparent 45%), ' +
              'radial-gradient(circle at 75% 45%, rgba(255,79,184,0.1) 0%, transparent 40%), ' +
              'radial-gradient(circle at 60% 80%, rgba(255,138,34,0.08) 0%, transparent 35%)',
          }}
        />

        {/* Stars */}
        {stars.map((s) => (
          <div
            key={s.id}
            className="absolute rounded-full bg-white"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              opacity: s.twinkle ? undefined : 0.3,
              animation: s.twinkle
                ? `twinkle ${s.duration}s ${s.delay}s ease-in-out infinite`
                : undefined,
            }}
          />
        ))}
      </div>

      {/* ═══ LAYER 2: Midground – orbital rings + glass panels ═══ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Orbital ring 1 – large, purple tint, clockwise */}
        <div
          className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2"
          style={{
            width: 'clamp(400px, 70vw, 800px)',
            height: 'clamp(140px, 22vw, 280px)',
            borderRadius: '50%',
            border: '1px solid rgba(139,92,255,0.12)',
            animation: 'orbit-spin 24s linear infinite',
          }}
        />

        {/* Orbital ring 2 – smaller, orange tint, counter-clockwise */}
        <div
          className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2"
          style={{
            width: 'clamp(280px, 50vw, 580px)',
            height: 'clamp(100px, 16vw, 200px)',
            borderRadius: '50%',
            border: '1px solid rgba(255,138,34,0.1)',
            animation: 'orbit-spin-reverse 20s linear infinite',
          }}
        />

        {/* Glass panels — floating midground decoration */}
        <GlassPanel
          className="top-[12%] -left-[5%] w-[30%] h-[40%]"
          style={{
            animation: 'glass-float-1 8s ease-in-out infinite',
          }}
        />
        <GlassPanel
          className="bottom-[10%] -right-[3%] w-[28%] h-[38%]"
          style={{
            animation: 'glass-float-2 10s ease-in-out infinite',
          }}
        />
        <GlassPanel
          className="top-[50%] left-[55%] w-[22%] h-[30%]"
          style={{
            animation: 'glass-float-3 9s ease-in-out infinite',
          }}
        />
      </div>

      {/* ═══ LAYER 3: Foreground – content ═══ */}

      {/* ── Nav ── */}
      <FadeIn delay={0} y={-20}>
        <nav
          className="relative z-20 flex items-center justify-between
            px-6 md:px-10 pt-6 md:pt-8 text-white/50 font-medium uppercase tracking-wider
            text-sm md:text-base"
        >
          <span className="text-white/60 select-none tracking-[0.15em]">成城野</span>
          <div className="flex items-center gap-6 md:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors duration-200 hover:text-white/80"
              >
                {link.label}
              </a>
            ))}
          </div>
          <span className="hidden md:block w-6" />
        </nav>
      </FadeIn>

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex items-center px-6 md:px-10 lg:px-16">
        <div
          className="flex flex-col lg:flex-row items-center justify-between
            w-full max-w-7xl mx-auto gap-10 lg:gap-0"
        >
          {/* ═══ LEFT: Avatar ═══ */}
          <FadeIn delay={0.3} y={40}>
            <div className="relative shrink-0">
              {/* Outer glow */}
              <div
                className="absolute -inset-6 rounded-full opacity-50 blur-3xl"
                style={{
                  background:
                    'radial-gradient(circle, rgba(139,92,255,0.2) 0%, rgba(255,79,184,0.1) 50%, transparent 70%)',
                }}
              />

              {/* Avatar wrapper with gradient border */}
              <div
                className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px]
                  rounded-[32px] overflow-hidden"
                style={{
                  border: '2px solid transparent',
                  background:
                    'linear-gradient(#13111C, #13111C) padding-box, ' +
                    'linear-gradient(135deg, #8B5CFF, #FF4FB8, #FF8A22) border-box',
                  boxShadow:
                    '0 20px 60px rgba(0,0,0,0.5), 0 0 80px rgba(139,92,255,0.15), 0 0 120px rgba(255,79,184,0.08)',
                  animation: 'float 6s ease-in-out infinite alternate',
                }}
              >
                <img
                  src={AVATAR_URL}
                  alt="成城野"
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
            </div>
          </FadeIn>

          {/* ═══ RIGHT: Text + CTAs + Stats ═══ */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-auto">
            {/* Pre-heading label */}
            <FadeIn delay={0.15} y={20}>
              <span
                className="inline-block px-4 py-1.5 rounded-full
                  bg-white/[0.04] border border-white/[0.08]
                  text-white/40 text-xs sm:text-sm tracking-[0.2em] uppercase mb-5"
              >
                AIGC Visual Designer
              </span>
            </FadeIn>

            {/* Name – single gradient flow */}
            <FadeIn delay={0.25} y={25}>
              <h1
                className="font-black leading-none tracking-tight mb-3"
                style={{
                  fontSize: 'clamp(3rem, 10vw, 72px)',
                  background: 'linear-gradient(90deg, #8B5CFF, #FF4FB8, #FF8A22)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                成城野
              </h1>
            </FadeIn>

            {/* Subtitle */}
            <FadeIn delay={0.35} y={20}>
              <p className="text-white/60 font-light text-lg sm:text-xl md:text-2xl mb-3 tracking-wide">
                用 AIGC 拓宽视觉边界
              </p>
            </FadeIn>

            {/* Description */}
            <FadeIn delay={0.4} y={20}>
              <p className="text-white/40 font-light leading-relaxed max-w-lg
                text-sm sm:text-base mb-8"
              >
                为品牌提供从视觉概念、AI 生成到落地设计的一站式创意服务。
              </p>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={0.5} y={20}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2
                    px-7 py-3.5 rounded-xl
                    text-white text-sm sm:text-base font-semibold tracking-wide
                    transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: 'linear-gradient(90deg, #8B5CFF, #FF8A22)',
                    boxShadow: '0 0 30px rgba(255,138,34,0.25)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 50px rgba(255,138,34,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 30px rgba(255,138,34,0.25)';
                  }}
                >
                  <span>查看作品</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2
                    px-7 py-3.5 rounded-xl
                    border-2 border-white/20 text-white
                    text-sm sm:text-base font-semibold tracking-wide
                    transition-all duration-300
                    hover:bg-white/[0.05] hover:border-white/40 hover:-translate-y-0.5"
                >
                  开始合作
                </a>
              </div>
            </FadeIn>

            {/* ═══ Stats – glass bars ═══ */}
            <FadeIn delay={0.6} y={20}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <StatItem icon={Briefcase} num={3} suffix="年" label="设计经验" />
                <StatItem icon={FolderGit2} num={100} suffix="+" label="项目经验" />
                <StatItem icon={Users} num={30} suffix="+" label="合作客户" />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <FadeIn delay={1} y={10}>
        <div className="relative z-10 flex justify-center pb-6">
          <div className="flex flex-col items-center gap-2 text-white/15">
            <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
            <div
              className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center p-1"
            >
              <div
                className="w-1 h-2 rounded-full bg-white/30"
                style={{ animation: 'scroll-dot 2s ease-in-out infinite' }}
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
