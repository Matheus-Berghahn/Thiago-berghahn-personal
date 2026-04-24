'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const AboutSection = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-neutral-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
          className="bg-neutral-800/50 p-10"
        >
          <div className="absolute top-0 left-0 w-px h-12 bg-red-700/30" />
          
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-red-700/50" />
              <div>
                <h3 className="text-white text-lg font-light tracking-wide">Bacharel em Educação Física</h3>
                <p className="text-gray-500 text-sm">Universidade Feevale</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <div className="bg-neutral-700 px-4 py-1.5">
                <span className="text-red-600 text-sm">5+ anos de experiência</span>
              </div>
              <div className="bg-neutral-700 px-4 py-1.5">
                <span className="text-red-600 text-sm">Especialista em musculação</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {["Reabilitação de lesões", "Emagrecimento", "Hipertrofia"].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  <div className="flex items-center gap-3 p-3 bg-neutral-700/20">
                    <div className="w-4 h-px bg-red-700/50 group-hover:w-6 transition-all" />
                    <span className="text-gray-400 text-sm font-light">{item}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};