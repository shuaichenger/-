import FadeIn from './FadeIn';
import ContactButton from './ContactButton';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center
        gap-10 sm:gap-14 md:gap-16
        px-5 sm:px-8 md:px-10 py-20 bg-[#f5f5f0] overflow-hidden"
    >

      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase leading-none tracking-tight text-center text-[#0C0C0C]"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          关于我
        </h2>
      </FadeIn>

      {/* Animated paragraph */}
      <div className="text-center max-w-[600px] relative z-10">
        <FadeIn delay={0.15} y={20}>
          <p
            className="text-[#0C0C0C]/70 font-light leading-relaxed"
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
                <p className="text-[#0C0C0C] font-black text-lg sm:text-xl md:text-2xl">{s.num}</p>
                <p className="text-[#0C0C0C]/30 text-xs sm:text-sm tracking-widest uppercase mt-1">{s.label}</p>
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
