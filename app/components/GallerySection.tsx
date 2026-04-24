'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useEffect, useState } from 'react';

export const GallerySection = () => {
  const { ref, controls } = useScrollAnimation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section ref={ref} className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 }
            }}
            className="group overflow-hidden"
          >
            <div className="relative w-full bg-neutral-900">
              <div className="relative w-full pt-[100%]">
                <Image
                  src="/objetivo_01.png"
                  alt="Objetivo 1"
                  fill
                  className="object-contain transition-all duration-700"
                  style={{
                    filter: isMobile ? 'grayscale(0%)' : 'grayscale(100%)',
                    transition: 'filter 0.7s ease-in-out'
                  }}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      const img = e.currentTarget;
                      img.style.filter = 'grayscale(0%)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      const img = e.currentTarget;
                      img.style.filter = 'grayscale(100%)';
                    }
                  }}
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="w-8 h-px bg-red-700/50 group-hover:w-12 transition-all" />
            </div>
          </motion.div>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0 }
            }}
            className="group overflow-hidden"
          >
            <div className="relative w-full bg-neutral-900">
              <div className="relative w-full pt-[100%]">
                <Image
                  src="/objetivo_02.png"
                  alt="Objetivo 2"
                  fill
                  className="object-contain transition-all duration-700"
                  style={{
                    filter: isMobile ? 'grayscale(0%)' : 'grayscale(100%)',
                    transition: 'filter 0.7s ease-in-out'
                  }}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      const img = e.currentTarget;
                      img.style.filter = 'grayscale(0%)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      const img = e.currentTarget;
                      img.style.filter = 'grayscale(100%)';
                    }
                  }}
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <div className="w-8 h-px bg-red-700/50 group-hover:w-12 transition-all" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};