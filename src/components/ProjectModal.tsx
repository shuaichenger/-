import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export interface Project {
  num: string;
  category: 'Client' | 'Personal';
  name: string;
  description: string;
  detail: string;
  hero: string;
  intro: string;
  highlights: string[];
  year: string;
  role: string;
  tools: string[];
  images: string[];
}

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-md"
          onClick={onClose}
        >
          {/* Close button - fixed */}
          <button
            onClick={onClose}
            className="fixed top-5 right-5 z-30 p-3 rounded-full
              bg-black/70 text-white hover:bg-white/20 transition-colors
              border border-white/10"
          >
            <X size={20} />
          </button>

          <div onClick={(e) => e.stopPropagation()} className="min-h-full">
            {/* ── Hero Image ── */}
            <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden">
              <motion.img
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                src={project.hero}
                alt={project.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
            </div>

            {/* ── Content ── */}
            <div className="max-w-5xl mx-auto px-5 sm:px-8 md:px-10 -mt-24 relative z-10 pb-24">
              {/* Title & Meta */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="text-white/40 text-xs sm:text-sm tracking-[0.2em] uppercase">
                  {project.category === 'Client' ? '客户项目' : '个人项目'}
                </span>
                <h2 className="text-white font-black mt-1 mb-6 leading-none"
                  style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
                >
                  {project.name}
                </h2>

                {/* Meta chips */}
                <div className="flex flex-wrap gap-x-8 gap-y-3 text-white/60 text-sm sm:text-base">
                  <div>
                    <span className="text-white/30 text-xs tracking-widest uppercase block">年份</span>
                    <span className="text-white/80">{project.year}</span>
                  </div>
                  <div>
                    <span className="text-white/30 text-xs tracking-widest uppercase block">角色</span>
                    <span className="text-white/80">{project.role}</span>
                  </div>
                  <div>
                    <span className="text-white/30 text-xs tracking-widest uppercase block">工具</span>
                    <span className="text-white/80">{project.tools.join(' · ')}</span>
                  </div>
                </div>
              </motion.div>

              <div className="w-16 h-px bg-white/20 my-10" />

              {/* Intro */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                <h3 className="text-white font-semibold tracking-wider text-lg sm:text-xl mb-4">
                  项目简介
                </h3>
                <p className="text-white/70 text-sm sm:text-base md:text-lg leading-[1.8] max-w-3xl">
                  {project.intro}
                </p>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="mt-12"
              >
                <h3 className="text-white font-semibold tracking-wider text-lg sm:text-xl mb-5">
                  设计亮点
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.highlights.map((h, i) => (
                    <div key={i}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5"
                    >
                      <span className="text-white/20 font-black text-lg mt-0.5 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-white/70 text-sm sm:text-base leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Image Gallery */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="mt-16"
              >
                <h3 className="text-white font-semibold tracking-wider text-lg sm:text-xl mb-6">
                  作品展示
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {project.images.map((src, i) => (
                    <div
                      key={i}
                      className={`overflow-hidden rounded-2xl bg-white/5 ${
                        i === 2 ? 'sm:col-span-2' : ''
                      }`}
                    >
                      <img
                        src={src}
                        alt={`${project.name} ${i + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                        style={{
                          aspectRatio: i === 2 ? '21/9' : '4/3',
                        }}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
