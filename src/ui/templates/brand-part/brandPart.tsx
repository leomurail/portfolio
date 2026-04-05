//components
import Btn from "@/ui/components/btns/btn";
import Icon from "@/ui/components/illu/icon";

//fonts
import { fonts } from "@/lib/fonts";

//styles
import "./brandPart.css";

const imgBackgroundWelcomeCliverWebsite = "https://www.figma.com/api/mcp/asset/ff368927-193c-44c2-bcf6-63f7c6098d0d";
const imgBackgroundWelcomeCliverWebsite1 = "https://www.figma.com/api/mcp/asset/e0a46a10-6ace-401c-b967-58484ca09767";
const imgWhitePlanDeTravail14X1 = "https://www.figma.com/api/mcp/asset/15da23ef-4a34-46f5-b7f5-c3b70dbc3f42";
const imgSelfEvolutionBegins = "https://www.figma.com/api/mcp/asset/e363cf12-93ea-42e2-8c81-0db436676564";
const imgCliver1 = "https://www.figma.com/api/mcp/asset/7d2654b5-6e27-4f52-8e85-0ed9c32ca1cf";
const imgMannequinImage3 = "https://www.figma.com/api/mcp/asset/57a981fa-ced1-49b7-86b5-41b0ac2c7360";
const imgMannequinImage4 = "https://www.figma.com/api/mcp/asset/0aacb364-e394-4816-b7b9-d7652f93a034";

export default function BrandPart() {
  return (
    <section id="brand-part" className="no-max-width">
      <div className="container">
        <h2 className={fonts.montserrat.className}>MA MARQUE</h2>
        <div className="bento">
          <div className="top bento-item">
            <img src={imgBackgroundWelcomeCliverWebsite} alt="Background" className="bg" />
            <div className="logo-container">
              <img src={imgWhitePlanDeTravail14X1} alt="CLIVER Logo" className="main-logo" />
              <img src={imgSelfEvolutionBegins} alt="Self Evolution Begins" className="slogan" />
            </div>
          </div>
          <div className="bottom">
            <div className="left bento-item">
              <img src={imgBackgroundWelcomeCliverWebsite1} alt="Background" className="bg" />
              <img src={imgCliver1} alt="Cliver Posing" className="fg" />
            </div>
            <div className="right bento-item">
              <img src={imgBackgroundWelcomeCliverWebsite} alt="Background" className="bg" />
              <p className={fonts.imperial.className}>Première collection</p>
              <div className="products">
                <img src={imgMannequinImage3} alt="Product 1" />
                <img src={imgMannequinImage4} alt="Product 2" />
              </div>
            </div>
          </div>
        </div>
        <div className="cta bottom">
          <Btn path="https://cliver.fr" color="blue">cliver.fr</Btn>
          <Btn path="https://instagram.com/cliverproject" color="blue">
            <Icon picked="instagram" />
          </Btn>
        </div>
      </div>
    </section>
  );
}
