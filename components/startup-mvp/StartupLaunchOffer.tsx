"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

import styles from "./StartupLaunchOffer.module.css";

type StartupOffer = {
  number: string;
  title: string;
  description: string;
  image: string;
  accent: "blue" | "pink" | "purple" | "cyan" | "gold";
};

const startupOffers: StartupOffer[] = [
  {
    number: "01",
    title: "Professional Logo Design",
    description:
      "A professional logo identity for a strong, memorable and trustworthy startup brand presence.",
    image: "/images/startup-mvp/icons/logo-design.png",
    accent: "blue",
  },
  {
    number: "02",
    title: "Google Business Profile Setup",
    description:
      "Complete profile setup to help customers discover your business online and through local searches.",
    image: "/images/startup-mvp/icons/google-business.png",
    accent: "pink",
  },
  {
    number: "03",
    title: "Google Maps Listing",
    description:
      "Business location registration and Google Maps visibility setup for easier customer discovery.",
    image: "/images/startup-mvp/icons/google-maps.png",
    accent: "purple",
  },
  {
    number: "04",
    title: "Google Search Visibility Setup",
    description:
      "Basic Google search visibility setup to help your business appear professionally online.",
    image: "/images/startup-mvp/icons/google-search.png",
    accent: "cyan",
  },
  {
    number: "05",
    title: "Social Media Account Setup",
    description:
      "Professional setup for Facebook, Instagram, LinkedIn and WhatsApp Business accounts.",
    image: "/images/startup-mvp/icons/social-media.png",
    accent: "pink",
  },
  {
    number: "06",
    title: "Business Email Configuration",
    description:
      "Professional business email configuration for improved credibility and communication.",
    image: "/images/startup-mvp/icons/business-email.png",
    accent: "blue",
  },
  {
    number: "07",
    title: "Lead Collection Forms",
    description:
      "Conversion-focused forms designed to capture customer details and business enquiries.",
    image: "/images/startup-mvp/icons/lead-form.png",
    accent: "purple",
  },
  {
    number: "08",
    title: "Technical Support",
    description:
      "Startup technical guidance and setup assistance for a smooth and reliable business launch.",
    image: "/images/startup-mvp/icons/technical-support.png",
    accent: "cyan",
  },
  {
    number: "09",
    title: "Sales Funnel Setup",
    description:
      "A structured customer journey that moves prospects from interest to enquiry and conversion.",
    image: "/images/startup-mvp/icons/sales-funnel.png",
    accent: "gold",
  },
  {
    number: "10",
    title: "Email Marketing Setup",
    description:
      "A basic email system for customer follow-ups, promotions and business communication.",
    image: "/images/startup-mvp/icons/email-marketing.png",
    accent: "gold",
  },
];

const packageBenefits = [
  {
    title: "No Hidden",
    subtitle: "Setup Cost",
    icon: ShieldCheck,
  },
  {
    title: "Professional",
    subtitle: "Startup Support",
    icon: Users,
  },
  {
    title: "Quick Business",
    subtitle: "Setup",
    icon: Zap,
  },
  {
    title: "Launch-Focused",
    subtitle: "Execution",
    icon: Rocket,
  },
];

export default function StartupLaunchOffer() {
  const scrollToLeadForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="startup-launch-package"
      className={styles.section}
      aria-labelledby="startup-launch-offer-heading"
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
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className={styles.topBadge}>
            <Sparkles size={15} />
            <span>Exclusive Startup Launch Package</span>
          </div>

          <h2 id="startup-launch-offer-heading">
            Launch Your Dream Startup With
            <span>10 Free Exclusive Services Included</span>
          </h2>

          <p>
            Get essential branding, digital setup, lead-generation and growth
            systems in one powerful Startup and MVP Launch Kit.
          </p>
        </motion.header>

        <div className={styles.mainLayout}>
          <motion.div
            className={styles.giftPanel}
            initial={{ opacity: 0, x: -45, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className={styles.panelGrid} aria-hidden="true" />

            <div className={styles.giftPurpleGlow} aria-hidden="true" />
            <div className={styles.giftPinkGlow} aria-hidden="true" />
            <div className={styles.giftFloorGlow} aria-hidden="true" />

            <motion.div
              className={styles.giftImageWrapper}
              animate={{
                y: [0, -13, 0],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/images/startup-mvp/gift-box.png"
                alt="Premium gift box containing exclusive startup services"
                width={900}
                height={900}
                className={styles.giftImage}
              />
            </motion.div>

            <motion.div
              className={styles.benefitsSeal}
              animate={{
                y: [0, -7, 0],
                rotate: [0, 3, 0],
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span>Startup</span>
              <strong>Benefits</strong>
              <small>Included</small>
            </motion.div>

            <div className={styles.giftLabel}>
              <span className={styles.exclusiveTag}>
                <Sparkles size={13} />
                Exclusive
              </span>

              <strong>FREE</strong>

              <h3>
                Exclusive
                <span>Services</span>
              </h3>

              <p>Included in Startup &amp; MVP Kit</p>
            </div>

            <div className={styles.giftFeatureRow}>
              <div>
                <span className={styles.smallFeatureIcon}>
                  <Rocket size={27} />
                </span>

                <p>
                  Launch
                  <strong>Faster</strong>
                </p>
              </div>

              <div>
                <span className={styles.smallFeatureIcon}>
                  <BadgeCheck size={27} />
                </span>

                <p>
                  Professional
                  <strong>Setup</strong>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.servicesPanel}
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className={styles.panelGrid} aria-hidden="true" />
            <div className={styles.servicesLight} aria-hidden="true" />

            <div className={styles.servicesHeading}>
              <div>
                <span className={styles.smallHeading}>
                  Everything Needed to Start
                </span>

                <h3>
                  Powerful Services to
                  <span>Kickstart Your Startup Journey</span>
                </h3>
              </div>

              <div className={styles.servicesCounter}>
                <strong>10</strong>

                <span>
                  Startup
                  <br />
                  Services
                </span>
              </div>
            </div>

            <div className={styles.servicesGrid}>
              {startupOffers.map((offer, index) => (
                <motion.article
                  className={`${styles.serviceCard} ${
                    styles[`accent${offer.accent}`]
                  }`}
                  key={offer.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    duration: 0.48,
                    delay: index * 0.045,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span className={styles.cardNumber}>{offer.number}</span>

                  <div className={styles.iconStage}>
                    <div className={styles.iconGlow} aria-hidden="true" />
                    <div className={styles.iconPlatform} aria-hidden="true" />

                    <motion.div
                      className={styles.iconImageWrapper}
                      whileHover={{
                        y: -7,
                        rotateY: 8,
                        rotateX: -4,
                        scale: 1.08,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <Image
                        src={offer.image}
                        alt=""
                        width={150}
                        height={150}
                        className={styles.serviceImage}
                      />
                    </motion.div>
                  </div>

                  <h4>{offer.title}</h4>

                  <p>{offer.description}</p>

                  <div className={styles.included}>
                    <span className={styles.includedDot} />
                    <span>Included</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.bottomBar}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className={styles.benefitList}>
            {packageBenefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div className={styles.benefitItem} key={benefit.title}>
                  <span>
                    <Icon size={28} />
                  </span>

                  <p>
                    {benefit.title}
                    <strong>{benefit.subtitle}</strong>
                  </p>
                </div>
              );
            })}
          </div>

          <div className={styles.ctaContent}>
            <span>Ready to Launch Your Business?</span>

            <h3>
              Register now and claim your Startup &amp; MVP Launch Kit benefits.
            </h3>
          </div>

          <button
  type="button"
  className={styles.ctaButton}
  onClick={() =>
    document
      .getElementById("startup-registration")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
  }
>
  Register Startup Kit
  <ArrowRight size={18} />
</button>
        </motion.div>

        <p className={styles.disclaimer}>
          Startup services are available to eligible Startup and MVP Launch Kit
          customers. Scope, availability and eligibility will be confirmed
          during consultation.
        </p>
      </div>
    </section>
  );
}