"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
const SectionLabel = dynamic(() => import("./SectionLabel"));
import { LayoutTemplate, Palette, Camera, BadgeCheck } from "lucide-react";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";

// Placeholder images for branding marquee
const brandImages = [
  "/assets/techstack/Nature1.jpg",
  "/assets/techstack/Nature2.jpg",
  "/assets/techstack/Nature3.jpg",
  "/assets/techstack/Nature4.jpg",
];

// Data for superpowers marquee
const superpowersList = [
  { name: "Prototyping", icon: <LayoutTemplate size={20} /> },
  { name: "Interaction Design", icon: <BadgeCheck size={20} /> },
  { name: "Responsive UI", icon: <Palette size={20} /> },
  { name: "Performance", icon: <Camera size={20} /> },
  { name: "Scalability", icon: <LayoutTemplate size={20} /> },
  { name: "Smooth Animations", icon: <BadgeCheck size={20} /> },
  { name: "Natural Flow", icon: <LayoutTemplate size={20} /> },
  { name: "Routing & Navigation", icon: <BadgeCheck size={20} /> },
  { name: "Component Architecture", icon: <Palette size={20} /> },
  { name: "Adaptive UI", icon: <Camera size={20} /> },
  { name: "Design thinking", icon: <LayoutTemplate size={20} /> },
];

const SuperpowersSection = () => {
  const [loadedMarquee, setLoadedMarquee] = useState(0);
  const totalMarquee = brandImages.length * 2;
  const ismobile = useIsMobile();
  if (ismobile === undefined) return null;
  return (
    <section className="section-padded">
      <div className="flex flex-col items-start mb-16 lg:mb-24">
        <div style={{ width: "70%" }}>
          <SectionLabel text="The Magic I Create" />
        </div>
        <h2
          className="about-head-main text-left"
          style={{ textAlign: "left", margin: "1rem 0" }}
        >
          My Superpowers
        </h2>
        <div style={{ height: "1rem" }} />
        <p
          style={ismobile ? { fontSize: "14px" } : { fontSize: "1.2rem" }}
          className="text-gray-600 max-w-2xl text-lg lg:text-xl leading-relaxed"
        >
          The technical strengths I use to build fast, reliable, and scalable
          web products.
        </p>
      </div>

      <div className="bento-grid">
        {/* Column 1 */}
        <div className="bento-col">
          {/* UI/UX Design - Large */}
          <div className="super-card">
            <div className="flex-col gap-2">
              <h3 className="super-title center flex gap-4">
                <LayoutTemplate
                  size={32}
                  strokeWidth={1.5}
                  className="card-icon-mb"
                />
                Frontend Development
              </h3>
              <div style={{ height: "1rem" }} />
              <p className="super-desc">
                I build responsive, high-performance interfaces using modern
                frameworks, with a strong focus on accessibility, clean
                architecture, and maintainable code.
              </p>
            </div>
            <div className="laptop-display-area">
              <div className="laptop-img-wrapper">
                <Image
                  src="/assets/SuperpowerImg.png"
                  alt="Frontend Development"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Photography - Small */}
          <div className="super-card">
            <h3 className="super-title center flex gap-4">
              <Camera size={32} strokeWidth={1.5} className="card-icon-mb" />
              Application Logic
            </h3>
            <p className="super-desc">
              I handle the rules, validations, and workflows that make an
              application behave correctly behind the scenes.
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="bento-col">
          {/* Visual Design - Small */}
          <div className="super-card">
            <h3 className="super-title center flex gap-4">
              <Palette size={32} strokeWidth={1.5} className="card-icon-mb" />
              Performance & Optimization
            </h3>
            <p className="super-desc">
              I optimize load times, bundle sizes, and runtime performance to
              deliver fast, efficient experiences across devices and network
              conditions.
            </p>
          </div>

          {/* Branding - Large with Marquee */}
          <div className="super-card">
            <h3 className="super-title center flex gap-4">
              <BadgeCheck
                size={32}
                strokeWidth={1.5}
                className="card-icon-mb"
              />
              Attentive UI
            </h3>
            <p className="super-desc">
              Like a deer alert to its surroundings, I craft interfaces that
              respond quickly to user actions and adapt seamlessly across
              devices, maintaining balance between performance, clarity, and
              smooth interaction even as complexity grows.
            </p>

            <div className="branding-marquee-wrapper">
              {/* 
                  Infinite scroll track:
                  We need to duplicate content to make it seamless loop.
                */}
              <div
                className="branding-track"
                style={{
                  opacity: loadedMarquee >= totalMarquee ? 1 : 0,
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                {[...brandImages, ...brandImages].map((img, i) => (
                  <div
                    style={{ borderRadius: "5px" }}
                    className="branding-item relative"
                    key={i}
                  >
                    <Image
                      src={img}
                      alt={`Branding ${i}`}
                      fill
                      priority
                      onLoad={() => setLoadedMarquee((prev) => prev + 1)}
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 20vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Moving Pill Marquee */}
      <div className="superpowers-marquee-container">
        <div className="superpowers-track">
          {/* Duplicate list 3 times to ensure seamless loop for wide screens */}
          {[...superpowersList, ...superpowersList, ...superpowersList].map(
            (item, index) => (
              <div className="superpower-pill" key={index}>
                <span className="pill-icon">{item.icon}</span>
                <span className="pill-text">{item.name}</span>
              </div>
            )
          )}
        </div>
      </div>
      <div className="superpowers-marquee-container-duplicate">
        <div className="superpowers-track-duplicate">
          {/* Duplicate list 3 times to ensure seamless loop for wide screens */}
          {[...superpowersList, ...superpowersList, ...superpowersList].map(
            (item, index) => (
              <div className="superpower-pill" key={index}>
                <span className="pill-icon">{item.icon}</span>
                <span className="pill-text">{item.name}</span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default SuperpowersSection;
