'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Nunca treinei, vou ficar muito dolorido?",
    answer: "Não. O ponto chave do treino inteligente é o controle de fadiga. Você precisa estar bem para treinar novamente."
  },
  {
    question: "Vou precisar fazer exercícios que não gosto?",
    answer: "Não precisa. Existem inúmeros exercícios para cada grupo muscular. Vou sempre indicar o melhor para você."
  },
  {
    question: "Tenho dor no ombro, coluna, quadril, joelho ou tornozelo. Posso treinar?",
    answer: "Sim. Meu método é baseado em reabilitação ativa. Fortalecemos sem agredir a lesão."
  },
  {
    question: "Minha rotina é muito louca, é possível encaixar os treinos nela?",
    answer: "Sim. O treinamento é ajustado para a sua realidade."
  },
  {
    question: "Preciso treinar todos os dias?",
    answer: "Não. A maioria dos meus alunos treinam de 3 a 4 vezes por semana. Consistência, não volume exagerado."
  },
  {
    question: "Por que eu pagaria você se já tenho a academia?",
    answer: "Academia te dá o peso e a máquina. Eu forneço método, correção, ajuste fino e direcionamento pra você não perder tempo no caminho errado."
  },
  {
    question: "Você faz dieta?",
    answer: "Eu recomendo meu amigo e nutricionista formado Fernando Conceição"
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-black py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-px bg-red-700" />
            <span className="text-red-700 text-xs tracking-widest">ALGUMA DÚVIDA?</span>
            <div className="w-6 h-px bg-red-700" />
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-white text-center">PERGUNTAS FREQUENTES</h2>
          <div className="w-12 h-px bg-red-700/30 mx-auto mt-6" />
        </div>
        
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-neutral-800">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-neutral-700/50 transition-colors"
              >
                <span className="text-white text-base font-light tracking-wide">{faq.question}</span>
                <span className="text-red-600 text-2xl">{openIndex === index ? '−' : '+'}</span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-500 text-mg leading-relaxed">
                      {faq.question === "Você faz dieta?" ? (
                        <>
                          Eu recomendo meu amigo e nutricionista formado Fernando Conceição{' '}
                          <a 
                            href="https://www.instagram.com/nutrifernandoc/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-red-600 underline hover:text-red-700 transition-colors"
                          >
                            @nutrifernandoc
                          </a>
                        </>
                      ) : (
                        faq.answer
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};