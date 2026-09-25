"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Menu,
  MessageCircle,
  Sparkles,
  X,
} from "lucide-react";

import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Home", href: "#startup-mvp-hero" },
  { label: "Offers", href: "#startup-launch-package" },
  { label: "Why Us", href: "#startup-why-choose" },
  { label: "Results", href: "#startup-testimonials" },
  { label: "FAQ", href: "#startup-faq" },
];

const WHATSAPP_NUMBER = "918884014055";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    const message =
      "Hello, I would like to know more about the Startup and MVP Launch Kit.";
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.container}>
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
            priority
          />
        </a>

        <nav className={styles.desktopNav} aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.whatsappButton}
            onClick={openWhatsApp}
          >
            <MessageCircle size={17} />
            <span>WhatsApp</span>
          </button>

          <button
            type="button"
            className={styles.ctaButton}
            onClick={() => scrollTo("#startup-registration")}
          >
            <Sparkles size={16} />
            <span>Sign Up</span>
          </button>

          <button
            type="button"
            className={styles.menuToggle}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              scrollTo(link.href);
            }}
          >
            {link.label}
          </a>
        ))}

        <button
          type="button"
          className={styles.mobileCta}
          onClick={() => scrollTo("#startup-registration")}
        >
          <Sparkles size={16} />
          Sign Up
        </button>
      </div>
    </header>
  );
}
