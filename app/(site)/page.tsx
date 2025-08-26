import { HeroV2 } from "../components/HeroV2"
import { ProjectsSection } from "../components/ProjectsSection"
import { AboutSectionV2 } from "../components/AboutSectionV2"
import { ServicesSectionV2 } from "../components/ServicesSectionV2"
import { RecruiterContact } from "../components/RecruiterContact"

// const WebDesignPage: React.FC = () => {
//   return (
//     <main className="overflow-hidden">
//       <HeroV2 data-snap />
//       <LogoMarquee data-snap />
//       <Projects data-snap />
//       <LargeReview {...REVIEWS[3]} data-snap />
//       <ServicesSectionV2 data-snap />
//       <AboutSectionV2 data-snap />
//       <PricingSection data-snap />
//       <ReviewSectionV2 data-snap />
//       <FAQSection data-snap />
//     </main>
//   )
// }
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
