"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useI18n } from "../lib/i18n";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const { t } = useI18n();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (name.trim().length < 2) errs.name = t("form.nameRequired");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errs.email = t("form.emailRequired");
    if (message.trim().length < 10) errs.message = t("form.messageRequired");
    return errs;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");

    // Simulate form submission (in production, wire to API endpoint)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
    setName("");
    setEmail("");
    setMessage("");
    setTimeout(() => setStatus("idle"), 5000);
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full space-y-5"
      noValidate
      aria-label={t("cta.title")}
    >
      {/* Name */}
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-light-text dark:text-dark-text mb-1.5">
          {t("form.name")}
        </label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: undefined })); }}
          placeholder={t("form.namePlaceholder")}
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className={`w-full px-4 py-3 rounded-xl bg-light-bg dark:bg-dark-bg border ${
            errors.name
              ? "border-red-500 focus:ring-red-500/30"
              : "border-light-border dark:border-dark-border focus:ring-light-accent/30 dark:focus:ring-dark-accent/30"
          } text-light-text dark:text-dark-text placeholder-light-muted/50 dark:placeholder-dark-muted/50 focus:outline-none focus:ring-2 transition-colors`}
        />
        {errors.name && (
          <p id="contact-name-error" role="alert" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
            <AlertCircle size={12} />
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-light-text dark:text-dark-text mb-1.5">
          {t("form.email")}
        </label>
        <input
          id="contact-email"
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })); }}
          placeholder={t("form.emailPlaceholder")}
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className={`w-full px-4 py-3 rounded-xl bg-light-bg dark:bg-dark-bg border ${
            errors.email
              ? "border-red-500 focus:ring-red-500/30"
              : "border-light-border dark:border-dark-border focus:ring-light-accent/30 dark:focus:ring-dark-accent/30"
          } text-light-text dark:text-dark-text placeholder-light-muted/50 dark:placeholder-dark-muted/50 focus:outline-none focus:ring-2 transition-colors`}
        />
        {errors.email && (
          <p id="contact-email-error" role="alert" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
            <AlertCircle size={12} />
            {errors.email}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-light-text dark:text-dark-text mb-1.5">
          {t("form.message")}
        </label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => { setMessage(e.target.value); setErrors((p) => ({ ...p, message: undefined })); }}
          placeholder={t("form.messagePlaceholder")}
          rows={4}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={`w-full px-4 py-3 rounded-xl bg-light-bg dark:bg-dark-bg border ${
            errors.message
              ? "border-red-500 focus:ring-red-500/30"
              : "border-light-border dark:border-dark-border focus:ring-light-accent/30 dark:focus:ring-dark-accent/30"
          } text-light-text dark:text-dark-text placeholder-light-muted/50 dark:placeholder-dark-muted/50 focus:outline-none focus:ring-2 transition-colors resize-none`}
        />
        {errors.message && (
          <p id="contact-message-error" role="alert" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
            <AlertCircle size={12} />
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-light-accent dark:bg-dark-accent text-white font-semibold text-lg hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-lg shadow-light-accent/20 dark:shadow-dark-accent/20 focus:outline-none focus:ring-2 focus:ring-light-accent/50 dark:focus:ring-dark-accent/50"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            {t("form.sending")}
          </>
        ) : (
          <>
            <Send size={18} />
            {t("form.submit")}
          </>
        )}
      </button>

      {/* Status messages */}
      <AnimatePresence>
        {status === "success" && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            role="status"
            className="flex items-center gap-2 text-sm text-green-500 justify-center"
          >
            <CheckCircle size={16} />
            {t("form.success")}
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            role="alert"
            className="flex items-center gap-2 text-sm text-red-500 justify-center"
          >
            <AlertCircle size={16} />
            {t("form.error")}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.form>
  );
}
