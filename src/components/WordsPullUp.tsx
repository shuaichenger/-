import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';

interface WordsPullUpProps {
  text: string;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}

export default function WordsPullUp({ text, className = '', delay = 0, style }: WordsPullUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const words = text.split(' ');

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            delay: delay + i * 0.08,
          }}
          className="inline-block mr-[0.15em]"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
