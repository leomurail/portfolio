"use client";

// fonts
import { fonts } from "@/lib/fonts";

// styles
import "./workProcessPart.css";

const imgUntitled1 = "https://www.figma.com/api/mcp/asset/77531be3-9547-40ef-a787-9d410e234759";

export default function WorkProcessPart() {
  return (
    <section id="work-process-part" className="no-max-width">
      <div className="container">
        <div className="process-info">
          <h2 className={`${fonts.montserrat.className} section-title`}>
            Mon process de travail
          </h2>
          <div className="cards-container">
            <div className="process-card">
              <h3>1. Cadrage et Déconstruction</h3>
              <div className="main-text">
                <p>
                  Je décortique le besoin initial pour en extraire les
                  véritables enjeux.
                </p>
              </div>
              <div className="ai-section">
                <span className="ai-tag">Et l’IA dans tout ça ?</span>
                <p className="ai-text">
                  J'utilise l'IA pour m'aider à synthétiser des documentations
                  denses, explorer des angles morts ou générer des questions
                  pour challenger le brief initial.
                </p>
              </div>
            </div>
            {/* Added a second card to match the figma visual stack effect if needed, but for now simple 2 items layout or list */}
            <div className="process-card offset">
               <h3>2. Conception et Design</h3>
              <div className="main-text">
                <p>
                  Je traduis les enjeux en solutions visuelles et fonctionnelles cohérentes.
                </p>
              </div>
              <div className="ai-section">
                <span className="ai-tag">Et l’IA dans tout ça ?</span>
                <p className="ai-text">
                  Génération d'assets, aide à la mise en page et itérations rapides sur les concepts.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="illustration-container">
          <img src={imgUntitled1} alt="Illustration 3D process" />
        </div>
      </div>
    </section>
  );
}
