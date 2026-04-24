'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const TwoImages = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
      }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0 }
        }}
        className="aspect-square rounded-2xl overflow-hidden"
      >
        <Image
          src="/training-1.jpg"
          alt="Training 1"
          width={400}
          height={400}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 30 },
          visible: { opacity: 1, x: 0 }
        }}
        className="aspect-square rounded-2xl overflow-hidden"
      >
        <Image
          src="/training-2.jpg"
          alt="Training 2"
          width={400}
          height={400}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </motion.div>
    </motion.div>
  );
};