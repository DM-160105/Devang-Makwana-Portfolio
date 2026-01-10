import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Devang Makwana",
  description:
    "Learn more about Devang Makwana, a passionate Full Stack Developer with expertise in Next.js, MERN stack, and creative web development.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
