"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Line {
  id: string;
  orientation: "horizontal" | "vertical";
  side: "left" | "right" | "top" | "bottom";
  position: number; // percentage (0-100)
}

interface HeroGridAnimationProps {
  scale: number;
}

export default function HeroGridAnimation({ scale }: HeroGridAnimationProps) {
  const [lines, setLines] = useState<Line[]>([]);

  // Grid approximation: 33 rows, 46 cols
  const ROWS = 33;
  const COLS = 46;

  useEffect(() => {
    const spawnIntersection = () => {
      const now = Date.now();
      const corners = ["TL", "TR", "BL", "BR"];
      const selectedCorner =
        corners[Math.floor(Math.random() * corners.length)];

      let rMin = 0,
        rMax = 0,
        cMin = 0,
        cMax = 0;

      // Define zones for corners (safe padding from edges)
      switch (selectedCorner) {
        case "TL": // Top-Left
          rMin = 2;
          rMax = 10;
          cMin = 2;
          cMax = 12;
          break;
        case "TR": // Top-Right
          rMin = 2;
          rMax = 10;
          cMin = COLS - 14;
          cMax = COLS - 4;
          break;
        case "BL": // Bottom-Left
          rMin = ROWS - 12;
          rMax = ROWS - 4;
          cMin = 2;
          cMax = 12;
          break;
        case "BR": // Bottom-Right
          rMin = ROWS - 12;
          rMax = ROWS - 4;
          cMin = COLS - 14;
          cMax = COLS - 4;
          break;
      }

      // Pick intersection point
      const trackRow = Math.floor(Math.random() * (rMax - rMin + 1)) + rMin;
      const trackCol = Math.floor(Math.random() * (cMax - cMin + 1)) + cMin;

      const posH = (trackRow / ROWS) * 100;
      const posV = (trackCol / COLS) * 100;

      const idBase = `${now}-${Math.random()}`;

      // Create Pair
      const lineH: Line = {
        id: `${idBase}-h`,
        orientation: "horizontal",
        side: Math.random() > 0.5 ? "left" : "right",
        position: posH,
      };

      const lineV: Line = {
        id: `${idBase}-v`,
        orientation: "vertical",
        side: Math.random() > 0.5 ? "top" : "bottom",
        position: posV,
      };

      setLines((prev) => [...prev, lineH, lineV]);

      // Remove lines from state after animation
      setTimeout(() => {
        setLines((prev) =>
          prev.filter((l) => l.id !== lineH.id && l.id !== lineV.id)
        );
      }, 8000);
    };

    const interval = setInterval(spawnIntersection, 4000); // Spawn specific intersections
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        width: 2133,
        height: 1547,
        transform: `scale(${scale})`, // Apply the same scale as the background image
        transformOrigin: "center center",
        left: 0,
        top: 0,
      }}
    >
      <AnimatePresence>
        {lines.map((line) => (
          <GridLine key={line.id} line={line} />
        ))}
      </AnimatePresence>
    </div>
  );
}

function GridLine({ line }: { line: Line }) {
  const isHorizontal = line.orientation === "horizontal";

  const variants = {
    initial: isHorizontal
      ? {
          x: line.side === "left" ? "-100%" : "100%",
          width: "5%", // Small beam
          opacity: 0,
        }
      : {
          y: line.side === "top" ? "-100%" : "100%",
          height: "5%", // Small beam
          opacity: 0,
        },
    animate: isHorizontal
      ? {
          x: line.side === "left" ? "1200%" : "-1200%",
          opacity: [0, 1, 1, 0],
        }
      : {
          y: line.side === "top" ? "1200%" : "-1200%",
          opacity: [0, 1, 1, 0],
        },
  };

  // Adjust style for thin line
  const style: React.CSSProperties = {
    position: "absolute",
    backgroundColor: "var(--foreground)",
    ...(isHorizontal
      ? {
          height: "1px", // Thin line
          top: `${line.position}%`,
          left: line.side === "left" ? "0" : undefined,
          right: line.side === "right" ? "0" : undefined,
        }
      : {
          width: "1px",
          left: `${line.position}%`,
          top: line.side === "top" ? "0" : undefined,
          bottom: line.side === "bottom" ? "0" : undefined,
        }),
  };

  return (
    <motion.div
      style={style}
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 8,
        ease: "easeInOut", // Smooth movement
        times: [0, 0.1, 0.9, 1],
      }}
    />
  );
}
