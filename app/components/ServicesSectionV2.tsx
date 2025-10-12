import clsx from "clsx"
// 1. Import icons from react-icons
import {
  SiReact, SiNextdotjs, SiTypescript, SiOpencv, SiFigma, SiTailwindcss, SiHtml5, SiThreedotjs,
  SiC, SiCplusplus, SiJavascript, SiCss3, SiExpress, SiRedux, SiBootstrap,
  SiMongodb, SiMysql, SiGit, SiGithub, SiPostman, SiVercel, SiDocker, SiKubernetes
} from "react-icons/si"
import { FaMagic, FaPaintBrush, FaGlobe, FaStar, FaCode, FaCube, FaNodeJs, FaJava } from "react-icons/fa"

import { Text } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import type { Variants } from "motion"
import { MotionUl, MotionLi } from "../utils/lazy-ui"

// 2. Icon Map
const IconMap: { [key: string]: React.ElementType } = {
  // Tech stack icons
  react: SiReact,
  next: SiNextdotjs,
  typescript: SiTypescript,
  openai: SiOpencv,
  figma: SiFigma,
  motion: FaCube,
  tailwindcss: SiTailwindcss,
  html: SiHtml5,
  threejs: SiThreedotjs,
  c: SiC,
  cpp: SiCplusplus,
  java: FaJava, // changed to FontAwesome Java
  javascript: SiJavascript,
  css: SiCss3,
  express: SiExpress,
  nodejs: FaNodeJs, // FontAwesome Node.js icon
  redux: SiRedux,
  bootstrap: SiBootstrap,
  jwt: FaCode, // placeholder
  axios: FaCode, // placeholder
  mongodb: SiMongodb,
  mysql: SiMysql,
  git: SiGit,
  github: SiGithub,
  postman: SiPostman,
  vercel: SiVercel,
  docker: SiDocker,
  cicd: FaCube, // placeholder
  kubernetes: SiKubernetes,

  // Service icons
  "magic-wand": FaMagic,
  "paint-bucket": FaPaintBrush,
  web: FaGlobe,
  world: FaStar,
  planet: FaCode,
  cube: FaCube,
}

// 3. CustomIcon wrapper
interface CustomIconProps {
  name: keyof typeof IconMap
  size?: number
  className?: string
  style?: React.CSSProperties
}

const CustomIcon: React.FC<CustomIconProps> = ({ name, size = 30, className, ...rest }) => {
  const IconComponent = IconMap[name]
  if (!IconComponent) return null
  return <IconComponent size={size} className={className || "text-black"} {...rest} />
}

// 4. Tech stack array
const tech = [
  { name: "C", src: "c" },
  { name: "C++", src: "cpp" },
  { name: "Java", src: "java" },
  { name: "JavaScript", src: "javascript" },
  { name: "CSS", src: "css" },
  { name: "Express.js", src: "express" },
  { name: "Node.js", src: "nodejs" },
  { name: "Redux", src: "redux" },
  { name: "Bootstrap", src: "bootstrap" },
  { name: "JWT", src: "jwt" },
  { name: "Axios", src: "axios" },
  { name: "MongoDB", src: "mongodb" },
  { name: "MySQL", src: "mysql" },
  { name: "Git", src: "git" },
  { name: "GitHub", src: "github" },
  { name: "Postman", src: "postman" },
  { name: "React", src: "react" as keyof typeof IconMap },
  { name: "Docker", src: "docker" },
  { name: "CI/CD", src: "cicd" },
  { name: "Kubernetes", src: "kubernetes" },
]

// 5. Services array
const services = [
  { name: "Full Stack Development", src: "magic-wand" },
  { name: "React Development", src: "paint-bucket" },
  { name: "Performance Optimization", src: "web" },
  { name: "Code Reviews", src: "world" },
  { name: "Advanced Motion", src: "cube" },
  { name: "Backend Development", src: "planet" },
]

// 6. Animation variants
const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
}

const container2: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } },
}

const element: Variants = {
  hidden: { opacity: 0, x: -40, filter: "blur(4px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
}

const element2: Variants = {
  hidden: { opacity: 0, scale: 0.5, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.2, type: "spring", stiffness: 100, damping: 10 },
  },
}

// 7. Component
export const ServicesSectionV2: React.FC<{ className?: string }> = ({ className = "" }) => {
  const iconSizeTech = 30
  const iconSizeService = 25

  return (
    <section id="technologies" className={clsx("inside-container relative z-2 items-start justify-center md:flex-row md:items-center", className)}>
      {/* LEFT COLUMN */}
      <div className="flex h-full flex-col gap-16 max-md:w-full md:[flex:2_0_0px]">
        <AnimatedH2>
          Engineering <br />
          <span className="text-slate-500">Toolkit</span>
        </AnimatedH2>

        {/* Tech Stack */}
        <div className="w-full">
          <Text size="base" className="mb-8">My Skill Set</Text>

          <MotionUl
            className="grid grid-cols-5 gap-8 max-[420px]:justify-items-center md:justify-items-center"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            {tech.map(({ name, src }) => (
              <MotionLi key={name} variants={element}>
                <div className="group relative">
                  <input placeholder={name} type="checkbox" className="peer hidden" id={name} />
                  <label
                    htmlFor={name}
                    className="button-shadow flex h-13 w-13 items-center justify-center rounded-xl border border-gray-200 bg-white peer-checked:translate-y-0.5 peer-checked:shadow-none hover:translate-y-0.5"
                  >
                    <CustomIcon name={src} size={iconSizeTech} />
                  </label>
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 rounded-full bg-black px-2 py-1 text-xs text-white opacity-0 transition delay-100 duration-300 group-hover:opacity-100 peer-checked:opacity-100">
                    {name}
                  </span>
                </div>
              </MotionLi>
            ))}
          </MotionUl>
        </div>
      </div>

      {/* RIGHT COLUMN - Services */}
      <MotionUl
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={container2}
        className="grid [flex:1_0_0px] grid-cols-2 gap-8 md:grid-cols-1"
      >
        {services.map(({ name, src }) => (
          <MotionLi key={name} variants={element2} className="flex items-center gap-3">
            <span className="button-shadow flex aspect-square h-10 w-10 items-center justify-center rounded-full bg-black">
              <CustomIcon name={src} size={iconSizeService} className="invert" />
            </span>
            <Text as="span" size="sm">{name}</Text>
          </MotionLi>
        ))}
      </MotionUl>
    </section>
  )
}
