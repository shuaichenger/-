import { useState, useEffect, useCallback, useRef } from 'react';
import FadeIn from './FadeIn';

const images = [
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
];

const row1 = images.slice(0, 5);
const row2 = images.slice(5, 9);

// double for seamless CSS loop
const row1Double = [...row1, ...row1];
const row2Double = [...row2, ...row2];

/* ───────── Simple lightbox ───────── */
function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-zoom-out"
      onClick={onClose}
    >
      <img
        src={src}
        alt=""
        className="max-w-[90vw] max-h-[90vh] object-contain rounded-2xl shadow-2xl
          animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

/* ───────── Main component ───────── */
export default function MarqueeSection() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <>
      <section ref={sectionRef} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-16 overflow-hidden">
        {/* Section label */}
        <FadeIn delay={0} y={20}>
          <p className="text-[#D7E2EA]/20 text-xs sm:text-sm tracking-[0.3em] uppercase text-center mb-8">
            精选作品概览
          </p>
        </FadeIn>

        {/* Row 1 - scrolls RIGHT (translateX -50%) */}
        <div
          className="flex gap-3 sm:gap-4 mb-3 sm:mb-4"
          style={{
            animation: paused
              ? 'none'
              : `marquee-right ${row1.length * 4}s linear infinite`,
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {row1Double.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightboxSrc(src)}
              className="flex-shrink-0 focus:outline-none"
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-[280px] sm:w-[360px] md:w-[420px] h-[180px] sm:h-[230px] md:h-[270px]
                  rounded-xl sm:rounded-2xl object-cover
                  border border-white/5 opacity-70 hover:opacity-100
                  transition-all duration-300
                  hover:border-white/20 hover:scale-[1.02] hover:shadow-2xl
                  cursor-pointer"
              />
            </button>
          ))}
        </div>

        {/* Row 2 - scrolls LEFT (translateX 0%) */}
        <div
          className="flex gap-3 sm:gap-4"
          style={{
            animation: paused
              ? 'none'
              : `marquee-left ${row2.length * 4}s linear infinite`,
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {row2Double.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightboxSrc(src)}
              className="flex-shrink-0 focus:outline-none"
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-[280px] sm:w-[360px] md:w-[420px] h-[180px] sm:h-[230px] md:h-[270px]
                  rounded-xl sm:rounded-2xl object-cover
                  border border-white/5 opacity-70 hover:opacity-100
                  transition-all duration-300
                  hover:border-white/20 hover:scale-[1.02] hover:shadow-2xl
                  cursor-pointer"
              />
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxSrc && (
        <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
      )}
    </>
  );
}
