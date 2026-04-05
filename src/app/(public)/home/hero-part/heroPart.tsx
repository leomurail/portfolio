//lib
import { fonts } from "@/lib/fonts";

//components
import Btn from "@/ui/components/btns/btn";

//styles
import "./heroPart.css";

export default function heroPart() {
  return (
    <div className="hero-part-wrapper">
      <section id="hero-part">
        <div className="hero-content">
          <div className="title-group">
            <h1 className={`${fonts.imperial.className} name`}>Léo</h1>
            <h2 className="portfolio-text">PORTFOLIO</h2>
          </div>
          <p className="text">
            Je ne suis pas du genre à me contenter de ce que j‘ai déjà, mais
            plutôt à aller plus loin dans mes objectifs. Ma seule raison de rater
            c’est pour mieux faire par la suite.
          </p>
          <div className="buttons">
            <Btn color="dark-grey" path="/about">
              Mon histoire
            </Btn>
            <Btn color="dark-grey" path="/brand">
              Ma marque
            </Btn>
            <Btn color="dark-grey" path="/projects">
              Mes projets
            </Btn>
          </div>
        </div>
      </section>
    </div>
  );
}
