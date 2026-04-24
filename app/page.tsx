'use client';

import { useState } from 'react';
import { Modal } from './components/Modal';
import { Header } from './components/Header';
import { AboutSection } from './components/AboutSection';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { MethodologySection } from './components/MethodologySection';
import { ScienceSection } from './components/ScienceSection';
import { GallerySection } from './components/GallerySection';
import { ServicesSection } from './components/ServicesSection';
import { PresencialDetails } from './components/PresencialDetails';
import { OnlineDetails } from './components/OnlineDetails';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { UserRegion } from './types';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(true);
  const [region, setRegion] = useState<UserRegion>(null);
  const [showDetails, setShowDetails] = useState<'presencial' | 'online' | null>(null);

  const handleRegionSelect = (selectedRegion: UserRegion) => {
    setRegion(selectedRegion);
    setModalOpen(false);
  };

  const handleCardClick = (type: 'presencial' | 'online') => {
    setShowDetails(type);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToCards = () => {
    setShowDetails(null);
  };

  if (showDetails === 'presencial') {
    return (
      <>
        <Modal isOpen={modalOpen} onSelect={handleRegionSelect} />
        <PresencialDetails onBack={handleBackToCards} />
      </>
    );
  }

  if (showDetails === 'online') {
    return (
      <>
        <Modal isOpen={modalOpen} onSelect={handleRegionSelect} />
        <OnlineDetails onBack={handleBackToCards} />
      </>
    );
  }

  return (
    <>
      <Modal isOpen={modalOpen} onSelect={handleRegionSelect} />
      
      <main>
        <Header />
        <AboutSection />
        <HeroSection />
        <MarqueeSection />
        <MethodologySection />
        <ScienceSection />
        <GallerySection />
        <ServicesSection onCardClick={handleCardClick} />
        <FAQSection />
        <Footer 
          onPresencialClick={() => handleCardClick('presencial')}
          onOnlineClick={() => handleCardClick('online')}
        />
      </main>
    </>
  );
}