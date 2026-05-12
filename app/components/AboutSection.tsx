'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const AboutSection = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-black pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
          className="bg-neutral-800/50 p-6 md:p-10 mx-6 relative"
        >
          <div className="absolute top-0 left-0 w-px h-12 bg-red-700/30" />
          
          <div className="space-y-8 md:space-y-10 ">
            {/* Primeira linha: dois itens lado a lado */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 ">
              {/* Bacharel em Educação Física */}
              <div className="flex items-start gap-4">
                <div className="w-4 h-px bg-red-700/50 mt-3 flex-shrink-0" />
                <div>
                  <h3 className="text-white text-xl md:text-lg font-light tracking-wide">Bacharel em Educação Física</h3>
                  <p className="text-gray-500 text-lg md:text-sm mt-1">Universidade Feevale</p>
                </div>
              </div>
              
              {/* 5+ anos de experiência em treinamento */}
              <div className="flex items-start gap-4 ">
                <div className="w-4 h-px bg-red-700/50 mt-3 flex-shrink-0" />
                <div>
                  <h3 className="text-white text-xl md:text-lg font-light tracking-wide">5+ anos de experiência em treinamento</h3>
                  <p className="text-gray-500 text-lg md:text-sm mt-1">Conhecimento científico + prática diária alinhados para seu resultado</p>
                </div>
              </div>
            </div>
            
            {/* Segunda linha: dois itens lado a lado */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
              {/* Especialista em musculação */}
              <div className="flex items-start gap-4">
                <div className="w-4 h-px bg-red-700/50 mt-3 flex-shrink-0" />
                <div>
                  <h3 className="text-white text-xl md:text-lg font-light tracking-wide">Especialista em musculação</h3>
                  <p className="text-gray-500 text-lg md:text-sm mt-1">Emagrecimento e hipertrofia</p>
                </div>
              </div>
              
              {/* Reabilitação de lesões */}
              <div className="flex items-start gap-4">
                <div className="w-4 h-px bg-red-700/50 mt-3 flex-shrink-0" />
                <div>
                  <h3 className="text-white text-xl md:text-lg font-light tracking-wide">Reabilitação de lesões</h3>
                  <p className="text-gray-500 text-lg md:text-sm mt-1">Trato lesões de ombro, coluna, quadril, joelho e tornozelo</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};