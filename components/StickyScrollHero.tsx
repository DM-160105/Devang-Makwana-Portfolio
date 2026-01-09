"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface StickyScrollHeroProps {
  className?: string;
  videoSrc?: string;
}

export default function StickyScrollHero({
  className = "",
  videoSrc,
}: Omit<StickyScrollHeroProps, "children">) {
  // Use window scroll instead of container ref
  const { scrollY } = useScroll();

  // Map scroll pixels to animation progress (0 to window.innerHeight)
  // We can assume a standard 100vh distance for the effect to complete
  const inputRange = [0, 800]; // Approx 100vh range for animation

  const smoothScroll = useSpring(scrollY, {
    stiffness: 100,
    damping: 20,
    mass: 1,
  });

  // Scale from 1 down to 0.8 (Shrink)
  const scale = useTransform(smoothScroll, inputRange, [1, 0.2]);

  // RotateX from 0 to 80 degrees (Backward tilt)
  const rotateX = useTransform(smoothScroll, inputRange, ["0deg", "80deg"]);

  // Opacity for lighting effect
  const opacity = useTransform(smoothScroll, inputRange, [1, 0.6]);

  // Border radius increases
  const borderRadius = useTransform(smoothScroll, inputRange, ["0px", "40px"]);

  // Box shadow
  const boxShadow = useTransform(smoothScroll, inputRange, [
    "0px 0px 0px rgba(0,0,0,0)",
    "0px 60px 150px rgba(0,0,0,0.3)",
  ]);

  return (
    <div className={`absolute inset-0 w-full h-full ${className}`}>
      <div
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-0"
        style={{ perspective: "1200px" }}
      >
        <motion.div
          style={{
            scale,
            rotateX,
            opacity,
            borderRadius,
            boxShadow,
            transformOrigin: "bottom center",
            transformStyle: "preserve-3d",
          }}
          className="relative w-full h-full overflow-hidden"
        >
          {videoSrc ? (
            <div className="relative w-full h-full bg-black">
              <video
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          ) : (
            <div className="w-full h-full bg-gray-900" />
          )}
        </motion.div>
      </div>
    </div>
  );
}
