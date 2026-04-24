'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const AboutBox = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [30, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="relative"
    >
      <div className="relative bg-neutral-800 p-10">
        <div className="absolute top-0 left-0 w-px h-12 bg-red-700" />
        <div className="absolute top-0 right-0 w-px h-12 bg-red-700" />
        
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-red-700/50" />
            <div>
              <p className="text-white text-lg font-light tracking-wide">Bacharel em Educação Física</p>
              <p className="text-gray-500 text-sm">Universidade Feevale</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div className="group relative">
              <div className="relative bg-neutral-700 px-5 py-2">
                <span className="text-red-600 font-light">5+</span>
                <span className="text-gray-400 ml-2 text-sm">anos de experiência</span>
              </div>
            </div>
            <div className="bg-neutral-700 px-5 py-2">
              <span className="text-red-600 font-light">Especialista</span>
              <span className="text-gray-400 ml-2 text-sm">em musculação</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            {["Reabilitação de lesões", "Emagrecimento", "Hipertrofia"].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className="group relative"
              >
                <div className="relative flex items-center gap-3 p-3 bg-neutral-700/30">
                  <div className="w-3 h-px bg-red-700/50 group-hover:w-6 transition-all duration-300" />
                  <span className="text-gray-300 text-sm font-light tracking-wide">{item}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};