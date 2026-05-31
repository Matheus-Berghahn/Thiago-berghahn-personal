'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const MethodologySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    "Confie no trabalho de um <span class='text-red-600'>PROFISSIONAL</span> da Educação Física.",
    "<span class='text-red-600'>METODOLOGIA SISTEMÁTICA</span> que permite visualizar sua evolução de forma concreta.",
    "Todos os processos do treinamento embasados em <span class='text-red-600'>CIÊNCIA</span>!"
  ];

  return (
    <section ref={ref} className="bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-4">
            <div className="w-4 md:w-6 h-px bg-red-700" />
            <span className="text-red-700 text-[10px] md:text-xs tracking-widest">METODOLOGIA</span>
            <div className="w-4 md:w-6 h-px bg-red-700" />
          </div>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-white text-center">
            TREINO INTELIGENTE
            <div className="my-2 md:my-4">
              <span className="text-red-700 block">↓</span>
            </div>
            RESULTADO COM CIÊNCIA
          </h2>
          <div className="w-12 h-px bg-red-700/30 mx-auto mt-4 md:mt-6" />
        </div>
        
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-gray-400 text-xl md:text-2xl leading-relaxed px-2">
            Sem fadiga desnecessária, sem longas horas na academia. Conheça o{' '}
            <span className="text-red-600 font-semibold">TREINO INTELIGENTE</span>{' '}
            que vai extrair o máximo do seu potencial sem desperdiçar seu tempo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-neutral-800 p-6 md:p-8"
            >
              <div className="w-8 h-px bg-red-700/30 mb-4 md:mb-6" />
              <p 
                className="text-gray-300 text-xl md:text-xl leading-relaxed"
                dangerouslySetInnerHTML={{ __html: feature }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};