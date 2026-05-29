import { useEffect, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  num: string;
  category: string;
  name: string;
  description: string;
  detail: string;
  images: string[];
}

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const [imgIndex, setImgIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goNext = useCallback(() => {
    if (!project) return;
    setDirection(1);
    setImgIndex((p) => (p + 1) % project.images.length);
  }, [project]);

  const goPrev = useCallback(() => {
    if (!project) return;
    setDirection(-1);
    setImgIndex((p) => (p - 1 + project.images.length) % project.images.length);
  }, [project]);

  useEffect(() => {
    setImgIndex(0);
    setDirection(0);
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose, goNext, goPrev]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl max-h-[90vh] flex flex-col lg:flex-row gap-6
              bg-[#0C0C0C] border border-[#D7E2EA]/20 rounded-[30px] overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full
                bg-black/60 text-white hover:bg-black/80 transition-colors"
            >
              <X size={22} />
            </button>

            {/* Left - Image gallery */}
            <div className="relative w-full lg:w-[65%] aspect-[4/3] lg:aspect-auto lg:min-h-[500px] bg-black/40">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.img
                  key={imgIndex}
                  src={project.images[imgIndex]}
                  alt={`${project.name} ${imgIndex + 1}`}
                  custom={direction}
                  initial={{ x: direction > 0 ? 200 : -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction > 0 ? -200 : 200, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Nav arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={goPrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full
                      bg-black/50 text-white hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={goNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full
                      bg-black/50 text-white hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                    {project.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => { setDirection(i > imgIndex ? 1 : -1); setImgIndex(i); }}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          i === imgIndex ? 'bg-white w-5' : 'bg-white/40 hover:bg-white/60'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Right - Info panel */}
            <div className="w-full lg:w-[35%] p-6 sm:p-8 flex flex-col justify-center">
              <span className="text-[#D7E2EA]/40 text-xs sm:text-sm tracking-widest uppercase">
                {project.category === 'Client' ? '客户项目' : '个人项目'}
              </span>
              <h3 className="text-[#D7E2EA] font-black text-2xl sm:text-3xl md:text-4xl mt-1 mb-4">
                {project.name}
              </h3>
              <p className="text-[#D7E2EA]/70 text-sm sm:text-base leading-relaxed mb-3">
                {project.description}
              </p>
              <p className="text-[#D7E2EA]/50 text-xs sm:text-sm leading-relaxed">
                {project.detail}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
