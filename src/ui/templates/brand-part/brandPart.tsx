//components
import Btn from "@/ui/components/btns/btn";
import Icon from "@/ui/components/illu/icon";

//fonts
import { fonts } from "@/lib/fonts";

//styles
import "./brandPart.css";

const imgBackgroundWelcomeCliverWebsite = "/img/brand/cliver-bg.png";
const imgBackgroundWelcomeCliverWebsite1 = "/img/brand/cliver-bg-alt.png";
const imgWhitePlanDeTravail14X1 = "/img/brand/cliver-logo.png";
const imgSelfEvolutionBegins = "/img/brand/self-evolution-begins.svg";
const imgCliver1 = "/img/brand/cliver-model.png";
const imgMannequinImage3 = "/img/brand/cliver-product-1.png";
const imgMannequinImage4 = "/img/brand/cliver-product-2.png";

export default function BrandPart() {
  return (
    <section id="brand-part" className="no-max-width">
      <div className="container">
        <h2>Ma marque</h2>
        <div className="bento-grid">
          <div className="bento-item item-hero">
            <img src={imgBackgroundWelcomeCliverWebsite} alt="Background" className="bg-image" />
            <div className="logo-overlay">
              <img src={imgWhitePlanDeTravail14X1} alt="CLIVER Logo" className="main-logo" />
              <img src={imgSelfEvolutionBegins} alt="Self Evolution Begins" className="slogan" />
            </div>
          </div>
          <div className="bento-item item-model">
            <img src={imgBackgroundWelcomeCliverWebsite1} alt="Background" className="bg-image" />
            <img src={imgCliver1} alt="Cliver Posing" className="model-image" />
          </div>
          <div className="bento-item item-collection">
            <img src={imgBackgroundWelcomeCliverWebsite} alt="Background" className="bg-image" />
            <div className="collection-content">
              <p className={fonts.imperial.className}>Première collection</p>
              <div className="product-display">
                <img src={imgMannequinImage3} alt="Product 1" />
                <img src={imgMannequinImage4} alt="Product 2" />
              </div>
            </div>
          </div>
        </div>
        <div className="brand-actions">
          <Btn path="https://cliver.fr" color="blue">cliver.fr</Btn>
          <Btn path="https://instagram.com/cliverproject" color="blue">
            <Icon picked="instagram" />
          </Btn>
        </div>
      </div>
    </section>
  );
}
