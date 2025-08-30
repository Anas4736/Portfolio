import Link from "next/link"

export const HeroScrollClick: React.FC = () => {
  return (
    <Link
      href="#projects-grid"
      aria-label="Scroll to projects"
      className="absolute top-0 z-5 h-1/2 w-1/2  right-0 xs:top-5 sm:h-3/4 sm:top-0 md:right-1/20 lg:right-1/10 xl:right-1/20 reveal-true:pointer-events-none"
    />
  )
}
