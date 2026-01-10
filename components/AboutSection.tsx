"use client";

import React, { useState, useEffect } from "react";
import { CornerDownRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import dynamic from "next/dynamic";
import SplitText from "./SplitText";
import Image from "next/image";

const SectionLabel = dynamic(() => import("./SectionLabel"));

const images = [
  "/assets/HeroAboutMeImgs/photo.jpeg",
  "/assets/HeroAboutMeImgs/IMG_7751.jpg",
  "/assets/HeroAboutMeImgs/photo2.JPEG",
];

const AboutSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);
  const ismobile = useIsMobile();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (ismobile === undefined) return null;

  return ismobile ? (
    <section className="section-padded">
      <div className="flex flex-col items-center mb-16">
        <SectionLabel text="About Me" />
        <h2
          className="about-head-main-mobile flex"
          style={{ marginBottom: "0", paddingBottom: "0" }}
        >
          <SplitText className="about-head-main-mobile" text="Hello" />

          <span style={{ color: "var(--gray-400)", paddingBottom: 0 }}>
            <SplitText
              className="about-head-main-mobile about-head-main-gray"
              text="!"
            />
          </span>
          <span
            className="waving-hand"
            style={{ paddingLeft: "1rem", paddingBottom: 0 }}
          >
            👋
          </span>
        </h2>

        <h2>
          <SplitText className="about-head-main-mobile-last" text="I'm" />
        </h2>
        <span>
          <SplitText className="about-head-main-mobile-last " text="Devang" />
          <SplitText
            className="about-head-main-mobile-last about-head-main-gray"
            text="Makwana"
          />
        </span>
      </div>

      <div style={{ paddingBottom: "2rem" }}></div>

      <div
        className="about-main-card"
        style={{
          padding: ismobile ? undefined : " 4rem 6rem",
          borderRadius: ismobile ? "1rem" : undefined,
        }}
      >
        {/* Left: 3D Prism Image Carousel */}
        <div
          className=""
          style={{ marginRight: ismobile ? "2.5rem" : "10rem" }}
        >
          <div
            className="coverflow-container"
            style={
              ismobile
                ? {
                    position: "relative",
                    width: "12rem",
                    height: "17rem",
                    flexShrink: 0,
                    perspective: "360px",
                  }
                : undefined
            }
          >
            <div
              className="coverflow-wrapper"
              style={{
                opacity: loadedCount >= images.length ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              {images.map((img, i) => {
                // Calculate robust relative offset in range [-len/2, len/2]
                const length = images.length;
                const rawOffset = (i - activeIndex + length) % length;
                const normalizedOffset =
                  rawOffset > length / 2 ? rawOffset - length : rawOffset;

                return (
                  <motion.div
                    key={i}
                    className="coverflow-item"
                    animate={{
                      rotateY:
                        normalizedOffset === 0
                          ? 0
                          : normalizedOffset > 0
                          ? -45
                          : 45,
                      scale: normalizedOffset === 0 ? 1 : 0.82,
                      x: `${normalizedOffset * 45}%`, // Fully flanking side images
                      z: normalizedOffset === 0 ? 0 : -100,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    style={{
                      // Ensure center item is always on top, others ordered by proximity
                      zIndex: 10 - Math.abs(normalizedOffset),
                    }}
                  >
                    <Image
                      src={img}
                      alt="About Me"
                      fill
                      priority
                      onLoad={() => setLoadedCount((prev) => prev + 1)}
                      className="object-cover rounded-[1rem]"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Info Cards */}
        <div className="about-info-col">
          <div
            className="info-card"
            style={{ padding: ismobile ? "2rem" : undefined }}
          >
            <h3 className="info-title">Devang Makwana</h3>
            <p className="info-subtitle">
              Computer Engineer <strong>From Gujarat.</strong>
            </p>
          </div>

          <div
            className="info-card"
            style={{ padding: ismobile ? "2rem" : undefined }}
          >
            <p className="info-desc" style={{ fontSize: "12px" }}>
              I’m a fresher with a strong tech-first mindset, translating
              academic rigor and hands-on projects into practical, scalable
              software solutions.
            </p>
          </div>

          <Link href="/about" className="info-card green-cta">
            <span className="cta-button-text">More About Me</span>
            <div className="cta-icon-btn">
              <CornerDownRight size={20} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  ) : (
    <section className="section-padded">
      <div className="flex flex-col items-center mb-16">
        <SectionLabel text="About Me" />
        <h2 className="about-head-main" style={{ marginBottom: "0.5rem" }}>
          Hi !
          <span style={{ paddingLeft: "20px" }} className="waving-hand">
            👋
          </span>
        </h2>

        <h2>
          <SplitText className="about-head-main" text="I'm Devang" />
          <span>
            <SplitText
              className="about-head-main about-head-main-gray"
              text="Makwana"
            />
          </span>
        </h2>
      </div>

      <div
        className="about-main-card"
        style={{
          padding: ismobile ? undefined : " 4rem 6rem",
          borderRadius: ismobile ? "1rem" : undefined,
        }}
      >
        {/* Left: 3D Prism Image Carousel */}
        <div className="" style={{ marginRight: ismobile ? 0 : "10rem" }}>
          <div
            className="coverflow-container"
            style={
              ismobile
                ? {
                    position: "relative",
                    width: "12rem",
                    height: "17rem",
                    flexShrink: 0,
                    perspective: "360px",
                  }
                : undefined
            }
          >
            <div
              className="coverflow-wrapper"
              style={{
                opacity: loadedCount >= images.length ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              {images.map((img, i) => {
                // Calculate robust relative offset in range [-len/2, len/2]
                const length = images.length;
                const rawOffset = (i - activeIndex + length) % length;
                const normalizedOffset =
                  rawOffset > length / 2 ? rawOffset - length : rawOffset;

                return (
                  <motion.div
                    key={i}
                    className="coverflow-item"
                    animate={{
                      rotateY:
                        normalizedOffset === 0
                          ? 0
                          : normalizedOffset > 0
                          ? -45
                          : 45,
                      scale: normalizedOffset === 0 ? 1 : 0.82,
                      x: `${normalizedOffset * 45}%`, // Fully flanking side images
                      z: normalizedOffset === 0 ? 0 : -100,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    style={{
                      // Ensure center item is always on top, others ordered by proximity
                      zIndex: 10 - Math.abs(normalizedOffset),
                    }}
                  >
                    <Image
                      src={img}
                      alt="About Me"
                      fill
                      priority
                      onLoad={() => setLoadedCount((prev) => prev + 1)}
                      className="object-cover rounded-[1rem]"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Info Cards */}
        <div className="about-info-col">
          <div
            className="info-card"
            style={{ padding: ismobile ? "2rem" : undefined }}
          >
            <h2 className="info-title">Devang Makwana</h2>
            <p className="info-subtitle">
              Computer Engineer <strong>From Gujarat.</strong>
            </p>
          </div>

          <div
            className="info-card"
            style={{ padding: ismobile ? "2rem" : undefined }}
          >
            <p className="info-desc">
              I’m a fresher with a strong tech-first mindset, translating
              academic rigor and hands-on projects into practical, scalable
              software solutions.
            </p>
          </div>

          <Link href="/about" className="info-card green-cta">
            <span className="cta-button-text">More About Me</span>
            <div className="cta-icon-btn">
              <CornerDownRight size={20} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
