"use client";

// npm
import { useRef, Suspense, useState, useEffect } from "react";
import { MotionValue } from "motion";
import { motion, useScroll, useTransform } from "motion/react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

// components
import Star from "./star";
import LoaderThree from "@/ui/components/3D/loader/loaderThree";

// constants
import { PROCESS_STEPS } from "./constants";

// styles
import "./workProcessPart.css";

interface CardProps {
  step: typeof PROCESS_STEPS[0];
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  isMobile: boolean;
}

function ProcessCard({ step, index, total, scrollYProgress, isMobile }: CardProps) {
  const stepSize = 1 / (total + 1);
  const start = index * stepSize;
  const nextStepStart = (index + 1) * stepSize;
  
  const yScroll = useTransform(scrollYProgress, [start, start + stepSize * 0.5], [100, 0]);
  const opacityScroll = useTransform(scrollYProgress, [start, start + stepSize * 0.5], [0, 1]);
  
  const scale = useTransform(scrollYProgress, [nextStepStart, 1], [1, 0.85]);
  const filter = useTransform(scrollYProgress, [nextStepStart, 1], ["brightness(1)", "brightness(0.3)"]);

  const mobileVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        delay: 0.1 
      } 
    }
  };

  return (
    <motion.div
      className="process-card"
      style={!isMobile ? {
        y: yScroll,
        opacity: opacityScroll,
        scale,
        filter,
        top: `${index * 25}px`,
        zIndex: index + 1,
      } : {}}
      variants={isMobile ? mobileVariants : undefined}
      initial={isMobile ? "hidden" : undefined}
      whileInView={isMobile ? "visible" : undefined}
      viewport={isMobile ? { once: true, amount: 0.2 } : undefined}
    >
      <h3>{step.title}</h3>
      <div className="main-text">
        <p>{step.description}</p>
      </div>
      <div className="ai-section">
        <span className="ai-tag">{step.aiTag}</span>
        <p className="ai-text">{step.aiText}</p>
      </div>
    </motion.div>
  );
}

export default function WorkProcessPart() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="work-process-part" className="no-max-width" ref={containerRef}>
      {/* 
         On crée un wrapper sticky qui contient tout (3D + Cartes).
         Ce wrapper reste en haut pendant les 400vh de scroll.
      */}
      <div className="sticky-wrapper">
        {!isMobile && (
          <div className="canvas-wrapper">
            <Canvas className="star-canvas-full">
              <Suspense fallback={<LoaderThree />}>
                <Star scrollYProgress={scrollYProgress} />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
                <Environment preset="city" />
                <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
                <EffectComposer>
                  <Bloom luminanceThreshold={0.2} mipmapBlur intensity={1.5} radius={0.4} />
                </EffectComposer>
              </Suspense>
            </Canvas>
          </div>
        )}

        <div className="container">
          <div className="process-info">
            <h2 className="section-title">
              Mon process de travail
            </h2>
            <div className="cards-container">
              {PROCESS_STEPS.map((step, index) => (
                <ProcessCard
                  key={step.id}
                  step={step}
                  index={index}
                  total={PROCESS_STEPS.length}
                  scrollYProgress={scrollYProgress}
                  isMobile={isMobile}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
