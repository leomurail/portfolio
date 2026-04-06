"use client";

//npm
import { MotionValue } from "motion";
import { motion, useTransform } from "motion/react";
import { useState, useEffect, RefObject } from "react";

//components
import Btn from "@/ui/components/btns/btn";
import Icon from "@/ui/components/illu/icon";
import TimelineDate from "@/ui/components/timeline-date/timelineDate";

//fonts
import { fonts } from "@/lib/fonts";

//styles
import "./journeyContent.css";

const imgEllipse2 = "https://www.figma.com/api/mcp/asset/c2d5a128-2ee2-402e-9733-487a4f80fb1e";

interface props {
  scrollY: MotionValue<number>;
  target: RefObject<HTMLElement | null>;
}

function TotemIcon() {
  return (
    <div className="totem-icon">
      <div className="totem-container">
        <img src={imgEllipse2} alt="Totem" className="totem-bg" />
        <div className="totem-accent blue-rect" />
        <div className="totem-accent blue-slash-right" />
        <div className="totem-accent blue-slash-left" />
      </div>
    </div>
  );
}

export default function JourneyContent({ scrollY, target }: props) {
  const [xRange, setXRange] = useState(0);

  const x = useTransform(scrollY, [0, 1], [0, -xRange]);

  useEffect(() => {
    const el = target.current?.querySelector(".all-dates .container");
    
    const updateRange = () => {
      if (el) {
        setXRange(el.scrollWidth - window.innerWidth);
      }
    };

    updateRange();
    window.addEventListener("resize", updateRange);
    return () => window.removeEventListener("resize", updateRange);
  }, [target]);

  return (
    <section id="journey-content" className="no-max-width">
      <div className="journey-wrapper">
        <div className="top desktop">
          <div className="left">
            <h2 className={fonts.montserrat.className}>Mon parcours</h2>
            <p className={"current-period " + fonts.imperial.className}>
              Professionnel
            </p>
          </div>
          <Btn color="blue" path="/about">
            En entier
            <Icon picked="arrow" />
          </Btn>
        </div>
        <div className="all-dates desktop">
          <motion.div className="container" style={{ x }}>
            <TimelineDate
              date="2020-2023"
              title="Lycée Notre-Dame Challans"
              desc="J’ai passé 3 ans en bac général scientifique (Maths, Physique-Chimie, SVT). J’étais très intéressé par ces domaines, et mes notes le reflétaient, car j’avais environ 15 de moyenne générale. Mais à ce moment-là, ma volonté de devenir ingénieur se transformait petit à petit, car je découvrais le monde du digital."
            />
            <TimelineDate
              date="2023"
              title="Rentrée à My Digital School - Bachelor cycle web et multimédia"
              desc="Alors que tout le monde se dirigeait vers PARCOURSUP, j’ai décidé d’emprunter un chemin différent. J’ai donc visité des écoles dans le domaine qui me plaisait, et c’est ainsi que j’ai découvert My Digital School. Je suis maintenant en Bachelor 2 dans cette école."
            />
            <TimelineDate
              date="Janvier 2024"
              title="Création de ma micro-entreprise - Pour ma marque de vêtements CLIVER"
              desc="Mon premier projet professionnel concret est ma marque de vêtements nommée CLIVER, une marque de streetwear dont le slogan est Self Evolution Begins, l’évolution de soi. Autrement dit, c’est une marque basée sur le développement personnel dans l’univers du streetwear."
            />
          </motion.div>
        </div>
        <TotemIcon />
      </div>
    </section>
  );
}
