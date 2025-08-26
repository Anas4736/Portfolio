export const WhiteButtonLink: React.FC<{ children: React.ReactNode; href: string; className?: string }> = ({ children, href, className }) => {
  return (
    <a
      href={href}
      target="_blank"
      className={
        "bubble-hover shadow-lg flex w-fit items-center gap-1 rounded-full bg-white px-4 py-3 text-sm font-medium text-black hover:translate-y-0.5 transition-all duration-300 hover:shadow-none whitespace-nowrap border  border-gray-300! " +
        className
      }
    >
      {children}
    </a>
  )
}
