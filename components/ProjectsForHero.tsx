"use client";

import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
const SectionLabel = lazy(() => import("./SectionLabel"));
import { ArrowBigDown } from "lucide-react";
import { lazy } from "react";

export default function ProjectsForHero() {
  const ismobile = useIsMobile();
  if (ismobile === undefined) return null;
  return (
    <>
      <div className="flex justify-center w-full mb-8">
        <SectionLabel text="Featured Work" />
      </div>
      <div className="work-header flex items-center justify-between">
        <h2
          className="work-title"
          style={{ fontSize: ismobile ? "25px" : undefined }}
        >
          Project <span style={{ color: "var(--gray-400)" }}>Work</span>
        </h2>
        <div
          style={{ padding: ismobile ? "0.5rem 0.8rem" : undefined }}
          className="btn-explore flex items-center"
        >
          <Link
            href="/work"
            style={{
              fontWeight: ismobile ? 600 : undefined,
              fontSize: ismobile ? "12px" : undefined,
            }}
          >
            Explore Work
          </Link>
          <ArrowBigDown style={{ rotate: "-90deg" }} size={16} />
        </div>
      </div>

      <div className="work-grid">
        {projects.slice(0, 2).map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </>
  );
}
