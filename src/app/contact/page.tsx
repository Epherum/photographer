"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedWord from "@/components/animation/AnimatedWord";
import { easings } from "@/utils/easings";
import styles from "./contact.module.css";

const textContainerVariants = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const wordVariants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 1, ease: easings.easeOut } },
};

const formVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: easings.easeOut, delay: 0.3 }
  },
};

const contactInfoVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: easings.easeOut, delay: 0.5 }
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <motion.h1
            className={styles.title}
            variants={textContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatedWord variants={wordVariants}>Let's</AnimatedWord>{" "}
            <AnimatedWord variants={wordVariants}>work</AnimatedWord>
            <br />
            <AnimatedWord variants={wordVariants}>together</AnimatedWord>
          </motion.h1>

          <div className={styles.contentGrid}>
            <motion.div
              className={styles.formSection}
              variants={formVariants}
              initial="hidden"
              animate="visible"
            >
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className={styles.select}
                    required
                  >
                    <option value="">Select Event Type</option>
                    <option value="wedding">Wedding Photography</option>
                    <option value="portrait">Portrait Session</option>
                    <option value="nature">Nature Photography</option>
                    <option value="event">Event Photography</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={styles.inputGroup}>
                  <input
                    type="date"
                    name="eventDate"
                    placeholder="Event Date"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <textarea
                    name="message"
                    placeholder="Tell me about your vision..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className={styles.textarea}
                    rows={5}
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className={styles.submitButton}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              className={styles.contactInfo}
              variants={contactInfoVariants}
              initial="hidden"
              animate="visible"
            >
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Get in Touch</h3>
                <p className={styles.infoText}>
                  Ready to capture your special moments? I'd love to hear about
                  your vision and discuss how we can create beautiful memories
                  together.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Response Time</h3>
                <p className={styles.infoText}>
                  I typically respond to inquiries within 24 hours. For urgent
                  requests, please call directly.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Contact Details</h3>
                <div className={styles.contactDetails}>
                  <p>📧 hello@photographer.com</p>
                  <p>📱 (555) 123-4567</p>
                  <p>📍 San Francisco Bay Area</p>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </>
  );
}