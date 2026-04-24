'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const MethodologySection = () => {
  const { ref, controls } = useScrollAnimation();

  const features = [
    "Confie no trabalho de um PROFISSIONAL da Educação Física.",
    "METODOLOGIA SISTEMÁTICA que permite visualizar sua evolução de forma concreta.",
    "Todos os processos do treinamento embasados em CIÊNCIA!"
  ];

  return (
    <section ref={ref} className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-px bg-red-700" />
              <span className="text-red-700 text-xs tracking-widest">METODOLOGIA</span>
              <div className="w-6 h-px bg-red-700" />
            </div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white text-center">
              TREINO INTELIGENTE <span className="text-red-700">→</span> RESULTADO COM CIÊNCIA
            </h2>
            <div className="w-12 h-px bg-red-700/30 mx-auto mt-6" />
          </div>
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-gray-400 text-base leading-relaxed">
              Sem fadiga desnecessária, sem longas horas na academia. Conheça o{' '}
              <span className="text-red-600">TREINO INTELIGENTE</span>{' '}
              que vai extrair o máximo do seu potencial sem desperdiçar seu tempo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="bg-neutral-800 p-8"
              >
                <div className="w-8 h-px bg-red-700/30 mb-6" />
                <p className="text-gray-300 text-sm leading-relaxed">{feature}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};