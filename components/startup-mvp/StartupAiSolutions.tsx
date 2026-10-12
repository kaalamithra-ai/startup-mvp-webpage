"use client";

import { motion } from "framer-motion";
import { Bot, Sparkles } from "lucide-react";

import styles from "./StartupAiSolutions.module.css";

type AiSolution = {
  number: string;
  title: string;
  description: string;
  icon: typeof Bot;
  accent: "violet" | "cyan" | "amber" | "rose" | "emerald";
};

const aiSolutions: AiSolution[] = [
  {
    number: "01",
    title: "AI Chatbot Integration",
    description:
      "Deploy smart AI chatbots that engage visitors and capture enquiries around the clock.",
    icon: Bot,
    accent: "violet",
  },
  {
    number: "02",
    title: "AI Business Automation",
    description:
      "Automate repetitive tasks and daily operations with intelligent AI workflows.",
    icon: Sparkles,
    accent: "cyan",
  },
  {
    number: "03",
    title: "AI Lead Qualification",
    description:
      "Score, segment and prioritise leads automatically so your team closes the best deals.",
    icon: Bot,
    accent: "amber",
  },
  {
    number: "04",
    title: "AI Customer Support",
    description:
      "Deliver instant, 24/7 AI-assisted support that resolves queries and boosts satisfaction.",
    icon: Bot,
    accent: "rose",
  },
  {
    number: "05",
    title: "AI Workflow Automation",
    description:
      "Connect your tools and data so AI runs seamless, end-to-end business workflows.",
    icon: Sparkles,
    accent: "emerald",
  },
];

export default function StartupAiSolutions() {
  return (
    <section
      id="startup-ai-solutions"
      className={styles.section}
      aria-labelledby="startup-ai-solutions-heading"
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
            <Sparkles size={15} aria-hidden="true" />
            AI · Paid Modules
          </span>

          <h2 id="startup-ai-solutions-heading">
            Advanced AI Solutions
            <span>Automate. Qualify. Grow.</span>
          </h2>

          <p>
            Supercharge your business with premium AI services. From intelligent
            chatbots to end-to-end workflow automation, these advanced AI
            modules are available as paid add-ons to your Startup Launch Kit.
          </p>
        </motion.header>

        <div className={styles.grid}>
          {aiSolutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.article
                key={solution.title}
                className={`${styles.card} ${styles[`accent${solution.accent[0].toUpperCase()}${solution.accent.slice(1)}`]}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className={styles.cardNumber}>{solution.number}</span>

                <div className={styles.iconTile}>
                  <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
                </div>

                <div className={styles.cardBody}>
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                </div>

                <span className={styles.paidTag}>
                  <Sparkles size={13} aria-hidden="true" />
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
