"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { DotsBounceIcon2 } from "./DotsBounceIcon2";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Work", path: "/work" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  return (
    <>
      <DesktopHeader />
    </>
  );
}

import { useIsMobile } from "@/hooks/use-mobile";

// -----------------------------------------------------------------------------
// PC / Desktop Header
// -----------------------------------------------------------------------------
function DesktopHeader() {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  // Desktop: split layout
  // Mobile: single pill, expand to show nav
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (isMobile === undefined) return null;

  return (
    <header
      className={`header-fixed md:flex ${
        isMobile ? "flex justify-center" : "hidden md:flex"
      }`}
    >
      {isMobile ? (
        // MOBILE VIEW: Split Layout (Pill + Toggle)
        <div
          ref={headerRef}
          className="flex items-start justify-center gap-2 w-full px-4"
        >
          {/* Main Expandable Pill */}
          <motion.div
            className="nav-pill flex-col items-start overflow-hidden relative"
            initial={false}
            animate={{
              height: isOpen ? "auto" : "54px",
              paddingBottom: isOpen ? "1rem" : "0.45rem", // Match top padding (approx 7px)
              borderRadius: isOpen ? "24px" : "50px",
              width: "auto", // Use full available width to prevent text wrapping
            }}
            transition={{
              type: "tween",
              duration: 0.3,
              ease: "easeInOut",
            }}
            style={{
              alignItems: "center",
              alignSelf: "start",
              justifyContent: "flex-start",
              paddingTop: "0.45rem", // Fixed top padding (approx 7px) for centering
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
          >
            {/* Top Row: Profile */}
            <div>
              <div className="flex items-center justify-between w-full">
                <div
                  style={{ alignSelf: "center" }}
                  className="flex items-center gap-2 pr-2"
                >
                  <Link onClick={() => setIsOpen(false)} href="/">
                    <div className="header-avatar">
                      <Image
                        src="/assets/avatar.png"
                        alt="DM"
                        width={35}
                        height={35}
                        className="object-cover"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </Link>
                  <div className="flex items-center">
                    <Link onClick={() => setIsOpen(false)} href="/">
                      <span
                        className="whitespace-nowrap"
                        style={{
                          fontSize: "11px",
                          fontWeight: "900",
                          alignSelf: "center",
                        }}
                      >
                        Devang Makwana
                      </span>
                    </Link>
                    {isOpen ? (
                      <motion.div
                        className="nav-pill  flex items-center justify-center"
                        style={{
                          margin: "0 0 0 10px",
                          width: "54px",
                          height: "54px",
                          borderRadius: "50%",
                          padding: 0,
                          flexShrink: 0,
                          cursor: "pointer",
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <div className="">
                          <ThemeToggle />
                        </div>
                      </motion.div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile Nav Items */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 20,
                      filter: "blur(10px)",
                      transition: {
                        duration: 0.2,
                        ease: "easeIn",
                        staggerChildren: 0.05,
                        staggerDirection: -1,
                      },
                    },
                    show: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: {
                        duration: 0.4,
                        ease: [0.33, 1, 0.68, 1],
                        staggerChildren: 0.1,
                        delayChildren: 0.1,
                      },
                    },
                  }}
                  className="flex flex-col gap-2 pt-4 pb-2 w-full"
                  style={{
                    textAlign: "center",
                    alignItems: "inherit",
                  }}
                >
                  <div
                    className="flex flex-col gap-2 pt-4 pb-2 w-33"
                    style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
                  >
                    {navItems.map((item) => (
                      <motion.div
                        key={item.path}
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          show: { opacity: 1, y: 0 },
                        }}
                      >
                        <Link
                          href={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`nav-link-mobile text-center w-full block ${
                            pathname === item.path ? "active" : ""
                          }`}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: { opacity: 1, y: 0 },
                    }}
                    className="w-full flex justify-center"
                  >
                    <Link
                      href="/resume"
                      style={{
                        textAlign: "center",
                        maxWidth: "80%",
                        marginTop: "10px",
                        fontSize: "1.2rem",
                        fontWeight: "400",
                        borderRadius: "25px",
                        paddingLeft: "1rem",
                        paddingRight: "1rem",
                      }}
                      className="btn-resume text-center mt-2 inline-block"
                    >
                      Resume
                    </Link>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Separate Toggle Button */}
          <div
            className="flex items-center gap-2"
            style={{ marginLeft: "7px" }}
          >
            {isOpen ? null : (
              <motion.button
                className="nav-pill flex items-center justify-center"
                style={{
                  width: "54px",
                  height: "54px",
                  borderRadius: "50%",
                  padding: 0,
                  flexShrink: 0,
                  cursor: "pointer",
                }}
                onClick={() => {
                  console.log("Toggle button clicked");
                  setIsOpen(!isOpen);
                }}
                whileTap={{ scale: 0.9 }}
              >
                <DotsBounceIcon2 size={20} />
              </motion.button>
            )}
          </div>
        </div>
      ) : (
        // DESKTOP VIEW: Standard Two-Pills
        <>
          {/* Profile Pill */}
          <div
            className="nav-pill"
            style={{ paddingTop: "10px", paddingBottom: "10px" }}
          >
            <Link
              href="/"
              className="flex items-center gap-2 pr-2 hover:opacity-100 transition-opacity"
            >
              <div className="header-avatar">
                <Image
                  src="/assets/avatar.png"
                  alt="DM"
                  width={35}
                  height={35}
                  className="object-cover"
                  style={{ height: "auto" }}
                />
              </div>
              <span
                className="whitespace-nowrap"
                style={{
                  fontSize: "14px",
                  fontWeight: "900",
                }}
              >
                Devang Makwana
              </span>
            </Link>
          </div>

          {/* Navigation Pill */}
          <nav className="nav-pill relative">
            <ul className="flex items-center gap-1 list-none m-0 p-0">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`nav-link ${
                      pathname === item.path ? "active" : ""
                    }`}
                    style={{
                      fontWeight: "700",
                      fontSize: "0.85rem",
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/resume"
                  className="btn-resume flex"
                  style={{
                    padding: "0.4rem 1rem",
                    fontSize: "0.8125rem",
                    margin: "0 0 0 10px",
                  }}
                >
                  <span className="hidden lg:inline">Resume</span>
                </Link>
              </li>
            </ul>
          </nav>
          <div
            className="nav-pill relative border-gray-200 dark:border-gray-700 items-center justify-center"
            style={{
              borderRadius: "50%",
              margin: "0 0 0 10px",
              width: "60px",
              height: "60px",
              padding: 0,
              flexShrink: 0,
              cursor: "pointer",
            }}
          >
            <ThemeToggle />
          </div>
        </>
      )}
    </header>
  );
}
