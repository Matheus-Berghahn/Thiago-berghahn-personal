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
    question: "Tenho dor no joelho/ombro/lombar. Posso treinar?",
    answer: "Sim. Meu método é baseado em reabilitação ativa. Fortalecemos sem agredir a lesão."
  },
  {
    question: "Minha rotina é muito louca. Consigo encaixar?",
    answer: "Sim. Ajustamos os treinos para a sua realidade. Eu me adapto a você."
  },
  {
    question: "Preciso treinar todos os dias?",
    answer: "Não. A maioria treina 3 a 4 vezes por semana. Consistência, não volume exagerado."
  },
  {
    question: "Por que eu pagaria você se já tenho a academia?",
    answer: "Academia dá equipamento, não direcionamento. Eu dou método, correção, ajuste fino e responsabilidade."
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
            <span className="text-red-700 text-xs tracking-widest">DÚVIDAS FREQUENTES</span>
            <div className="w-6 h-px bg-red-700" />
          </div>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">Perguntas Frequentes</h2>
          <div className="w-12 h-px bg-red-700/30 mx-auto mt-6" />
        </div>
        
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-neutral-800">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-neutral-700/50 transition-colors"
              >
                <span className="text-white text-sm font-light tracking-wide">{faq.question}</span>
                <span className="text-red-600 text-xl">{openIndex === index ? '−' : '+'}</span>
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
                    <div className="px-6 pb-4 text-gray-500 text-sm leading-relaxed">
                      {faq.answer}
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