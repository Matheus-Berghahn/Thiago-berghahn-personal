'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const ScienceSection = () => {
  const { ref, controls } = useScrollAnimation();

  const items = [
    {
      title: 'Periodização Científica',
      desc: 'Nada de treino genérico. Cada exercício, série e carga tem um motivo.'
    },
    {
      title: 'Ajustes dinâmicos',
      desc: 'Seu treino evolui e é ajustado de acordo com suas demandas específicas.'
    },
    {
      title: 'Suporte Integral',
      desc: 'Do planejamento à execução, com correções contínuas.'
    },
    {
      title: 'Foco em resultado sustentável',
      desc: 'Sem loucura, sem lesão. Treino pesado com inteligência.'
    },
    {
      title: 'Certeza de resultado',
      desc: 'Com o meu acompanhamento, você tem a certeza de que está no caminho certo.'
    }
  ];

  return (
    <section ref={ref} className="bg-neutral-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-px bg-red-700" />
              <span className="text-red-700 text-xs tracking-widest">CIÊNCIA APLICADA</span>
              <div className="w-6 h-px bg-red-700" />
            </div>
            <h2 className="text-2xl md:text-3xl font-light">Na prática, isso significa:</h2>
            <div className="w-12 h-px bg-red-700/30 mx-auto mt-6" />
          </div>
          
          <div className="space-y-3">
            {items.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 bg-neutral-800/30"
              >
                <div className="md:col-span-1">
                  <div className="flex items-center gap-3">
                    <span className="text-red-600 text-sm">{index + 1}.</span>
                    <span className="text-white text-sm font-light tracking-wide">{item.title}</span>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};