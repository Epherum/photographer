"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Navigation from "@/components/Navigation";
import { easings } from "@/utils/easings";
import { projects } from "@/data/projects";
import TransitionLink from "@/components/TransitionLink";
import styles from "./project.module.css";

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

const imageVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: easings.easeOut }
  }
};

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <>
        <Navigation />
        <div className={styles.container}>
          <div className={styles.main}>
            <h1>Project not found</h1>
            <TransitionLink href="/portfolio">← Back to Portfolio</TransitionLink>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navigation />
      <div className={styles.container}>
        <motion.main
          className={styles.main}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.header} variants={itemVariants}>
            <TransitionLink href="/portfolio" className={styles.backLink}>
              ← Back to Portfolio
            </TransitionLink>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.description}>{project.description}</p>
            {project.details && (
              <div className={styles.details}>
                <p><strong>Date:</strong> {project.details.date}</p>
                <p><strong>Location:</strong> {project.details.location}</p>
                <p><strong>Category:</strong> {project.details.category}</p>
              </div>
            )}
          </motion.div>

          <motion.div className={styles.gallery} variants={containerVariants}>
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                className={styles.imageContainer}
                variants={imageVariants}
              >
                <img
                  src={image.url}
                  alt={image.alt || `${project.title} ${index + 1}`}
                  className={styles.image}
                />
                {image.caption && (
                  <p className={styles.caption}>{image.caption}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.main>
      </div>
    </>
  );
}