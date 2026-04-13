"use client";

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
  return (
    <div id="header-bar">
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
