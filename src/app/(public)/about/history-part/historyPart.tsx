//npm
import Image from "next/image";

//fonts
import { fonts } from "@/lib/fonts";

//styles
import "./historyPart.css";

export default function HistoryPart() {
  return (
    <section id="history" className="no-max-width">
      <div className="desktop container-history">
        <div className="image-wrapper">
          <Image
            src="/img/pages/about/leo-travail.webp"
            alt="Léo Murail travaillant sur son bureau"
            fill
            className="history-img"
          />
        </div>
        <div className="content-box">
          <h3 className={fonts.montserrat.className}>Enchanté, je m'appelle Léo Murail.</h3>
          <p className={fonts.montserrat.className}>
            Mon aventure a commencé en première, en 2022, lorsque j'ai voulu
            créer une application pour composer des tenues. L’application aurait
            dû s’appeler messo, un mélange entre mood et dress. Voici le tout
            premier logo que j’ai réalisé :
          </p>
          <div className="logos-container">
            <div className="logo-item">
              <Image
                src="/img/pages/about/messo-logo-rules.webp"
                alt="Premier logo de Léo Murail fait sur figma avec les règles"
                fill
                className="logo-img-rules"
              />
            </div>
            <div className="logo-item">
              <Image
                src="/img/pages/about/messo-logo.webp"
                alt="Premier logo de Léo Murail fait sur figma"
                fill
                className="logo-img-contain"
              />
            </div>
          </div>
          <p className={fonts.montserrat.className}>
            Dû à mon manque d'expérience en codage, j'ai été forcé à apprendre
            le HTML, CSS, JavaScript et d'autres langages, ce qui m'a ouvert les
            portes du digital : design web/print, développement web, marketing
            digital, et e-commerce. Encore mineur, j'ai profité de ce temps pour
            me former. Mon rêve d'ingénieur a évolué vers le numérique, et j'ai
            rejoint My Digital School pour débuter cette aventure.
          </p>
        </div>
      </div>
    </section>
  );
}
