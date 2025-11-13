import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "FitTrack Pro",
      desc: "Developed a responsive web application that enables users to customize diet and fitness schedules with automated progress tracking and dynamic data visualization using React.js and JavaScript.",
      tech: ["React", "HTML","CSS" ,"JavaScript"],
      
    },
    {
      title: "Faculty Scheduling System",
      desc: "Engineered a timetable automation system to optimize faculty allocations and prevent scheduling conflicts, leveraging MySQL for data persistence and PHP for backend logic.",
      tech: ["HTML", "CSS", "MySQL"],
  
    },
    {
      title: "Daily Habit Tracker",
      desc: "Built a productivity-focused web app to help users create, manage, and analyze daily habits with visual progress charts and persistent local storage using React.js and Bootstrap.",
      tech: ["React", "HTML","CSS", "JavaScript"],

    },
    {
      title: "Food Delivery App Prototype",
      desc: "Designed a UI/UX prototype in Figma emphasizing user-friendly navigation, consistent color hierarchy, and responsive interaction flow for food delivery services.",
      tech: ["Figma", "Prototyping", "UI/UX"],
    
    },
  ];

  return (
    <section id="projects" className="gradient-flow position-relative py-5">
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
              color: "#E6EEF8",
            }}
          >
            <h2
              className="fw-bold mb-4"
              style={{
                color: "#00FFF0",
                textShadow: "0 0 10px #00FFF0, 0 0 20px #C77DFF",
              }}
            >
              Featured Projects
            </h2>

            <div className="row g-4">
              {projects.map((project, index) => (
                <div className="col-md-6 col-lg-4" key={index}>
                  <motion.div
                    className="p-4 rounded glass h-100 d-flex flex-column justify-content-between"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      transition: "all 0.3s ease",
                      color: "#E6EEF8",
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 25px rgba(0,255,240,0.3)",
                    }}
                  >
                    {/* Title */}
                    <h5
                      className="fw-bold mb-2"
                      style={{
                        color: "#FFFFFF",
                        textShadow: "0 0 6px #00FFF0",
                      }}
                    >
                      {project.title}
                    </h5>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: "#C7C7C7",
                        lineHeight: "1.5",
                      }}
                    >
                      {project.desc}
                    </p>

                    {/* Tech Tags */}
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          style={{
                            background: "rgba(0,255,240,0.15)",
                            border: "1px solid rgba(0,255,240,0.3)",
                            color: "#00FFF0",
                            fontSize: "0.8rem",
                            padding: "4px 12px",
                            borderRadius: "20px",
                            boxShadow: "0 0 8px rgba(0,255,240,0.2)",
                            letterSpacing: "0.3px",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                   

                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
