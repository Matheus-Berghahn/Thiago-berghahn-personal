'use client';

import { motion } from 'framer-motion';

export const MarqueeSection = () => {
  const items = [
    "REABILITAÇÃO DE LESÕES",
    "EMAGRECIMENTO",
    "HIPERTROFIA",
    "RESULTADOS GARANTIDOS",
    "ACOMPANHAMENTO CIENTÍFICO"
  ];

  return (
    <section className="bg-neutral-900 py-8 overflow-hidden">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-transparent to-neutral-900 z-10" />
        
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...items, ...items, ...items].map((item, index) => (
            <div key={index} className="mx-4 inline-flex items-center gap-4">
              <div className="w-2 h-px bg-red-700/50" />
              <span className="text-sm md:text-base font-light tracking-wide text-gray-400">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};