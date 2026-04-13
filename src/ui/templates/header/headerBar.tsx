"use client";

import { useEffect, useState } from "react";
//npm
import Link from "next/link";
import Image from "next/image";

//components
import RoundBtn from "../../components/btns/roundBtn";

//styles
import "./headerBar.css";

//functions
import { setOverlay, removeHeader } from "./functions";

export default function HeaderBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div 
      id="header-bar" 
      style={{ 
        transform: isVisible ? "translateY(0)" : "translateY(-100px)",
        transition: "transform 0.3s ease-in-out"
      }}
    >
      <nav id="child-header" className="no-max-width">
        <Link href="/" onClick={removeHeader}>
          <Image
            src="/img/main-logo.svg"
            alt="Logo principal du portfolio Léo Murail"
            width={60}
            height={30}
          />
        </Link>

        <div className="right">
          <div onClick={setOverlay} id="menu-btn" style={{ cursor: "pointer" }}>
            <RoundBtn
              className="burger-menu header-burger"
              path="#"
              icon="burger-menu"
              size="s"
              display={true}
            />
            <RoundBtn
              className="cross-menu header-burger"
              path="#"
              icon="cross-menu"
              size="s"
              display={false}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
