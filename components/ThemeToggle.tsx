"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { useDarkMode } from "@/hooks/use-dark-mode";

// -----------------------------------------------------------------------------
// Theme Toggle with Instant Load & View Transitions
// -----------------------------------------------------------------------------

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const ismobile = useIsMobile();

  // Use a default size if isMobile is undefined to ensure hydration match
  // Defaulting to desktop size (26) which scales down to 20 on mobile view update
  const iconSize = ismobile ? 20 : 26;

  const toggleTheme = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";

    // Check if the browser supports View Transitions
    if (
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(newTheme);
      return;
    }

    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    // Center of the circular reveal
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      setTheme(newTheme);
    });

    try {
      await transition.ready;

      // Animate the clip-path of the new view
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 400, // FASTER (was 500)
          easing: "ease-in-out",
          // The pseudo-element to animate (the new snapshot)
          pseudoElement: "::view-transition-new(root)",
        }
      );
    } catch (error) {
      console.error("View transition failed:", error);
    }
  };

  const isDark = useDarkMode();

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center text-foreground relative"
      aria-label="Toggle Dark Mode"
    >
      {/* Sun Icon: Visible in Light, Hidden in Dark */}
      {isDark ? (
        <Sun
          size={iconSize}
          className="text-yellow-400 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0"
        />
      ) : (
        <Moon
          size={iconSize}
          className="text-gray-600 absolute rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100"
        />
      )}
    </motion.button>
  );
}
