import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import ProjectModal from './ProjectModal';
import type { Project } from './ProjectModal';
import FadeIn from './FadeIn';

const projects: Project[] = [
  {
    num: '01',
    category: 'Client',
    name: 'Nebula Visuals',
    description: '为科技品牌打造的沉浸式视觉识别系统，融合数字艺术与品牌策略。',
    detail: '品牌全案设计 · 数字视觉 · 动态识别 · 应用延展',
    year: '2025',
    role: '品牌设计总监',
    tools: ['Midjourney', 'Figma', 'After Effects', 'C4D'],
    intro: 'Nebula Visuals 是一家专注于 AI 驱动的视觉科技公司。我们为其打造了从品牌策略到视觉落地的全案设计。核心理念围绕「数字星云」展开——将 AI 生成的有机形态与传统品牌系统结合，创造出介于数字与现实之间的独特视觉语言。整套系统包含动态 Logo、色彩体系、字体规范及全渠道应用延展。',
    highlights: [
      '动态品牌识别系统，Logo 在 12 种形态之间循环演变',
      'AI 辅助色彩生成，300+ 品牌专属色板',
      '全渠道应用延展覆盖线上线下 20+ 触点',
      '数字化品牌手册，支持实时更新与团队协作',
    ],
    hero: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    ],
    accent: '#8B5CF6', // 紫 — 科技
  },
  {
    num: '02',
    category: 'Personal',
    name: 'Aura Identity',
    description: '前沿美妆品牌的整体形象升级，从包装到数字触点统一呈现。',
    detail: '标志设计 · 包装系统 · 品牌物料 · 数字品牌手册',
    year: '2025',
    role: '视觉设计师',
    tools: ['Figma', 'Illustrator', 'Midjourney', 'Blender'],
    intro: 'Aura Identity 是一个个人实验项目，探索如何将 AIGC 工具融入美妆品牌的视觉设计流程。从品牌命名、Logo 设计到包装结构和数字体验，整套设计围绕「光晕」概念展开——追求柔和、通透、富有层次的视觉质感。项目完整记录了从 prompt 探索到最终落地的全过程。',
    highlights: [
      '利用 Midjourney 进行材质与质感探索，产出 50+ 视觉方向',
      '包装结构融合参数化设计，实现 3D 打印原型',
      '数字品牌手册采用交互式展示，支持多端自适应',
    ],
    hero: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    ],
    accent: '#EC4899', // 粉 — 美妆
  },
  {
    num: '03',
    category: 'Client',
    name: 'Solaris Digital',
    description: '新能源出行品牌的数字化视觉转型，构建面向未来的品牌体验。',
    detail: '品牌策略 · UI/UX 设计 · 动效系统 · 落地实施',
    year: '2024',
    role: '品牌顾问 & UI 设计师',
    tools: ['Figma', 'Framer', 'Midjourney', 'Lottie'],
    intro: 'Solaris Digital 是一家新能源出行平台，致力于将太阳能技术与共享出行结合。我们主导了其品牌升级与数字产品设计，从品牌策略、视觉识别到 App 和 Web 的 UI/UX。设计语言以「光与能量」为核心，采用渐变色彩体系与流畅动效，传递环保、科技、活力的品牌感受。',
    highlights: [
      '品牌策略重塑，从「出行工具」升级为「能源生活方式」',
      '全平台 UI 系统覆盖 App、Web、小程序，300+ 组件',
      '动态品牌语言融入产品交互，每个动效都有功能意义',
      '用户增长 40%，NPS 提升 25 个点（上线后数据）',
    ],
    hero: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    ],
    accent: '#F97316', // 橙 — 能量
  },
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 max-w-[1400px] mx-auto">
          {projects.map((proj, idx) => (
            <FadeIn key={proj.num} delay={idx * 0.1} y={40}>
              <motion.div
                className="group rounded-[30px] sm:rounded-[40px] border border-[#D7E2EA]/20
                  bg-[#0C0C0C] overflow-hidden cursor-pointer
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-lg hover:shadow-white/5"
                style={{
                  ['--accent' as string]: proj.accent,
                  borderColor: 'rgba(215, 226, 234, 0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = proj.accent + '80';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(215, 226, 234, 0.2)';
                }}
                onClick={() => setActiveProject(proj)}
              >
                {/* Accent top bar */}
                <div
                  className="h-1 w-full"
                  style={{ backgroundColor: proj.accent }}
                />

                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={proj.images[0]}
                    alt={proj.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500
                      group-hover:scale-105"
                  />
                </div>

                <div className="p-5 sm:p-6 md:p-7">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="font-black leading-none text-3xl sm:text-4xl md:text-5xl transition-colors duration-300"
                      style={{ color: proj.accent }}
                    >
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

                  <button
                    onClick={(e) => { e.stopPropagation(); setActiveProject(proj); }}
                    className="mt-5 group/btn inline-flex items-center gap-2
                      text-sm sm:text-base tracking-widest uppercase
                      transition-colors duration-200"
                    style={{ color: proj.accent + '99' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = proj.accent; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = proj.accent + '99'; }}
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
