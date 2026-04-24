'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { UserRegion } from '../types';

interface ModalProps {
  isOpen: boolean;
  onSelect: (region: UserRegion) => void;
}

export const Modal = ({ isOpen, onSelect }: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="max-w-md w-full bg-neutral-800 p-10"
          >
            <div className="relative">
              <div className="absolute -top-1 left-0 w-12 h-px bg-red-700" />
              <h2 className="text-2xl font-light text-white mb-3 tracking-wide">Localização</h2>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                Selecione sua região para uma experiência personalizada
              </p>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={() => onSelect('local')}
                className="w-full px-6 py-4 bg-transparent border border-red-700/50 hover:bg-red-700/10 text-white transition-all duration-300 text-left group"
              >
                <span className="text-sm tracking-wide">Região de Estância Velha/RS</span>
                <span className="block text-xs text-gray-500 mt-1 group-hover:text-red-400 transition-colors">Atendimento presencial</span>
              </button>
              
              <button
                onClick={() => onSelect('online')}
                className="w-full px-6 py-4 bg-transparent border border-neutral-700 hover:border-red-700/30 text-white transition-all duration-300 text-left group"
              >
                <span className="text-sm tracking-wide">Outras regiões</span>
                <span className="block text-xs text-gray-500 mt-1 group-hover:text-red-400 transition-colors">Consultoria online</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};