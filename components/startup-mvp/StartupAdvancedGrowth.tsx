"use client";

import { motion } from "framer-motion";
import { Crown, Gem } from "lucide-react";

import styles from "./StartupAdvancedGrowth.module.css";

type GrowthService = {
  number: string;
  title: string;
  description: string;
  icon: typeof Crown;
  accent: "amber" | "violet" | "cyan" | "rose" | "emerald";
};

const growthServices: GrowthService[] = [
  {
    number: "01",
    title: "Lead Generation",
    description:
      "Attract quality leads and grow your customer base.",
    icon: Gem,
    accent: "amber",
  },
  {
    number: "02",
    title: "E-Commerce Solutions",
    description:
      "Launch and scale your online store with the right strategy.",
    icon: Crown,
    accent: "violet",
  },
  {
    number: "03",
    title: "Sales Funnel Setup",
    description:
      "Convert visitors into paying customers.",
    icon: Gem,
    accent: "cyan",
  },
  {
    number: "04",
    title: "Personal Branding",
    description:
      "Build your brand identity and establish authority.",
    icon: Crown,
    accent: "rose",
  },
  {
    number: "05",
    title: "Performance Marketing",
    description:
      "Data-driven campaigns for maximum results and ROI.",
    icon: Crown,
    accent: "emerald",
  },
];

export default function StartupAdvancedGrowth() {
  return (
    <section
      id="startup-growth-services"
      className={styles.section}
      aria-labelledby="startup-growth-services-heading"
    >
      <div className={styles.glowA} aria-hidden="true" />
      <div className={styles.glowB} aria-hidden="true" />
      <div className={styles.glowC} aria-hidden="true" />

      <div className={styles.container}>
        <motion.header
          className={styles.heading}
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.badge}>
            <Crown size={15} aria-hidden="true" />
            Advanced · Paid Modules
          </span>

          <h2 id="startup-growth-services-heading">
            5 Powerful Growth Services
            <span>To Scale Beyond Launch</span>
          </h2>

          <p>
            Unlock premium, results-driven services designed to accelerate your
            growth. These advanced modules are available as paid add-ons on top
            of your included Startup Launch Kit.
          </p>
        </motion.header>

        <div className={styles.grid}>
          {growthServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                className={`${styles.card} ${styles[`accent${service.accent[0].toUpperCase()}${service.accent.slice(1)}`]}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className={styles.cardNumber}>{service.number}</span>

                <div className={styles.iconTile}>
                  <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
                </div>

                <div className={styles.cardBody}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <span className={styles.paidTag}>
                  <Gem size={13} aria-hidden="true" />
                  Paid Module
                </span>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
