import React from "react";
import "./hero.css";

const imgEllipse3 = "https://www.figma.com/api/mcp/asset/fc757183-2719-4041-8066-c697162e1899";
const imgEllipse4 = "https://www.figma.com/api/mcp/asset/def56071-9c8e-439c-bab2-b1de8a95d2b4";
const imgFlowerBlue = "https://www.figma.com/api/mcp/asset/9635fdd1-ece9-4b2e-b7c5-162e68ceef13";

export default function Hero() {
  return (
    <div className="hero-projects-section no-max-width">
      <div className="hero-inner">
        {/* Absolute Backgrounds */}
        <div className="hero-bg-layer">
          <div className="bg-ellipse ellipse-3">
            <img src={imgEllipse3} alt="" />
          </div>
          <div className="bg-ellipse ellipse-4">
            <img src={imgEllipse4} alt="" />
          </div>
          <div className="bg-flower">
            <img src={imgFlowerBlue} alt="" />
          </div>
        </div>

        {/* Hero Content Box */}
        <div className="hero-content-box">
          <div className="hero-titles">
            <p className="hero-subtitle">Mes projets</p>
            <h1 className="hero-main-title">Professionnels</h1>
          </div>
          <p className="hero-description">
            Découvrez une sélection de mes travaux réalisés dans le cadre professionnel, alliant expertise technique et vision créative.
          </p>
        </div>
      </div>
    </div>
  );
}
