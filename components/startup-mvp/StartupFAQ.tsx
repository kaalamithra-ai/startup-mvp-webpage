"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Rocket,
  Sparkles,
} from "lucide-react";

import styles from "./StartupFAQ.module.css";

const faqItems = [
  {
    question: "Who can apply for the Startup Launch Kit?",
    answer:
      "Entrepreneurs, startup founders, freelancers, small business owners, agencies and existing businesses planning a new launch can apply for the Startup Launch Kit.",
  },
  {
    question: "Is the startup consultation free?",
    answer:
      "Yes. The initial consultation is free. Our team will understand your business idea, requirements, target audience and launch goals before suggesting the right startup plan.",
  },
  {
    question: "How long does the complete startup setup take?",
    answer:
      "The launch timeline depends on the project scope, required features and content availability. Most startup projects can be completed within approximately 7 to 30 business days.",
  },
  {
    question: "Will I receive the complete Startup Launch Kit services?",
    answer:
      "Eligible Startup Launch Kit clients receive the complete set of included business launch services. The final scope will be confirmed during consultation based on the selected package and project requirements.",
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "No. Our experts manage the branding, digital setup, website, business tools, automation and launch process while keeping you informed throughout the project.",
  },
  {
    question: "Can I add more services later?",
    answer:
      "Yes. You can later add advanced marketing, lead generation, CRM, software development, AI automation, cloud services, e-commerce or other growth solutions.",
  },
  {
    question: "Do you provide support after the startup is launched?",
    answer:
      "Yes. We provide technical guidance, performance support, business growth consultation and assistance with future upgrades depending on your support plan.",
  },
  {
    question: "How do I get started?",
    answer:
      "Complete the Startup Registration Form on this page. Our startup team will review your requirements and contact you to discuss the next steps.",
  },
];

export default function StartupFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex((currentIndex) =>
      currentIndex === index ? null : index,
    );
  };

  const scrollToRegistration = () => {
    document.getElementById("startup-registration")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const openWhatsApp = () => {
    const phoneNumber = "918884014055";

    const message =
      "Hello, I would like to know more about the Startup and MVP Launch Kit.";

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      id="startup-faq"
      className={styles.section}
      aria-labelledby="startup-faq-heading"
    >
      <div className={styles.backgroundGrid} aria-hidden="true" />
      <div className={`${styles.glow} ${styles.glowBlue}`} aria-hidden="true" />
      <div
        className={`${styles.glow} ${styles.glowPurple}`}
        aria-hidden="true"
      />
      <div className={`${styles.glow} ${styles.glowPink}`} aria-hidden="true" />

      <div className={styles.container}>
        <motion.header
          className={styles.headingWrapper}
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className={styles.badge}>
            <Sparkles size={15} />
            <span>Startup Kit Questions</span>
          </div>

          <h2 id="startup-faq-heading">
            Frequently Asked Questions
            <span>Everything You Need to Know</span>
          </h2>

          <p>
            Find clear answers about eligibility, launch timelines, included
            services, technical support and the complete Startup Launch Kit
            process.
          </p>
        </motion.header>

        <div className={styles.mainLayout}>
          <motion.aside
            className={styles.supportPanel}
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className={styles.supportGrid} aria-hidden="true" />
            <div className={styles.supportGlow} aria-hidden="true" />

            <div className={styles.supportIcon}>
              <HelpCircle size={38} />
            </div>

            <span className={styles.supportLabel}>Need More Information?</span>

            <h3>
              Speak Directly With Our
              <span>Startup Experts</span>
            </h3>

            <p>
              Get personalised guidance about your startup idea, required
              services and the right launch plan for your business.
            </p>

            <div className={styles.supportPoints}>
              <div>
                <CheckCircle2 size={16} />
                <span>Free initial consultation</span>
              </div>

              <div>
                <CheckCircle2 size={16} />
                <span>Clear project roadmap</span>
              </div>

              <div>
                <CheckCircle2 size={16} />
                <span>Dedicated startup guidance</span>
              </div>

              <div>
                <CheckCircle2 size={16} />
                <span>Transparent launch process</span>
              </div>
            </div>

            <button
              type="button"
              className={styles.registrationButton}
              onClick={scrollToRegistration}
            >
              <Rocket size={18} />
              <span>Register Startup Kit</span>
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              className={styles.whatsappButton}
              onClick={openWhatsApp}
            >
              <MessageCircle size={18} />
              <span>Ask on WhatsApp</span>
            </button>
          </motion.aside>

          <div className={styles.faqList}>
            {faqItems.map((item, index) => {
              const isOpen = activeIndex === index;

              return (
                <motion.article
                  key={item.question}
                  className={`${styles.faqItem} ${
                    isOpen ? styles.faqItemOpen : ""
                  }`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <button
                    type="button"
                    className={styles.questionButton}
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.questionNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className={styles.questionText}>
                      {item.question}
                    </span>

                    <span
                      className={`${styles.toggleIcon} ${
                        isOpen ? styles.toggleIconOpen : ""
                      }`}
                    >
                      <ChevronDown size={21} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className={styles.answerWrapper}
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <div className={styles.answerContent}>
                          <div className={styles.answerLine} />

                          <p>{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          className={styles.bottomPanel}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className={styles.bottomIcon}>
            <Rocket size={26} />
          </div>

          <div className={styles.bottomContent}>
            <span>Still Have Questions?</span>

            <h3>
              Tell Us About Your Startup and Get a Personalised Launch Plan.
            </h3>
          </div>

          <button
            type="button"
            className={styles.bottomButton}
            onClick={scrollToRegistration}
          >
            <span>Start My Startup Journey</span>
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}