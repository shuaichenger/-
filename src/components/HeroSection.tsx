import FadeIn from './FadeIn';

const navLinks = [
  { label: '关于', href: '#about' },
  { label: '作品', href: '#projects' },
  { label: '服务', href: '#service' },
];

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col overflow-hidden bg-[#0C0C0C]">
      {/* ── Decorative background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[30%] -right-[20%] w-[50%] h-[60%]
          rounded-full bg-[#8B5CF6]/5 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[15%] w-[40%] h-[50%]
          rounded-full bg-[#EC4899]/5 blur-[100px]" />
      </div>

      {/* ── Navbar ── */}
      <FadeIn delay={0} y={-20}>
        <nav className="relative z-10 flex items-center justify-between
          px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA]"
        >
          {/* Name / logo */}
          <span className="font-bold text-lg md:text-xl tracking-wider select-none">
            成城野
          </span>

          {/* Center nav - hidden on mobile */}
          <div className="hidden md:flex items-center gap-10
            font-medium uppercase tracking-[0.15em] text-sm"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-all duration-200 hover:text-white/80
                  relative after:absolute after:bottom-[-2px] after:left-0 after:w-0
                  after:h-px after:bg-[#D7E2EA]/60 after:transition-all after:duration-300
                  hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA button */}
          <a
            href="#contact"
            className="rounded-full border border-[#D7E2EA]/30 px-5 py-2 md:px-6 md:py-2.5
              text-sm md:text-base font-medium tracking-wider
              transition-all duration-300
              hover:bg-[#D7E2EA] hover:text-[#0C0C0C] hover:border-[#D7E2EA]"
          >
            开始合作
          </a>
        </nav>
      </FadeIn>

      {/* ── Hero Content ── */}
      <div className="flex-1 relative z-10 flex items-center justify-center
        px-6 md:px-10"
      >
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 w-full max-w-6xl">
          {/* Portrait */}
          <FadeIn delay={0.15} y={30}>
            <div className="relative shrink-0 w-[220px] sm:w-[280px] md:w-[340px] lg:w-[400px]">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-[#8B5CF6]/20 to-[#EC4899]/20 blur-xl" />
              <img
                src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85"
                alt="成城野"
                className="relative w-full h-auto object-cover rounded-[30px] md:rounded-[40px]
                  border border-white/10 shadow-2xl"
              />
            </div>
          </FadeIn>

          {/* Text content */}
          <div className="flex-1 text-center md:text-left">
            {/* Tag */}
            <FadeIn delay={0.2} y={20}>
              <span className="inline-block px-4 py-1.5 rounded-full
                bg-white/5 border border-white/10 text-[#D7E2EA]/50
                text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 sm:mb-6"
              >
                高级视觉设计师
              </span>
            </FadeIn>

            {/* Heading */}
            <FadeIn delay={0.3} y={25}>
              <h1 className="mb-2">
                <span className="block text-[#D7E2EA]/60 font-light tracking-wide
                  text-lg sm:text-xl md:text-2xl lg:text-3xl"
                >
                  你好，我是
                </span>
                <span className="block font-black text-white leading-none tracking-tight
                  text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[7vw]"
                >
                  成城野
                </span>
              </h1>
            </FadeIn>

            {/* Service tags */}
            <FadeIn delay={0.4} y={20}>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 mt-3 sm:mt-4">
                {['AIGC 视觉', '品牌全案', '动态设计', 'Web & UI'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-full
                      bg-white/5 text-[#D7E2EA]/60 text-xs sm:text-sm
                      border border-white/5 transition-colors duration-200
                      hover:bg-white/10 hover:text-[#D7E2EA]/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={0.5} y={20}>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8">
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

      {/* ── Stats bar ── */}
      <FadeIn delay={0.6} y={20}>
        <div className="relative z-10 flex justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-24
          px-6 md:px-10 pb-6 sm:pb-8 md:pb-10"
        >
          <div className="text-center">
            <p className="text-white font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl">5年</p>
            <p className="text-[#D7E2EA]/30 text-xs sm:text-sm tracking-widest uppercase mt-1">经验</p>
          </div>
          <div className="w-px bg-white/10" />
          <div className="text-center">
            <p className="text-white font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl">100+</p>
            <p className="text-[#D7E2EA]/30 text-xs sm:text-sm tracking-widest uppercase mt-1">项目</p>
          </div>
          <div className="w-px bg-white/10" />
          <div className="text-center">
            <p className="text-white font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl">30+</p>
            <p className="text-[#D7E2EA]/30 text-xs sm:text-sm tracking-widest uppercase mt-1">客户</p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
