import FadeIn from './FadeIn';
import ContactButton from './ContactButton';

const projectImages = [
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center
        gap-10 sm:gap-14 md:gap-16
        px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden"
    >
      {/* Decorative gradient orbs */}
      <div className="absolute top-[10%] -left-[10%] w-[40%] h-[30%] rounded-full
        bg-[#8B5CF6]/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[15%] -right-[10%] w-[35%] h-[25%] rounded-full
        bg-[#EC4899]/5 blur-[80px] pointer-events-none" />

      {/* Floating decorative images */}
      <FadeIn delay={0.1} x={-60} y={-20} duration={0.9}>
        <div className="absolute top-[6%] left-[2%] sm:left-[4%] md:left-[6%]
          w-[100px] sm:w-[140px] md:w-[180px] opacity-40
          rounded-2xl overflow-hidden border border-white/5"
        >
          <img src={projectImages[0]} alt="" loading="lazy"
            className="w-full h-full object-cover" />
        </div>
      </FadeIn>

      <FadeIn delay={0.2} x={60} y={-20} duration={0.9}>
        <div className="absolute top-[4%] right-[2%] sm:right-[4%] md:right-[6%]
          w-[90px] sm:w-[120px] md:w-[160px] opacity-30
          rounded-2xl overflow-hidden border border-white/5"
        >
          <img src={projectImages[1]} alt="" loading="lazy"
            className="w-full h-full object-cover" />
        </div>
      </FadeIn>

      <FadeIn delay={0.3} x={-40} y={30} duration={0.9}>
        <div className="absolute bottom-[6%] left-[5%] sm:left-[8%] md:left-[12%]
          w-[80px] sm:w-[110px] md:w-[140px] opacity-25
          rounded-2xl overflow-hidden border border-white/5"
        >
          <img src={projectImages[2]} alt="" loading="lazy"
            className="w-full h-full object-cover" />
        </div>
      </FadeIn>

      <FadeIn delay={0.4} x={40} y={30} duration={0.9}>
        <div className="absolute bottom-[4%] right-[3%] sm:right-[6%] md:right-[10%]
          w-[100px] sm:w-[130px] md:w-[170px] opacity-35
          rounded-2xl overflow-hidden border border-white/5"
        >
          <img src={projectImages[0]} alt="" loading="lazy"
            className="w-full h-full object-cover" />
        </div>
      </FadeIn>

      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          关于我
        </h2>
      </FadeIn>

      {/* Animated paragraph */}
      <div className="text-center max-w-[600px] relative z-10">
        <FadeIn delay={0.15} y={20}>
          <p
            className="text-[#D7E2EA] font-light leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          >
            品牌设计师出身，用 AIGC 拓宽视觉的边界。从品牌策略到动态设计，
            从概念到落地，AI 工作流让每一个项目都更快、更准、更出彩。
            一起搞点不一样的？
          </p>
        </FadeIn>

        {/* Mini stats */}
        <FadeIn delay={0.25} y={20}>
          <div className="flex justify-center gap-6 sm:gap-10 mt-8 sm:mt-10">
            {[
              { num: '50+', label: '品牌项目' },
              { num: '30+', label: '满意客户' },
              { num: '3年', label: '设计经验' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-white font-black text-lg sm:text-xl md:text-2xl">{s.num}</p>
                <p className="text-[#D7E2EA]/30 text-xs sm:text-sm tracking-widest uppercase mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Contact button */}
      <FadeIn delay={0.4} y={20}>
        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <a href="#contact">
            <ContactButton text="开始合作" />
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
