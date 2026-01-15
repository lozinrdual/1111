"use client"

import { useEffect, useRef, useState } from "react"

export function HeaderLogo() {
  const svgRef = useRef(null)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const checkTheme = () => {
      const htmlElement = document.documentElement
      const isDarkMode = htmlElement.classList.contains("dark")
      setIsDark(isDarkMode)
    }

    checkTheme()

    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    return () => observer.disconnect()
  }, [])

  const logoColor = isDark ? "#f9f9f9" : "#191919"

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1242.23 284.96"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
      style={{ maxHeight: "100%" }}
    >
      <path className="cls-1" d="M12.33,278.81V4.23h53.54v274.58H12.33Z" fill={logoColor} />
      <path
        className="cls-1"
        d="M95.17,141.15C95.17,62.23,153.9,4.23,229.89,4.23s135.45,58,135.45,136.92-59.1,137.66-135.45,137.66-134.72-58.73-134.72-137.66ZM307.71,141.15c0-48.45-29.37-87-77.82-87s-77.45,38.54-77.45,87,29.37,87.73,77.45,87.73,77.82-39.28,77.82-87.73Z"
        fill={logoColor}
      />
      <path
        className="cls-1"
        d="M374.11,278.81v-45.89l140.35-178.59h-139.97V4.23h211.48v46.65l-141.11,177.83h145.7v50.1h-216.45Z"
        fill={logoColor}
      />
      <path
        className="cls-1"
        d="M662.05,280.72c-21.03,0-36.71-14.53-36.71-34.8s15.3-35.18,36.71-35.18,36.71,14.91,36.71,35.18-15.68,34.8-36.71,34.8ZM641.78,196.21l-13.38-191.97h67.31l-13.77,191.97h-40.15Z"
        fill={logoColor}
      />
      <path
        className="cls-1"
        d="M786.69,87.22v191.59h-53.16V4.23h62.72l119.7,182.03V4.23h53.54v274.58h-56.98l-125.82-191.59Z"
        fill={logoColor}
      />
      <path
        className="cls-1"
        d="M1004.27,278.81V4.23h107.46c69.22,0,109.37,32.12,109.37,89.1,0,37.09-22.95,66.54-61.95,79.54l70.75,105.93h-69.22l-61.95-97.13h-36.33v97.13h-58.13ZM1062.4,133.87h46.66c35.18,0,53.92-13.77,53.92-40.54s-18.74-40.92-53.92-40.92h-46.66v81.46Z"
        fill={logoColor}
      />
    </svg>
  )
}
