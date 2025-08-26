import Image from "next/image"
import clsx from "clsx"
import profilePhoto from "../images/profile.webp"
import signature from "../images/signature.webp"
import { Text, Typography } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import ImageReveal from "./ImageReveal"
import { MotionDiv } from "../utils/lazy-ui"

export const AboutSectionV2 = ({ className = "" }: { className?: string }) => {
  return (
    <section id="about" className={clsx("border-y border-gray-200 bg-white", className)}>
      <div className="inside-container">
        {/* HEADLINE */}
        <AnimatedH2>
          <span className="text-slate-500">Building performant</span>
          <br />
          interfaces at scale.
        </AnimatedH2>
        <div className="flex flex-col-reverse gap-12 md:flex-row md:gap-16">
          {/* ---------------- left column ---------------- */}

          <div className="flex [flex:1_0_0px] flex-col gap-6">
            {/* portrait + overlay icons */}

            <ImageReveal src={profilePhoto} alt="Austin Serb" className="custom-shadow aspect-[4/4.5]" />

            {/* name + role */}
            <MotionDiv
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <Text size="lg" className="font-medium">
                Austin Serb
              </Text>
              <p className="text-sm text-gray-500">Full Stack Developer</p>
            </MotionDiv>
          </div>
          {/* ---------------- right column ---------------- */}
          <Typography as="article" size="lg" className="[flex:1.5_0_0px] space-y-8 text-slate-500">
            <p>
              <strong className="font-semibold text-slate-900">I'm passionate about pushing React performance boundaries.</strong>
            </p>
            <p>
              <strong className="font-semibold text-slate-900">I focus on building user interfaces that truly solve problems</strong> - not just visually
              polished, but performant, accessible, and intuitive. Whether it&apos;s a web app or a mobile experience, my goal is to create products that feel
              natural to use and deliver measurable impact.
            </p>
            <p>
              <strong className="font-semibold text-slate-900">I&apos;m meticulous about the small details,</strong> because they&apos;re what turn a good
              product into a great one. That same attention to detail carries over into how I collaborate with teams, from design systems to code reviews -
              ensuring the end result is reliable, scalable, and something we&apos;re proud to ship.
            </p>

            {/* signature */}
            <Image src={signature} alt="Austin Serb Signature" width={90} height={45} className="mt-6 -ml-3 -rotate-6" />
          </Typography>
        </div>
      </div>
    </section>
  )
}
