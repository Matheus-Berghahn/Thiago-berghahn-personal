'use client';

import { motion } from 'framer-motion';

export const MarqueeText = () => {
  const items = [
    "REABILITAÇÃO DE LESÕES",
    "EMAGRECIMENTO",
    "HIPERTROFIA",
    "RESULTADOS GARANTIDOS",
    "ACOMPANHAMENTO CIENTÍFICO"
  ];

  return (
    <div className="py-12 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-700/5 to-transparent" />
      
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {[...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="mx-4 group cursor-pointer"
          >
            <div className="inline-flex items-center gap-4 px-8 py-2 bg-transparent border-l border-red-700/30 hover:border-red-700/60 transition-all duration-300">
              <span className="w-2 h-px bg-red-700/50 group-hover:w-4 transition-all duration-300" />
              <span className="text-sm md:text-base font-light tracking-wide text-gray-400 group-hover:text-white transition-colors">
                {item}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};