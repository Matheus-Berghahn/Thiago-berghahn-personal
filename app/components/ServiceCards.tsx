'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ServiceCardsProps {
  onCardClick: (type: 'presencial' | 'online') => void;
}

export const ServiceCards = ({ onCardClick }: ServiceCardsProps) => {
  const { ref, controls } = useScrollAnimation();

  const presencialFeatures = [
    "Evolução acelerada com correção profissional",
    "Lesão ou especificidade? Treine sem dor",
    "Acompanhamento que cobre e motiva"
  ];

  const onlineFeatures = [
    "Direcionamento profissional para maximizar resultados",
    "Quebre a estagnação e evolua mais",
    "Fim dos treinos genéricos"
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
          <span className="text-red-700 text-xs tracking-widest">ESCOLHA SEU CAMINHO</span>
          <div className="w-8 h-px bg-red-700" />
        </div>
        <h3 className="text-3xl md:text-5xl font-light tracking-[-0.02em]">Comece sua jornada</h3>
        <div className="w-12 h-px bg-red-700/50 mx-auto mt-6" />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Presencial Card */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0 }
          }}
          whileHover={{ y: -5 }}
          className="group relative"
        >
          <div className="relative bg-neutral-800 p-8">
            <div className="absolute top-0 left-0 w-12 h-px bg-red-700/50 group-hover:w-24 transition-all duration-500" />
            
            <div className="relative mt-6">
              <div className="w-8 h-px bg-red-700/30 mb-6" />
              <h3 className="text-xl font-light text-white mb-6 tracking-wide">TREINAMENTO PRESENCIAL</h3>
              
              <div className="mb-6">
                <p className="text-red-600 text-xs tracking-wider mb-4">IDEAL PARA QUEM:</p>
                <ul className="space-y-2">
                  {presencialFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                      <span className="text-red-700 mt-0.5">—</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button
                onClick={() => onCardClick('presencial')}
                className="w-full group/btn relative bg-transparent border border-neutral-700 hover:border-red-700/50 px-6 py-3 text-white text-sm tracking-wide transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Quero Treinar Presencialmente</span>
                <div className="absolute inset-0 bg-red-700/5 transform translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Online Card */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 30 },
            visible: { opacity: 1, x: 0 }
          }}
          whileHover={{ y: -5 }}
          className="group relative"
        >
          <div className="relative bg-neutral-800 p-8">
            <div className="absolute top-0 left-0 w-12 h-px bg-red-700/50 group-hover:w-24 transition-all duration-500" />
            
            <div className="relative mt-6">
              <div className="w-8 h-px bg-red-700/30 mb-6" />
              <h3 className="text-xl font-light text-white mb-6 tracking-wide">CONSULTORIA ONLINE</h3>
              
              <div className="mb-6">
                <p className="text-red-600 text-xs tracking-wider mb-4">IDEAL PARA QUEM:</p>
                <ul className="space-y-2">
                  {onlineFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                      <span className="text-red-700 mt-0.5">—</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button
                onClick={() => onCardClick('online')}
                className="w-full group/btn relative bg-transparent border border-neutral-700 hover:border-red-700/50 px-6 py-3 text-white text-sm tracking-wide transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Quero Consultoria Online</span>
                <div className="absolute inset-0 bg-red-700/5 transform translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};