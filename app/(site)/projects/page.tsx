import React from "react"
import { WorkHero } from "./WorkHero"
import { ProjectsStatic } from "./ProjectsStatic"
import { RecruiterContact } from "@/app/components/RecruiterContact"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"
import { projectsSchema, breadcrumbSchema } from "@/config/schemas"

export const metadata: Metadata = {
  title: "Austin Serb - Projects & Case Studies",
  description: "Featured work by Austin Serb: production Next.js + TypeScript systems, React Zero-UI, and selected client builds. Outcomes, scope, and links.",
  keywords: ["Austin Serb", "Projects", "Case Studies", "React Zero-UI", "Next.js", "React", "TypeScript", "Serbyte", "Seattle"],
  alternates: {
    canonical: SITE_SLUGS.projects,
  },
}
const page = () => {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([projectsSchema, breadcrumbSchema]),
        }}
      />
      <WorkHero />
      <ProjectsStatic />
      <RecruiterContact />
    </div>
  )
}

export default page
