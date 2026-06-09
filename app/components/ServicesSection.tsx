'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ServicesSectionProps {
  onCardClick: (type: 'presencial' | 'online') => void;
}

export const ServicesSection = ({ onCardClick }: ServicesSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const handleCardClick = (type: 'presencial' | 'online') => {
  onCardClick(type);
  
  // Aguarda o DOM renderizar/expandir o componente antes de calcular posição
  setTimeout(() => {
    const element = document.getElementById(`${type}-section`);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, 100);
};

  return (
    <section ref={ref} className="bg-neutral-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-4">
            <div className="w-4 md:w-6 h-px bg-red-700" />
            <span className="text-red-700 text-[10px] md:text-xs tracking-widest">ESCOLHA SEU CAMINHO</span>
            <div className="w-4 md:w-6 h-px bg-red-700" />
          </div>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-white text-center">DESCUBRA A MODALIDADE IDEAL PARA SEU PERFIL</h2>
          {/* Seta apontando para baixo - MAIOR */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="my-6"
          >
            <svg 
              className="w-8 h-8 md:w-10 md:h-10 mx-auto text-red-700" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 13l-7 7-7-7m7-7v14" />
            </svg>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Presencial Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="group h-full"
          >
            <div className="relative bg-neutral-800 p-6 md:p-8 lg:p-10 h-full flex flex-col border border-red-700/30 hover:border-red-700/50 transition-all duration-500">
              <div className="mt-6 md:mt-8 flex flex-col h-full">
                <div className="w-6 md:w-8 h-px bg-red-700/30 mb-6 md:mb-8" />
                <h3 className="text-xl md:text-2xl font-light text-white mb-6 md:mb-8 tracking-wide">TREINAMENTO PRESENCIAL</h3>
                
                <div className="mb-6 md:mb-8 flex-grow">
                  <p className="text-red-600 text-lg md:text-xs tracking-wider mb-3 md:mb-4">IDEAL PARA QUEM:</p>
                  <ul className="space-y-5 md:space-y-3">
                    <li className="flex items-start gap-2 md:gap-3 text-white text-lg md:text-sm">
                      <span className="text-red-700 flex-shrink-0">—</span>
                      <span>Busca evolução acelerada e <span className="text-red-600 uppercase">correção profissional</span> a cada repetição.</span>
                    </li>
                    <li className="flex items-start gap-2 md:gap-3 text-white text-lg md:text-sm">
                      <span className="text-red-700 flex-shrink-0">—</span>
                      <span>Possui <span className="text-white">alguma lesão ou especificidade</span> (ombro, joelho, coluna) e quer a <span className="text-white">segurança de</span> <span className="text-red-600 uppercase">treinar sem dor</span>.</span>
                    </li>
                    <li className="flex items-start gap-2 md:gap-3 text-white text-lg md:text-sm">
                      <span className="text-red-700 flex-shrink-0">—</span>
                      <span>Tem <span className="text-white">dificuldade de manter a constância</span> na academia e precisa de um <span className="text-white">acompanhamento que</span> <span className="text-red-600 uppercase">cobre e motive</span> <span className="text-white">de verdade.</span></span>
                    </li>
                  </ul>
                </div>
                
                <button
                  onClick={() => handleCardClick('presencial')}
                  className="w-full group/btn relative bg-red-700/70 border border-white hover:border-red-700/50 px-4 md:px-6 py-4 md:py-3 text-white text-md md:text-sm tracking-wide transition-all duration-300 mt-auto"
                >
                  QUERO TREINAMENTO PRESENCIAL
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
            className="group h-full"
          >
            <div className="relative bg-neutral-800 p-6 md:p-8 lg:p-10 h-full flex flex-col border border-red-700/30 hover:border-red-700/50 transition-all duration-500">
              <div className="mt-6 md:mt-8 flex flex-col h-full">
                <div className="w-6 md:w-8 h-px bg-red-700/30 mb-6 md:mb-8" />
                <h3 className="text-xl md:text-2xl font-light text-white mb-6 md:mb-8 tracking-wide">CONSULTORIA ONLINE + BÔNUS PRESENCIAIS</h3>
                
                <div className="mb-6 md:mb-8 flex-grow">
                  <p className="text-red-600 text-lg md:text-xs tracking-wider mb-3 md:mb-4">IDEAL PARA QUEM:</p>
                  <ul className="space-y-5 md:space-y-3">
                    <li className="flex items-start gap-2 md:gap-3 text-white text-lg md:text-sm">
                      <span className="text-red-700 flex-shrink-0">—</span>
                      <span>Quer <span className="text-red-600 uppercase">direcionamento profissional</span> para <span className="text-white">maximizar resultados</span> e <span className="text-white">parar de perder tempo andando sem direção</span> na academia.</span>
                    </li>
                    <li className="flex items-start gap-2 md:gap-3 text-white text-lg md:text-sm">
                      <span className="text-red-700 flex-shrink-0">—</span>
                      <span>Já tem <span className="text-white">familiaridade com a academia</span> mas sente que <span className="text-white">estagnou</span>. <span className="text-red-600 uppercase">quer evoluir</span> mesmo treinando sozinho.</span>
                    </li>
                    <li className="flex items-start gap-2 md:gap-3 text-white text-lg md:text-sm">
                      <span className="text-red-700 flex-shrink-0">—</span>
                      <span>Não quer depender de <span className="text-white">treinos genéricos</span> e busca o <span className="text-red-600 uppercase">caminho mais curto e certeiro</span> que só a <span className="text-white">ciência</span> proporciona.</span>
                    </li>
                  </ul>
                </div>
                
                <button
                  onClick={() => handleCardClick('online')}
                  className="w-full group/btn relative bg-red-700/70 border border-white hover:border-red-700/50 px-4 md:px-6 py-4 md:py-3 text-white text-md md:text-sm tracking-wide transition-all duration-300 mt-auto"
                >
                  QUERO CONSULTORIA ONLINE
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};