'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const HeroSection = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-black py-24 w-full">
      <div className="max-w-5xl mx-auto px-6 bg-alunos ">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring", stiffness: 100 } }
          }}
          className="relative flex flex-col items-center"
        >
          {/* Image container */}
          <div className="relative w-full max-w-2xl ">
            <div className="relative overflow-hidden flex justify-center">
              <Image
                src="/persona.png"
                alt="Thiago Berghahn"
                width={300}
                height={300}
                className="w-5/6 md:w-3/6 h-auto object-cover contrast-125 pt-10"
                priority
              />
              
              {/* Minimal border lines */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-white/5" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-white/5" />
              </div>
            </div>
          </div>
          
          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-6 -right-6 bg-red-700 px-4 py-2"
          >
            <span className="text-white text-xs tracking-wider">+5 ANOS</span>
          </motion.div>
          
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
            className="absolute -bottom-6 -left-6 bg-neutral-800 px-4 py-2 border-l-2 border-red-700/50"
          >
            <span className="text-red-600 text-xs tracking-wider">ESPECIALISTA</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};