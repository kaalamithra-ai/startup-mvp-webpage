"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Code2,
  Globe,
  Megaphone,
  Paintbrush,
  Rocket,
  Search,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";

import styles from "./Services.module.css";

type Service = {
  title: string;
  description: string;
  icon: typeof Globe;
  accent: string;
};

const services: Service[] = [
  {
    title: "Startup/MVP Launch Kit",
    description:
      "Everything you need to launch — branding, digital setup, lead capture and growth systems in one kit.",
    icon: Rocket,
    accent: "blue",
  },
  {
    title: "Website Development",
    description:
      "Fast, responsive and conversion-focused websites that represent your brand professionally.",
    icon: Globe,
    accent: "purple",
  },
  {
    title: "Software Development",
    description:
      "Custom software, web apps and tools built to streamline your business operations.",
    icon: Code2,
    accent: "pink",
  },
  {
    title: "CRM & Automation",
    description:
      "Manage customers, automate follow-ups and simplify workflows with smart CRM systems.",
    icon: Workflow,
    accent: "cyan",
  },
  {
    title: "AI Automation",
    description:
      "Leverage AI agents and automations to save time and scale your business faster.",
    icon: Bot,
    accent: "gold",
  },
  {
    title: "Digital Marketing",
    description:
      "Results-driven marketing across Google, social media and paid channels to grow your reach.",
    icon: Megaphone,
    accent: "blue",
  },
  {
    title: "Brand Identity & Design",
    description:
      "Logos, visual identity and creative assets that make your brand memorable and trustworthy.",
    icon: Paintbrush,
    accent: "pink",
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Complete online stores and selling systems to launch and grow your e-commerce business.",
    icon: ShoppingBag,
    accent: "purple",
  },
  {
    title: "SEO & Lead Generation",
    description:
      "Rank higher in searches and attract quality enquiries with focused SEO and funnels.",
    icon: Search,
    accent: "cyan",
  },
  {
    title: "App Development",
    description:
      "Mobile apps and progressive web apps that put your business in your customers' pockets.",
    icon: Smartphone,
    accent: "gold",
  },
];

export default function Services({
  excludeService,
}: {
  excludeService?: string;
}) {
  const scrollToRegistration = () => {
    document.getElementById("startup-registration")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const visibleServices = excludeService
    ? services.filter(
        (service) =>
          service.title.toLowerCase() !== excludeService.toLowerCase()
      )
    : services;

  return (
    <section
      id="services"
      className={styles.section}
      aria-labelledby="services-heading"
    >
      <div className={styles.backgroundGrid} aria-hidden="true" />
      <div className={`${styles.glow} ${styles.glowBlue}`} aria-hidden="true" />
      <div className={`${styles.glow} ${styles.glowPink}`} aria-hidden="true" />
      <div
        className={`${styles.glow} ${styles.glowPurple}`}
        aria-hidden="true"
      />

      <div className={styles.container}>
        <motion.header
          className={styles.headingWrapper}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.badge}>
            <Sparkles size={15} />
            Our Services
          </span>

          <h2 id="services-heading">
            Complete Business Solutions
            <span>Under One Roof</span>
          </h2>

          <p>
            From your first idea to ongoing growth, we provide everything you
            need to build, launch and scale a successful business.
          </p>
        </motion.header>

        <div className={styles.grid}>
          {visibleServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                className={`${styles.card} ${styles[`accent${service.accent}`]}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className={styles.iconStage}>
                  <div className={styles.iconGlow} aria-hidden="true" />
                  <div className={styles.iconBox}>
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                </div>

                <h4>{service.title}</h4>

                <p>{service.description}</p>

                <button
                  type="button"
                  className={styles.linkButton}
                  onClick={scrollToRegistration}
                >
                  Get Started
                  <ArrowRight size={16} />
                </button>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
