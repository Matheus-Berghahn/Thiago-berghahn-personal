'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const ScienceTable = () => {
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
      desc: 'Do planejamento à execução, com correções contínuas. No presencial eu estou ao lado; no online, analiso seus vídeos e respondo todos os dias.'
    },
    {
      title: 'Foco em resultado sustentável',
      desc: 'Sem loucura, sem lesão. Treino pesado com inteligência.'
    },
    {
      title: 'Certeza de resultado',
      desc: 'Com o meu acompanhamento [presencial ou online], você pode ter a CERTEZA de que está no caminho certo pois tudo está embasado na literatura.'
    }
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
      }}
      className="py-12"
    >
      <h4 className="text-xl font-bold text-white mb-6">Na prática, isso significa:</h4>
      <div className="space-y-4">
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-neutral-900/50 rounded-lg border border-neutral-800"
          >
            <div className="md:col-span-1">
              <span className="text-red-400 font-semibold">{index + 1}. {item.title}</span>
            </div>
            <div className="md:col-span-2">
              <p className="text-gray-300">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};