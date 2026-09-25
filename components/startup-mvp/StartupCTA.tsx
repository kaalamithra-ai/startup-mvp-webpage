"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Rocket,
  Sparkles,
} from "lucide-react";

import styles from "./StartupCTA.module.css";

export default function StartupCTA() {
  const scrollToRegistration = () => {
    document.getElementById("startup-registration")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const openWhatsApp = () => {
    const phone = "918884014055";

    const message =
      "Hello, I'm interested in the Startup Launch Kit. Please contact me.";

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className={styles.section}>
      <div className={styles.blur1}></div>
      <div className={styles.blur2}></div>

      <div className={styles.container}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.badge}>
            <Sparkles size={15} />
            Ready To Launch?
          </div>

          <div className={styles.icon}>
            <Rocket size={42} />
          </div>

          <h2>
            Turn Your Startup Idea
            <span>Into A Successful Business</span>
          </h2>

          <p>
            From branding and websites to AI automation, CRM,
            marketing and business growth—we help you launch
            professionally with one complete startup solution.
          </p>

          <div className={styles.features}>
            <div>
              <CheckCircle2 size={18}/>
              Free Consultation
            </div>

            <div>
              <CheckCircle2 size={18}/>
              Business Roadmap
            </div>

            <div>
              <CheckCircle2 size={18}/>
              Expert Guidance
            </div>

            <div>
              <CheckCircle2 size={18}/>
              AI Powered Growth
            </div>
          </div>

          <div className={styles.buttons}>
            <button
              className={styles.primary}
              onClick={scrollToRegistration}
            >
              Register Startup Kit
              <ArrowRight size={18}/>
            </button>

            <button
              className={styles.secondary}
              onClick={openWhatsApp}
            >
              <MessageCircle size={18}/>
              Chat on WhatsApp
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}