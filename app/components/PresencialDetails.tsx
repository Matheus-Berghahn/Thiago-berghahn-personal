'use client';

import { motion } from 'framer-motion';

interface PresencialDetailsProps {
  onBack: () => void;
}

export const PresencialDetails = ({ onBack }: PresencialDetailsProps) => {
  const academies = [
    'CT MaxForce (Rincão dos Ilhéus)',
    'Biogym (Rincão dos Ilhéus)',
    'Academia Coliseu (Bela Vista)',
    'Go4 Academia (Centro)',
    'Fullfit Academia (Centro)'
  ];

  const whatsappNumber = '555185241141'; // sem + e sem espaços
  const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de saber mais sobre o Treinamento Presencial.'
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main className="bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <button
          onClick={onBack}
          className="group mb-12 flex items-center gap-2 text-gray-500 hover:text-red-700 transition-colors"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
          Voltar
        </button>

        <div className="space-y-16">
          <div>
            <h1 className="text-2xl md:text-6xl font-light tracking-tight mb-4 text-white text-center">TREINAMENTO PRESENCIAL</h1>

             <div className="w-12 h-px bg-red-700/50 my-6 mx-auto" />

            <p className="text-gray-400 text-2xl text-center">
              <span className="text-gray-300">Supervisão total para você extrair o máximo do seu potencial a cada treino.</span>
            </p>

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

          <div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Individual Box */}
              <div className="bg-neutral-800/50 border border-neutral-700 p-8 hover:border-red-700/50 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-light text-white">Individual</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  O treinamento é totalmente focado em você. Ótimo pra quem gosta de exclusividade ou tem uma agenda corrida
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-400 text-sm">
                    <span className="text-red-700">✓</span>
                    Periodização exclusiva
                  </li>
                  <li className="flex items-center gap-2 text-gray-400 text-sm">
                    <span className="text-red-700">✓</span>
                    Atenção 100% dedicada
                  </li>
                  <li className="flex items-center gap-2 text-gray-400 text-sm">
                    <span className="text-red-700">✓</span>
                    ⁠Flexibilidade de agendamento
                  </li>
                </ul>
              </div>

              {/* Dupla Box */}
              <div className="bg-neutral-800/50 border border-neutral-700 p-8 hover:border-red-700/50 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className="text-xs bg-green-700/20 text-green-500 px-2 py-1">ECONÔMICO</span>
                </div>
                <h3 className="text-2xl font-light text-white mb-4">Em Dupla</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Ideal para casais ou amigos que querem treinar juntos com supervisão de qualidade e melhor custo-benefício.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-400 text-sm">
                    <span className="text-red-700">✓</span>
                    Até 2 pessoas por sessão
                  </li>
                  <li className="flex items-center gap-2 text-gray-400 text-sm">
                    <span className="text-red-700">✓</span>
                    Motivação compartilhada
                  </li>
                  <li className="flex items-center gap-2 text-gray-400 text-sm">
                    <span className="text-red-700">✓</span>
                    Valor reduzido por pessoa
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
  <h2 className="text-2xl font-light text-white mb-6">Como funciona</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    
    {/* Item 1 */}
    <div className="bg-neutral-800/30 border border-neutral-700/50 p-5 hover:border-red-700/30 transition-all duration-300">
      <div className="flex items-start gap-3 text-gray-400 text-sm">
        <span className="text-red-700 text-lg flex-shrink-0">—</span>
        <span>
          <span className="text-gray-300 font-medium block mb-1">Periodização individualizada</span>
          <span>Exercícios, séries e cargas baseados no seu <span className="text-gray-300">objetivo e capacidade atual</span>.</span>
        </span>
      </div>
    </div>

    {/* Item 2 */}
    <div className="bg-neutral-800/30 border border-neutral-700/50 p-5 hover:border-red-700/30 transition-all duration-300">
      <div className="flex items-start gap-3 text-gray-400 text-sm">
        <span className="text-red-700 text-lg flex-shrink-0">—</span>
        <span>
          <span className="text-gray-300 font-medium block mb-1">Supervisão em tempo real</span>
          <span>Estou ao seu lado em cada série. Corrijo gesto, controlo carga, ajusto ângulos.</span>
        </span>
      </div>
    </div>

    {/* Item 3 */}
    <div className="bg-neutral-800/30 border border-neutral-700/50 p-5 hover:border-red-700/30 transition-all duration-300 md:col-span-2">
      <div className="flex items-start gap-3 text-gray-400 text-sm">
        <span className="text-red-700 text-lg flex-shrink-0">—</span>
        <span>
          <span className="text-gray-300 font-medium block mb-1">Registro detalhado no tablet</span>
          <span>Anoto ajustes exatos das máquinas, cargas no aquecimento, preparação e séries de esforço. Cada sessão é continuidade exata da anterior – <span className="text-gray-300">evolução real e fiel</span>.</span>
        </span>
      </div>
    </div>

    {/* Item 4 */}
    <div className="bg-neutral-800/30 border border-neutral-700/50 p-5 hover:border-red-700/30 transition-all duration-300">
      <div className="flex items-start gap-3 text-gray-400 text-sm">
        <span className="text-red-700 text-lg flex-shrink-0">—</span>
        <span>
          <span className="text-gray-300 font-medium block mb-1">Segurança prioridade nº 1</span>
          <span>Técnica impecável, menor risco de lesão.</span>
        </span>
      </div>
    </div>

    {/* Item 5 */}
    <div className="bg-neutral-800/30 border border-neutral-700/50 p-5 hover:border-red-700/30 transition-all duration-300">
      <div className="flex items-start gap-3 text-gray-400 text-sm">
        <span className="text-red-700 text-lg flex-shrink-0">—</span>
        <span>
          <span className="text-gray-300 font-medium block mb-1">Intensidade com inteligência</span>
          <span>Iniciante? Sem dor excessiva. Avançado? Desafio além do limite, com segurança.</span>
        </span>
      </div>
    </div>

    {/* Item 6 - Destaque especial */}
<div className="bg-red-700/5 border border-red-700/30 p-5 hover:border-red-700/50 transition-all duration-300 md:col-span-2">
  <div className="flex items-start gap-3 text-gray-400 text-sm">
    <span className="text-red-700 text-lg flex-shrink-0">★</span>
    <span>
      <span className="text-gray-300 font-medium block mb-1">
        Avaliação Física completa <span className="line-through text-red-500">R$120,00</span> <span className="text-green-500 font-bold">Grátis</span>
      </span>
      <span>No início do trabalho e reavaliação a cada 3 meses. <span className="text-gray-300">(Protocolo Antropométrico validado pela Universidade Feevale)</span></span>
    </span>
  </div>
</div>

  </div>
</div>

          <div>
            <h2 className="text-2xl font-light text-white mb-6">Onde atendo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {academies.map((academy, index) => (
                <div key={index} className="bg-neutral-800 p-4">
                  <p className="text-white text-sm">{academy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-neutral-800 p-8 justify-center flex-col w-full">
            <p className="text-gray-400 text-lg mb-4 text-center">
              <span className="text-gray-300 ">Vagas presenciais limitadas por horário.</span> Avaliação gratuita exclusiva para alunos presenciais.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 mx-0 md:mx-72 bg-red-700 hover:bg-red-800 text-white text-center text-lg tracking-wide transition-colors"
            >
              QUERO AGENDAR MINHA AULA EXPERIMENTAL
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};