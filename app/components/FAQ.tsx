'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

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
    answer: "Não precisa. Existem inúmeros exercícios para cada grupo muscular. Vou sempre indicar o melhor para você, mas não será forçado a nada que não goste."
  },
  {
    question: "Tenho dor no joelho/ombro/lombar. Posso treinar mesmo assim?",
    answer: "Sim. Meu método é baseado em reabilitação ativa. Fortalecemos sem agredir a lesão. Já trabalhei com dores na lombar, cervical, joelho e ombro – com segurança."
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

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Perguntas Frequentes</h2>
      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-neutral-900 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-neutral-800 transition-colors"
            >
              <span className="text-white font-semibold">{faq.question}</span>
              <ChevronDown
                className={`text-red-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                size={20}
              />
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
                  <div className="px-6 pb-4 text-gray-300">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};