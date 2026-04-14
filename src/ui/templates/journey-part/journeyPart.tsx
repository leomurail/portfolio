"use client";

// npm
import { useRef, useState, useEffect } from "react";
import { useScroll } from "motion/react";

// components
import JourneyContent from "./content/journeyContent";
import HScroll from "../anim/h-scroll/hScroll";

export default function JourneyPart() {
  const target = useRef<HTMLDivElement>(null);
  const [dynamicHeight, setDynamicHeight] = useState(3000);

  useEffect(() => {
    const container = target.current?.querySelector(".all-dates .scroll-container");
    if (!container) return;

    const updateHeight = () => {
      const horizontalScrollDistance = container.scrollWidth - window.innerWidth;
      setDynamicHeight(horizontalScrollDistance + window.innerHeight);
    };

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(container);
    window.addEventListener("resize", updateHeight);

    // Premier calcul
    updateHeight();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start start", "end end"],
  });

  return (
    <HScroll height={dynamicHeight} ref={target}>
      <JourneyContent scrollY={scrollYProgress} target={target} />
    </HScroll>
  );
}
