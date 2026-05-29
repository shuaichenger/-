import { useRef, useEffect, useState } from 'react';
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

// quadruple for seamless infinite scroll
const row1Quad = [...row1, ...row1, ...row1, ...row1];
const row2Quad = [...row2, ...row2, ...row2, ...row2];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const val = (window.scrollY - sectionTop + window.innerHeight) * 0.25;
      setOffset(val);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-16 overflow-hidden">
      {/* Section label */}
      <FadeIn delay={0} y={20}>
        <p className="text-[#D7E2EA]/20 text-xs sm:text-sm tracking-[0.3em] uppercase text-center mb-6">
          精选作品概览
        </p>
      </FadeIn>

      {/* Row 1 - RIGHT */}
      <div
        className="flex gap-3 sm:gap-4 mb-3 sm:mb-4"
        style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
      >
        {row1Quad.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            className="w-[280px] sm:w-[360px] md:w-[420px] h-[180px] sm:h-[230px] md:h-[270px]
              rounded-xl sm:rounded-2xl object-cover flex-shrink-0
              border border-white/5 opacity-80 hover:opacity-100
              transition-opacity duration-300"
          />
        ))}
      </div>

      {/* Row 2 - LEFT */}
      <div
        className="flex gap-3 sm:gap-4"
        style={{ transform: `translateX(-${offset - 200}px)`, willChange: 'transform' }}
      >
        {row2Quad.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            className="w-[280px] sm:w-[360px] md:w-[420px] h-[180px] sm:h-[230px] md:h-[270px]
              rounded-xl sm:rounded-2xl object-cover flex-shrink-0
              border border-white/5 opacity-80 hover:opacity-100
              transition-opacity duration-300"
          />
        ))}
      </div>
    </section>
  );
}
