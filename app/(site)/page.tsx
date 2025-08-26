import { HeroV2 } from "../components/HeroV2"
import { ProjectsSection } from "../components/ProjectsSection"
import { AboutSectionV2 } from "../components/AboutSectionV2"
import { ServicesSectionV2 } from "../components/ServicesSectionV2"
import { RecruiterContact } from "../components/RecruiterContact"

const PortfolioPage: React.FC = () => {
  return (
    <main className="overflow-hidden">
      <HeroV2 /> {/* Rewritten for job seeking */}
      <ProjectsSection /> {/* Expanded with case studies */}
      <AboutSectionV2 /> {/* Technical journey focus */}
      <ServicesSectionV2 /> {/* NEW: Technical skills showcase */}
      <RecruiterContact />
    </main>
  )
}
export default PortfolioPage
