import Hero from "@/components/Hero";
import dynamic from "next/dynamic";
const ProjectsForHero = dynamic(() => import("@/components/ProjectsForHero"));

const ProcessSection = dynamic(() => import("@/components/ProcessSection"), {
  loading: () => <div className="h-20" />,
});
const AboutSection = dynamic(() => import("@/components/AboutSection"), {
  loading: () => <div className="h-20" />,
});
const SuperpowersSection = dynamic(
  () => import("@/components/SuperpowersSection")
);

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="container home-pb">
        <ProjectsForHero />
        <AboutSection />
        <ProcessSection />
        <SuperpowersSection />
      </section>
    </main>
  );
}
