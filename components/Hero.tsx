"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CornerDownRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import ScrollArrow from "./ScrollArrow";
import { useIsMobile } from "@/hooks/use-mobile";
import { useDarkMode } from "@/hooks/use-dark-mode";
import Link from "next/link";
import dynamic from "next/dynamic";
import ShinyText from "./ShinyText";

const HeroGridAnimation = dynamic(() => import("./HeroGridAnimation"), {
  ssr: false,
});

export default function Hero() {
  const images = ["img1.svg", "img2.svg", "img3.svg", "img4.svg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const darkimages = [
    "darkimg1.svg",
    "darkimg2.svg",
    "darkimg3.svg",
    "darkimg4.svg",
  ];
  const [darkcurrentImageIndex, setDarkCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDarkCurrentImageIndex((prev) => (prev + 1) % darkimages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [darkimages.length]);

  const isMobile = useIsMobile();
  const isDarkMode = useDarkMode();

  if (isMobile === undefined) return null;

  return (
    <>
      {isMobile ? (
        <section className="hero-section text-center relative overflow-hidden">
          {/* Layer 1: Animated SVG Background */}
          {isDarkMode ? (
            <div className="overflow-hidden flex items-center justify-center pointer-events-none">
              {/* Added blur directly to content */}
              <div style={{ paddingBottom: "1rem" }} className="blur-[2px]">
                <AnimatePresence>
                  <motion.img
                    key={darkcurrentImageIndex}
                    src={`/assets/darkheroimgs/${darkimages[darkcurrentImageIndex]}`}
                    alt=""
                    className="absolute"
                    transition={{
                      duration: 2,
                    }}
                    style={{
                      opacity: 1,
                      scale: 5,
                      aspectRatio: "1/1",
                    }}
                  />
                </AnimatePresence>
                <HeroGridAnimation scale={5} />
              </div>
              {/* Removed backdrop-blur */}
              <div className="absolute inset-0 bg-white/40" />
              {/* Removed backdrop-blur-sm */}
              <div className="hero-bottom-gradient absolute bottom-0 left-0 right-0  bg-gradient-to-t from-white via-white/80 to-transparent" />
            </div>
          ) : (
            <div className="overflow-hidden flex items-center justify-center pointer-events-none">
              {/* Added blur directly to content */}
              <div style={{ paddingBottom: "1rem" }} className="blur-[2px]">
                <AnimatePresence>
                  <motion.img
                    key={currentImageIndex}
                    src={`/assets/heroimgs/${images[currentImageIndex]}`}
                    alt=""
                    className="absolute"
                    transition={{
                      duration: 2,
                    }}
                    style={{
                      opacity: 1,
                      scale: 5,
                      aspectRatio: "1/1",
                    }}
                  />
                </AnimatePresence>
                <HeroGridAnimation scale={5} />
              </div>
              {/* Removed backdrop-blur */}
              <div className="absolute inset-0 bg-white/40" />
              {/* Removed backdrop-blur-sm */}
              <div className="hero-bottom-gradient absolute bottom-0 left-0 right-0  bg-gradient-to-t from-white via-white/80 to-transparent" />
            </div>
          )}

          {/* Layer 2: Main Content */}

          <div>
            <div
              style={{ paddingLeft: "2rem", paddingRight: "1.5rem" }}
              className="container-for-herosection-mobile relative flex-col "
            >
              <motion.h1
                style={{
                  textAlign: "justify",
                  textJustify: "inter-word",
                }}
                className="hero-bio-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Results-oriented{" "}
                <AvatarWithWave
                  className="header-avatar"
                  style={{
                    display: "inline-flex",
                    verticalAlign: "middle",
                    width: "45px",
                    height: "45px",
                    margin: "0px 0px",
                    borderRadius: "9999px",
                  }}
                  imageSize={45}
                />{" "}
                engineering fresher with a strong tech-first mindset,
                translating academic rigor and hands-on projects into practical,
                scalable software solutions.
              </motion.h1>

              <motion.p
                className="hero-subheadline text-center mx-auto max-w-2xl mb-10 leading-relaxed font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Hi, I am Devang Makwana ! Currently a fresher with a strong
                tech-first mindset.
              </motion.p>
            </div>
          </div>
          <div className="container relative flex-col items-center">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                style={{
                  borderRadius: "20px",
                  padding: "0.5rem 1.2rem",
                  fontWeight: "bold",
                  fontSize: "0.75rem",
                  gap: "0.8rem",
                  margin: "0px 0",
                }}
                className="info-card green-cta center"
              >
                <span className="cta-button-text">
                  Let&apos;s Work Together
                </span>
                <div className="cta-icon-btn">
                  <CornerDownRight size={14} />
                </div>
              </Link>
            </motion.button>
          </div>
          <div
            style={{ paddingTop: "3rem" }}
            className="container-for-herosection"
          >
            {/* Main Content Group */}
            <div className="flex-1 flex flex-col items-center justify-center w-full">
              <div
                style={{ padding: isMobile ? "0 0" : undefined }}
                className="container relative flex flex-col items-center"
              >
                {/* Tech Stack Section */}
                <div className="max-w-[960px] w-full h-10 sm:h-12 md:h-16 items-center relative overflow-hidden mt-0">
                  {/* Static Text on Left */}
                  <div className="z-20 pr-2 sm:pr-4 shrink-0">
                    {isMobile ? (
                      <h5
                        className="tech-stack-title"
                        style={{
                          fontSize: "21px",
                          fontWeight: 600,
                          padding: "0rem 0 1rem",
                        }}
                      >
                        My Tech Stack
                      </h5>
                    ) : (
                      <h4 className="tech-stack-title text-xs sm:text-sm md:text-base font-semibold">
                        My Tech Stack
                      </h4>
                    )}
                  </div>

                  {/* Marquee Container with Mask */}
                  <div className="relative flex-1 overflow-hidden">
                    <div className="animate-marquee flex items-center">
                      {/* Render 4 sets of the tech stack to ensure (Set1+Set2) > Container Width and enable seamless -50% translation loop */}
                      {[...Array(2)].map((_, groupIndex) => (
                        <div
                          key={groupIndex}
                          className="flex shrink-0 items-center "
                        >
                          {[
                            {
                              src: "/assets/myTechStack/chatgpt.png",
                              label: "ChatGPT",
                            },
                            {
                              src: "/assets/myTechStack/cursorAi.png",
                              label: "Cursor AI",
                            },
                            {
                              src: "/assets/myTechStack/linkedIn.png",
                              label: "LinkedIn",
                            },
                            {
                              src: "/assets/myTechStack/vscode.png",
                              label: "VSCode",
                            },
                            {
                              src: "/assets/myTechStack/GitHub.png",
                              label: "GitHub",
                            },
                            {
                              src: "/assets/myTechStack/gemini.png",
                              label: "Gemini",
                            },
                            {
                              src: "/assets/myTechStack/Notion.png",
                              label: "Notion",
                            },
                          ].map((tech, i) => (
                            <div
                              key={`${groupIndex}-${i}`}
                              className="tech-stack-item"
                            >
                              <div className="flex items-center justify-center bg-gray-100 rounded-full">
                                <Image
                                  src={tech.src}
                                  alt={tech.label}
                                  width={35}
                                  height={35}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container" style={{ padding: "1rem 0" }}>
            <ScrollArrow />
          </div>
        </section>
      ) : (
        <section className="hero-section hero-grid-container text-center relative overflow-hidden">
          {/* Layer 1: Animated SVG Background */}
          {isDarkMode ? (
            <div className="hero-bg-layer w-full h-full overflow-hidden flex items-center justify-center pointer-events-none">
              {/* Added blur directly to the content container */}
              <div className="w-full h-full flex items-center justify-center blur-[2px]">
                <AnimatePresence>
                  <motion.img
                    key={darkcurrentImageIndex}
                    src={`/assets/darkheroimgs/${darkimages[darkcurrentImageIndex]}`}
                    alt=""
                    className="absolute"
                    transition={{
                      duration: 2,
                    }}
                    style={{ opacity: 1, scale: 1.6 }}
                  />
                </AnimatePresence>
                <HeroGridAnimation scale={1.6} />
              </div>
              {/* Removed backdrop-blur-[2px] from here */}
              <div className="absolute inset-0 bg-white/40" />
              {/* Removed backdrop-blur-sm from here */}
              <div className="hero-bottom-gradient absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
            </div>
          ) : (
            <div className="hero-bg-layer w-full h-full overflow-hidden flex items-center justify-center pointer-events-none">
              {/* Added blur directly to the content container */}
              <div className="w-full h-full flex items-center justify-center blur-[2px]">
                <AnimatePresence>
                  <motion.img
                    key={currentImageIndex}
                    src={`/assets/heroimgs/${images[currentImageIndex]}`}
                    alt=""
                    className="absolute"
                    transition={{
                      duration: 2,
                    }}
                    style={{ opacity: 1, scale: 1.6 }}
                  />
                </AnimatePresence>
                <HeroGridAnimation scale={1.6} />
              </div>
              {/* Removed backdrop-blur-[2px] from here */}
              <div className="absolute inset-0 bg-white/40" />
              {/* Removed backdrop-blur-sm from here */}
              <div className="hero-bottom-gradient absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
            </div>
          )}

          {/* Layer 2: Main Content */}
          <div className="container-for-herosection">
            <div className="hero-content-layer w-full flex flex-col items-center justify-center">
              <div>
                <div className="container-for-herosection relative flex flex-col items-center">
                  <motion.h1
                    style={{ maxWidth: "2000px" }}
                    className="hero-bio-text text-center mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    {" "}
                    <TextAddition
                      style={{
                        display: "inline-flex",
                        verticalAlign: "center",

                        width: "120px",
                        height: "-4px",
                      }}
                      imageSize={45}
                    />
                    Results-oriented engineering fresher with{" "}
                    <AvatarWithWave
                      className="header-avatar-Text"
                      style={{
                        display: "inline-flex",
                        verticalAlign: "middle",
                        margin: "0 0.5rem",

                        width: "120px",
                        height: "55px",
                        borderRadius: "9999px",
                      }}
                      imageSize={45}
                    />{" "}
                    a strong tech-first mindset, translating academic rigor and
                    hands-{" "}
                    <strong>
                      on projects into practical, scalable software solutions.
                    </strong>
                  </motion.h1>

                  <motion.p
                    className="hero-subheadline text-center mx-auto max-w-2xl mb-10 leading-relaxed font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    <ShinyText
                      text="Hi, I am Devang Makwana !, Currently a fresher with a strong tech-first mindset."
                      speed={2}
                      delay={0}
                      color={isDarkMode ? "#b5b5b5" : "#484444ff"}
                      shineColor={isDarkMode ? "#ffffff" : "#686060ff"}
                      spread={120}
                      direction="left"
                      yoyo={false}
                      pauseOnHover={false}
                    />
                  </motion.p>
                  <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/contact"
                      style={{
                        borderRadius: 9999,
                        padding: "1rem 2rem",
                        fontWeight: "bold",
                        fontSize: "0.887rem",
                        gap: "1rem",
                        margin: "40px 0 0",
                      }}
                      className="info-card green-cta center"
                    >
                      <span className="cta-button-text">
                        Let&apos;s Work Together
                      </span>
                      <div className="cta-icon-btn">
                        <CornerDownRight size={14} />
                      </div>
                    </Link>
                  </motion.button>

                  {/* Main Content Group */}
                  <div>
                    <div
                      style={{ paddingTop: "7rem", paddingBottom: "5rem" }}
                      className="container-for-herosection"
                    >
                      <div className="flex-1 flex flex-col items-center justify-center w-full">
                        <div
                          style={{ padding: isMobile ? "0 0" : undefined }}
                          className="container relative flex flex-col items-center"
                        >
                          {/* Tech Stack Section */}
                          <div className="max-w-[960px] w-full h-10 sm:h-12 md:h-16 flex items-center relative overflow-hidden mt-0">
                            {/* Static Text on Left */}
                            <div className="z-20 pr-2 sm:pr-4 shrink-0">
                              {isMobile ? (
                                <h5
                                  className="tech-stack-title"
                                  style={{
                                    fontSize: "19px",
                                    fontWeight: 600,
                                  }}
                                >
                                  My Tech Stack
                                </h5>
                              ) : (
                                <h2
                                  style={{
                                    fontSize: "2rem",
                                    fontWeight: 900,
                                  }}
                                  className="tech-stack-title text-xs sm:text-sm md:text-base font-semibold"
                                >
                                  My Tech Stack
                                </h2>
                              )}
                            </div>

                            {/* Marquee Container with Mask */}
                            <div
                              style={{
                                maskImage:
                                  "linear-gradient(to right, #0000 0%, #000 10% 90%, #0000 100%)",
                              }}
                              className="relative flex-1 h-full overflow-hidden"
                            >
                              <div className="animate-marquee h-full flex items-center">
                                {/* Render 4 sets of the tech stack to ensure (Set1+Set2) > Container Width and enable seamless -50% translation loop */}
                                {[...Array(4)].map((_, groupIndex) => (
                                  <div
                                    key={groupIndex}
                                    className="flex shrink-0 items-center gap-2 sm:gap-4 md:gap-8 px-1 sm:px-2 md:px-4"
                                  >
                                    {[
                                      {
                                        src: "/assets/myTechStack/chatgpt.png",
                                        label: "ChatGPT",
                                      },
                                      {
                                        src: "/assets/myTechStack/cursorAi.png",
                                        label: "Cursor AI",
                                      },
                                      {
                                        src: "/assets/myTechStack/linkedIn.png",
                                        label: "LinkedIn",
                                      },
                                      {
                                        src: "/assets/myTechStack/vscode.png",
                                        label: "VSCode",
                                      },
                                      {
                                        src: "/assets/myTechStack/GitHub.png",
                                        label: "GitHub",
                                      },
                                      {
                                        src: "/assets/myTechStack/gemini.png",
                                        label: "Gemini",
                                      },
                                      {
                                        src: "/assets/myTechStack/Notion.png",
                                        label: "Notion",
                                      },
                                    ].map((tech, i) => (
                                      <div
                                        key={`${groupIndex}-${i}`}
                                        className="tech-stack-item-desktop flex items-center gap-1.5 sm:gap-2"
                                      >
                                        <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gray-100 rounded-full">
                                          <Image
                                            src={tech.src}
                                            alt={tech.label}
                                            width={55}
                                            height={55}
                                            className="object-contain w-3/5 h-3/5"
                                          />
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <ScrollArrow />
          </div>
        </section>
      )}
    </>
  );
}

function AvatarWithWave({
  className,
  style,
  imageSize,
}: {
  className?: string;
  style?: React.CSSProperties;
  imageSize: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();

  return (
    <span
      className="avatar-interactive-wrapper"
      style={{
        ...style,
        position: "relative",
        overflow: "visible", // Ensure hand isn't clipped
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setTimeout(() => setIsHovered(false), 2000)}
    >
      <span
        className={className}
        style={{
          ...style,
          display: "inline-flex",
          margin: 0,
          position: "relative",
          overflow: "hidden", // Restore clipping for image border radius
        }}
      >
        <Image
          src="/assets/Avatar-Img.png"
          alt="DM"
          width={imageSize}
          height={imageSize}
          style={
            isMobile
              ? {
                  marginLeft: "5px",
                }
              : {
                  scale: 1.2,
                  marginLeft: "5px",
                }
          }
          className="object-cover"
        />
      </span>

      <AnimatePresence>
        {isHovered && (
          <>
            <motion.span
              initial={{ opacity: 0, y: 10, scale: 0, rotate: -20 }}
              animate={{ opacity: 1, y: 0, scale: 1.2, rotate: 0 }}
              exit={{ opacity: 0, y: 10, scale: 0 }}
              className="waving-hand"
              style={
                isMobile
                  ? {
                      position: "absolute",
                      bottom: "120%", // Positions it directly above the element
                      left: "180%",
                      x: "-50%", // Centers it horizontally
                      pointerEvents: "none",
                      fontSize: "24px",
                      zIndex: 50,
                    }
                  : {
                      position: "absolute",
                      bottom: "120%", // Positions it directly above the element
                      left: "90%",
                      x: "-50%", // Centers it horizontally
                      pointerEvents: "none",
                      fontSize: "24px",
                      zIndex: 50,
                    }
              }
            >
              👋
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="Avatar-Hover-Text"
              style={
                isMobile
                  ? {
                      position: "absolute",
                      bottom: "129%", // Positions it directly above the element
                      right: "0%",
                      x: "30%", // Centers it horizontally
                      pointerEvents: "none",
                      fontSize: "20px",
                      zIndex: 50,
                    }
                  : {
                      position: "absolute",
                      bottom: "120%", // Positions it directly above the element
                      right: "0%",
                      x: "-20%", // Centers it horizontally
                      pointerEvents: "none",
                      fontSize: "24px",
                      zIndex: 50,
                    }
              }
            >
              Welcome
            </motion.span>
          </>
        )}
      </AnimatePresence>
    </span>
  );
}

function TextAddition({
  className,
  style,
  imageSize,
}: {
  className?: string;
  style?: React.CSSProperties;
  imageSize: number;
}) {
  const isMobile = useIsMobile();
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = useDarkMode();

  return (
    <span
      className="avatar-interactive-wrapper"
      style={{
        ...style,
        position: "relative",
        overflow: "visible", // Ensure hand isn't clipped
      }}
    >
      <AnimatePresence>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          style={
            isMobile
              ? {
                  position: "absolute",
                  bottom: "129%", // Positions it directly above the element
                  right: "0%",
                  x: "30%", // Centers it horizontally
                  pointerEvents: "none",
                  fontSize: "20px",
                  color: "rgb(0,18,51)",
                  zIndex: 50,
                }
              : {
                  position: "absolute",
                  bottom: "120%", // Positions it directly above the element
                  right: "0%",
                  x: "-20%", // Centers it horizontally
                  pointerEvents: "none",
                  fontSize: "24px",
                  color: "rgb(0,18,51)",
                  zIndex: 50,
                }
          }
        >
          <img
            src={
              isDarkMode
                ? "/assets/TextAdditionDark.svg"
                : "/assets/TextAddition.svg"
            }
          />
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
