"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const ismobile = useIsMobile();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 flex items-center justify-center">
        {/* Placeholder to prevent layout shift */}
        <span className="w-5 h-5 bg-gray-200 rounded-full opacity-20" />
      </div>
    );
  }

  const toggleTheme = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // Check if the browser supports View Transitions
    if (
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(theme === "dark" ? "light" : "dark");
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
      setTheme(theme === "dark" ? "light" : "dark");
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
          duration: 500,
          easing: "ease-in-out",
          // The pseudo-element to animate (the new snapshot)
          pseudoElement: "::view-transition-new(root)",
        }
      );
    } catch (error) {
      console.error("View transition failed:", error);
    }
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center text-foreground"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? (
        <Sun size={ismobile ? 20 : 26} className="text-yellow-400" />
      ) : (
        <Moon size={ismobile ? 20 : 26} className="text-gray-600" />
      )}
    </motion.button>
  );
}
