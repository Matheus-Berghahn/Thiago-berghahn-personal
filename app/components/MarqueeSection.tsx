'use client';

import Marquee from 'react-fast-marquee';

export const MarqueeSection = () => {
  const items = [
    "REABILITAÇÃO DE LESÕES",
    "EMAGRECIMENTO",
    "HIPERTROFIA",
    "SAÚDE"
  ];

  return (
    <section className="bg-neutral-900 py-6 md:py-8 overflow-hidden">
      <Marquee 
        speed={45}
        loop={0}
        gradient={true}
        gradientColor="#050505"
        gradientWidth={50}
        delay={0}
      >
        {/* Repete 4 vezes para desktop também ficar cheio */}
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div 
            key={index} 
            className="mx-2 md:mx-5 inline-flex items-center gap-3 md:gap-6"
          >
            <div className="w-1.5 md:w-2 h-px bg-red-700/50" />
            <span className="text-lg md:text-base font-light tracking-wide text-gray-400 whitespace-nowrap">
              {item}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
};