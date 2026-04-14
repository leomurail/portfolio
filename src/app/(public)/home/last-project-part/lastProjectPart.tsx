"use client";

// components
import Btn from "@/ui/components/btns/btn";
import Icon from "@/ui/components/illu/icon";

// styles
import "./lastProjectPart.css";

const imgLeoQuiTravaille = "https://www.figma.com/api/mcp/asset/af51ef95-d3d9-49ff-9d70-a2b01eeed51e";

export default function LastProjectPart() {
  return (
    <section id="last-project-part" className="no-max-width">
      <div className="container">
        <div className="last-project-box">
          <div className="image-container">
            <img src={imgLeoQuiTravaille} alt="Léo qui travaille" />
          </div>
          <div className="content">
            <h2>Dernier projet réalisé</h2>
            <div className="category-tag">
              <span>Catégorie</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              finibus dignissim tellus non efficitur. Pellentesque magna mi,
              lacinia nec fermentum id, ultrices sed augue. Pellentesque lorem
              arcu, condimentum et vehicula vitae, vestibulum eu orci. Nunc eu
              lacus imperdiet, porttitor ante sed, placerat orci.
              <br />
              <br />
              Praesent aliquam et eros eu vulputate. Praesent vitae urna feugiat,
              feugiat est vel, aliquam nunc. Ut consequat augue at risus facilisis
              eleifend.
            </p>
            <Btn path="/projects/last" color="blue" className="action-btn">
              Voir le projet <Icon picked="eye" size={20} />
            </Btn>
          </div>
        </div>
      </div>
    </section>
  );
}
