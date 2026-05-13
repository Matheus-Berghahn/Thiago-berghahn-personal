'use client';

import { motion} from 'framer-motion';

interface FooterProps {
  onPresencialClick: () => void;
  onOnlineClick: () => void;
}

export const Footer = ({ onPresencialClick, onOnlineClick }: FooterProps) => {
  return (
    <footer className="bg-black border-t border-neutral-800 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-6 h-px bg-red-700" />
            <span className="text-red-700 text-xs tracking-widest">ATENÇÃO</span>
            <div className="w-6 h-px bg-red-700" />
          </div>
          
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-white text-center mb-4">VAGAS LIMITADAS</h3>
          <p className="text-gray-300 text-sm mb-6">Garanta sua vaga.
          <span className="text-green-500 font-bold"> Avaliação Física gratuita</span> para alunos do treinamento presencial.</p>
          
          <p className="text-white text-sm tracking-wide mb-8">ESCOLHA SUA MODALIDADE</p>

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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onPresencialClick}
              className="px-8 py-3 bg-transparent border border-red-700/50 hover:bg-red-700/10 text-white text-sm tracking-wide transition-all"
            >
              PRESENCIAL
            </button>
            <button
              onClick={onOnlineClick}
              className="px-8 py-3 bg-transparent border border-neutral-700 hover:border-red-700/30 text-white text-sm tracking-wide transition-all"
            >
              CONSULTORIA ONLINE
            </button>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 text-center">
          <p className="text-gray-600 text-sm">Instagram: @thiagoberghahn</p>
          <p className="text-gray-600 text-sm mt-2">Presencial: Estância Velha/RS | Online: Brasil</p>
          <p className="text-gray-700 text-xs mt-4">Treino Inteligente. Resultado com ciência.</p>
        </div>
      </div>
    </footer>
  );
};