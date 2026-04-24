'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ServicesSectionProps {
  onCardClick: (type: 'presencial' | 'online') => void;
}

export const ServicesSection = ({ onCardClick }: ServicesSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="bg-neutral-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-4">
            <div className="w-4 md:w-6 h-px bg-red-700" />
            <span className="text-red-700 text-[10px] md:text-xs tracking-widest">ESCOLHA SEU CAMINHO</span>
            <div className="w-4 md:w-6 h-px bg-red-700" />
          </div>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-white">Comece sua jornada</h2>
          <div className="w-12 h-px bg-red-700/30 mx-auto mt-4 md:mt-6" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Presencial Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <div className="relative bg-neutral-800 p-6 md:p-8 lg:p-10">
              <div className="absolute top-0 left-0 w-8 md:w-12 h-px bg-red-700/30 group-hover:w-12 md:group-hover:w-24 transition-all duration-500" />
              
              <div className="mt-6 md:mt-8">
                <div className="w-6 md:w-8 h-px bg-red-700/30 mb-6 md:mb-8" />
                <h3 className="text-xl md:text-2xl font-light text-white mb-6 md:mb-8 tracking-wide">TREINAMENTO PRESENCIAL</h3>
                
                <div className="mb-6 md:mb-8">
                  <p className="text-red-600 text-[10px] md:text-xs tracking-wider mb-3 md:mb-4">IDEAL PARA QUEM:</p>
                  <ul className="space-y-2 md:space-y-3">
                    <li className="flex items-start gap-2 md:gap-3 text-gray-400 text-xs md:text-sm">
                      <span className="text-red-700 flex-shrink-0">—</span>
                      <span>Busca evolução acelerada e correção profissional</span>
                    </li>
                    <li className="flex items-start gap-2 md:gap-3 text-gray-400 text-xs md:text-sm">
                      <span className="text-red-700 flex-shrink-0">—</span>
                      <span>Possui lesão ou especificidade e quer segurança</span>
                    </li>
                    <li className="flex items-start gap-2 md:gap-3 text-gray-400 text-xs md:text-sm">
                      <span className="text-red-700 flex-shrink-0">—</span>
                      <span>Precisa de acompanhamento que cobre e motive</span>
                    </li>
                  </ul>
                </div>
                
                <button
                  onClick={() => onCardClick('presencial')}
                  className="w-full group/btn relative bg-transparent border border-neutral-700 hover:border-red-700/50 px-4 md:px-6 py-2 md:py-3 text-white text-xs md:text-sm tracking-wide transition-all duration-300"
                >
                  Quero Treinar Presencialmente
                </button>
              </div>
            </div>
          </motion.div>

          {/* Online Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <div className="relative bg-neutral-800 p-6 md:p-8 lg:p-10">
              <div className="absolute top-0 left-0 w-8 md:w-12 h-px bg-red-700/30 group-hover:w-12 md:group-hover:w-24 transition-all duration-500" />
              
              <div className="mt-6 md:mt-8">
                <div className="w-6 md:w-8 h-px bg-red-700/30 mb-6 md:mb-8" />
                <h3 className="text-xl md:text-2xl font-light text-white mb-6 md:mb-8 tracking-wide">CONSULTORIA ONLINE</h3>
                
                <div className="mb-6 md:mb-8">
                  <p className="text-red-600 text-[10px] md:text-xs tracking-wider mb-3 md:mb-4">IDEAL PARA QUEM:</p>
                  <ul className="space-y-2 md:space-y-3">
                    <li className="flex items-start gap-2 md:gap-3 text-gray-400 text-xs md:text-sm">
                      <span className="text-red-700 flex-shrink-0">—</span>
                      <span>Quer direcionamento profissional para maximizar resultados</span>
                    </li>
                    <li className="flex items-start gap-2 md:gap-3 text-gray-400 text-xs md:text-sm">
                      <span className="text-red-700 flex-shrink-0">—</span>
                      <span>Já tem familiaridade mas sente que estagnou</span>
                    </li>
                    <li className="flex items-start gap-2 md:gap-3 text-gray-400 text-xs md:text-sm">
                      <span className="text-red-700 flex-shrink-0">—</span>
                      <span>Busca o caminho mais curto que a ciência proporciona</span>
                    </li>
                  </ul>
                </div>
                
                <button
                  onClick={() => onCardClick('online')}
                  className="w-full group/btn relative bg-transparent border border-neutral-700 hover:border-red-700/50 px-4 md:px-6 py-2 md:py-3 text-white text-xs md:text-sm tracking-wide transition-all duration-300"
                >
                  Quero Consultoria Online
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};