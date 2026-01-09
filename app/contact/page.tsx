"use client";

import { motion } from "framer-motion";
import { Redo2 } from "lucide-react";
import { useState } from "react";
import { sendEmail } from "../actions";
import { useIsMobile } from "@/hooks/use-mobile";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">(
    "idle"
  );
  const isMobile = useIsMobile();

  if (isMobile === undefined) return null;

  return (
    <>
      {isMobile ? (
        <main>
          <section className="contact-section" style={{ paddingBottom: "0" }}>
            <div className="container">
              <div className="footer-grid" style={{ marginBottom: 0 }}>
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span
                    className="stat-label"
                    style={{ display: "block", marginBottom: "1.5rem" }}
                  >
                    Contact Me
                  </span>
                  <h1 style={{ fontSize: "3rem" }} className="contact-headline">
                    Let&apos;s build something{" "}
                    <span
                      style={{ color: "var(--gray-400)", fontSize: "3rem" }}
                    >
                      extraordinary
                    </span>{" "}
                    together.
                  </h1>
                  <p
                    className="about-text flex"
                    style={{ fontSize: "0.8rem", gap: "0.5rem" }}
                  >
                    <Redo2 style={{ transform: "scaleY(-1)" }} size={19} />
                    I&apos;m always open to new connections.
                  </p>

                  <div style={{ marginTop: "3rem", marginLeft: "0" }}>
                    <a
                      href="mailto:makwanadevang2005@gmail.com"
                      className="contact-info-item"
                    >
                      <div
                        style={{
                          fontSize: "1rem",
                          width: "2rem",
                          height: "2rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        className="contact-icon"
                      >
                        <img
                          src="/assets/gmail.svg"
                          alt="Gmail"
                          style={{ width: "6rem", height: "6rem" }}
                        />
                      </div>
                      <div>
                        <p className="stat-label" style={{ fontSize: "13px" }}>
                          Email
                        </p>
                        <p style={{ fontWeight: 600, paddingTop: "0.5rem" }}>
                          makwanadevang2005@gmail.com
                        </p>
                      </div>
                    </a>
                  </div>
                </motion.div>
              </div>
              {/* Right Side: Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <form
                  action={async (formData) => {
                    setFormState("sending");
                    const result = await sendEmail(formData);
                    if (result.success) {
                      setFormState("sent");
                      // Reset form logic would be better with ref or useActionState in React 19 but keeping it simple for now
                      setTimeout(() => setFormState("idle"), 3000);
                      // Standard way to reset form in uncontrolled inputs:
                      const form = document.querySelector("form");
                      if (form) form.reset();
                    } else {
                      alert(result.error);
                      setFormState("idle");
                    }
                  }}
                  className="contact-card-mobile"
                  style={{
                    borderRadius: "1rem",
                  }}
                >
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="form-input"
                      style={{
                        fontSize: "12px",
                        paddingLeft: "1.5rem",
                      }}
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="form-input"
                      style={{
                        fontSize: "12px",
                        paddingLeft: "1.5rem",
                      }}
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Message</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="form-textarea"
                      style={{
                        fontSize: "12px",
                        paddingLeft: "1.5rem",
                      }}
                      placeholder="Tell me about your project"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={formState !== "idle"}
                    className="btn-primary-contact"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      fontSize: "1.125rem",
                      fontWeight: 550,
                      padding: "1rem",
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {formState === "idle"
                      ? "Send Message"
                      : formState === "sending"
                      ? "Sending..."
                      : "Message Sent!"}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </section>
        </main>
      ) : (
        <main>
          <section className="contact-section">
            <div className="container">
              <div className="footer-grid" style={{ marginBottom: 0 }}>
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span
                    className="stat-label"
                    style={{ display: "block", marginBottom: "1.5rem" }}
                  >
                    Contact Me
                  </span>
                  <h1 className="contact-headline">
                    Let&apos;s build something{" "}
                    <span style={{ color: "var(--gray-400)" }}>
                      extraordinary
                    </span>{" "}
                    together.
                  </h1>
                  <p className="about-text flex" style={{ gap: "0.5rem" }}>
                    <Redo2
                      style={{ transform: "scaleY(-1)" }}
                      size={isMobile ? 20 : 30}
                    />
                    I&apos;m always open to new connections.
                  </p>

                  <div style={{ marginTop: "3rem" }}>
                    <a
                      href="mailto:makwanadevang2005@gmail.com"
                      className="contact-info-item"
                    >
                      <div className="contact-icon">
                        <motion.img src={`/assets/gmail.svg`} alt="Gmail" />
                      </div>
                      <div>
                        <p className="stat-label">Email</p>
                        <p style={{ fontWeight: 600, paddingTop: "0.5rem" }}>
                          makwanadevang2005@gmail.com
                        </p>
                      </div>
                    </a>
                  </div>
                </motion.div>

                {/* Right Side: Form */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <form
                    action={async (formData) => {
                      setFormState("sending");
                      const result = await sendEmail(formData);
                      if (result.success) {
                        setFormState("sent");
                        // Reset form logic would be better with ref or useActionState in React 19 but keeping it simple for now
                        setTimeout(() => setFormState("idle"), 3000);
                        // Standard way to reset form in uncontrolled inputs:
                        const form = document.querySelector("form");
                        if (form) form.reset();
                      } else {
                        alert(result.error);
                        setFormState("idle");
                      }
                    }}
                    className="contact-card"
                  >
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="form-input"
                        style={{ paddingLeft: "1.5rem" }}
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="form-input"
                        style={{ paddingLeft: "1.5rem" }}
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Your Message</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        className="form-textarea"
                        style={{ paddingLeft: "1.5rem" }}
                        placeholder="Tell me about your project"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={formState !== "idle"}
                      className="btn-primary"
                      style={{
                        width: "100%",
                        justifyContent: "center",
                        fontSize: "1.125rem",
                        fontWeight: 550,
                        padding: "1rem",
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {formState === "idle"
                        ? "Send Message"
                        : formState === "sending"
                        ? "Sending..."
                        : "Message Sent!"}
                    </motion.button>
                  </form>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
}
