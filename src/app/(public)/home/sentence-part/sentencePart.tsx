"use client";
//npm
import {
  useMotionValue,
  useMotionValueEvent,
  useTransform,
  motion,
  useScroll,
  useSpring,
} from "motion/react";
import { useRef } from "react";

//components
import Word from "./word/word";

//functions && var
import { setIndexTop } from "./functions";
import { delay, styles, sentence } from "./constants";

//fonts
import { fonts } from "@/lib/fonts";

//styles
import "./sentencePart.css";

function LooperGroup() {
  const rects = Array.from({ length: 10 }, (_, i) => i);
  return (
    <div className="looper-group">
      {rects.map((i) => (
        <div
          key={i}
          className="rect"
          style={{
            transform: `rotate(${i * 18 - 162}deg)`,
            opacity: i / 10,
          }}
        />
      ))}
    </div>
  );
}

export default function SentencePart() {
  //element
  const sentencePartEl = useRef<HTMLElement | null>(null);

  //motion framer
  const indexTop = useMotionValue(0);
  const { scrollY } = useScroll();

  const rawRotate = useTransform(indexTop, [0, 2, 5, 8], [0, 360, 720, 1080]);
  const rotate = useSpring(rawRotate, {
    stiffness: 50,
    damping: 10,
  });

  //scroll event
  useMotionValueEvent(scrollY, "change", () => {
    const current =
      sentencePartEl.current &&
      setIndexTop(sentencePartEl.current, sentence.nbWords, delay);

    if (current) {
      indexTop.set(current);
    }
  });

  const wordsEl = sentence.words.map((param, index) => {
    return (
      <Word
        key={index}
        styles={styles}
        value={param}
        index={index}
        indexTop={indexTop}
      />
    );
  });

  return (
    <motion.section id="sentence-part" ref={sentencePartEl} className="no-max-width">
      <div className="container">
        <h2 className={fonts.montserrat.className}>
          En une <span className={fonts.imperial.className}>phrase</span>
        </h2>
        <ul className="sentence">
          {wordsEl}
        </ul>
        <motion.div className="looper-container" style={{ rotate }}>
          <LooperGroup />
        </motion.div>
      </div>
    </motion.section>
  );
}
