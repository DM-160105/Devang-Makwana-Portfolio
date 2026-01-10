"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";
import TechStackMarquee from "@/components/TechStackMarquee";
import SplitText from "@/components/SplitText";

export default function AboutPage() {
  const ismobile = useIsMobile();
  if (ismobile === undefined) return null;
  return ismobile ? (
    <main>
      <section className="about-section">
        <div className="container">
          <div
            className="footer-grid"
            style={{ alignItems: "center", marginBottom: 0 }}
          >
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span
                className="stat-label"
                style={{
                  display: "block",
                  marginBottom: "1.5rem",
                  fontSize: "14px",
                }}
              >
                About Me
              </span>
              <span>
                <h1>
                  <SplitText className="about-me-head" text="Hi" />
                  <SplitText
                    className="about-me-head about-me-head-gray"
                    text="!"
                  />
                  <SplitText
                    className="about-me-head waving-hand about-me-head-gray"
                    text="👋"
                  />{" "}
                  <SplitText className="about-me-head " text="Behalf" />
                  <SplitText
                    className="about-me-head about-me-head-gray"
                    text="of"
                  />
                </h1>
              </span>

              <span className="flex">
                <h1>
                  <SplitText className="about-me-head" text="Devang" />
                  <SplitText
                    className="about-me-head about-me-head-gray"
                    text="Makwana"
                  />
                </h1>
              </span>

              <h1 className="about-headline"></h1>

              {/* Right Image Placeholder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="about-image-container-mobile"
              >
                <div className="relative w-full rounded-2xl overflow-hidden group">
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      marginLeft: "2rem",
                      marginTop: "1.3rem",
                      scale: 1.1,
                    }}
                    width={100}
                    height={100}
                    src="/assets/image.png"
                    alt="Devang Makwana"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                    unoptimized
                  />
                </div>
                <div className="about-marquee-container-mobile">
                  <TechStackMarquee />
                </div>
                <div className="about-marquee-container-mobile-svg-1">
                  <svg path="/assets/techstack/white.svg"></svg>
                </div>
                <div className="about-marquee-container-mobile-svg-2">
                  <svg path="/assets/techstack/white.svg"></svg>
                </div>
              </motion.div>
              <div style={{ height: "2rem" }} />

              <h1 className="about-headline">
                Designing with{" "}
                <span style={{ color: "var(--gray-400)" }}>Purpose</span> &amp;
                Passion.
              </h1>
              <div className="about-text">
                <p>
                  A Passionate Web Developer with hands-on exposure to MERN
                  stack development, building modern web applications. Focused
                  on JavaScript fundamentals, clean coding practices,
                  problem-solving mindset, and continuous learning. Seeking
                  entry-level opportunities to contribute to real-world
                  projects.
                </p>
                <div style={{ height: "1rem" }} />
                <p>
                  My approach is rooted in decoding human behavior to create
                  digital experiences that aren&apos;t just beautiful, but
                  deeply intuitive and impactful.
                </p>
              </div>

              <div
                className="stat-grid"
                style={{
                  paddingBottom: "3rem",
                }}
              >
                <div>
                  <h4
                    className="stat-number "
                    style={{ fontSize: "1rem", lineHeight: "2rem" }}
                  >
                    <span style={{ paddingRight: "1rem" }}>➤</span> Always
                    Learning New Concepts
                  </h4>
                </div>
                <div>
                  <h4
                    className="stat-number"
                    style={{
                      fontSize: "1rem",
                      color: "var(--gray-400)",
                      lineHeight: "1rem",
                    }}
                  >
                    <span style={{ paddingRight: "1rem" }}>➤</span> Exploring
                    New Tech
                  </h4>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  ) : (
    <main>
      <section className="about-section">
        <div className="container">
          <div
            className="footer-grid aboutMe-card-desktop"
            style={{ alignItems: "center", marginBottom: 0 }}
          >
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span
                className="stat-label"
                style={{ display: "block", marginBottom: "1.5rem" }}
              >
                About Me
              </span>
              <div style={{ marginBottom: "1rem" }}>
                <h2 style={{ marginBottom: 0 }}>
                  <SplitText className="about-me-head-desktop" text="Hi" />
                  <SplitText
                    className="about-me-head-desktop about-me-head-desktop-gray"
                    text="!"
                  />
                  <SplitText
                    className="about-me-head-desktop waving-hand about-me-head-desktop-gray"
                    text="👋"
                  />{" "}
                  <SplitText className="about-me-head-desktop " text="Behalf" />
                  <SplitText
                    className="about-me-head-desktop about-me-head-desktop-gray"
                    text="of"
                  />
                  <SplitText className="about-me-head-desktop" text="Devang" />
                  <SplitText
                    className="about-me-head-desktop about-me-head-desktop-gray"
                    text="Makwana"
                  />
                </h2>
              </div>

              <div className="about-text">
                <p>
                  A Passionate Web Developer with hands-on exposure to MERN
                  stack development, building modern web applications. Focused
                  on JavaScript fundamentals, clean coding practices,
                  problem-solving mindset, and continuous learning. Seeking
                  entry-level opportunities to contribute to real-world
                  projects.
                </p>
                <div style={{ height: "1rem" }} />
                <p>
                  My approach is rooted in decoding human behavior to create
                  digital experiences that aren&apos;t just beautiful, but
                  deeply intuitive and impactful.
                </p>
              </div>

              <div
                className="stat-grid"
                style={{ borderBottomColor: "transparent" }}
              >
                <div>
                  <h4 className="stat-number">
                    <span style={{ paddingRight: "1rem" }}>➤</span>Always
                    Learning New Concepts
                  </h4>
                </div>
                <div>
                  <h4
                    className="stat-number"
                    style={{ color: "var(--gray-400)" }}
                  >
                    <span style={{ paddingRight: "1rem" }}>➤</span>
                    Exploaring New Tech
                  </h4>
                </div>
              </div>
            </motion.div>

            {/* Right Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="about-image-container"
              style={{
                border: "1px solid #9b9b9bff",
              }}
            >
              <div
                className="relative w-full rounded-2xl overflow-hidden group"
                style={{
                  height: "100%",
                  minHeight: "100px",
                  width: "100%",
                }}
              >
                <Image
                  style={{
                    scale: 1.6,
                    padding: "5.7rem 0rem 0rem 6rem",
                    margin: "4.5rem 0rem 0rem 0rem",
                  }}
                  src="/assets/image.png"
                  alt="Devang Makwana"
                  fill
                  priority
                  unoptimized
                />
              </div>
              <div className="about-marquee-container">
                <TechStackMarquee />
              </div>
              <div className="about-marquee-container-svg-1">
                <svg path="/assets/techstack/white.svg"></svg>
              </div>
              <div className="about-marquee-container-svg-2">
                <svg path="/assets/techstack/white.svg"></svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
