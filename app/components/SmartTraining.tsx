'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const SmartTraining = () => {
  const { ref, controls } = useScrollAnimation();

  const features = [
    {
      title: "Profissional qualificado",
      desc: "Confie no trabalho de um PROFISSIONAL da Educação Física.",
    },
    {
      title: "Metodologia sistemática",
      desc: "METODOLOGIA SISTEMÁTICA que permite visualizar sua evolução de forma concreta.",
    },
    {
      title: "Base científica",
      desc: "Todos os processos do treinamento embasados em CIÊNCIA!",
    }
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
      }}
      className="py-20"
    >
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-8 h-px bg-red-700" />
          <span className="text-red-700 text-xs tracking-widest">METODOLOGIA</span>
          <div className="w-8 h-px bg-red-700" />
        </div>
        <h3 className="text-3xl md:text-5xl font-light tracking-[-0.02em]">
          TREINO INTELIGENTE <span className="text-red-700">→</span> RESULTADO COM CIÊNCIA
        </h3>
        <div className="w-12 h-px bg-red-700/50 mx-auto mt-6" />
      </div>
      
      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-gray-400 text-base leading-relaxed font-light">
          Sem fadiga desnecessária, sem longas horas na academia. Conheça o{' '}
          <span className="text-red-600 relative inline-block">
            TREINO INTELIGENTE
            <span className="absolute bottom-0 left-0 w-full h-px bg-red-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </span>
          {' '}que vai extrair o máximo do seu potencial sem desperdiçar seu tempo.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -5 }}
            className="group relative"
          >
            <div className="relative bg-neutral-800 p-8">
              <div className="absolute top-0 left-0 w-8 h-px bg-red-700/50 group-hover:w-12 transition-all duration-300" />
              <div className="mt-6">
                <div className="w-8 h-px bg-red-700/30 mb-4" />
                <h4 className="text-lg font-light text-white mb-2 tracking-wide">{feature.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};