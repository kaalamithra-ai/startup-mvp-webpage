"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  Quote,
  Rocket,
  ShoppingBag,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";

import styles from "./StartupTestimonials.module.css";

const testimonials = [
  {
    category: "Technology Startup",
    projectType: "Startup Launch Kit Client",
    feedback:
      "The complete startup setup helped us move from an early business idea to a professional digital presence. The branding, website and business systems were handled through one structured process.",
    icon: Rocket,
    accent: "blue",
    result: "Launch-Ready Business",
  },
  {
    category: "E-Commerce Brand",
    projectType: "Startup Launch Kit Client",
    feedback:
      "The team created a clear launch system for our brand, including digital setup, customer enquiry tools and growth support. The overall process was organised and easy to understand.",
    icon: ShoppingBag,
    accent: "pink",
    result: "Professional Brand Setup",
  },
  {
    category: "Business Services",
    projectType: "Startup Launch Kit Client",
    feedback:
      "Having branding, business email, online presence and lead-generation support in one package saved us from coordinating with multiple service providers.",
    icon: BriefcaseBusiness,
    accent: "purple",
    result: "Complete Business System",
  },
  {
    category: "AI & Automation Startup",
    projectType: "Startup Launch Kit Client",
    feedback:
      "The launch plan gave us a strong digital foundation and helped us understand how automation, customer management and marketing could work together as the business grows.",
    icon: Bot,
    accent: "cyan",
    result: "Automation-Ready Setup",
  },
];

const trustPoints = [
  {
    value: "500+",
    label: "Business Consultations",
  },
  {
    value: "150+",
    label: "Startups Supported",
  },
  {
    value: "98%",
    label: "Client Satisfaction Focus",
  },
  {
    value: "24/7",
    label: "Expert Assistance",
  },
];

export default function StartupTestimonials() {
  const scrollToRegistration = () => {
    document.getElementById("startup-registration")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="startup-testimonials"
      className={styles.section}
      aria-labelledby="startup-testimonials-heading"
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

            <span>Startup Success Stories</span>
          </div>

          <h2 id="startup-testimonials-heading">
            Real Businesses. Real Growth.
            <span>Real Startup Experiences.</span>
          </h2>

          <p>
            See how different types of businesses can benefit from a complete,
            structured and professionally managed startup launch system.
          </p>
        </motion.header>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => {
            const Icon = testimonial.icon;

            return (
              <motion.article
                key={testimonial.category}
                className={`${styles.testimonialCard} ${
                  styles[`accent${testimonial.accent}`]
                }`}
                initial={{
                  opacity: 0,
                  y: 34,
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
                  duration: 0.58,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -9,
                  rotateX: 1.5,
                  rotateY: -1.5,
                }}
              >
                <div className={styles.cardGlow} aria-hidden="true" />

                <div className={styles.cardTop}>
                  <div className={styles.iconStage}>
                    <div className={styles.iconGlow} aria-hidden="true" />

                    <div className={styles.iconBox}>
                      <Icon size={29} strokeWidth={1.7} />
                    </div>
                  </div>

                  <div className={styles.rating}>
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        size={15}
                        fill="currentColor"
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>
                </div>

                <Quote
                  className={styles.quoteIcon}
                  size={54}
                  strokeWidth={1.2}
                  aria-hidden="true"
                />

                <p className={styles.feedback}>
                  “{testimonial.feedback}”
                </p>

                <div className={styles.resultBadge}>
                  <TrendingUp size={14} />

                  <span>{testimonial.result}</span>
                </div>

                <div className={styles.cardFooter}>
                  <div>
                    <h3>{testimonial.category}</h3>

                    <span>{testimonial.projectType}</span>
                  </div>

                  <div className={styles.verified}>
                    <BadgeCheck size={17} />

                    <span>Verified Client Type</span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className={styles.trustPanel}
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
            duration: 0.72,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className={styles.trustHeading}>
            <div className={styles.trustIcon}>
              <CheckCircle2 size={25} />
            </div>

            <div>
              <span>Built for Startup Success</span>

              <h3>
                Trusted Support Across Every Stage of Your Business Launch
              </h3>
            </div>
          </div>

          <div className={styles.trustGrid}>
            {trustPoints.map((point) => (
              <div className={styles.trustItem} key={point.label}>
                <strong>{point.value}</strong>

                <span>{point.label}</span>
              </div>
            ))}
          </div>
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
            <span>Start Your Success Story</span>

            <h3>
              Build a Professional Startup With the Right Team and Systems.
            </h3>

            <p>
              Submit your startup requirements and speak with our experts about
              your business launch plan.
            </p>
          </div>

          <button
            type="button"
            className={styles.ctaButton}
            onClick={scrollToRegistration}
          >
            <span>Register Startup Kit</span>

            <ArrowRight size={19} />
          </button>
        </motion.div>

        <p className={styles.note}>
          Replace the sample feedback above with genuine client-approved
          testimonials before publishing the website.
        </p>
      </div>
    </section>
  );
}