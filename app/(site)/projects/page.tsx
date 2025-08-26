import React from "react"
import { WorkHero } from "./WorkHero"
import { ProjectsStatic } from "./ProjectsStatic"
import { RecruiterContact } from "@/app/components/RecruiterContact"
const page = () => {
  return (
    <div>
      <WorkHero />
      <ProjectsStatic />
      <RecruiterContact />
    </div>
  )
}

export default page
