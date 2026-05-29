import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);

  /* ── Seamless video loop with fade transitions ── */
  useEffect(() => {
    const video = videoRef.current;
    const wrap = videoWrapRef.current;
    if (!video || !wrap) return;

    let rafId: number;
    let fadingIn = false;
    let fadingOut = false;

    const loop = () => {
      const ct = video.currentTime;
      const dur = video.duration || 1;

      if (ct < 0.5 && !fadingIn) {
        fadingIn = true;
        fadingOut = false;
      }
      if (ct < 0.5) wrap.style.opacity = String(ct / 0.5);

      if (dur - ct < 0.5 && !fadingOut) {
        fadingOut = true;
        fadingIn = false;
      }
      if (dur - ct < 0.5) wrap.style.opacity = String((dur - ct) / 0.5);

      rafId = requestAnimationFrame(loop);
    };

    const handleEnded = () => {
      cancelAnimationFrame(rafId);
      if (wrap) wrap.style.opacity = '0';
      setTimeout(() => {
        if (video) {
          video.currentTime = 0;
          video.play().catch(() => {});
        }
        if (wrap) wrap.style.opacity = '1';
        rafId = requestAnimationFrame(loop);
      }, 100);
    };

    video.addEventListener('ended', handleEnded);
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const navLinks = [
    { label: '关于', href: '#about' },
    { label: '作品', href: '#projects' },
    { label: '服务', href: '#service' },
    { label: '联系', href: '#contact' },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0C0C0C]">
      {/* ── Background video ── */}
      <div
        ref={videoWrapRef}
        className="absolute inset-0 z-0"
        style={{ opacity: 0 }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_171521_25968ba2-b594-4b32-aab7-f6b69398a6fa.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* ── Gradient overlays ── */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0C0C0C]/80 via-[#0C0C0C]/30 to-[#0C0C0C]/90 pointer-events-none" />

      {/* ── Grain texture ── */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Navigation ── */}
      <nav className="relative z-10 px-6 md:px-10 py-5 md:py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span
            className="text-2xl md:text-3xl tracking-tight"
            style={{ fontFamily: "'Instrument Serif', serif", color: '#E1E0CC' }}
          >
            成城野
          </span>

          <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hidden sm:inline-block text-xs md:text-sm uppercase tracking-wider
                  transition-all duration-200"
                style={{ color: 'rgba(225, 224, 204, 0.5)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#E1E0CC'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(225, 224, 204, 0.5)'; }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full px-5 py-2 md:px-6 md:py-2.5
                text-xs md:text-sm font-medium tracking-wider
                transition-all duration-300 hover:scale-[1.03] whitespace-nowrap"
              style={{ backgroundColor: '#E1E0CC', color: '#0C0C0C' }}
            >
              开始合作
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero content ── */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6"
        style={{ paddingTop: 'calc(8rem - 75px)', paddingBottom: '10rem' }}
      >
        {/* Pre-heading label */}
        <span
          className="animate-fade-rise inline-block mb-4 md:mb-6 text-[10px] md:text-xs
            uppercase tracking-[0.25em] font-medium"
          style={{ color: 'rgba(225, 224, 204, 0.4)' }}
        >
          AIGC 视觉设计师
        </span>

        {/* Headline — Name as hero */}
        <h1
          className="animate-fade-rise max-w-6xl"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 'clamp(3rem, 12vw, 7rem)',
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
            color: '#E1E0CC',
          }}
        >
          成城野
        </h1>

        {/* Sub-headline */}
        <p
          className="animate-fade-rise-delay mt-2 md:mt-3 max-w-2xl"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 'clamp(1.1rem, 3vw, 1.8rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: 'rgba(225, 224, 204, 0.55)',
          }}
        >
          用 AI 拓宽视觉边界
        </p>

        {/* Description */}
        <p
          className="animate-fade-rise-delay max-w-lg mt-6 md:mt-8 leading-relaxed text-sm md:text-base"
          style={{ color: 'rgba(225, 224, 204, 0.45)' }}
        >
          专注品牌视觉、动态设计与数字创意。
          <br />
          让每一次交付都超越预期。
        </p>

        {/* CTA */}
        <div className="animate-fade-rise-delay-2 mt-8 md:mt-10">
          <a
            href="#projects"
            className="group inline-flex items-center gap-3
              rounded-full px-10 py-4 md:px-14 md:py-5 text-sm md:text-base font-medium
              transition-all duration-300 hover:scale-[1.03]"
            style={{ backgroundColor: '#E1E0CC', color: '#0C0C0C' }}
          >
            <span>查看作品</span>
            <ArrowRight size={18} strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
