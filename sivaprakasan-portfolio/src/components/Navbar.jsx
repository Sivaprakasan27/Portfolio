import React from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        background: "rgba(11, 12, 16, 0.65)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 0 10px rgba(0,255,240,0.2)",
      }}
    >
      <div className="container container-xl">
        {/* Brand */}
        <a
          className="navbar-brand fw-bold"
          href="#home"
          style={{
            color: "#00FFF0",
            textShadow: "0 0 8px #00FFF0, 0 0 16px #C77DFF",
            letterSpacing: "0.5px",
            fontSize: "1.2rem",
          }}
        >
          Sivaprakasan K
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBars style={{ color: "#00FFF0", fontSize: "1.3rem" }} />
        </button>

        {/* Menu Links */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <li className="nav-item" key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="nav-link"
                  style={{
                    color: "#C7C7C7",
                    padding: "8px 15px",
                    transition: "0.3s ease",
                    fontWeight: 500,
                    fontSize: "0.95rem",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#00FFF0";
                    e.target.style.textShadow =
                      "0 0 8px #00FFF0, 0 0 15px #C77DFF";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#C7C7C7";
                    e.target.style.textShadow = "none";
                  }}
                >
                  {item}
                </a>
              </li>
            ))}

            {/* Resume Button */}
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <a
                href="/resume.pdf"
                download="Sivaprakasan_K_Resume.pdf"
                className="btn btn-sm btn-neon"
                style={{
                  borderRadius: "8px",
                  color: "#FFF",
                  boxShadow: "0 0 12px rgba(0,255,240,0.25)",
                }}
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
