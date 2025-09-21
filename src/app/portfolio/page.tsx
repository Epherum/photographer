"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { easings } from "@/utils/easings";
import styles from "./portfolio.module.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: easings.easeOut }
  }
};

const projects = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  image: `/images/portfolio/projects/${i + 1}.webp`
}));

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("weddings");

  return (
    <>
      {/* Hero Video Section */}
      <section className={styles.hero}>
        <div className={styles.videoContainer}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className={styles.heroVideo}
          >
            <source src="/images/portfolio/portfolio-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>PORTFOLIO</h1>
            <p className={styles.heroSubtext}>
              In a single frame, emotions linger— a glance becomes eternal, a story unfolds, and the beauty of now lives on forever.
            </p>
          </div>
        </div>
      </section>

      {/* Our Films Section */}
      <section className={styles.filmsSection}>
        <h2 className={styles.filmsTitle}><span>Our</span> FILMS</h2>
        <div className={styles.videoGrid}>
          <div className={styles.videoItem}>
            <iframe
              src="https://www.youtube.com/embed/k1gj5wCLAhc"
              title="Film 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles.videoItem}>
            <iframe
              src="https://www.youtube.com/embed/MzLEO98OMQg"
              title="Film 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles.videoItem}>
            <iframe
              src="https://www.youtube.com/embed/3DhAIko6ecc"
              title="Film 3"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className={styles.gallerySection}>
        <div className={styles.filterButtons}>
          <button
            className={`${styles.filterButton} ${activeFilter === "weddings" ? styles.active : ""}`}
            onClick={() => setActiveFilter("weddings")}
          >
            WEDDINGS & ENGAGEMENT
          </button>
          <button
            className={`${styles.filterButton} ${activeFilter === "fashion" ? styles.active : ""}`}
            onClick={() => setActiveFilter("fashion")}
          >
            FASHION & LIFESTYLE
          </button>
        </div>

        <motion.div
          className={styles.projectGrid}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={styles.projectItem}
              variants={itemVariants}
            >
              <div className={styles.projectImageContainer}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                />
              </div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <button className={styles.viewGalleryButton}>View gallery</button>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </>
  );
}