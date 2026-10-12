"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Lightbulb,
  Megaphone,
  Rocket,
  Settings,
  TrendingUp,
} from "lucide-react";

import styles from "./StartupProcess.module.css";

const process = [
  {
    step: "01",
    title: "Discovery Call",
    icon: Rocket,
    description:
      "Understand your startup idea, goals, target audience and launch requirements through a free consultation.",
    points: [
      "Business Discussion",
      "Goal Analysis",
      "Startup Consultation",
    ],
  },
  {
    step: "02",
    title: "Requirement Analysis",
    icon: ClipboardList,
    description:
      "We analyse your business model, competitors, industry and prepare a complete execution plan.",
    points: [
      "Business Research",
      "Feature Planning",
      "Market Analysis",
    ],
  },
  {
    step: "03",
    title: "Strategy & Proposal",
    icon: Lightbulb,
    description:
      "Receive a customized roadmap including branding, website, marketing and automation strategy.",
    points: [
      "Launch Roadmap",
      "Timeline",
      "Execution Plan",
    ],
  },
  {
    step: "04",
    title: "Design & Development",
    icon: Settings,
    description:
      "Our experts build your complete startup ecosystem including branding, website and business tools.",
    points: [
      "Brand Identity",
      "Website",
      "CRM & Automation",
    ],
  },
  {
    step: "05",
    title: "Launch & Marketing",
    icon: Megaphone,
    description:
      "Launch your startup professionally with lead generation, Google profile and digital marketing setup.",
    points: [
      "Business Launch",
      "Marketing Setup",
      "Lead Generation",
    ],
  },
  {
    step: "06",
    title: "Growth & Support",
    icon: TrendingUp,
    description:
      "Continuous optimisation, AI automation and expert support to help your startup grow.",
    points: [
      "Performance Tracking",
      "AI Optimisation",
      "Dedicated Support",
    ],
  },
];

export default function StartupProcess() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className={styles.badge}>
            <Rocket size={16} />
            HOW STARTUP LAUNCH WORKS
          </span>

          <h2>
            Launch Your Startup
            <span>In 6 Powerful Steps</span>
          </h2>

          <p>
            From idea validation to business launch, our experts handle
            everything required to transform your vision into a professional,
            growth-ready startup.
          </p>
        </motion.div>

        <div className={styles.timeline}>
          {process.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.step}
                className={styles.card}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <span className={styles.step}>{item.step}</span>

                <div className={styles.iconBox}>
                  <Icon size={30} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className={styles.points}>
                  {item.points.map((point) => (
                    <div key={point}>
                      <CheckCircle2 size={15} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <button className={styles.moreButton}>
                  Next Step
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className={styles.bottomBox}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div>
            <strong>7–30 Days</strong>
            <span>Average Launch Time</span>
          </div>

          <div>
            <strong>Dedicated Team</strong>
            <span>Experts Assigned</span>
          </div>

          <div>
            <strong>Weekly Updates</strong>
            <span>Transparent Progress</span>
          </div>

          <div>
            <strong>AI Powered</strong>
            <span>Automation Included</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}