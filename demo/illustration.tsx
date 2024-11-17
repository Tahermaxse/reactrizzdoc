"use client"
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function AnimatedIllustration() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stopColor = mounted ? (resolvedTheme === "dark" ? "#71717A" : "#52525B") : "#52525B";

  return (
    <>
      <motion.svg
        className="pointer-events-none absolute left-1/2 -z-10 -translate-x-full"
        xmlns="http://www.w3.org/2000/svg"
        width="472"
        height="422"
        fill="none"
        aria-hidden="true"
        role="presentation"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <g filter="url(#illf-a)" opacity=".32">
          <motion.path
            fill="url(#ill-b)"
            fillRule="evenodd"
            d="m64-42 344 212-166 188L64-42Z"
            clipRule="evenodd"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </g>
        <g filter="url(#illf-c)" opacity=".32">
          <motion.path
            fill="url(#ill-d)"
            fillRule="evenodd"
            d="m64-42 344 212-200-67L64-42Z"
            clipRule="evenodd"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
          />
        </g>
        <defs>
          <linearGradient
            id="ill-b"
            x1="218.5"
            x2="218.5"
            y1="-42"
            y2="337"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={stopColor} stopOpacity=".64" />
            <stop offset="1" stopColor={stopColor} stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="ill-d"
            x1="218.5"
            x2="218.5"
            y1="-42"
            y2="337"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={stopColor} stopOpacity=".64" />
            <stop offset="1" stopColor={stopColor} stopOpacity="0" />
          </linearGradient>
          <filter
            id="illf-a"
            width="472"
            height="528"
            x="0"
            y="-106"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_115_9" stdDeviation="32" />
          </filter>
          <filter
            id="illf-c"
            width="472"
            height="340"
            x="0"
            y="-106"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_115_9" stdDeviation="32" />
          </filter>
        </defs>
      </motion.svg>
      <motion.svg
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10"
        xmlns="http://www.w3.org/2000/svg"
        width="520"
        height="576"
        fill="none"
        aria-hidden="true"
        role="presentation"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <g filter="url(#ill2-a)" opacity=".2">
          <motion.path
            fill="url(#ill2-b)"
            fillRule="evenodd"
            d="m88 88 344 212-166 188L88 88Z"
            clipRule="evenodd"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
          />
        </g>
        <defs>
          <linearGradient
            id="ill2-b"
            x1="242.5"
            x2="242.5"
            y1="88"
            y2="467"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={stopColor} stopOpacity=".64" />
            <stop offset="1" stopColor={stopColor} stopOpacity="0" />
          </linearGradient>
          <filter
            id="ill2-a"
            width="520"
            height="576"
            x="0"
            y="0"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_129_124" stdDeviation="44" />
          </filter>
        </defs>
      </motion.svg>
    </>
  );
}