"use client";

import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

import styles from "./Footer.module.css";

const serviceLinks = [
  "Brand Identity Setup",
  "Website Development",
  "Software Development",
  "CRM & Automation",
  "Digital Marketing",
  "Lead Generation",
  "AI Automation",
  "E-Commerce Solutions",
];

const quickLinks = [
  { label: "Startup Launch Package", href: "#startup-launch-package" },
  { label: "Why Choose Us", href: "#startup-why-choose" },
  { label: "How It Works", href: "#startup-process" },
  { label: "Client Results", href: "#startup-testimonials" },
  { label: "FAQ", href: "#startup-faq" },
  { label: "Startup Registration", href: "#startup-registration" },
];

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Twitter, label: "Twitter" },
  { icon: Youtube, label: "YouTube" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const section = document.getElementById(href.replace("#", ""));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.topGlowLine} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandColumn}>
            <a
              href="#startup-mvp-hero"
              className={styles.brand}
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#startup-mvp-hero");
              }}
            >
              <Image
                src="/images/startup-mvp/logo.png"
                alt="StartupMVP"
                width={828}
                height={301}
                className={styles.brandLogo}
              />
            </a>

            <p className={styles.tagline}>
              Launch your business faster with branding, technology, marketing,
              software and automation solutions — all in one complete startup &
              MVP launch kit.
            </p>

            <div className={styles.socials}>
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  onClick={(e) => e.preventDefault()}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <h4>Startup Services</h4>
            <ul>
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#startup-launch-package"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo("#startup-launch-package");
                    }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Get In Touch</h4>
            <ul className={styles.contactList}>
              <li>
                <a
                  href="tel:+918884014055"
                  className={styles.contactItem}
                >
                  <Phone size={16} />
                  <span>+91 88840 14055</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@startupmvp.in"
                  className={styles.contactItem}
                >
                  <Mail size={16} />
                  <span>hello@startupmvp.in</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918884014055"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactItem}
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp Us</span>
                </a>
              </li>
              <li className={styles.contactItem}>
                <MapPin size={16} />
                <span>India · Remote Friendly</span>
              </li>
            </ul>

            <button
              type="button"
              className={styles.ctaButton}
              onClick={() => scrollTo("#startup-registration")}
            >
              Register Startup Kit
            </button>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>
            © {new Date().getFullYear()} Startup &amp; MVP Launch Kit. All
            rights reserved.
          </p>

          <p className={styles.legal}>
            Startup services are available to eligible Startup and MVP Launch
            Kit customers.
          </p>
        </div>
      </div>
    </footer>
  );
}
