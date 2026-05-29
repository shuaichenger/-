import FadeIn from './FadeIn';

const services = [
  {
    num: '01',
    name: '品牌全案',
    desc: '从 Logo 到完整 VIS 系统，打造统一且有辨识度的品牌视觉体系，让每个触达点都传递一致的品牌力。',
    icon: '✦',
    color: '#8B5CF6',
  },
  {
    num: '02',
    name: 'AIGC 视觉',
    desc: '用 Midjourney、Stable Diffusion、ComfyUI 等 AI 工具生成令人惊艳的原创视觉，效率与质感兼具。',
    icon: '◆',
    color: '#EC4899',
  },
  {
    num: '03',
    name: '动态设计',
    desc: '结合 ComfyUI 工作流与后期工具，为品牌和产品注入动态叙事能量，让视觉更有生命力。',
    icon: '◈',
    color: '#F59E0B',
  },
  {
    num: '04',
    name: '落地生产',
    desc: '包装与印品全流程把控——选材、打样、跟印、成本优化，确保设计方案完美落地。',
    icon: '▣',
    color: '#10B981',
  },
  {
    num: '05',
    name: 'Web & UI',
    desc: '干净、现代的网页与界面设计，注重布局、字体与转化体验，让产品在视觉上先赢一步。',
    icon: '◇',
    color: '#3B82F6',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="service"
      className="bg-[#f5f5f0] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 overflow-hidden"
    >
      {/* Decorative bg */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent
        via-black/5 to-transparent pointer-events-none" />

      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        服务
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {services.map((s, i) => (
          <FadeIn key={s.num} delay={i * 0.08} y={25}>
            <div
              className="group relative p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl
                bg-white border border-black/5
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5
                cursor-default"
              style={{
                ['--hover-color' as string]: s.color,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = s.color + '40';
                e.currentTarget.style.boxShadow = `0 8px 30px ${s.color}15`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              {/* Icon + Number row */}
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="text-2xl sm:text-3xl transition-transform duration-300 group-hover:scale-110"
                  style={{ color: s.color }}
                >
                  {s.icon}
                </span>
                <span
                  className="font-black text-lg sm:text-xl leading-none transition-colors duration-300"
                  style={{ color: s.color + '60' }}
                >
                  {s.num}
                </span>
              </div>

              {/* Name */}
              <h3
                className="font-medium text-[#0C0C0C] mb-2"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.8rem)' }}
              >
                {s.name}
              </h3>

              {/* Description */}
              <p
                className="font-light leading-relaxed text-black/50"
                style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1.05rem)' }}
              >
                {s.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
