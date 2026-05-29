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
      <FadeIn delay={0} y={-20} as="nav">
        <div className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
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
      </FadeIn>

      {/* ── Portrait with Magnet effect ── */}
      <FadeIn delay={0.6} y={30} as="div" className="absolute left-1/2 -translate-x-1/2 z-10
        top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
        <Magnet padding={150} strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full
              bg-gradient-to-br from-[#8B5CF6]/10 to-[#EC4899]/10 blur-2xl"
            />
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt=""
              className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] h-auto object-contain select-none"
              draggable={false}
            />
          </div>
        </Magnet>
      </FadeIn>

      {/* ── Heading ── */}
      <div className="flex-1 flex flex-col justify-center relative z-20 overflow-hidden">
        <FadeIn delay={0.15} y={40}>
          <div className="overflow-hidden w-full">
            <h1
              className="hero-heading font-black uppercase leading-none tracking-tight w-full whitespace-nowrap px-6 md:px-10"
              style={{
                fontSize: 'clamp(3rem, 14vw, 17.5vw)',
                marginTop: 'clamp(0.25rem, 1vw, 0.5rem)',
              }}
            >
              成城野
            </h1>
          </div>
        </FadeIn>
      </div>

      {/* ── Bottom bar ── */}
      <div className="relative z-20 flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
        {/* Left */}
        <FadeIn delay={0.35} y={20} as="div">
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug"
            style={{
              fontSize: 'clamp(0.65rem, 1.4vw, 1.5rem)',
              maxWidth: 'clamp(140px, 20vw, 260px)',
            }}
          >
            AIGC 设计师 · 探索视觉的无限可能
          </p>
        </FadeIn>

        {/* Right */}
        <FadeIn delay={0.5} y={20} as="div">
          <a
            href="#contact"
            className="relative inline-block rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
              text-white font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base
              shadow-[0px_4px_4px_rgba(181,1,167,0.25),4px_4px_12px_#7721B1_inset]
              outline outline-2 outline-white outline-offset-[-3px]
              transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
            }}
          >
            联系我
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
