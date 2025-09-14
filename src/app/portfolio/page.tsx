"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { easings } from "@/utils/easings";
import { projects } from "@/data/projects";
import TransitionLink from "@/components/TransitionLink";
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

export default function Portfolio() {
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
          <motion.h1 className={styles.title} variants={itemVariants}>
            Portfolio
          </motion.h1>

          <motion.div className={styles.grid} variants={containerVariants}>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className={styles.projectCard}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <TransitionLink href={`/portfolio/${project.id}`}>
                  <div className={styles.imageContainer}>
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className={styles.thumbnail}
                    />
                    <div className={styles.overlay}>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      <p className={styles.projectDescription}>{project.description}</p>
                    </div>
                  </div>
                </TransitionLink>
              </motion.div>
            ))}
          </motion.div>
        </motion.main>
      </div>
    </>
  );
}