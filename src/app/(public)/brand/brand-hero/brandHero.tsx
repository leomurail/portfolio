//styles
import "./brandHero.css";

export default function BrandHero() {
  return (
    <section id="brand-hero" className="no-max-width">
      <div className="container">
        <div className="content-hero">
          <div className="titles">
            <h2 className="title-small">Ma marque</h2>
            <h1 className="title-large">Cliver</h1>
          </div>
          <p className="description">
            Cliver est une marque de streetwear avant-gardiste qui allie qualité premium 
            et souci d'évolution personnelle. Découvrez l'univers de ma marque, 
            ses créations et sa vision.
          </p>
        </div>
      </div>
    </section>
  );
}
