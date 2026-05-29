import FadeIn from './FadeIn';

const services = [
  {
    num: '01',
    name: '品牌全案',
    desc: '从 Logo 到完整 VIS 系统，打造统一且有辨识度的品牌视觉体系，让每个触达点都传递一致的品牌力。',
  },
  {
    num: '02',
    name: 'AIGC 视觉',
    desc: '用 Midjourney、Stable Diffusion、ComfyUI 等 AI 工具生成令人惊艳的原创视觉，效率与质感兼具。',
  },
  {
    num: '03',
    name: '动态设计',
    desc: '结合 ComfyUI 工作流与后期工具，为品牌和产品注入动态叙事能量，让视觉更有生命力。',
  },
  {
    num: '04',
    name: '落地生产',
    desc: '包装与印品全流程把控——选材、打样、跟印、成本优化，确保设计方案完美落地。',
  },
  {
    num: '05',
    name: 'Web & UI',
    desc: '干净、现代的网页与界面设计，注重布局、字体与转化体验，让产品在视觉上先赢一步。',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="service"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        服务
      </h2>

      <div className="max-w-5xl mx-auto">
        {services.map((s, i) => (
          <FadeIn key={s.num} delay={i * 0.1} y={20}>
            <div className="flex gap-6 sm:gap-10 md:gap-16 py-8 sm:py-10 md:py-12 border-t border-[rgba(12,12,12,0.15)]">
              <span
                className="font-black text-[#0C0C0C] leading-none shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {s.num}
              </span>
              <div className="flex flex-col justify-center gap-2 sm:gap-3">
                <h3
                  className="font-medium text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {s.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl opacity-60 text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
