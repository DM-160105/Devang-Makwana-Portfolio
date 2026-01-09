"use client";

import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import SplitText from "@/components/SplitText";

import { CornerDownRight } from "lucide-react";

const experiences = [
  {
    company: "Goverment Engineering college, Rajkot",
    role: "Gujarat Technological University",
    period: "2022 — Present",
    description:
      "My college journey was a focused growth phase where I converted academic learning into practical execution, building strong fundamentals, clarity, and a builder’s mindset ready for real-world scale.",
    skills: [
      "Python",
      "Database Management",
      "Machine Learning",
      "Data Structure",
    ],
  },
  {
    company: "IBM SkillBuild & CSRBOX",
    role: "Internship (Remote)",
    period: "02/07/2025 - 16/07/2025",
    description:
      "This internship offered valuable insights into Al technologies and their real-world applications, enhancing my technical skills and understanding of the field.",
    skills: [
      "Python",
      "Artificial Intelligence",
      "Machine Learning",
      "LangChain",
      "LangGraph",
      "Automation",
    ],
  },
  {
    company: "H.S.C",
    role: "Shree G.T. Sheth School - Rajkot",
    period: "2021 — 2022",
    description: "Completed with 69.15% in GSEB",
    skills: ["Physics", "Chemistry", "Mathematics"],
  },
  {
    company: "S.S.C",
    role: "Unnati School - Rajkot",
    period: "2019 — 2020",
    description: "Completed with 77.33% in GSEB",
    skills: [],
  },
];

export default function ResumePage() {
  const ismobile = useIsMobile();

  if (ismobile === undefined) return null;

  return (
    <main>
      <section className="about-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="stat-label"
              style={{
                display: "block",
                marginBottom: "1rem",
                fontSize: ismobile ? "14px" : undefined,
              }}
            >
              Career Journey
            </span>
            <h1
              className={ismobile ? undefined : "about-headline"}
              style={{ fontSize: ismobile ? "3rem" : undefined }}
            >
              <SplitText className="about-headline" text="My" />
              <span>
                <SplitText
                  className={
                    ismobile
                      ? "about-headline-mobile about-headline about-headline-gray"
                      : "about-headline about-headline-gray"
                  }
                  text="Experience"
                />
              </span>
            </h1>
            <p
              className="about-text"
              style={{
                maxWidth: "800px",
                fontSize: ismobile ? "12px" : undefined,
              }}
            >
              Over the years, I&apos;ve had the privilege of studying with
              amazing friend and peoples, Growing with them and bulid Strong
              Communication skills with Great insights.
            </p>
          </motion.div>

          {/* Unified Experience List */}
          <div className="experience-list">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.period}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="experience-card"
                style={{
                  borderRadius: ismobile ? "20px" : undefined,
                  position: ismobile ? "relative" : "sticky",
                  top: ismobile
                    ? undefined
                    : `calc(var(--header-height) + ${index * 30}px)`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: "1rem",
                    }}
                  >
                    <div>
                      <h3 className="exp-role">{exp.role}</h3>
                      <p className="exp-company">{exp.company}</p>
                    </div>
                    <div className="exp-period">{exp.period}</div>
                  </div>

                  <p
                    style={{ fontSize: ismobile ? "15px" : undefined }}
                    className="exp-desc"
                  >
                    {exp.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                    }}
                  >
                    {exp.skills.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {ismobile ? (
            <div
              style={{
                marginTop: "4rem",
              }}
            >
              <h4
                className="resume-main"
                style={{
                  textAlign: "center",
                  fontSize: "1.5rem",
                }}
              >
                Want a quick overview of my journey and skills?
              </h4>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <motion.button
                  className="btn-primary-Resume justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.a
                    className="flex items-center"
                    style={{ gap: "1rem" }}
                    href="/api/download-resume"
                  >
                    Download Resume
                    <span className="icon-circle-Resume">
                      <CornerDownRight size={17} />
                    </span>
                  </motion.a>
                </motion.button>
              </div>
            </div>
          ) : (
            <div
              style={{
                marginTop: "4rem",
              }}
            >
              <h4
                className="resume-main"
                style={{
                  textAlign: "center",
                  fontSize: "2.5rem",
                }}
              >
                Want a quick overview of my journey and skills?
              </h4>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <motion.button
                  className="btn-primary-Resume justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.a
                    className="flex items-center"
                    style={{ gap: "1rem" }}
                    href="/api/download-resume"
                  >
                    Download Resume
                    <span className="icon-circle-Resume">
                      <CornerDownRight size={20} />
                    </span>
                  </motion.a>
                </motion.button>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
