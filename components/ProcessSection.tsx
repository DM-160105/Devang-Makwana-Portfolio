"use client";

import React from "react";
import { MousePointer2, List, PenTool, Rocket, Smile } from "lucide-react";
import SectionLabel from "./SectionLabel";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  {
    id: 1,
    title: "Align Before Execution",
    desc: "Clear process. Predictable outcomes. No guesswork.",
    icon: <MousePointer2 size={32} strokeWidth={1.5} />,
  },
  {
    id: 2,
    title: "Validate Fast, Iterate Smart",
    desc: "I move quickly with low-fidelity solutions to test assumptions early. Feedback loops stay tight so effort compounds instead of drifting.",
    icon: <List size={32} strokeWidth={1.5} />,
  },
  {
    id: 3,
    title: "Human-Centric, Dev-Ready",
    desc: "Every decision balances user experience and technical feasibility. Designs are structured to translate cleanly into scalable, maintainable code.",
    icon: <PenTool size={32} strokeWidth={1.5} />,
  },
  {
    id: 4,
    title: "Ship, Measure, Optimize",
    desc: "We launch with intent, track real usage, and refine continuously. The product evolves based on data—not opinions.",
    icon: <Rocket size={32} strokeWidth={1.5} />,
  },
];

const ProcessSection = () => {
  const isMobile = useIsMobile();

  if (isMobile === undefined) return null;

  return (
    <section className="process-section">
      <div className="flex flex-col items-center">
        <SectionLabel text="How it works" />
        <h2
          className="process-headline"
          style={{ marginBottom: isMobile ? "2rem" : undefined }}
        >
          How I Bulid With Purpose
        </h2>
        <p
          className="text-center  max-w-2xl mb-16 font-medium"
          style={{ paddingBottom: "2rem" }}
        >
          Smart, scrappy, and always human-first.
        </p>
      </div>

      <div className="process-grid">
        {steps.map((step) => (
          <div key={step.id} className={`process-card step-${step.id}`}>
            <div className="process-card-header">
              <div className="process-icon">{step.icon}</div>
              <span className="process-number">{step.id}</span>
              <h3 className="process-title">{step.title}</h3>
            </div>
            <div className="process-card-body">
              <p className="process-desc">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Banner */}
      <div
        className="process-cta-banner"
        style={isMobile ? { padding: "0.5rem 0.5rem 0.5rem 1rem" } : undefined}
      >
        <div className="cta-content">
          <Smile
            size={isMobile ? 40 : 32}
            strokeWidth={1.5}
            className="text-gray-800"
          />
          <div>
            <div
              className="cta-text"
              style={isMobile ? { fontSize: "12px" } : undefined}
            >
              You don’t hand off work. We move together.
            </div>
            <div
              className="cta-subtext"
              style={isMobile ? { fontSize: "10px" } : undefined}
            >
              Present at every step to keep things moving in the right
              direction.
            </div>
          </div>
        </div>

        <Link
          href="/contact"
          className="btn-cta-green"
          style={
            isMobile
              ? { fontSize: "12px", padding: "0.5rem 1rem 0.5rem 1rem" }
              : undefined
          }
        >
          <span>Connect</span>
        </Link>
      </div>
    </section>
  );
};

export default ProcessSection;
