// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiMysql, SiBootstrap, SiFigma, SiCanva } from "react-icons/si";

export default function Skills() {
  const designSkills = [
    { name: "Figma", icon: <SiFigma color="#C77DFF" /> },
    { name: "Canva", icon: <SiCanva color="#00FFF0" /> },
  ];

  const devSkills = [
    { name: "React.js", icon: <FaReact color="#00FFF0" /> },
    { name: "JavaScript", icon: <SiJavascript color="#FFD600" /> },
    { name: "Bootstrap", icon: <SiBootstrap color="#C77DFF" /> },
    { name: "HTML", icon: <FaHtml5 color="#FF4B00" /> },
    { name: "CSS", icon: <FaCss3Alt color="#0096FF" /> },
    { name: "MySQL", icon: <SiMysql color="#00FFF0" /> },
    { name: "Git / GitHub", icon: <FaGitAlt color="#F1502F" /> },
  ];

  return (
    <section id="skills" className="gradient-flow position-relative py-5">
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
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#E6EEF8",
              boxShadow: "0 0 20px rgba(0,255,240,0.1)",
            }}
          >
            <h2
              className="fw-bold mb-4"
              style={{
                color: "#00FFF0",
                textShadow: "0 0 10px #00FFF0, 0 0 20px #C77DFF",
              }}
            >
              My Skills
            </h2>

            {/* Design Tools */}
            <div className="mb-5">
              <h4
                style={{
                  color: "#FFFFFF",
                  textShadow: "0 0 8px #C77DFF",
                  marginBottom: "1.5rem",
                }}
              >
                🎨 Design Tools
              </h4>
              <div className="row g-3">
                {designSkills.map((skill, index) => (
                  <div className="col-6 col-md-4" key={index}>
                    <motion.div
                      className="p-3 text-center rounded glass"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "#FFF",
                      }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 15px rgba(199,125,255,0.5)",
                      }}
                    >
                      <div style={{ fontSize: "2rem" }}>{skill.icon}</div>
                      <div style={{ fontSize: "0.95rem", marginTop: "8px" }}>
                        {skill.name}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Development Skills */}
            <div>
              <h4
                style={{
                  color: "#FFFFFF",
                  textShadow: "0 0 8px #00FFF0",
                  marginBottom: "1.5rem",
                }}
              >
                💻 Development Skills
              </h4>
              <div className="row g-3">
                {devSkills.map((skill, index) => (
                  <div className="col-6 col-md-4" key={index}>
                    <motion.div
                      className="p-3 text-center rounded glass"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "#FFF",
                      }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 15px rgba(0,255,240,0.4)",
                      }}
                    >
                      <div style={{ fontSize: "2rem" }}>{skill.icon}</div>
                      <div style={{ fontSize: "0.95rem", marginTop: "8px" }}>
                        {skill.name}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
