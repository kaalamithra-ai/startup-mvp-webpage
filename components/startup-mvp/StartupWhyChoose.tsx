"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  Headphones,
  Rocket,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

import styles from "./StartupWhyChoose.module.css";

const features = [
  {
    title: "Faster Startup Launch",
    description:
      "Launch your business faster with clear planning, professional setup and coordinated execution.",
    icon: Rocket,
    accent: "blue",
  },
  {
    title: "AI-Powered Business Setup",
    description:
      "Use modern AI tools and automation systems to improve productivity from the beginning.",
    icon: Bot,
    accent: "purple",
  },
  {
    title: "Dedicated Startup Experts",
    description:
      "Work with specialists experienced in branding, technology, marketing and startup growth.",
    icon: Users,
    accent: "pink",
  },
  {
    title: "End-to-End Execution",
    description:
      "From planning and branding to digital setup and launch support, everything is managed together.",
    icon: Zap,
    accent: "cyan",
  },
  {
    title: "Growth-Focused Strategy",
    description:
      "Every solution is designed to support lead generation, customer acquisition and future scaling.",
    icon: TrendingUp,
    accent: "gold",
  },
  {
    title: "Ongoing Business Support",
    description:
      "Receive continued guidance and technical assistance after your startup officially launches.",
    icon: Headphones,
    accent: "green",
  },
];

const statistics = [
  {
    value: "500+",
    label: "Business Consultations",
  },
  {
    value: "150+",
    label: "Startups Supported",
  },
  {
    value: "24/7",
    label: "Expert Assistance",
  },
  {
    value: "100%",
    label: "Growth Focused",
  },
];

const visualPoints = [
  "Complete startup ecosystem",
  "Technology and branding support",
  "Lead-generation ready",
  "Designed for future scaling",
];

export default function StartupWhyChoose() {
  const scrollToRegistration = () => {
    document.getElementById("startup-registration")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="startup-why-choose"
      className={styles.section}
      aria-labelledby="startup-why-choose-heading"
    >
      <div className={styles.backgroundGrid} aria-hidden="true" />

      <div
        className={`${styles.glow} ${styles.glowBlue}`}
        aria-hidden="true"
      />

      <div
        className={`${styles.glow} ${styles.glowPurple}`}
        aria-hidden="true"
      />

      <div
        className={`${styles.glow} ${styles.glowPink}`}
        aria-hidden="true"
      />

      <div className={styles.container}>
        <motion.header
          className={styles.headingWrapper}
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className={styles.badge}>
            <Sparkles size={15} />

            <span>Why Choose Our Startup Launch Kit</span>
          </div>

          <h2 id="startup-why-choose-heading">
            Everything Your Startup Needs

            <span>To Launch With Confidence</span>
          </h2>

          <p>
            We do more than create a website. We help build a complete,
            professional and growth-ready startup ecosystem using branding,
            technology, automation and marketing support.
          </p>
        </motion.header>

        <div className={styles.mainLayout}>
          <motion.div
            className={styles.visualPanel}
            initial={{
              opacity: 0,
              x: -45,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.18,
            }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className={styles.visualOrbit} aria-hidden="true" />

            <div className={styles.visualOrbitSecondary} aria-hidden="true" />

            <div className={styles.visualCoreGlow} aria-hidden="true" />

            <motion.div
              className={styles.visualContent}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className={styles.coreIcon}>
                <BriefcaseBusiness size={38} />
              </div>

              <span className={styles.visualLabel}>
                Complete Startup Solution
              </span>

              <h3>
                One Expert Team

                <span>One Complete Launch System</span>
              </h3>

              <div className={styles.visualPoints}>
                {visualPoints.map((point) => (
                  <div key={point}>
                    <CheckCircle2 size={16} />

                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className={styles.floatingCardTop}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className={styles.floatingIcon}>
                <Rocket size={20} />
              </div>

              <div>
                <span>Startup Ready</span>

                <strong>Launch Faster</strong>
              </div>
            </motion.div>

            <motion.div
              className={styles.floatingCardBottom}
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className={styles.floatingIcon}>
                <TrendingUp size={20} />
              </div>

              <div>
                <span>Growth System</span>

                <strong>Scale Smarter</strong>
              </div>
            </motion.div>
          </motion.div>

          <div className={styles.featuresGrid}>
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  key={feature.title}
                  className={`${styles.featureCard} ${
                    styles[`accent${feature.accent}`]
                  }`}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -8,
                    rotateX: 2,
                    rotateY: -2,
                  }}
                >
                  <span className={styles.featureNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className={styles.featureIconStage}>
                    <div
                      className={styles.featureIconGlow}
                      aria-hidden="true"
                    />

                    <div className={styles.featureIcon}>
                      <Icon size={30} strokeWidth={1.7} />
                    </div>
                  </div>

                  <div className={styles.featureContent}>
                    <h3>{feature.title}</h3>

                    <p>{feature.description}</p>
                  </div>

                  <div className={styles.featureStatus}>
                    <CheckCircle2 size={14} />

                    <span>Included with Startup Kit</span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          className={styles.statistics}
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {statistics.map((statistic) => (
            <div
              className={styles.statisticItem}
              key={statistic.label}
            >
              <span className={styles.statisticNumber}>
                {statistic.value}
              </span>

              <span className={styles.statisticLabel}>
                {statistic.label}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          className={styles.ctaPanel}
          initial={{
            opacity: 0,
            y: 32,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className={styles.ctaGlow} aria-hidden="true" />

          <div className={styles.ctaIcon}>
            <Rocket size={28} />
          </div>

          <div className={styles.ctaContent}>
            <span>Ready to Build Your Startup?</span>

            <h3>
              Turn Your Business Idea Into a Professional, Launch-Ready Brand.
            </h3>

            <p>
              Register your requirements and speak with our startup experts
              about your business launch plan.
            </p>
          </div>

          <button
            type="button"
            className={styles.ctaButton}
            onClick={scrollToRegistration}
          >
            <span>Get Startup Launch Kit</span>

            <ArrowRight size={19} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}