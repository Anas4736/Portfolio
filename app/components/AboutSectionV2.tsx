import Image from "next/image"
import clsx from "clsx"
import { Text, Typography } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import { ImageReveal } from "./ImageReveal"
import { MotionDiv } from "../utils/lazy-ui"

export const AboutSectionV2 = ({ className = "" }: { className?: string }) => {
  return (
    <section id="about" className={clsx("border-y border-gray-200 bg-white", className)}>
      <div className="inside-container relative z-2">
        {/* HEADLINE */}
        <AnimatedH2>
          <span className="text-slate-500">About</span>
          <br />
          Mohd Anas
        </AnimatedH2>
        <div className="flex flex-col-reverse gap-12 md:flex-row md:gap-16">
          {/* ---------------- left column ---------------- */}

          <div className="flex [flex:1_0_0px] flex-col gap-6">
            {/* portrait + overlay icons */}

            <ImageReveal src="/profile.jpg" alt="Mohd Anas" className="custom-shadow aspect-[4/4.5]" />

            {/* name + role */}
            <MotionDiv
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <Text as="h2" size="lg" className="font-medium">
                Mohd Anas
              </Text>
              <p className="text-sm text-gray-500">Full-Stack Engineer</p>
            </MotionDiv>
          </div>
          {/* ---------------- right column ---------------- */}
          <Typography as="article" size="lg" className="[flex:1.5_0_0px] space-y-8 text-slate-500">
            <p>
              <strong className="font-semibold text-slate-900">I’m a Full Stack Engineer</strong> who loves building real-world web applications that blend performance with clean design.
              I’ve created full-stack projects like a{" "}
              <a href="https://github.com/Anas4736" target="_blank" rel="noopener" className="text-slate-900">
                QuickGPT LLM-powered AI assistant
              </a>
              , an Wanderlust booking app, and a Zerodha trading platform — all powered by the MERN stack.
            </p>

            <p>
              <strong className="font-semibold text-slate-900">I build, deploy, and iterate fast</strong> — shipping MVPs in weeks and refining them in days.
              I focus on modern tools like React, Express, MongoDB, Node.js, REST APIs, and CI/CD to deliver efficient, scalable products.
            </p>

            <p>
              <strong className="font-semibold text-slate-900">My development philosophy is simplicity</strong> — if complexity grows, I refactor and design a cleaner, more efficient path.
              I believe great products come from small, thoughtful improvements and consistent execution.
            </p>

            {/* signature */}
<Image
  src="/Sign.png"
  alt="Mohd Anas Signature"
  width={250} // <--- ADD THE ACTUAL WIDTH OF YOUR IMAGE HERE
  height={50} // <--- ADD THE ACTUAL HEIGHT OF YOUR IMAGE HERE
  className="relative mt-6 -ml-3"
/>          </Typography>

        </div>
      </div>
    </section>
  )
}
