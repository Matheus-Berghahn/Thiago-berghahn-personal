'use client';

import { motion } from 'framer-motion';

interface OnlineDetailsProps {
  onBack: () => void;
}

export const OnlineDetails = ({ onBack }: OnlineDetailsProps) => {
  const whatsappNumber = '555185241141';
  const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de saber mais sobre a Consultoria Online.'
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
          {/* Título e subtítulo - IDÊNTICO ao Presencial */}
          <div>
            <h1 className="text-2xl md:text-6xl font-light tracking-tight mb-4 text-white text-center">
              CONSULTORIA ONLINE <span className="text-gray-300 text-lg md:text-5xl"><br></br>COM BÔNUS PRESENCIAIS</span>
            </h1>

            <div className="w-12 h-px bg-red-700/50 my-6 mx-auto" />

            <p className="text-gray-400 text-2xl text-center">
              <span className="text-gray-300">Ideal para quem quer a liberdade do online com o diferencial de contato real mensal.</span>
            </p>

          </div>

          {/* Seção Modalidades não existe no Online, mas mantemos estrutura igual, pulamos para Como funciona */}

          {/* Como funciona - usando mesmo grid e estilos do Presencial */}
          <div>
            <h2 className="text-2xl font-light text-white mb-6">Como funciona</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Item 1 */}
              <div className="bg-neutral-800/30 border border-neutral-700/50 p-5 hover:border-red-700/30 transition-all duration-300">
                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <span className="text-red-700 text-lg flex-shrink-0">—</span>
                  <span>
                    <span className="text-gray-300 font-medium block mb-1">Anamnese + reunião inicial</span>
                    <span>Você responde um questionário e marcamos uma reunião <span className="text-gray-300">(online ou presencial)</span> para alinhar objetivos, rotina e disponibilidade.</span>
                  </span>
                </div>
              </div>

              {/* Item 2 */}
              <div className="bg-neutral-800/30 border border-neutral-700/50 p-5 hover:border-red-700/30 transition-all duration-300">
                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <span className="text-red-700 text-lg flex-shrink-0">—</span>
                  <span>
                    <span className="text-gray-300 font-medium block mb-1">Protocolo personalizado no app</span>
                    <span>Eu elaboro seu treino com base na sua realidade. Você recebe acesso ao aplicativo com <span className="text-gray-300">vídeos demonstrativos</span> de cada exercício.</span>
                  </span>
                </div>
              </div>

              {/* Item 3 */}
              <div className="bg-neutral-800/30 border border-neutral-700/50 p-5 hover:border-red-700/30 transition-all duration-300 md:col-span-2">
                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <span className="text-red-700 text-lg flex-shrink-0">—</span>
                  <span>
                    <span className="text-gray-300 font-medium block mb-1">Acompanhamento por vídeos</span>
                    <span>Você grava os movimentos que eu solicitar. Eu analiso <span className="text-gray-300">padrão de movimento, proximidade da falha, ajustes de carga e técnica</span>, e devolvo as instruções para o próximo treino.</span>
                  </span>
                </div>
              </div>

              {/* Item 4 */}
              <div className="bg-neutral-800/30 border border-neutral-700/50 p-5 hover:border-red-700/30 transition-all duration-300">
                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <span className="text-red-700 text-lg flex-shrink-0">—</span>
                  <span>
                    <span className="text-gray-300 font-medium block mb-1">Suporte diário no WhatsApp</span>
                    <span>Pode tirar dúvidas todos os dias. <span className="text-gray-300">Eu respondo.</span></span>
                  </span>
                </div>
              </div>

              {/* Item 5 */}
              <div className="bg-neutral-800/30 border border-neutral-700/50 p-5 hover:border-red-700/30 transition-all duration-300">
                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <span className="text-red-700 text-lg flex-shrink-0">—</span>
                  <span>
                    <span className="text-gray-300 font-medium block mb-1">Avaliação contínua</span>
                    <span>Medimos sua evolução pelo <span className="text-gray-300">aumento de cargas</span> + <span className="text-gray-300">fotos padronizadas (frente, lado, costas) obrigatórias</span>, enviadas no início e periodicamente.</span>
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Bônus exclusivos usando mesmo estilo do Presencial (cards com ícone ★) */}
          <div>
            <h2 className="text-2xl font-light text-white mb-6">Bônus exclusivos para alunos da região</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Bônus 1 */}
              <div className="bg-red-700/5 border border-red-700/30 p-5 hover:border-red-700/50 transition-all duration-300">
                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <span className="text-red-700 text-lg flex-shrink-0">★</span>
                  <span>
                    <span className="text-gray-300 font-medium block mb-1">1 aula presencial gratuita por mês</span>
                    <span>Em uma das academias onde atuo <span className="text-gray-300">(CT MaxForce, Biogym, Coliseu, Go4 ou Fullfit)</span>. Você paga apenas a diária da academia (se houver); <span className="text-green-500">meu serviço é gratuito</span>.</span>
                  </span>
                </div>
              </div>

              {/* Bônus 2 */}
              <div className="bg-red-700/5 border border-red-700/30 p-5 hover:border-red-700/50 transition-all duration-300">
                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <span className="text-red-700 text-lg flex-shrink-0">★</span>
                  <span>
                    <span className="text-gray-300 font-medium block mb-1">50% de desconto na Avaliação Antropométrica Completa (opcional)</span>
                    <span>Protocolo Feevale <span className="text-gray-300">(3 diâmetros, 9 dobras, 16 circunferências)</span>. Valor normal <span className="line-through text-red-500">R$120</span> → <span className="text-green-500 font-bold">para alunos da consultoria: R$60</span>. Realizamos presencialmente em uma das minhas academias.</span>
                  </span>
                </div>
              </div>

            </div>
          </div>

          

          {/* Investimento e CTA - IDÊNTICO ao Presencial */}
          <div className="bg-neutral-800 p-8 flex justify-center flex-col w-full">
            <p className="text-gray-400 text-lg mb-4 text-center">
              <span className="text-gray-300">Investimento (a partir de 2 meses)</span>
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 mx-0 md:mx-72 py-3 bg-red-700 hover:bg-red-800 text-white text-center text-lg tracking-wide transition-colors"
            >
              QUERO MINHA CONSULTORIA ONLINE (COM BÔNUS)
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};