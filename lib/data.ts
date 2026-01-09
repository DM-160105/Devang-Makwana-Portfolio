export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  image: string;
  video?: string;
  liveLink?: string;
  tags: string[];
  technologies: { name: string; icon: string }[];
}

export const projects: Project[] = [
  {
    id: "ai-tutor",
    title: "Ai-Tutor",
    description:
      "AI Tutor is an intelligent learning platform that delivers personalized, instant academic support—helping students study smarter and achieve results faster.",
    longDescription: `
#### 🚀 AI Tutor — Redefining the Learning Experience


AI Tutor is a next-generation learning platform engineered to deliver personalized, on-demand academic guidance across all subject domains.  
It is designed to move learners from passive content consumption to active mastery through intelligent automation and adaptive learning experiences.


---


#### 🧠 Intelligent, Student-Centric Learning


AI Tutor leverages advanced tutoring mechanisms and behavioral insights to align learning with individual student needs.  
The platform dynamically adapts based on user interaction and performance trends.  
• Personalized explanations tailored to individual learning pace  
• Real-time insights driven by study behavior and progress  
• Adaptive recommendations to reinforce weak concepts  


---


#### ⚙️ End-to-End Study Workflow Enablement


The platform consolidates the entire study lifecycle into a single, seamless workflow.  
This eliminates context switching and significantly improves learning efficiency.  
• Instant topic summaries and structured explanations  
• File-based question analysis and solution generation  
• Clear, contextual code explanations  
• Simplified breakdown of complex academic concepts  


---


#### 🎯 Designed for Performance and Outcomes


Built with a modern interface and a frictionless user journey, AI Tutor empowers learners to remain consistent, focused, and outcome-driven throughout their academic journey.  
• Intuitive, distraction-free learning experience  
• Consistency-focused design to build long-term study momentum  
• Precision-driven insights to accelerate academic results   `,
    category: "Full Stack Web App",
    image: "/assets/project-video/ai-tutor.png",
    video: "/assets/project-video/ai-tutor.mp4",
    liveLink: "https://ai-tutor-navy.vercel.app",
    tags: ["Full Stack", "AI Integration", "EdTech", "Next.js"],
    technologies: [
      { name: "react-img", icon: "react-img.svg" },
      { name: "tailwind", icon: "tailwind.svg" },
      { name: "supabase", icon: "supabase.svg" },
      { name: "hugging-face", icon: "hugging-face.svg" },
    ],
  },
  {
    id: "yt-playlist-calculator",
    title: "YT Playlist Calculator",
    description:
      "A sleek single-page app built with Next.js and TypeScript that delivers real-time YouTube playlist duration insights across playback speeds using the YouTube Data API.",
    longDescription: `
#### 🎬 YT Playlist Calculator — Smart Time Analytics for YouTube Playlists


YT Playlist Calculator is a modern single-page web application built with Next.js and TypeScript that accurately calculates the total time required to complete any YouTube playlist across multiple playback speeds.  
It enables users to instantly evaluate watch time at 1x, 1.25x, 1.5x, 1.75x, and 2x speeds with precision and clarity.


---


#### ⚙️ Real-Time Playlist Intelligence


The platform fetches live playlist data using the YouTube Data API and efficiently handles pagination for large playlists.  
It processes ISO 8601 video durations to deliver accurate and reliable time analytics in real time.  
• Real-time playlist duration aggregation  
• Pagination handling for large playlists  
• Accurate ISO 8601 duration parsing  


---


#### 🚀 Multi-Speed Time Calculation Engine


YT Playlist Calculator recalculates total watch time dynamically across multiple playback speeds.  
This allows users to optimize their viewing strategy based on available time and preferred playback speed.  
• Instant recalculation for multiple playback speeds  
• High-precision time analytics  
• Optimized performance for large datasets  


---


#### 🎨 Clean, Modern User Experience


Designed with a minimal and responsive interface, the application ensures clarity and usability across all devices.  
Tailwind CSS powers a modern UI that focuses on performance and visual consistency.  
• Fully responsive layout  
• Clean, distraction-free design  
• Optimized for desktop and mobile  


---


#### 🔐 Secure and Production-Ready Architecture


The application follows best practices for security and scalability, ensuring safe API access and maintainable architecture.  
• Secure API key handling via environment variables  
• Fully functional single-page application architecture  
• Built for scalability and real-world deployment `,
    category: "Web Application",
    image: "/assets/project-video/yt-playlist.png",
    video: "/assets/project-video/yt-playlist.mp4",
    liveLink: "https://yt-playlist-calculator-dun.vercel.app",
    tags: ["Utility", "API Integration", "Single Page App"],
    technologies: [
      { name: "nextjs", icon: "nextjs.svg" },
      { name: "tailwind", icon: "tailwind.svg" },
      { name: "typescript", icon: "typescript.svg" },
      { name: "google cloud", icon: "googleCloud.svg" },
    ],
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description:
      "A Python-based web expense tracker delivering end-to-end CRUD-driven financial control and real-time insights via a streamlined, responsive dashboard.",
    longDescription: `#### 💰 Expense Tracker — Streamlined Financial Operations


A Python- and web-based expense tracker functions as a lightweight financial operations engine that streamlines end-to-end expense management through full-stack CRUD workflows.  
The system is designed to centralize financial data while maintaining accuracy, consistency, and usability.


---


#### 🧩 Backend-Driven Data Orchestration


The application leverages a Python backend using Flask or Django to manage business logic and data flow.  
It enforces validation rules, maintains transactional integrity, and ensures reliable persistence of expense records.  
• Full CRUD operations for expense records  
• Server-side validation and data consistency  
• Secure and scalable backend architecture  


---


#### 🖥️ Responsive and User-Centric Frontend


A responsive web interface built with HTML, CSS, JavaScript, or a modern frontend framework ensures seamless user interaction.  
The frontend focuses on clarity and ease of use to drive consistent engagement.  
• Clean and intuitive user interface  
• Responsive design for multiple devices  
• Real-time interaction with backend services  


---


#### 📊 Centralized Insights and Dashboard


All expense data is aggregated into a centralized dashboard that enables users to track, analyze, and manage spending history effectively.  
This provides visibility into financial patterns and supports informed decision-making.  
• Expense creation, updating, and deletion  
• Historical expense tracking and retrieval  
• Actionable financial insights through dashboards  `,
    category: "Python Based Web App",

    image: "/assets/project-video/expense-tracker.png",
    video: "/assets/project-video/expense-tracker.mp4",
    liveLink: "",
    tags: ["Finance", "Full Stack", "Python", "CRUD"],
    technologies: [
      { name: "python", icon: "python.svg" },
      { name: "django", icon: "django.svg" },
      { name: "flask", icon: "flask.svg" },
      { name: "vscode", icon: "vscode.svg" },
    ],
  },
];
