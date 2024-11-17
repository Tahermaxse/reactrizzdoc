"use client"
import DotPatternCode from "./DotPatternCode";
import { cn } from "@/lib/utils";
export function DotPattern() {
    return (    
        <DotPatternCode
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          )}

        />
    );
  }
export default DotPattern