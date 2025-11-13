// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-5 gradient-flow position-relative">
      <div className="gradient-move" aria-hidden="true"></div>
      <div className="container container-xl position-relative" style={{ zIndex: 3 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div
  className="glass p-4 p-md-5"
  style={{
    background: "rgba(255, 255, 255, 0.06)",
    border: "1px solid rgba(255, 255, 255, 0.12)",
    color: "#E6EEF8",
    boxShadow: "0 0 20px rgba(0, 255, 240, 0.1)",
  }}
>
  <h2
    className="fw-bold mb-3"
    style={{
      color: "#00FFF0",
      textShadow: "0 0 10px #00FFF0, 0 0 20px #C77DFF",
    }}
  >
    About Me
  </h2>
  <p className="lead" style={{ color: "#D7E0EA" }}>
    I’m <span style={{ color: "#FFFFFF", fontWeight: 600 }}>Sivaprakasan K</span> — a passionate Web Designer and
    Frontend Developer skilled in building responsive and interactive web applications using React.js, JavaScript, HTML,
    and CSS.
  </p>
  <p style={{ color: "#C7C7C7" }}>
    I love combining design and development to craft interfaces that feel modern, smooth, and user-focused. With
    experience from multiple real-world projects like a Diet & Workout Planner and a Faculty Scheduling App, I focus on
    performance, usability, and clean UI/UX.
  </p>
  <p style={{ color: "#C7C7C7" }}>
    I’ve also explored Machine Learning with a published research paper titled{" "}
    <span style={{ color: "#FFFFFF" }}>
      “Adaptive Intrusion Detection Harnessing ML for Network Security”
    </span>{" "}
    at IGI Global. Currently, I’m seeking opportunities where I can contribute my creativity and technical skills to
    deliver engaging digital experiences.
  </p>
  <div className="mt-4">
    <a href="#skills" className="btn btn-neon me-2">
      My Skills
    </a>
    <a href="#projects" className="btn btn-outline-light">
      View Projects
    </a>
  </div>
</div>

        </motion.div>
      </div>
    </section>
  );
}
