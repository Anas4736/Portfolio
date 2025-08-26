"use client"
import dynamic from "next/dynamic"
import { useMediaQuery } from "../hooks/useMediaQuery"
import { useEffect, useState } from "react"

// hoist this to module scope (not inside the component)
export const SplashCursor = /*#__PURE__*/ dynamic(() => import("../components/SplashCursor").then((m) => m.SplashCursor), {
  ssr: false,
  loading: () => null,
})

export function LazySplashCursor() {
  const hasFinePointer = useMediaQuery("(pointer:fine)")
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)")
  const [cursorMoved, setCursorMoved] = useState(false)

  useEffect(() => {
    if (!hasFinePointer || reduceMotion || cursorMoved) return
    const onFirstMove = () => setCursorMoved(true)
    // fire once, then auto-remove
    window.addEventListener("pointermove", onFirstMove, { once: true })
    return () => window.removeEventListener("pointermove", onFirstMove)
  }, [hasFinePointer, reduceMotion, cursorMoved])

  return cursorMoved ? <SplashCursor /> : null
}
