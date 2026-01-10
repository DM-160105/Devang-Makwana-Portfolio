"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";

const words = ["build", "create", "design"];

export default function Footer() {
  const ismobile = useIsMobile();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  if (ismobile === undefined) return null;

  return (
    <footer
      className="footer-dark"
      style={
        ismobile
          ? {
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              paddingTop: "16px",
            }
          : undefined
      }
    >
      <div className="footer-dark-grid">
        {/* Left: Headline */}
        <div>
          <h2
            className="footer-cta-text"
            style={ismobile ? { margin: "0 0" } : undefined}
          >
            Let&apos;s
            <span
              style={
                ismobile ? { marginLeft: "9px", marginBottom: "0" } : undefined
              }
              className="inline-flex relative h-anim overflow-hidden ml-5 align-bottom"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="footer-animated-word"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
            <br />
            incredible work together.
          </h2>
        </div>

        {/* Right: Contact Details */}
        <div
          className="footer-info-col"
          style={ismobile ? { gap: "10px" } : undefined}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div
              style={ismobile ? { marginBottom: "10px" } : undefined}
              className="footer-label"
            >
              Email
            </div>
            <div>
              <a
                style={
                  ismobile
                    ? { fontSize: "clamp(1rem, 1vw, 1.5rem)" }
                    : undefined
                }
                href="mailto:makwanadevang2005@gmail.com"
                className="footer-val hover:text-gray-300 transition-colors"
              >
                makwanadevang2005@gmail.com
              </a>
            </div>
          </div>

          <div className="flex justify-between items-end mt-4">
            <div>
              <div className="footer-label">Social</div>
              <div className="footer-socials">
                {[
                  {
                    name: "X",
                    src: "/assets/SocialIcon/X.png",
                    url: "https://x.com/DevangMakwana01",
                  },
                  {
                    name: "LinkedIn",
                    src: "/assets/SocialIcon/linkedIn.png",
                    url: "https://www.linkedin.com/in/makwana-devang-b13730274/",
                  },

                  {
                    name: "GitHub",
                    src: "/assets/SocialIcon/GitHub.png",
                    url: "https://github.com/DM-160105?tab=repositories",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={
                      ismobile
                        ? {
                            width: "30px",
                            height: "30px",
                            marginTop: "0.1rem",
                          }
                        : undefined
                    }
                    className="relative w-30px h-30px hover:scale-110 transition-transform duration-200 rounded-full p-2"
                  >
                    <Image
                      src={social.src}
                      alt={social.name}
                      fill
                      unoptimized
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        <div
          style={
            ismobile
              ? { fontSize: "0.7rem", paddingTop: "0.5rem" }
              : { paddingTop: "1rem" }
          }
          className="flex justify-between items-center px-4 opacity-50 text-xs text-gray-400 pb-10"
        >
          <span>Presently in Rajkot, India.</span>
          <span>© 2025 - Devang Makwana</span>
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,1)",
            width: "100%",
          }}
        />
      </div>
      {ismobile ? undefined : (
        <h1 className="footer-bottom-text">Get in touch ⤴︎</h1>
      )}
    </footer>
  );
}
