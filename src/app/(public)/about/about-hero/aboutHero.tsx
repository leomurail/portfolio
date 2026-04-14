//styles
import "./aboutHero.css";

export default function AboutHero() {
  return (
    <section id="about-hero" className="no-max-width">
      <div className="desktop container-hero">
        <div className="content-hero">
          <div className="titles">
            <h2 className="title-small">À propos</h2>
            <h1 className="title-large">Mon histoire</h1>
          </div>
          <p className="description">
            Je m'appelle Léo Murail et voici comment mon aventure a commencé. 
            Découvrez mon parcours, mes compétences et ma passion pour le digital.
          </p>
        </div>
      </div>
    </section>
  );
}
