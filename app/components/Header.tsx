'use client';

import { motion } from 'framer-motion';

const letterVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.03, duration: 0.8 }
  })
};

export const Header = () => {
  const title = "THIAGO BERGHAHN";
  const topLine = "CREF 042105-G/RS";
  const middleLine = "TREINO INTELIGENTE";
  const bottomLine = "RESULTADO COM CIÊNCIA";

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-red-700/5 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-700/20 to-transparent" />
      
      <div className="relative text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center gap-0 flex-wrap">
            {title.split('').map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
                className="text-3xl md:text-7xl lg:text-8xl font-light tracking-tight inline-block text-white"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '60px' }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="h-px bg-red-700 mx-auto my-8"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {/* CREF acima */}
          <p className="text-mg text-gray-500 tracking-wider mb-4">{topLine}</p>
          
          {/* Treino Inteligente */}
          <p className="text-xl md:text-3xl text-gray-400 tracking-wide font-light pt-10">
            {middleLine}
          </p>
          
          {/* Seta apontando para baixo */}
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="my-3"
          >
            <svg 
              className="w-6 h-6 mx-auto text-red-700" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 13l-7 7-7-7m7-7v14" />
            </svg>
          </motion.div>
          
          {/* Resultado com Ciência */}
          <p className="text-xl md:text-3xl text-gray-400 tracking-wide font-light mt-2">
            {bottomLine}
          </p>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
        </motion.div>
      </div>
    </section>
  );
};