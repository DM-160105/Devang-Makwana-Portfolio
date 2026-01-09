"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import dynamic from "next/dynamic";
const ProjectCard = dynamic(() => import("@/components/ProjectCard"));
import SplitText from "@/components/SplitText";
import { useIsMobile } from "@/hooks/use-mobile";

export default function WorkPage() {
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
              Portfolio
            </span>
            <h1 style={{ fontSize: ismobile ? "3rem" : undefined }}>
              <SplitText className="about-headline" text="Project" />
              <span>
                <SplitText
                  className={
                    ismobile
                      ? "about-headline-mobile about-headline about-headline-gray"
                      : "about-headline about-headline-gray"
                  }
                  text="Work"
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
              I specialize in crafting high-end digital experiences that balance
              aesthetic beauty with functional excellence. Here are some of my
              favorite pieces.
            </p>
          </motion.div>

          <div className="work-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
