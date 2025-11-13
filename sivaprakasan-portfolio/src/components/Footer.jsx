// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="text-center py-4 position-relative"
      style={{
        background: "rgba(11, 12, 16, 0.7)",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        color: "#C7C7C7",
        fontSize: "0.95rem",
      }}
    >
      {/* Glowing Divider */}
      <div
        style={{
          height: "2px",
          width: "80%",
          margin: "0 auto 20px",
          background:
            "linear-gradient(90deg, rgba(0,255,240,0.8), rgba(199,125,255,0.8))",
          boxShadow: "0 0 10px rgba(0,255,240,0.5)",
          borderRadius: "2px",
        }}
      ></div>

      {/* Social Icons */}
      <div className="d-flex justify-content-center gap-4 mb-3">
        <a
          href="mailto:sivakk2227@gmail.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#E6EEF8", fontSize: "1.3rem" }}
        >
          <FaEnvelope
            style={{ transition: "0.3s" }}
            onMouseEnter={(e) => (e.target.style.color = "#00FFF0")}
            onMouseLeave={(e) => (e.target.style.color = "#E6EEF8")}
          />
        </a>

        <a
          href="https://github.com/Sivaprakasan27?tab=repositories"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#E6EEF8", fontSize: "1.3rem" }}
        >
          <FaGithub
            style={{ transition: "0.3s" }}
            onMouseEnter={(e) => (e.target.style.color = "#00FFF0")}
            onMouseLeave={(e) => (e.target.style.color = "#E6EEF8")}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/sivaprakasan-kaliyamurthy-2a6292241/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#E6EEF8", fontSize: "1.3rem" }}
        >
          <FaLinkedin
            style={{ transition: "0.3s" }}
            onMouseEnter={(e) => (e.target.style.color = "#00FFF0")}
            onMouseLeave={(e) => (e.target.style.color = "#E6EEF8")}
          />
        </a>
      </div>

      {/* Footer Text */}
      <p style={{ color: "#A8B2C1", marginBottom: 0 }}>
        © {currentYear} <span style={{ color: "#00FFF0" }}>Sivaprakasan K</span> · All Rights Reserved
      </p>
    </footer>
  );
}
