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
            width={70}
            height={40}
            style={{ objectFit: "contain" }}
          />
        </Link>

        <div className="right">
          <div onClick={setOverlay} id="menu-btn" style={{ cursor: "pointer" }}>
            <RoundBtn
              className="burger-menu"
              path="#"
              icon="burger-menu"
              size="m"
              display={true}
            />
            <RoundBtn
              className="cross-menu"
              path="#"
              icon="cross-menu"
              size="m"
              display={false}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
