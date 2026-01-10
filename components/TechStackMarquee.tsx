"use client";

import Image from "next/image";

export default function TechStackMarquee() {
  return (
    <div
      style={{
        maskImage:
          "linear-gradient(to right, #0000 0%, #000 10% 90%, #0000 100%)",
      }}
      className="relative w-full overflow-hidden"
    >
      <div className="animate-marquee flex items-center">
        {/* Render 4 sets of the tech stack to ensure (Set1+Set2) > Container Width and enable seamless -50% translation loop */}
        {[...Array(4)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex shrink-0 items-center">
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
              <div key={`${groupIndex}-${i}`} className="tech-stack-item">
                <div className="flex items-center justify-center bg-gray-100 rounded-full">
                  <Image
                    src={tech.src}
                    alt={tech.label}
                    width={25}
                    height={25}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
