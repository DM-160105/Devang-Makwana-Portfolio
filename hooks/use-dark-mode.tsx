"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useDarkMode() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return false; // or undefined, depending on preference. defaulting to false (light) to match server if needed, or handle loading state
  }

  return theme === "dark" || (theme === "system" && systemTheme === "dark");
}
