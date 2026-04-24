import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const useScrollAnimation = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.8,
    rootMargin: '-50px 0px'
  });

  if (inView) {
    controls.start('visible');
  }

  return { ref, controls, inView };
};