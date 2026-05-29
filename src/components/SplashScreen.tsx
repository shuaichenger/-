import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen() {
  const [phase, setPhase] = useState<'enter' | 'visible' | 'exit'>('enter');
  const [showText, setShowText] = useState(false);
  const [showSub, setShowSub] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowText(true), 200);
    const t2 = setTimeout(() => setShowSub(true), 900);
    const t3 = setTimeout(() => setPhase('exit'), 3100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {phase !== 'exit' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center
            bg-[#0C0C0C] select-none"
        >
          {/* Decorative corner dots */}
          <div className="absolute top-8 left-8 flex gap-2">
            <span className="w-2 h-2 rounded-full bg-white/10" />
            <span className="w-2 h-2 rounded-full bg-white/5" />
            <span className="w-2 h-2 rounded-full bg-white/3" />
          </div>

          {/* Main name */}
          <div className="relative mb-4">
            <AnimatePresence>
              {showText && (
                <motion.h1
                  initial={{ y: 60, opacity: 0, filter: 'blur(12px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="font-black text-white leading-none tracking-tight"
                  style={{ fontSize: 'clamp(4rem, 15vw, 180px)' }}
                >
                  成城野
                </motion.h1>
              )}
            </AnimatePresence>

            {/* Underline - draws left to right */}
            {showText && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="h-[2px] bg-gradient-to-r from-white/5 via-white/40 to-white/5
                  origin-left mt-4"
              />
            )}
          </div>

          {/* Subtitle */}
          <AnimatePresence>
            {showSub && (
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-white/40 font-light tracking-[0.3em] uppercase"
                style={{ fontSize: 'clamp(0.75rem, 1.2vw, 1.1rem)' }}
              >
                高级视觉设计师 · AIGC 创作者
              </motion.p>
            )}
          </AnimatePresence>

          {/* Bottom decorative line */}
          <div className="absolute bottom-8 left-8 right-8 flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-white/5 via-white/20 to-transparent" />
            <span className="text-white/10 text-[10px] tracking-[0.3em] uppercase whitespace-nowrap">
              2025
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
