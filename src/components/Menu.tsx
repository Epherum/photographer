"use client";
import { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TransitionLink from './TransitionLink';
import styles from './Menu.module.css';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu = ({ isOpen, onClose }: MenuProps) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (event.target instanceof HTMLElement && event.target.classList.contains(styles.overlay)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          <motion.div
            ref={menuRef}
            className={styles.slideMenu}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className={styles.menuContent}>
              <div className={styles.menuToggle} onClick={onClose}>
                <div className={styles.burger}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className={styles.closeText}>CLOSE</span>
              </div>
              <motion.div
                className={styles.menuLinks}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2
                    }
                  }
                }}
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <TransitionLink href="/" onClick={onClose}>
                    HOME
                  </TransitionLink>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <TransitionLink href="/portfolio" onClick={onClose}>
                    PORTFOLIO
                  </TransitionLink>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <TransitionLink href="/about" onClick={onClose}>
                    ABOUT
                  </TransitionLink>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <TransitionLink href="/contact" onClick={onClose}>
                    CONTACT
                  </TransitionLink>
                </motion.div>
              </motion.div>

              <motion.div
                className={styles.menuFooter}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.3 }}
              >
                <div className={styles.menuLogo}>
                  <img src="/yesser-Logo.svg" alt="Yesser Barka" />
                </div>
                <div className={styles.menuSocials}>
                  <a href="#" aria-label="Instagram" onClick={onClose}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="Pinterest" onClick={onClose}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.372 0 12.017 0 16.4 2.331 20.027 5.686 21.6c-.076-.664-.145-1.685.03-2.409.157-.673 1.02-4.311 1.02-4.311s-.26-.522-.26-1.293c0-1.212.703-2.118 1.578-2.118.744 0 1.103.558 1.103 1.226 0 .748-.477 1.865-.723 2.9-.206.869.436 1.577 1.294 1.577 1.553 0 2.75-1.64 2.75-4.003 0-2.093-1.5-3.556-3.642-3.556-2.481 0-3.94 1.86-3.94 3.783 0 .75.289 1.554.649 1.992a.36.36 0 0 1 .083.343c-.091.378-.293 1.193-.332 1.36-.05.212-.165.257-.381.155-1.42-.662-2.306-2.74-2.306-4.416 0-2.755 2.002-5.286 5.772-5.286 3.03 0 5.383 2.159 5.383 5.049 0 3.014-1.898 5.434-4.538 5.434-.886 0-1.723-.46-2.008-1.013l-.548 2.088c-.198.766-.735 1.727-1.093 2.31A12.006 12.006 0 0 0 12 24c6.626 0 12-5.373 12-11.983C24 5.372 18.626.001 12.001.001z"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="TikTok" onClick={onClose}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Menu;