'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ServicesSectionProps {
  onCardClick: (type: 'presencial' | 'online') => void;
}

export const ServicesSection = ({ onCardClick }: ServicesSectionProps) => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-neutral-900 py-24">
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
              <span className="text-red-700 text-xs tracking-widest">ESCOLHA SEU CAMINHO</span>
              <div className="w-6 h-px bg-red-700" />
            </div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight">Comece sua jornada</h2>
            <div className="w-12 h-px bg-red-700/30 mx-auto mt-6" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Presencial Card */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 }
              }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-neutral-800 p-10">
                <div className="absolute top-0 left-0 w-12 h-px bg-red-700/30 group-hover:w-24 transition-all duration-500" />
                
                <div className="mt-8">
                  <div className="w-8 h-px bg-red-700/30 mb-8" />
                  <h3 className="text-2xl font-light text-white mb-8 tracking-wide">TREINAMENTO PRESENCIAL</h3>
                  
                  <div className="mb-8">
                    <p className="text-red-600 text-xs tracking-wider mb-4">IDEAL PARA QUEM:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-gray-400 text-sm">
                        <span className="text-red-700">—</span>
                        Busca evolução acelerada e correção profissional
                      </li>
                      <li className="flex items-start gap-3 text-gray-400 text-sm">
                        <span className="text-red-700">—</span>
                        Possui lesão ou especificidade e quer segurança
                      </li>
                      <li className="flex items-start gap-3 text-gray-400 text-sm">
                        <span className="text-red-700">—</span>
                        Precisa de acompanhamento que cobre e motive
                      </li>
                    </ul>
                  </div>
                  
                  <button
                    onClick={() => onCardClick('presencial')}
                    className="w-full group/btn relative bg-transparent border border-neutral-700 hover:border-red-700/50 px-6 py-3 text-white text-sm tracking-wide transition-all duration-300"
                  >
                    Quero Treinar Presencialmente
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
              className="group"
            >
              <div className="bg-neutral-800 p-10">
                <div className="absolute top-0 left-0 w-12 h-px bg-red-700/30 group-hover:w-24 transition-all duration-500" />
                
                <div className="mt-8">
                  <div className="w-8 h-px bg-red-700/30 mb-8" />
                  <h3 className="text-2xl font-light text-white mb-8 tracking-wide">CONSULTORIA ONLINE</h3>
                  
                  <div className="mb-8">
                    <p className="text-red-600 text-xs tracking-wider mb-4">IDEAL PARA QUEM:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-gray-400 text-sm">
                        <span className="text-red-700">—</span>
                        Quer direcionamento profissional para maximizar resultados
                      </li>
                      <li className="flex items-start gap-3 text-gray-400 text-sm">
                        <span className="text-red-700">—</span>
                        Já tem familiaridade mas sente que estagnou
                      </li>
                      <li className="flex items-start gap-3 text-gray-400 text-sm">
                        <span className="text-red-700">—</span>
                        Busca o caminho mais curto que a ciência proporciona
                      </li>
                    </ul>
                  </div>
                  
                  <button
                    onClick={() => onCardClick('online')}
                    className="w-full group/btn relative bg-transparent border border-neutral-700 hover:border-red-700/50 px-6 py-3 text-white text-sm tracking-wide transition-all duration-300"
                  >
                    Quero Consultoria Online
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};