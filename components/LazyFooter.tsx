"use client";

import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/Footer"));

export default function LazyFooter() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Load when within 200px of the viewport
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={{ minHeight: "100px" }}>
      {isVisible ? <Footer /> : null}
    </div>
  );
}
