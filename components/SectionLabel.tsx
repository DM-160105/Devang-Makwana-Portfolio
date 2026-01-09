"use client";
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface SectionLabelProps {
  text: string;
}

const SectionLabel: React.FC<SectionLabelProps> = ({ text }) => {
  const ismobile = useIsMobile();
  return (
    <div
      className="section-pill"
      style={{ marginTop: ismobile ? "2.5rem" : undefined }}
    >
      <div className="status-dot"></div>
      <span className="section-label-text">{text}</span>
    </div>
  );
};

export default SectionLabel;
