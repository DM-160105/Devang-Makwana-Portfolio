import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Devang Makwana",
  description:
    "Discover a curated selection of my full-stack projects, featuring AI integrations, responsive web applications, and modern design systems.",
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
