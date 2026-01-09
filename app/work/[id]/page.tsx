"use client";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import { useParams, useRouter } from "next/navigation";
import { projects } from "@/lib/data";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Cpu } from "lucide-react";
import { Activity } from "lucide-react";
const ProjectCard = dynamic(() => import("@/components/ProjectCard"));
import { useIsMobile } from "@/hooks/use-mobile";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function ProjectDetail() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode =
    mounted &&
    (theme === "dark" || (theme === "system" && systemTheme === "dark"));

  const params = useParams();
  const router = useRouter();

  // Find current project
  const project = projects.find((p) => p.id === params.id);

  // Get other projects for "Explore More" (exclude current)
  const otherProjects = projects.filter((p) => p.id !== params.id).slice(0, 2);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-3xl font-bold mb-4 font-outfit">
          Project not found
        </h1>
        <button
          onClick={() => router.push("/work")}
          className="px-6 py-3 bg-black text-white rounded-full font-medium"
        >
          Back to Work
        </button>
      </div>
    );
  }

  const isMobile = useIsMobile();

  if (isMobile === undefined) return null;

  return (
    <>
      {isMobile ? (
        <div style={{ paddingTop: "90px" }}>
          <StickyVideo videoSrc={project.video} imageSrc={project.image} />
        </div>
      ) : (
        <div>
          <StickyVideo videoSrc={project.video} imageSrc={project.image} />
        </div>
      )}
      <main className="min-h-screen bg-gray-50 pt-48 pb-20">
        <div
          className={
            isMobile ? undefined : "container-for-project mx-auto px-4 sm:px-6"
          }
        >
          <div
            style={{ padding: isMobile ? "7rem 15px 0px 15px" : "7rem 0 0 0" }}
          >
            <div
              style={{ marginTop: "8rem" }}
              className={isMobile ? "experience-card-mobile" : undefined}
            >
              <div
                className="experience-card-desktop"
                style={isMobile ? undefined : { marginTop: "60rem" }}
              >
                {/* Main Details Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-4xl mx-auto"
                >
                  {/* Header Section */}
                  <div className="flex flex-col gap-6 mb-10 border-b border-gray-100 pb-10">
                    <div className="project-category flex items-center gap-3">
                      <span className="text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    <h1
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        padding: "0 0 2rem 0",
                        color: isDarkMode
                          ? "rgb(222,219,216)"
                          : "rgb(0, 18, 51)",
                      }}
                      className=" text-4xl md:text-5xl tracking-tight leading-[1.1]"
                    >
                      <span style={{ rotate: "45deg" }}>
                        <ArrowUpRight size={isMobile ? 40 : 60} />
                      </span>
                      {project.title}
                    </h1>

                    {/* Description & Tech Stack */}
                    <div className="space-y-10">
                      <div className="space-y-4">
                        <div className="space-y-4">
                          <div className="project-title">
                            <h2
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                                padding: "0 0 2.5rem 0",
                                color: isDarkMode
                                  ? "rgb(222,219,216)"
                                  : "rgb(0, 18, 51)",
                              }}
                              className="text-xl font-bold font-outfit "
                            >
                              <Activity size={isMobile ? 20 : 45} /> About the
                              Project
                            </h2>
                          </div>
                        </div>
                        <div
                          style={{
                            padding: "0 1rem 1.5rem 1rem",
                          }}
                          className="text-lg text-gray-600 leading-relaxed font-light space-y-4"
                        >
                          <ReactMarkdown
                            remarkPlugins={[remarkBreaks, remarkGfm]}
                            components={{
                              h1: ({ node, ...props }) => (
                                <h1
                                  className="text-3xl font-bold text-gray-900 mt-8 mb-4"
                                  {...props}
                                />
                              ),
                              h2: ({ node, ...props }) => (
                                <h2
                                  className="text-2xl font-bold text-gray-900 mt-8 mb-4"
                                  {...props}
                                />
                              ),
                              h3: ({ node, ...props }) => (
                                <h3
                                  className="text-xl font-bold text-gray-900 mt-8 mb-3"
                                  {...props}
                                />
                              ),
                              h4: ({ node, ...props }) => (
                                <h4
                                  className="text-lg font-bold text-gray-900 mt-8 mb-2"
                                  {...props}
                                />
                              ),
                              p: ({ node, ...props }) => (
                                <p
                                  className="mb-4 leading-relaxed"
                                  style={{ whiteSpace: "pre-line" }}
                                  {...props}
                                />
                              ),
                              ul: ({ node, ...props }) => (
                                <ul
                                  className="list-disc pl-6 mb-4 space-y-2 marker:text-gray-500"
                                  {...props}
                                />
                              ),
                              ol: ({ node, ...props }) => (
                                <ol
                                  className="list-decimal pl-6 mb-4 space-y-2 marker:text-gray-500"
                                  {...props}
                                />
                              ),
                              li: ({ node, ...props }) => (
                                <li className="pl-1" {...props} />
                              ),
                              blockquote: ({ node, ...props }) => (
                                <blockquote
                                  className="border-l-4 border-gray-200 pl-4 py-1 my-4 italic text-gray-700 bg-gray-50 rounded-r"
                                  {...props}
                                />
                              ),
                              a: ({ node, ...props }) => (
                                <a
                                  className="text-blue-600 hover:underline"
                                  {...props}
                                />
                              ),
                              strong: ({ node, ...props }) => (
                                <span
                                  className="font-bold text-gray-900"
                                  {...props}
                                />
                              ),
                            }}
                          >
                            {project.longDescription.replace(
                              /\n\n/g,
                              "\n&nbsp;\n"
                            )}
                          </ReactMarkdown>
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="pt-6">
                      <h3
                        style={{
                          fontSize: isMobile ? "1.9rem" : "3rem",
                          paddingBottom: "1.5rem",
                          paddingTop: "1.5rem",
                        }}
                        className="text-xl font-bold font-outfit text-gray-900 mb-6 flex items-center gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-gray-900" />
                        <Cpu
                          style={{ paddingRight: isMobile ? "0.5rem" : "1rem" }}
                          size={isMobile ? 40 : 70}
                        />
                        Technologies
                      </h3>
                      <div
                        className="flex flex-wrap"
                        style={{
                          gap: isMobile ? "0.5rem" : "1rem",
                          paddingLeft: isMobile ? undefined : "4.5rem",
                        }}
                      >
                        {project.technologies.map((tech, idx) => (
                          <div
                            key={idx}
                            className="tech-icon-circle"
                            style={{
                              width: isMobile ? undefined : "70px",
                              height: isMobile ? undefined : "70px",
                            }}
                            title={tech.name}
                          >
                            <Image
                              src={`/assets/projects-tech-img/${project.id}/${tech.icon}`}
                              alt={tech.name}
                              style={{ scale: "1.3" }}
                              width={60}
                              height={60}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {project.liveLink && (
                      <div className="pt-6">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-live-preview"
                        >
                          <span>Live Preview</span>
                          <ArrowUpRight size={24} />
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Explore More Section */}
            <div style={{ paddingTop: "60px" }}>
              <div
                className={
                  isMobile ? undefined : "experience-card-desktop-bottom"
                }
              >
                <div className="flex justify-center mb-12">
                  <div className="section-pill-project">
                    <div className="status-dot"></div>
                    <span className="section-label-text">More Work</span>
                  </div>
                </div>
                <div className="work-grid" style={{ margin: "0" }}>
                  {otherProjects.map((proj, idx) => (
                    <ProjectCard key={proj.id} project={proj} index={idx} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

function StickyVideo({
  videoSrc,
  imageSrc,
}: {
  videoSrc?: string;
  imageSrc: string;
}) {
  const { scrollY } = useScroll();

  const inputRange = [0, 800];

  const smoothScroll = useSpring(scrollY, {
    stiffness: 100,
    damping: 20,
    mass: 1,
  });

  // Scale from 1 down to 0.8 (Shrink)
  const scale = useTransform(smoothScroll, inputRange, [1, 0.8]);

  // RotateX from 0 to 80 degrees (Backward tilt)
  const rotateX = useTransform(smoothScroll, inputRange, ["0deg", "90deg"]);

  // Opacity for lighting effect
  const opacity = useTransform(smoothScroll, inputRange, [1, 0.9]);

  // Border radius increases
  const borderRadius = useTransform(smoothScroll, inputRange, ["0px", "40px"]);

  // Box shadow
  const boxShadow = useTransform(smoothScroll, inputRange, [
    "0px 0px 0px rgba(0,0,0,0)",
    "0px 60px 150px rgba(0,0,0,0.3)",
  ]);

  return (
    <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
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
            <div className="relative w-full h-full bg-gray-900">
              <Image
                src={imageSrc}
                alt="Project Cover"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
