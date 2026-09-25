"use client";

import {
  ChangeEvent,
  FormEvent,
  useState,
} from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Rocket,
  Send,
  Sparkles,
  UserRound,
} from "lucide-react";

import styles from "./StartupRegistration.module.css";

type StartupFormData = {
  fullName: string;
  mobileNumber: string;
  email: string;
  companyName: string;
  startupStage: string;
  industry: string;
  city: string;
  callbackTime: string;
  requirements: string;
  consent: boolean;
};

const initialFormData: StartupFormData = {
  fullName: "",
  mobileNumber: "",
  email: "",
  companyName: "",
  startupStage: "",
  industry: "",
  city: "",
  callbackTime: "",
  requirements: "",
  consent: true,
};

const startupStages = [
  "Idea Stage",
  "Planning Stage",
  "Prototype Stage",
  "MVP Development Stage",
  "Early Startup Stage",
  "Existing Business",
  "Looking to Scale",
];

const industries = [
  "Technology & Software",
  "E-Commerce",
  "Healthcare",
  "Education",
  "Real Estate",
  "Finance",
  "Retail",
  "Food & Hospitality",
  "Manufacturing",
  "Professional Services",
  "Other",
];

const callbackTimes = [
  "As Soon As Possible",
  "Morning — 9 AM to 12 PM",
  "Afternoon — 12 PM to 4 PM",
  "Evening — 4 PM to 7 PM",
  "WhatsApp Message First",
];

export default function StartupRegistration() {
  const [formData, setFormData] =
    useState<StartupFormData>(initialFormData);

  const [errorMessage, setErrorMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    event:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
      | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    setErrorMessage("");
    setSubmitted(false);
  };

  const handleConsentChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setFormData((currentData) => ({
      ...currentData,
      consent: event.target.checked,
    }));

    setErrorMessage("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !formData.fullName.trim() ||
      !formData.mobileNumber.trim() ||
      !formData.email.trim() ||
      !formData.companyName.trim() ||
      !formData.startupStage ||
      !formData.industry ||
      !formData.city.trim() ||
      !formData.callbackTime ||
      !formData.requirements.trim()
    ) {
      setErrorMessage("Please complete all required fields.");
      return;
    }

    if (!formData.consent) {
      setErrorMessage(
        "Please agree to receive updates before submitting.",
      );
      return;
    }

    const mobilePattern = /^[0-9+\-\s()]{8,18}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!mobilePattern.test(formData.mobileNumber)) {
      setErrorMessage("Please enter a valid mobile number.");
      return;
    }

    if (!emailPattern.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    const whatsappMessage = `
New Startup & MVP Kit Registration

Full Name: ${formData.fullName}
Mobile Number: ${formData.mobileNumber}
Email: ${formData.email}
Company Name: ${formData.companyName}
Startup Stage: ${formData.startupStage}
Industry: ${formData.industry}
City: ${formData.city}
Preferred Callback: ${formData.callbackTime}

Business Requirements:
${formData.requirements}
    `.trim();

    const whatsappNumber = "918884014055";

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}` +
      `?text=${encodeURIComponent(whatsappMessage)}`;

    setSubmitted(true);
    setErrorMessage("");

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      id="startup-registration"
      className={styles.section}
      aria-labelledby="startup-registration-heading"
    >
      <div className={styles.backgroundGrid} aria-hidden="true" />
      <div className={styles.glowBlue} aria-hidden="true" />
      <div className={styles.glowPink} aria-hidden="true" />
      <div className={styles.glowPurple} aria-hidden="true" />

      <div className={styles.container}>
        <motion.div
          className={styles.registrationCard}
          initial={{ opacity: 0, y: 42, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className={styles.cardGrid} aria-hidden="true" />
          <div className={styles.cardGlow} aria-hidden="true" />

          <header className={styles.headingWrapper}>
            <div className={styles.headingIcon}>
              <Rocket size={29} />
            </div>

            <div className={styles.headingContent}>
              <div className={styles.badge}>
                <Sparkles size={13} />
                <span>Startup Registration</span>
              </div>

              <h2 id="startup-registration-heading">
                Start Your Startup Journey
                <span>Today</span>
              </h2>

              <p>
                Tell us about your startup. Our experts will review your
                requirements and contact you shortly.
              </p>
            </div>
          </header>

          <form
            className={styles.form}
            onSubmit={handleSubmit}
            noValidate
          >
            <div className={styles.formGrid}>
              <div className={styles.fieldGroup}>
                <label htmlFor="startup-full-name">
                  Full Name
                  <span>*</span>
                </label>

                <div className={styles.inputWrapper}>
                  <UserRound size={17} />

                  <input
                    id="startup-full-name"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                  />
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="startup-mobile-number">
                  Mobile Number
                  <span>*</span>
                </label>

                <div className={styles.inputWrapper}>
                  <Phone size={17} />

                  <input
                    id="startup-mobile-number"
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                    inputMode="tel"
                    required
                  />
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="startup-email">
                  Email
                  <span>*</span>
                </label>

                <div className={styles.inputWrapper}>
                  <Mail size={17} />

                  <input
                    id="startup-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@company.com"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="startup-company-name">
                  Company Name
                  <span>*</span>
                </label>

                <div className={styles.inputWrapper}>
                  <Building2 size={17} />

                  <input
                    id="startup-company-name"
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Enter business name"
                    autoComplete="organization"
                    required
                  />
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="startup-stage">
                  Startup Stage
                  <span>*</span>
                </label>

                <div
                  className={`${styles.inputWrapper} ${styles.selectWrapper}`}
                >
                  <Rocket size={17} />

                  <select
                    id="startup-stage"
                    name="startupStage"
                    value={formData.startupStage}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>
                      Select startup stage
                    </option>

                    {startupStages.map((stage) => (
                      <option value={stage} key={stage}>
                        {stage}
                      </option>
                    ))}
                  </select>

                  <ChevronDown
                    size={15}
                    className={styles.selectArrow}
                  />
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="startup-industry">
                  Industry
                  <span>*</span>
                </label>

                <div
                  className={`${styles.inputWrapper} ${styles.selectWrapper}`}
                >
                  <Building2 size={17} />

                  <select
                    id="startup-industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>
                      Select your industry
                    </option>

                    {industries.map((industry) => (
                      <option value={industry} key={industry}>
                        {industry}
                      </option>
                    ))}
                  </select>

                  <ChevronDown
                    size={15}
                    className={styles.selectArrow}
                  />
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="startup-city">
                  City
                  <span>*</span>
                </label>

                <div className={styles.inputWrapper}>
                  <MapPin size={17} />

                  <input
                    id="startup-city"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Enter your city"
                    autoComplete="address-level2"
                    required
                  />
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="startup-callback">
                  Preferred Callback
                  <span>*</span>
                </label>

                <div
                  className={`${styles.inputWrapper} ${styles.selectWrapper}`}
                >
                  <Clock3 size={17} />

                  <select
                    id="startup-callback"
                    name="callbackTime"
                    value={formData.callbackTime}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>
                      Select callback time
                    </option>

                    {callbackTimes.map((time) => (
                      <option value={time} key={time}>
                        {time}
                      </option>
                    ))}
                  </select>

                  <ChevronDown
                    size={15}
                    className={styles.selectArrow}
                  />
                </div>
              </div>
            </div>

            <div
              className={`${styles.fieldGroup} ${styles.fullWidthField}`}
            >
              <label htmlFor="startup-requirements">
                Business Requirements
                <span>*</span>
              </label>

              <div
                className={`${styles.inputWrapper} ${styles.textareaWrapper}`}
              >
                <MessageSquareText size={17} />

                <textarea
                  id="startup-requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  placeholder="Tell us about your business idea, target audience and launch goals..."
                  rows={5}
                  required
                />
              </div>
            </div>

            <label className={styles.consent}>
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={handleConsentChange}
              />

              <span className={styles.customCheckbox}>
                <Check size={13} />
              </span>

              <span>
                I agree to receive startup consultation, service updates
                and follow-up communication.
              </span>
            </label>

            {errorMessage && (
              <div className={styles.errorMessage} role="alert">
                {errorMessage}
              </div>
            )}

            {submitted && (
              <div className={styles.successMessage} role="status">
                Your registration details are ready. WhatsApp is opening
                so you can send your enquiry.
              </div>
            )}

            <div className={styles.formFooter}>
              <div className={styles.formSecurity}>
                <span className={styles.securityDot} />

                <div>
                  <strong>Your information is secure</strong>

                  <span>
                    We use your details only to contact you about your
                    startup requirements.
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className={styles.submitButton}
              >
                <Send size={18} />

                <span>Register Startup Kit</span>

                <ArrowRight
                  size={18}
                  className={styles.buttonArrow}
                />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}