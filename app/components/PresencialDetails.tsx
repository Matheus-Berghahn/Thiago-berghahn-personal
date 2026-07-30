'use client';

import { motion } from 'framer-motion';

interface PresencialDetailsProps {
  onBack: () => void;
}

export const PresencialDetails = ({ onBack }: PresencialDetailsProps) => {
  const academies = [
    { nome: 'CT MaxForce (Rincão dos Ilhéus)', insta: 'https://www.instagram.com/ctmaxforce/' },
    { nome: 'Biogym (Rincão dos Ilhéus)', insta: 'https://www.instagram.com/biogymilheus/' },
    { nome: 'Academia Coliseu (Bela Vista)', insta: 'https://www.instagram.com/academiacoliseu_estanciavelha/' },
    { nome: 'Go4 Academia (Centro)', insta: 'https://www.instagram.com/go4academia/' },
    { nome: 'HardFit (Novo  Hamburgo', insta: 'https://www.instagram.com/hardfitnovohamburgo/' },
    { nome: 'Fullfit Academia (Centro)', insta: 'https://www.instagram.com/fullfit.academia/' }
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
              <span className="text-gray-300">Supervisão total para extrair seu potencial máximo a cada treino.</span>
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
                  O treinamento é totalmente focado em você. Ideal para quem tem uma agenda corrida ou possui alguma lesão.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-400 text-sm">
                    <span className="text-red-700">✓</span>
                    Planejamento exclusivo
                  </li>
                  <li className="flex items-center gap-2 text-gray-400 text-sm">
                    <span className="text-red-700">✓</span>
                    Atenção 100% dedicada
                  </li>
                  <li className="flex items-center gap-2 text-gray-400 text-sm">
                    <span className="text-red-700">✓</span>
                    Flexibillidade de agendamento
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
  <h2 className="text-2xl font-light text-white mb-6 text-center">Como funciona</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    
    {/* Item 1 */}
    <div className="bg-neutral-800/30 border border-neutral-700/50 p-5 hover:border-red-700/30 transition-all duration-300">
      <div className="flex items-start gap-3 text-gray-400 text-sm">
        <span className="text-red-700 text-lg flex-shrink-0">—</span>
        <span>
          <span className="text-gray-300 font-medium block mb-1 uppercase">Programação particular</span>
          <span>Exercícios, séries e cargas baseados no seu <span className="text-gray-300">objetivo e capacidade atual</span>.</span>
        </span>
      </div>
    </div>

    {/* Item 2 */}
    <div className="bg-neutral-800/30 border border-neutral-700/50 p-5 hover:border-red-700/30 transition-all duration-300">
      <div className="flex items-start gap-3 text-gray-400 text-sm">
        <span className="text-red-700 text-lg flex-shrink-0">—</span>
        <span>
          <span className="text-gray-300 font-medium block mb-1 uppercase">Supervisão em tempo real</span>
          <span>Estou ao seu lado em cada série. Corrijo gesto, controlo carga, ajusto ângulos.</span>
        </span>
      </div>
    </div>

    {/* Item 3 */}
    <div className="bg-neutral-800/30 border border-neutral-700/50 p-5 hover:border-red-700/30 transition-all duration-300 md:col-span-2">
      <div className="flex items-start gap-3 text-gray-400 text-sm">
        <span className="text-red-700 text-lg flex-shrink-0">—</span>
        <span>
          <span className="text-gray-300 font-medium block mb-1 uppercase">Controle de treino via tablet</span>
          <span>Anoto ajustes exatos das máquinas, cargas no aquecimento, preparação e séries de esforço. Cada sessão é continuidade exata da anterior – <span className="text-gray-300">evolução real e fiel</span>.</span>
        </span>
      </div>
    </div>

    {/* Item 4 */}
    <div className="bg-neutral-800/30 border border-neutral-700/50 p-5 hover:border-red-700/30 transition-all duration-300">
      <div className="flex items-start gap-3 text-gray-400 text-sm">
        <span className="text-red-700 text-lg flex-shrink-0">—</span>
        <span>
          <span className="text-gray-300 font-medium block mb-1 uppercase">Segurança é prioridade</span>
          <span>Sem risco de lesões.</span>
        </span>
      </div>
    </div>

    {/* Item 5 */}
    <div className="bg-neutral-800/30 border border-neutral-700/50 p-5 hover:border-red-700/30 transition-all duration-300">
      <div className="flex items-start gap-3 text-gray-400 text-sm">
        <span className="text-red-700 text-lg flex-shrink-0">—</span>
        <span>
          <span className="text-gray-300 font-medium block mb-1 uppercase">Intensidade com inteligência</span>
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
            <h2 className="text-2xl font-light text-white mb-6 text-center">Onde atendo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {academies.map((academy, index) => (
                <div key={index} className="bg-neutral-800 p-4 flex justify-between items-center">
                  <p className="text-white text-sm">{academy.nome}</p>
                  <a 
                    href={academy.insta} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-red-500 hover:text-red-800 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-neutral-800 p-8 flex justify-center flex-col items-center w-full">
            <p className="text-gray-400 text-lg mb-4 text-center">
              <span className="text-gray-300 ">Vagas presenciais limitadas por horário.</span>
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 mx-0 md:mx-72 bg-red-700 hover:bg-red-800 text-white text-center text-lg tracking-wide transition-colors"
            >
              QUERO AGENDAR MINHA AULA
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};