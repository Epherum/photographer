"use client";
import { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/test.jpg', // Using the existing test image as placeholder
    '/test.jpg', // You'll replace these with actual slider images
    '/test.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className={styles.hero}>
      <div className={styles.slider}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === currentSlide ? styles.active : ''
            }`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
      </div>

      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.name}>YESSER BARKA</h1>
          <p className={styles.subtitle}>
            Global Luxury Destination Wedding & Editorial Photographer
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;