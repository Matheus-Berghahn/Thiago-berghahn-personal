'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [isMobile, setIsMobile] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({ img1: false, img2: false });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section ref={ref} className="bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Primeira imagem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <div className="relative w-full bg-neutral-900 min-h-[300px] md:min-h-[400px]">
              <div className="relative w-full pt-[100%]">
                <Image
                  src="/objetivo_01.png"
                  alt="Objetivo 1"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-contain"
                  style={{
                    filter: (!imagesLoaded.img1 || (isMobile ? false : true)) ? 'grayscale(0%)' : 'grayscale(100%)',
                    transition: 'filter 0.7s ease-in-out'
                  }}
                  onLoadingComplete={() => {
                    setImagesLoaded(prev => ({ ...prev, img1: true }));
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
              <div className="w-8 h-px bg-red-700/50 group-hover:w-12 transition-all duration-500" />
            </div>
          </motion.div>
          
          {/* Segunda imagem */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <div className="relative w-full bg-neutral-900 min-h-[300px] md:min-h-[400px]">
              <div className="relative w-full pt-[100%]">
                <Image
                  src="/objetivo_02.png"
                  alt="Objetivo 2"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-contain"
                  style={{
                    filter: (!imagesLoaded.img2 || (isMobile ? false : true)) ? 'grayscale(0%)' : 'grayscale(100%)',
                    transition: 'filter 0.7s ease-in-out'
                  }}
                  onLoadingComplete={() => {
                    setImagesLoaded(prev => ({ ...prev, img2: true }));
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
              <div className="w-8 h-px bg-red-700/50 group-hover:w-12 transition-all duration-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};