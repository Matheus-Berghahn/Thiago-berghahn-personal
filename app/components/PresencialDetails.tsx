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
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">TREINAMENTO PRESENCIAL</h1>
            <p className="text-gray-400 text-lg">Supervisão total para você extrair o máximo do seu potencial a cada treino.</p>
            <div className="w-12 h-px bg-red-700/50 mt-6" />
          </div>

          <div>
            <p className="text-gray-300 mb-4">Modalidades:</p>
            <p className="text-white">Individual (100% personalizado) ou em dupla (para casais/amigos com economia).</p>
          </div>

          <div>
            <h2 className="text-2xl font-light text-white mb-6">Como funciona</h2>
            <div className="space-y-3">
              {[
                'Periodização individualizada – Exercícios, séries e cargas baseados no seu objetivo',
                'Supervisão em tempo real – Estou ao seu lado em cada série',
                'Registro detalhado – Cada sessão é continuidade exata da anterior',
                'Segurança prioridade nº 1 – Técnica impecável, menor risco de lesão',
                'Intensidade com inteligência – Do iniciante ao avançado',
                'Avaliação Antropométrica Completa – 100% GRÁTIS'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 text-gray-400 text-sm">
                  <span className="text-red-700 mt-1">—</span>
                  {item}
                </div>
              ))}
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

          <div className="bg-neutral-800 p-8">
            <p className="text-gray-400 text-sm mb-4">Vagas presenciais limitadas por horário.</p>
            <a
              href="https://wa.me/5551999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-red-700 hover:bg-red-800 text-white text-sm tracking-wide transition-colors"
            >
              QUERO AGENDAR MINHA AULA EXPERIMENTAL
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};