'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface Slide {
  id: number;
  beforeSrc: string;
  afterSrc: string;
}

const slides: Slide[] = [
  {
    id: 1,
    beforeSrc: '/antes1.png',
    afterSrc: '/depois1.png'
  },
  {
    id: 2,
    beforeSrc: '/antes2.png',
    afterSrc: '/depois2.png'
  },
  {
    id: 3,
    beforeSrc: '/antes3.png',
    afterSrc: '/depois3.png'
  }
];

export const BeforeAfterCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [position, setPosition] = useState(50);

  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  useEffect(() => {
    setPosition(50);
  }, [currentSlide]);

  const updateSlider = (clientX: number, clientY?: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    let value = ((clientX - rect.left) / rect.width) * 100;
    value = Math.max(6, Math.min(94, value));
    setPosition(value);
  };

  // Mouse events (desktop)
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!dragging.current) return;
      updateSlider(e.clientX);
    };

    const up = () => {
      dragging.current = false;
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
  }, []);

  // Touch events (mobile)
  useEffect(() => {
    const touchMove = (e: TouchEvent) => {
      if (!dragging.current) return;
      e.preventDefault();
      const touch = e.touches[0];
      updateSlider(touch.clientX);
    };

    const touchEnd = () => {
      dragging.current = false;
    };

    window.addEventListener('touchmove', touchMove, { passive: false });
    window.addEventListener('touchend', touchEnd);

    return () => {
      window.removeEventListener('touchmove', touchMove);
      window.removeEventListener('touchend', touchEnd);
    };
  }, []);

  const current = slides[currentSlide];

  return (
    <section className="bg-black py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* heading */}
        <div className="text-center mb-14">
          <div className="flex justify-center items-center gap-3 mb-5">
            <div className="w-6 h-px bg-red-700" />
            <span className="text-red-700 text-[11px] tracking-[0.35em]">
              ANTES & DEPOIS
            </span>
            <div className="w-6 h-px bg-red-700" />
          </div>

          <h2 className="text-white text-4xl md:text-5xl font-light tracking-tight">
            Resultados que inspiram
          </h2>

          <div className="w-14 h-px bg-red-700/40 mx-auto mt-6" />
        </div>

        <div className="flex justify-center items-center gap-6">
          {/* left arrow */}
          <button
            onClick={() =>
              setCurrentSlide(
                (prev) => (prev - 1 + slides.length) % slides.length
              )
            }
            className="
              hidden md:flex
              w-10 h-10
              items-center justify-center
              border border-white/20
              bg-black
              hover:border-red-700
              transition
            "
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* compare card */}
          <div
            ref={containerRef}
            className="
              relative
              overflow-hidden
              border border-neutral-800
              bg-[#050505]
              shadow-[0_0_55px_rgba(0,0,0,.65)]
              w-full
              max-w-[320px]
              aspect-[320/400]
            "
          >
            {/* after image */}
            <Image
              src={current.afterSrc}
              fill
              priority
              alt="Depois"
              className="object-cover"
            />

            {/* before image revealed by mask */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: `inset(0 ${100 - position}% 0 0)`
              }}
            >
              <Image
                src={current.beforeSrc}
                fill
                alt="Antes"
                className="object-cover"
              />
            </div>

            {/* gradient bottom */}
            <div
              className="
              absolute inset-x-0 bottom-0 h-32
              bg-gradient-to-t from-black via-black/30 to-transparent
            "
            />

            {/* labels */}
            <div className="absolute top-5 left-5 z-30">
              <div className="bg-black/75 px-2 py-2 backdrop-blur-sm">
                <p className="text-white text-[8px] tracking-[0.3em]">ANTES</p>
                <div className="w-8 h-px bg-red-700 mt-2" />
              </div>
            </div>

            <div className="absolute top-5 right-5 z-30">
              <div className="bg-black/75 px-2 py-2 backdrop-blur-sm">
                <p className="text-white text-[8px] tracking-[0.3em]">DEPOIS</p>
                <div className="w-8 h-px bg-red-700 mt-2 ml-auto" />
              </div>
            </div>

            {/* divider */}
            <div
              className="absolute inset-y-0 z-30"
              style={{
                left: `${position}%`,
                transform: 'translateX(-50%)'
              }}
            >
              {/* FULL HEIGHT LINE */}
              <div
                className="
                absolute
                top-0
                bottom-0
                left-1/2
                -translate-x-1/2
                w-[2px]
                bg-red-700
                shadow-[0_0_14px_rgba(185,28,28,.45)]
              "
              />

              {/* SMALLER HANDLE - com suporte para mouse e touch */}
              <button
                onMouseDown={() => {
                  dragging.current = true;
                }}
                onTouchStart={(e) => {
                  e.preventDefault();
                  dragging.current = true;
                }}
                className="
                absolute
                top-1/2
                left-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-11
                h-11
                rounded-full
                bg-black
                border border-red-700
                flex items-center justify-center
                shadow-xl
                cursor-ew-resize
                hover:scale-105
                transition
                active:scale-95
              "
              >
                <div className="flex items-center gap-1.5">
                  <span
                    className="
                    w-2
                    h-2
                    border-l
                    border-t
                    border-white
                    rotate-[315deg]
                  "
                  />
                  <span
                    className="
                    w-2
                    h-2
                    border-r
                    border-t
                    border-white
                    rotate-45
                  "
                  />
                </div>
              </button>
            </div>
          </div>

          {/* right arrow */}
          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % slides.length)
            }
            className="
              hidden md:flex
              w-14 h-14
              items-center justify-center
              border border-white/20
              bg-black
              hover:border-red-700
              transition
            "
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* mobile arrows */}
        <div className="md:hidden flex justify-center gap-4 mt-6">
          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
            }
            className="border border-neutral-700 px-6 py-3 text-white"
          >
            Anterior
          </button>

          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="border border-neutral-700 px-6 py-3 text-white"
          >
            Próximo
          </button>
        </div>

        {/* indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={
                i === currentSlide
                  ? 'w-10 h-px bg-red-700'
                  : 'w-4 h-px bg-neutral-600 hover:bg-neutral-500'
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};