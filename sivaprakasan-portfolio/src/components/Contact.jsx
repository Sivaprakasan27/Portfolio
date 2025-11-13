// src/components/Contact.jsx
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hgz31f6", // ✅ Your Service ID
        "template_wc6s5cd", // ✅ Your Template ID
        form.current,
        "6KuzBLCBtX65Jk4bb" // ✅ Your Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully! I’ll get back to you soon.");
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          alert("❌ Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="gradient-flow position-relative py-5">
      <div className="gradient-move" aria-hidden="true"></div>

      <div
        className="container container-xl position-relative"
        style={{ zIndex: 3 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div
            className="glass p-4 p-md-5"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 0 20px rgba(0,255,240,0.1)",
              borderRadius: "12px",
            }}
          >
            <div className="row g-4 align-items-center">
              {/* LEFT PANEL — INFO */}
              <div className="col-lg-5 text-center text-lg-start">
                <h2
                  className="fw-bold mb-3"
                  style={{
                    color: "#00FFF0",
                    textShadow: "0 0 10px #00FFF0, 0 0 20px #C77DFF",
                  }}
                >
                  Let’s Connect
                </h2>
                <p
                  style={{
                    color: "#C7C7C7",
                    lineHeight: "1.6",
                    fontSize: "1rem",
                  }}
                >
                  Have a project in mind or want to collaborate?  
                  Let’s bring your ideas to life with elegant, responsive design
                  and smooth development.
                </p>

                <div className="mt-4">
                  <p style={{ color: "#E6EEF8" }}>
                    <FaEnvelope className="me-2 text-info" />
                    sivakk2227@gmail.com
                  </p>
                  <p style={{ color: "#E6EEF8" }}>
                    <FaPhoneAlt className="me-2 text-info" /> +91 8610226046
                  </p>
                </div>

                {/* Social Icons */}
                <div className="d-flex gap-3 mt-4 justify-content-center justify-content-lg-start">
                  <a
                    href="https://github.com/Sivaprakasan27?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none"
                    style={{ color: "#E6EEF8", fontSize: "1.5rem" }}
                  >
                    <FaGithub
                      className="me-2"
                      style={{ transition: "0.3s" }}
                      onMouseEnter={(e) => (e.target.style.color = "#00FFF0")}
                      onMouseLeave={(e) => (e.target.style.color = "#E6EEF8")}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sivaprakasan-kaliyamurthy-2a6292241/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none"
                    style={{ color: "#E6EEF8", fontSize: "1.5rem" }}
                  >
                    <FaLinkedin
                      className="me-2"
                      style={{ transition: "0.3s" }}
                      onMouseEnter={(e) => (e.target.style.color = "#00FFF0")}
                      onMouseLeave={(e) => (e.target.style.color = "#E6EEF8")}
                    />
                  </a>
                </div>
              </div>

              {/* RIGHT PANEL — FORM */}
              <div className="col-lg-7 mt-4 mt-lg-0">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-4">
                    <label className="form-label" style={{ color: "#E6EEF8" }}>
                      Name
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      className="form-control glass"
                      placeholder="Your name"
                      required
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        color: "#E6EEF8",
                      }}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label" style={{ color: "#E6EEF8" }}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      className="form-control glass"
                      placeholder="Your email"
                      required
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        color: "#E6EEF8",
                      }}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label" style={{ color: "#E6EEF8" }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      className="form-control glass"
                      placeholder="Write your message..."
                      required
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        color: "#E6EEF8",
                        resize: "none",
                      }}
                    ></textarea>
                  </div>

                  <div className="text-end mt-3">
                    <motion.button
                      type="submit"
                      className="btn btn-lg btn-neon"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        color: "#FFF",
                        boxShadow: "0 0 15px rgba(0,255,240,0.4)",
                        borderRadius: "8px",
                        fontWeight: "500",
                        letterSpacing: "0.4px",
                      }}
                    >
                      Send Message
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
