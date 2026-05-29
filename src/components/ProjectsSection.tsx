import { motion } from 'framer-motion';
import { Palette, Sparkles, Zap } from 'lucide-react';
import FadeIn from './FadeIn';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  delay: number;
}

function FeatureCard({ title, description, icon, gradient, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
      className="relative flex flex-col justify-start items-start w-full max-w-[260px] md:max-w-[300px] group mx-auto"
    >
      {/* Glow background */}
      <div
        className="absolute w-full h-[260px] md:h-[300px] opacity-60 rounded-[40px] pointer-events-none"
        style={{ background: gradient, filter: 'blur(45px)' }}
      />

      {/* Foreground card with gradient border */}
      <div
        className="relative self-stretch h-[260px] md:h-[300px] rounded-[40px] z-10 overflow-hidden"
        style={{
          border: '8px solid transparent',
          background: `linear-gradient(#1A1A1C, #1A1A1C) padding-box, ${gradient} border-box`,
        }}
      >
        <div className="w-full h-full p-7 flex flex-col justify-between">
          {/* Icon */}
          <div className="text-white/90">
            {icon}
          </div>

          {/* Text */}
          <div>
            <h3 className="text-white font-medium text-xl mb-3 tracking-tight">{title}</h3>
            <p className="text-gray-400 text-[14px] leading-[1.6] font-normal selection:bg-white/20">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const cards = [
  {
    title: '品牌全案',
    description: '从 Logo 到完整 VIS 系统，打造统一且有辨识度的品牌视觉体系，让每个触达点都传递一致的品牌力。',
    icon: <Palette size={32} strokeWidth={2.5} />,
    gradient: 'linear-gradient(137deg, #8B5CF6 0%, #A78BFA 45%, #6D28D9 100%)',
    delay: 0.1,
  },
  {
    title: 'AIGC 视觉',
    description: '用 Midjourney、Stable Diffusion、ComfyUI 等 AI 工具生成令人惊艳的原创视觉，效率与质感兼具。',
    icon: <Sparkles size={32} strokeWidth={2.5} />,
    gradient: 'linear-gradient(137deg, #EC4899 0%, #F472B6 45%, #BE185D 100%)',
    delay: 0.2,
  },
  {
    title: '动态设计',
    description: '结合 ComfyUI 工作流与后期工具，为品牌和产品注入动态叙事能量，让视觉更有生命力。',
    icon: <Zap size={32} strokeWidth={2.5} />,
    gradient: 'linear-gradient(137deg, #F97316 0%, #FB923C 45%, #EA580C 100%)',
    delay: 0.3,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects"
      className="min-h-screen bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        -mt-10 sm:-mt-12 md:-mt-14 z-10 relative
        px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32
        flex flex-col items-center justify-center"
    >
      <h2
        className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        作品
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-3 lg:gap-3 w-full max-w-[936px]">
        {cards.map((card) => (
          <FadeIn key={card.title} delay={0} y={0}>
            <FeatureCard
              title={card.title}
              description={card.description}
              icon={card.icon}
              gradient={card.gradient}
              delay={card.delay}
            />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
