'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const ScienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
    <section ref={ref} className="bg-neutral-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-4">
            <div className="w-4 md:w-6 h-px bg-red-700" />
            <span className="text-red-700 text-[10px] md:text-xs tracking-widest">CIÊNCIA APLICADA</span>
            <div className="w-4 md:w-6 h-px bg-red-700" />
          </div>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-white">Na prática, isso significa:</h2>
          <div className="w-12 h-px bg-red-700/30 mx-auto mt-4 md:mt-6" />
        </div>
        
        <div className="space-y-2 md:space-y-3">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:grid md:grid-cols-3 gap-2 md:gap-4 p-4 md:p-5 bg-neutral-800/30"
            >
              <div className="md:col-span-1">
                <div className="flex items-center gap-2 md:gap-3">
                  <span className="text-red-600 text-xs md:text-sm">{index + 1}.</span>
                  <span className="text-white text-xs md:text-sm font-light tracking-wide">{item.title}</span>
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-500 text-xs md:text-sm pl-5 md:pl-0">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};