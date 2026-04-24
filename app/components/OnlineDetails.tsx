'use client';

import { motion } from 'framer-motion';

interface OnlineDetailsProps {
  onBack: () => void;
}

export const OnlineDetails = ({ onBack }: OnlineDetailsProps) => {
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
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">CONSULTORIA ONLINE</h1>
            <p className="text-gray-400 text-lg">Ideal para quem quer a liberdade do online com contato real mensal.</p>
            <div className="w-12 h-px bg-red-700/50 mt-6" />
          </div>

          <div>
            <h2 className="text-2xl font-light text-white mb-6">Como funciona</h2>
            <div className="space-y-3">
              {[
                'Anamnese + reunião inicial para alinhar objetivos',
                'Protocolo personalizado no app com vídeos demonstrativos',
                'Acompanhamento por vídeos – análise de padrão de movimento',
                'Suporte diário no WhatsApp',
                'Avaliação contínua por cargas e fotos padronizadas'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 text-gray-400 text-sm">
                  <span className="text-red-700 font-light">{index + 1}.</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-neutral-800 p-8">
            <h3 className="text-white font-light mb-4">Bônus exclusivos para alunos da região</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <p>✓ 1 aula presencial gratuita por mês</p>
              <p>✓ 50% de desconto na Avaliação Antropométrica Completa</p>
            </div>
          </div>

          <div>
            <p className="text-gray-400 text-sm mb-2">Tempo mínimo</p>
            <p className="text-white">2 meses (período mínimo para evolução real)</p>
          </div>

          <div className="bg-neutral-800 p-8">
            <a
              href="https://wa.me/5551999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-red-700 hover:bg-red-800 text-white text-sm tracking-wide transition-colors"
            >
              QUERO MINHA CONSULTORIA ONLINE
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};