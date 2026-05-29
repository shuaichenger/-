import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import ProjectModal from './ProjectModal';
import FadeIn from './FadeIn';

const projects = [
  {
    num: '01',
    category: 'Client',
    name: 'Nebula Visuals',
    description: '为科技品牌打造的沉浸式视觉识别系统，融合数字艺术与品牌策略。',
    detail: '服务内容：品牌全案设计 · 数字视觉 · 动态识别 · 应用延展',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    ],
  },
  {
    num: '02',
    category: 'Personal',
    name: 'Aura Identity',
    description: '前沿美妆品牌的整体形象升级，从包装到数字触点统一呈现。',
    detail: '服务内容：标志设计 · 包装系统 · 品牌物料 · 数字品牌手册',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    ],
  },
  {
    num: '03',
    category: 'Client',
    name: 'Solaris Digital',
    description: '新能源出行品牌的数字化视觉转型，构建面向未来的品牌体验。',
    detail: '服务内容：品牌策略 · UI/UX 设计 · 动效系统 · 落地实施',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    ],
  },
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="relative">
      <section id="projects"
        className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
          -mt-10 sm:-mt-12 md:-mt-14 z-10 relative
          px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      >
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          作品
        </h2>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 max-w-[1400px] mx-auto">
          {projects.map((proj, idx) => (
            <FadeIn key={proj.num} delay={idx * 0.1} y={40}>
              <motion.div
                className="group rounded-[30px] sm:rounded-[40px] border border-[#D7E2EA]/20
                  bg-[#0C0C0C] overflow-hidden cursor-pointer
                  transition-all duration-300
                  hover:border-[#D7E2EA]/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/5"
                onClick={() => setActiveProject(proj)}
              >
                {/* Thumbnail */}
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={proj.images[0]}
                    alt={proj.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500
                      group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="p-5 sm:p-6 md:p-7">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-black text-[#D7E2EA] leading-none text-3xl sm:text-4xl md:text-5xl">
                      {proj.num}
                    </span>
                    <span className="text-[#D7E2EA]/40 text-xs sm:text-sm md:text-base tracking-widest uppercase">
                      {proj.category === 'Client' ? '客户项目' : '个人项目'}
                    </span>
                  </div>
                  <h3 className="text-[#D7E2EA] font-medium uppercase text-xl sm:text-2xl md:text-3xl mt-1">
                    {proj.name}
                  </h3>
                  <p className="text-[#D7E2EA]/50 text-sm sm:text-base mt-2 leading-relaxed line-clamp-2">
                    {proj.description}
                  </p>

                  {/* Button */}
                  <button
                    onClick={(e) => { e.stopPropagation(); setActiveProject(proj); }}
                    className="mt-5 group/btn inline-flex items-center gap-2
                      text-[#D7E2EA]/60 text-sm sm:text-base tracking-widest uppercase
                      transition-colors duration-200 hover:text-[#D7E2EA]"
                  >
                    <span>查看详情</span>
                    <ExternalLink size={16}
                      className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    />
                  </button>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </section>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  );
}
