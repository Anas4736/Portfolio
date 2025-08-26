export const WhiteButtonLink: React.FC<{ children: React.ReactNode; href: string; className?: string }> = ({ children, href, className }) => {
  return (
    <a
      href={href}
      target="_blank"
      className={
        "group inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-slate-700 ring-1 ring-slate-300 hover:bg-slate-50 whitespace-nowrap " +
        className
      }
    >
      {children}
    </a>
  )
}
