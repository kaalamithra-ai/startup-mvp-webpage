"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Rocket,
  Sparkles,
} from "lucide-react";

import styles from "./StartupMvpHero.module.css";

const checklistItems = [
  "Brand Identity Setup",
  "Digital Business Setup",
  "Lead Generation System",
  "Startup Growth Support",
];

export default function StartupMvpHero() {
  const scrollToLeadForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToStartupPackage = () => {
    document.getElementById("startup-launch-package")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="startup-mvp-hero"
      className={styles.hero}
      aria-labelledby="startup-mvp-heading"
    >
      <div className={styles.topGlowLine} aria-hidden="true" />

      <div className={styles.heroCanvas}>
        {/* Full hero artwork — never cropped */}
        <div className={styles.imageLayer} aria-hidden="true">
          <Image
            src="/images/startup-mvp/hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
        </div>

        {/* Dark shade only behind the text */}
        <div className={styles.textOverlay} aria-hidden="true" />
        <div className={styles.bottomOverlay} aria-hidden="true" />

        <div className={styles.container}>
          <div className={styles.heroLayout}>
            <motion.div
              className={styles.content}
              initial={{ opacity: 0, x: -42 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                className={styles.badge}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                }}
              >
                <Sparkles size={14} />

                <span>STARTUP &amp; MVP LAUNCH KIT</span>
              </motion.div>

              <motion.h1
                id="startup-mvp-heading"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: 0.18,
                }}
              >
                Launch,
                <span className={styles.gradientWord}> Automate </span>
                and
                <strong>Grow Your Business</strong>
              </motion.h1>

              <motion.p
                className={styles.description}
                initial={{ opacity: 0, y: 19 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.25,
                }}
              >
                Transform your idea into a market-ready startup with branding,
                technology, marketing, software and automation solutions
                designed to help you launch faster and scale smarter.
              </motion.p>

              <motion.div
                className={styles.checklist}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.32,
                }}
              >
                {checklistItems.map((item) => (
                  <div key={item}>
                    <CheckCircle2 size={15} />
                    <span>{item}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                className={styles.actions}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.39,
                }}
              >
                <button
                  className={styles.primaryButton}
                  onClick={() =>
                    document
                      .getElementById("startup-registration")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                >
                  Claim Startup Benefit
                </button>

                <button
                  type="button"
                  className={styles.secondaryButton}
                  onClick={scrollToStartupPackage}
                >
                  Explore Package
                </button>
              </motion.div>
            </motion.div>

            <div className={styles.visualArea}>
              <motion.div
                className={styles.launchCard}
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: [0, -8, 0],
                }}
                transition={{
                  opacity: {
                    duration: 0.6,
                    delay: 0.5,
                  },
                  x: {
                    duration: 0.6,
                    delay: 0.5,
                  },
                  y: {
                    duration: 4.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <div className={styles.launchIcon}>
                  <Rocket size={18} />
                </div>

                <div>
                  <span>Idea Today</span>
                  <strong>Impact Tomorrow</strong>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}