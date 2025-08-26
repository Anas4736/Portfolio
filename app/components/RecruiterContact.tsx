import Image from "next/image"
import { H3, Text } from "@/app/ui/Elements"
import { MotionDiv } from "@/app/utils/lazy-ui"
import { Icon } from "./Icon"
import { ActivityDot } from "./ui/ActivityDot"
import profilePhoto from "@/app/images/profile.webp"
import { SITE_NAP } from "@/config/siteConfig"
import { Mail } from "@react-zero-ui/icon-sprite"
import { BlackButtonLink } from "./ui/BlackButtonLink"
import { WhiteButtonLink } from "./ui/WhiteButtonLink"

export const RecruiterContact: React.FC = () => {
  return (
    <section id="contact" className="border-t border-gray-200">
      <div className="inside-container-small">
        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 14 }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative flex flex-col gap-8 rounded-2xl border border-gray-300 bg-white p-8 max-lg:text-center"
        >
          <div className="flex items-center gap-3 max-lg:justify-center">
            <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-gray/80">
              <Image src={profilePhoto} alt="Austin Serb" fill sizes="80px" className="object-cover" />
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <ActivityDot />
              <span className="font-medium text-slate-900">Actively interviewing</span>
              <span className="hidden text-slate-500 sm:inline">- Frontend / Full-Stack</span>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 max-lg:items-center">
            <H3 className="font-normal tracking-tight">
              <span className="text-slate-500">Hiring?</span> Let&apos;s chat.
            </H3>
            <Text className="max-w-2xl">
              I build fast, accessible web apps with React, Next.js, and TypeScript. I&apos;m looking for teams that value product quality, performance, and
              thoughtful UX.
            </Text>
          </div>

          <div className="flex items-center gap-4 max-lg:justify-center">
            <BlackButtonLink href={`mailto:${SITE_NAP.email}`}>
              <Mail height={18} width={18} className="h-[18px] w-[18px] text-white" />
              Email me
            </BlackButtonLink>

            <WhiteButtonLink href={"https://www.linkedin.com/in/austinserb"}>
              <Icon name="linkedin" height={18} width={18} className="h-[18px] w-[18px] text-slate-700" />
              LinkedIn
            </WhiteButtonLink>
          </div>

          {/* <div className="flex items-center gap-3 opacity-70 max-lg:justify-center  ">
            <WhiteButtonLink href={"https://cal.com/austinserb/intro"} className="relative">
              <Icon name="calendar" height={18} width={18} className="h-[18px] w-[18px] text-slate-700 " />
              Book a call
              <CalIcon className="h-auto w-20 text-gray-900 absolute -right-24" />
            </WhiteButtonLink>
          </div> */}
        </MotionDiv>
      </div>
    </section>
  )
}
