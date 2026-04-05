//npm
import Link from "next/link";

//fonts
import { fonts } from "@/lib/fonts";

//styles
import "./footer.css";

export default function Footer() {
  return (
    <section id="footer" className="no-max-width">
      <div className="container">
        <div className="main-footer-content">
          <div className="logo-section">
            <h1 className={`${fonts.imperial.className} footer-name`}>Léo</h1>
            <div className="portfolio-group">
              <h2 className="portfolio-title">PORTFOLIO</h2>
              <h2 className="portfolio-title mirror">PORTFOLIO</h2>
            </div>
          </div>
          <div className="links-section desktop">
             <div className="item">
              <h3>Professionnel</h3>
              <Link href="/projects">Projets réalisés</Link>
              <Link href="/about">Mon parcours</Link>
            </div>
            <div className="item">
              <h3>En savoir plus</h3>
              <Link href="/contact">Contact</Link>
              <Link href="/about">À propos</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
           <p>© Créé par Léo Murail. Tous droits réservés - Mentions Légales - 2026</p>
        </div>
      </div>
    </section>
  );
}
