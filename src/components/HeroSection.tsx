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

      {/* ── Hero content (bottom-aligned) ── */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-10 pb-6 md:pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {/* Left 8 cols — main heading */}
            <div className="col-span-12 md:col-span-8">
              <h1
                className="animate-fade-rise"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: 'clamp(3rem, 20vw, 14vw)',
                  lineHeight: 0.85,
                  letterSpacing: '-0.05em',
                  color: '#E1E0CC',
                }}
              >
                成城野
              </h1>
            </div>

            {/* Right 4 cols — description + CTA */}
            <div className="col-span-12 md:col-span-4 flex flex-col justify-end gap-3 md:gap-4 md:pb-[0.6em]">
              {/* Pre-heading */}
              <span
                className="animate-fade-rise text-[10px] md:text-xs uppercase tracking-[0.25em] font-medium"
                style={{ color: 'rgba(225, 224, 204, 0.35)' }}
              >
                AIGC 视觉设计师
              </span>

              <p
                className="animate-fade-rise-delay leading-[1.4] text-xs sm:text-sm md:text-sm"
                style={{ color: 'rgba(225, 224, 204, 0.55)' }}
              >
                专注品牌视觉、动态设计与数字创意。
                用 AI 工作流让每一个项目更快、更准、更出彩。
              </p>

              <div className="animate-fade-rise-delay-2">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2
                    rounded-full px-5 py-2 sm:px-6 sm:py-2.5
                    text-xs sm:text-sm font-medium
                    transition-all duration-300 hover:gap-3 hover:scale-[1.03]
                    bg-[#DEDBC8] text-black"
                >
                  <span>查看作品</span>
                  <span className="bg-black rounded-full w-6 h-6 sm:w-8 sm:h-8
                    flex items-center justify-center
                    transition-transform duration-300 group-hover:scale-110"
                  >
                    <ArrowRight size={14} className="text-[#DEDBC8]" strokeWidth={2} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
