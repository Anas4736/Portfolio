import { HeroV2 } from "../components/HeroV2"
import { ProjectsSection } from "../components/ProjectsSection"
import { AboutSectionV2 } from "../components/AboutSectionV2"
import { ServicesSectionV2 } from "../components/ServicesSectionV2"
import { RecruiterContact } from "../components/RecruiterContact"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Web Developer Portfolio | Austin Serb | React & Next.js",
  description:
    "Explore the web developer portfolio of Austin Serb, a full-stack engineer building fast, modern web applications. See what a professional coding portfolio looks like, featuring projects in React, Next.js, and the custom-built React-Zero-UI library.",

  keywords: [
    "Web Developer Portfolio",
    "Austin Serb",
    "Serbyte",
    "React Zero-UI",
    "Next.js",
    "React",
    "TypeScript",
    "Full-Stack Engineer",
    "Seattle",

    "React Developer Portfolio",
  ],
  authors: [{ name: "Austin Serb" }],
  creator: "Austin Serb",
  alternates: {
    canonical: SITE_SLUGS.home,
  },
}

const PortfolioPage: React.FC = () => {
  return (
    <main className="overflow-hidden">
      <HeroV2 />
      <div className="border-b border-gray-200" />
      <ProjectsSection />
      <AboutSectionV2 />
      <ServicesSectionV2 />
      <RecruiterContact />
      {/* <FAQSection /> */}
    </main>
  )
}
export default PortfolioPage
