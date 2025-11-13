// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiFigma, SiJavascript } from "react-icons/si";

export default function Hero() {
  return (
    <header
      id="home"
      className="gradient-flow"
      style={{
        minHeight: "100vh",
        position: "relative",
        color: "#E6EEF8",
      }}
    >
      {/* Background gradient animation */}
      <div className="gradient-move" aria-hidden="true"></div>

      {/* Hero content */}
      <div
        className="container container-xl d-flex align-items-center"
        style={{ minHeight: "100vh", position: "relative", zIndex: 3 }}
      >
        <div className="row w-100 align-items-center">
          {/* Left: Text */}
          <div className="col-lg-6 text-start">
            <motion.h1
              className="h1-responsive fw-bold"
              style={{
                color: "#00FFF0",
                textShadow: "0 0 12px #00FFF0, 0 0 24px #C77DFF",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
            >
              Hi, I’m <span style={{ color: "#FFFFFF" }}>Sivaprakasan</span> 👋
            </motion.h1>

            <motion.p
              className="lead mt-3"
              style={{
                color: "#C7C7C7",
                fontSize: "1.1rem",
                maxWidth: "540px",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.35 }}
            >
              I’m a Creative Web Designer & Frontend Developer passionate about crafting smooth,
              responsive, and visually engaging web experiences using React.js, JavaScript, and Figma.
            </motion.p>

            <motion.div
              className="mt-4 d-flex gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="#projects"
                className="btn btn-lg btn-neon"
                style={{
                  boxShadow: "0 0 20px rgba(0,255,240,0.3)",
                }}
              >
                View My Work
              </a>
              <a
                href="/resume.pdf"
                className="btn btn-lg btn-outline-light"
                style={{
                  border: "1px solid rgba(255,255,255,0.4)",
                  color: "#FFF",
                }}
              >
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Right: Glowing Card */}
          <div className="col-lg-6 d-none d-lg-flex justify-content-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.6 }}
            >
              <div
                className="glass p-4"
                style={{
                  width: 360,
                  height: 360,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  position: "relative",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#E6EEF8",
                  boxShadow: "0 0 20px rgba(0,255,240,0.15)",
                }}
              >
                <div style={{ fontSize: 18, color: "#9fb2c9" }}>Profile</div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 20,
                    marginTop: 8,
                    color: "#FFFFFF",
                    textShadow: "0 0 8px #00FFF0",
                  }}
                >
                  Web Designer & Frontend Dev
                </div>
                <div
                  style={{
                    marginTop: 12,
                    color: "#9fb2c9",
                    textAlign: "center",
                  }}
                >
                  Figma • React • JavaScript
                </div>

                {/* Floating glowing icons */}
                <div style={{ position: "absolute", right: -24, top: 24 }}>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    style={{ fontSize: 28, color: "#00FFF0", filter: "drop-shadow(0 0 10px #00FFF0)" }}
                  >
                    <FaReact />
                  </motion.div>
                </div>

                <div style={{ position: "absolute", left: -24, bottom: 24 }}>
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 3.2 }}
                    style={{ fontSize: 24, color: "#C77DFF", filter: "drop-shadow(0 0 10px #C77DFF)" }}
                  >
                    <SiFigma />
                  </motion.div>
                </div>

                <div style={{ position: "absolute", right: -10, bottom: 24 }}>
                  <motion.div
                    animate={{ rotate: [0, 12, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    style={{ fontSize: 24, color: "#FF00C8", filter: "drop-shadow(0 0 10px #FF00C8)" }}
                  >
                    <SiJavascript />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}
