'use client';

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
            <span className="text-red-700 text-xs tracking-widest">PRÓXIMO PASSO</span>
            <div className="w-6 h-px bg-red-700" />
          </div>
          
          <h3 className="text-2xl md:text-3xl font-light text-white mb-4">Vagas presenciais limitadas</h3>
          <p className="text-gray-500 text-sm mb-6">Garanta seu horário. Avaliação gratuita para alunos presenciais.</p>
          
          <p className="text-white text-sm tracking-wide mb-8">ESCOLHA SEU CAMINHO E FALE COMIGO DIRETO NO WHATSAPP</p>
          
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