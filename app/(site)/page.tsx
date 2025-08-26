import { HeroV2 } from "../components/HeroV2"
import { ProjectsSection } from "../components/ProjectsSection"
import { AboutSectionV2 } from "../components/AboutSectionV2"
import { ServicesSectionV2 } from "../components/ServicesSectionV2"
import { RecruiterContact } from "../components/RecruiterContact"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Austin Serb - Developer Portfolio",
  description:
    "Portfolio of Austin Serb, Seattle-based full-stack engineer. Creator of React Zero-UI. Ships production Next.js + TypeScript systems. Projects & contact.",
  keywords: ["Austin Serb", "Serbyte", "React Zero-UI", "Next.js", "React", "TypeScript", "Full-Stack Engineer", "Seattle"],
  authors: [{ name: "Austin Serb" }],
  creator: "Austin Serb",
  alternates: {
    canonical: SITE_SLUGS.home,
  },
}

const PortfolioPage: React.FC = () => {
  return (
    <main className="overflow-hidden">
      <HeroV2 /> {/* Rewritten for job seeking */}
      <div className="border-b border-gray-200" />
      <ProjectsSection /> {/* Expanded with case studies */}
      <AboutSectionV2 /> {/* Technical journey focus */}
      <ServicesSectionV2 /> {/* NEW: Technical skills showcase */}
      <RecruiterContact />
    </main>
  )
}
export default PortfolioPage
