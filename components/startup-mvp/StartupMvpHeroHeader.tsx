"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Crown,
  Mail,
  MessageCircle,
  Package,
  Phone,
  Rocket,
  Sparkles,
  X,
} from "lucide-react";

import styles from "./StartupMvpHeroHeader.module.css";

const WHATSAPP_PHONE = "918884014055";
const WHATSAPP_DISPLAY = "+91 88840 14055";
const CONTACT_MESSAGE =
  "Hello, I'm interested in the Startup Launch Kit";

const PHONE_NUMBERS = [
  { label: "+91 97277 0266", tel: "+919727702266" },
  { label: "63618 42299", tel: "6361842299" },
];

const CONTACT_EMAIL = "tech@kaalamithra-ai.com";

// Shared WhatsApp glyph — used in the header, drawer and contact modal.
function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
    </svg>
  );
}

type NavItem = {
  id: string;
  label: string;
  description: string;
  target: string;
  icon: typeof Crown;
  accent: "blue" | "gold" | "green" | "purple";
};

const navItems: NavItem[] = [
  {
    id: "free-services",
    label: "Free Services",
    description: "10 Free Startup Services included",
    target: "startup-launch-package",
    icon: Package,
    accent: "blue",
  },
  {
    id: "paid-modules",
    label: "Paid Modules",
    description: "Growth & AI advanced services",
    target: "startup-growth-services",
    icon: Crown,
    accent: "gold",
  },
  {
    id: "contact",
    label: "Contact",
    description: "Talk to our team",
    target: "startup-registration",
    icon: MessageCircle,
    accent: "green",
  },
  {
    id: "registration",
    label: "Registration",
    description: "Register your startup now",
    target: "startup-registration",
    icon: Rocket,
    accent: "purple",
  },
];

export default function StartupMvpHeroHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Portal target (`document.body`) only exists after hydration.
  useEffect(() => {
    setMounted(true);
  }, []);

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
        CONTACT_MESSAGE
      )}`,
      "_blank"
    );
  };

  // Smooth-scroll to a section and always close the drawer afterwards.
  const handleNavigate = (targetId: string) => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";

    // Wait a frame so the closing drawer doesn't fight the scroll.
    window.requestAnimationFrame(() => {
      const element = document.getElementById(targetId);
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  // "Contact" action: close the drawer, then show the contact modal.
  const openContact = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";

    // Let the drawer's exit animation start before the modal appears.
    window.requestAnimationFrame(() => {
      setIsContactOpen(true);
    });
  };

  const closeContact = () => setIsContactOpen(false);

  const closeMenu = () => setIsMenuOpen(false);

  // Lock background scroll while the drawer or contact modal is open.
  useEffect(() => {
    document.body.style.overflow =
      isMenuOpen || isContactOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen, isContactOpen]);

  // Close on Escape and keep focus inside the open overlay for a11y.
  useEffect(() => {
    if (!isMenuOpen && !isContactOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        setIsContactOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    drawerRef.current?.focus();
    contactRef.current?.focus();

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen, isContactOpen]);


  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Brand logo — top-left */}
        <a
          href="/"
          className={styles.logo}
          aria-label="Kaala Mithra AI Tech Solutions"
        >
          <Image
            src="/images/startup-mvp/logo.png"
            alt="Kaala Mithra AI Tech Solutions"
            width={200}
            height={100}
            className={styles.logoImage}
            priority
          />
        </a>


        {/* Top-right action icons — horizontal row */}
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.sparkleButton}
            onClick={() => handleNavigate("startup-registration")}
            aria-label="Registration"
          >
            <Sparkles size={20} aria-hidden="true" />
          </button>

          <button
            ref={menuButtonRef}
            type="button"
            className={styles.menuButton}
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="startup-hero-menu"
          >
            {isMenuOpen ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <span className={styles.hamburger} aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Navigation drawer / dropdown — rendered via a portal so it is not
          clipped by the hero section's `overflow: hidden`. */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className={styles.drawerWrap}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
            <div
              className={styles.backdrop}
              onClick={closeMenu}
              aria-hidden="true"
            />

            <motion.div
              id="startup-hero-menu"
              ref={drawerRef}
              className={styles.drawer}
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              tabIndex={-1}
              initial={{ opacity: 0, y: -14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.drawerHeader}>
                <span className={styles.drawerTitle}>Menu</span>
                <button
                  type="button"
                  className={styles.drawerClose}
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <X size={18} aria-hidden="true" />
                </button>
              </div>

              <nav className={styles.navList} aria-label="Primary">
                {navItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.id}
                      href={`#${item.target}`}
                      className={`${styles.navLink} ${styles[`accent${item.accent[0].toUpperCase()}${item.accent.slice(1)}`]}`}
                      onClick={(event) => {
                        event.preventDefault();
                        if (item.id === "contact") {
                          openContact();
                        } else {
                          handleNavigate(item.target);
                        }
                      }}
                    >
                      <span className={styles.navIcon} aria-hidden="true">
                        <Icon size={20} strokeWidth={1.9} />
                      </span>

                      <span className={styles.navText}>
                        <span className={styles.navLabel}>{item.label}</span>
                        <span className={styles.navDescription}>
                          {item.description}
                        </span>
                      </span>

                      <ArrowRight
                        className={styles.navArrow}
                        size={18}
                        aria-hidden="true"
                      />
                    </a>
                  );
                })}
              </nav>

              <div className={styles.drawerFooter}>
                <button
                  type="button"
                  className={styles.drawerCta}
                  onClick={() => handleNavigate("startup-registration")}
                >
                  Register Startup Kit
                  <ArrowRight size={17} aria-hidden="true" />
                </button>

                <button
                  type="button"
                  className={styles.drawerWhatsapp}
                  onClick={openWhatsApp}
                >
                  <WhatsAppGlyph className={styles.whatsappIcon} />
                  Chat on WhatsApp
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
          document.body
        )}

      {/* Contact modal — official contact details, also portaled to body. */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {isContactOpen && (
              <motion.div
                className={styles.contactOverlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className={styles.backdrop}
                  onClick={closeContact}
                  aria-hidden="true"
                />

                <motion.div
                  id="startup-contact-modal"
                  ref={contactRef}
                  className={styles.contactModal}
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="startup-contact-title"
                  tabIndex={-1}
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 16, scale: 0.97 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className={styles.contactHeader}>
                    <div>
                      <span className={styles.contactEyebrow}>Get in touch</span>
                      <h2
                        id="startup-contact-title"
                        className={styles.contactTitle}
                      >
                        Kaala Mithra AI Tech Solutions
                      </h2>
                    </div>
                    <button
                      type="button"
                      className={styles.drawerClose}
                      onClick={closeContact}
                      aria-label="Close contact"
                    >
                      <X size={18} aria-hidden="true" />
                    </button>
                  </div>

                  <div className={styles.contactList}>
                    <a
                      className={`${styles.contactRow} ${styles.contactWhatsapp}`}
                      href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                        CONTACT_MESSAGE
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className={styles.contactIcon} aria-hidden="true">
                        <WhatsAppGlyph className={styles.contactGlyph} />
                      </span>
                      <span className={styles.contactInfo}>
                        <span className={styles.contactLabel}>WhatsApp</span>
                        <span className={styles.contactValue}>
                          {WHATSAPP_DISPLAY}
                        </span>
                      </span>
                      <ArrowRight
                        className={styles.contactArrow}
                        size={18}
                        aria-hidden="true"
                      />
                    </a>

                    {PHONE_NUMBERS.map((phone) => (
                      <a
                        key={phone.tel}
                        className={`${styles.contactRow} ${styles.contactPhone}`}
                        href={`tel:${phone.tel}`}
                      >
                        <span className={styles.contactIcon} aria-hidden="true">
                          <Phone size={20} strokeWidth={1.9} />
                        </span>
                        <span className={styles.contactInfo}>
                          <span className={styles.contactLabel}>
                            Call us
                          </span>
                          <span className={styles.contactValue}>
                            {phone.label}
                          </span>
                        </span>
                        <ArrowRight
                          className={styles.contactArrow}
                          size={18}
                          aria-hidden="true"
                        />
                      </a>
                    ))}

                    <a
                      className={`${styles.contactRow} ${styles.contactEmail}`}
                      href={`mailto:${CONTACT_EMAIL}`}
                    >
                      <span className={styles.contactIcon} aria-hidden="true">
                        <Mail size={20} strokeWidth={1.9} />
                      </span>
                      <span className={styles.contactInfo}>
                        <span className={styles.contactLabel}>Email</span>
                        <span className={styles.contactValue}>
                          {CONTACT_EMAIL}
                        </span>
                      </span>
                      <ArrowRight
                        className={styles.contactArrow}
                        size={18}
                        aria-hidden="true"
                      />
                    </a>
                  </div>

                  <button
                    type="button"
                    className={styles.contactCta}
                    onClick={openWhatsApp}
                  >
                    <WhatsAppGlyph className={styles.whatsappIcon} />
                    Start a WhatsApp chat
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}

      {/* Floating WhatsApp widget — fixed to the bottom-right corner so it
          stays reachable while scrolling. Rendered via a portal because the
          header itself uses `backdrop-filter`, which would otherwise trap a
          `position: fixed` child inside the bar instead of the viewport. */}
      {mounted &&
        createPortal(
          <button
            type="button"
            className={styles.whatsappFab}
            onClick={openWhatsApp}
            aria-label="Chat on WhatsApp"
          >
            <WhatsAppGlyph className={styles.whatsappFabIcon} />
            <span className={styles.whatsappFabLabel}>Chat on WhatsApp</span>
          </button>,
          document.body
        )}
    </header>
  );
}


