"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ismobile = useIsMobile();
  // Use dynamic tags from project data
  const tags = project.tags || [project.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ height: "100%" }}
    >
      <Link
        href={`/work/${project.id}`}
        className="work-card-clean"
        style={ismobile ? { borderRadius: "1rem" } : undefined}
      >
        <div
          className="work-image-wrapper"
          style={ismobile ? { borderRadius: "0.7rem" } : undefined}
        >
          {project.video ? (
            <video
              src={project.video}
              poster={project.image}
              autoPlay
              muted
              loop
              playsInline
              className="object-cover w-full h-full"
            />
          ) : (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          )}
          <div
            className="work-arrow-btn"
            style={ismobile ? { width: "2.3rem", height: "2.3rem" } : undefined}
          >
            <ArrowUpRight size={20} />
          </div>
        </div>

        <h3 className="project-title-large">{project.title}</h3>

        <p className="project-desc-clean">{project.description}</p>

        <div className="project-tags-row">
          {tags.map((tag, i) => (
            <span key={i} className="project-tag-pill">
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}
