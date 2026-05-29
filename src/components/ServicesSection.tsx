import FadeIn from './FadeIn';

const services = [
  {
    num: '01',
    name: 'Brand Identity',
    desc: 'Full-spectrum brand visual systems — from logo to complete VIS, crafting cohesive identities that resonate across every touchpoint.',
  },
  {
    num: '02',
    name: 'AIGC Visual',
    desc: 'AI-powered creative visuals using Midjourney, Stable Diffusion, and ComfyUI workflows to generate striking, original imagery.',
  },
  {
    num: '03',
    name: 'Motion Design',
    desc: 'Dynamic animations and motion graphics via ComfyUI and post-production tools, adding narrative energy to brands and products.',
  },
  {
    num: '04',
    name: 'Production',
    desc: 'End-to-end packaging and print production — material sourcing, print supervision, and cost optimization for flawless physical deliverables.',
  },
  {
    num: '05',
    name: 'Web & UI',
    desc: 'Clean, modern web and UI design with focus on layout, typography, and conversion-driven user experiences.',
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
        Services
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
                  className="font-medium uppercase text-[#0C0C0C]"
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
