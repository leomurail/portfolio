import Link from "next/link";
import { fonts } from "@/lib/fonts";
import "./footer.css";

export default function Footer() {
  return (
    <section id="footer" className="no-max-width">
      {/* Cercles de fond avec les dimensions exactes du design */}
      <div className="bg-circle circle-1"></div>
      <div className="bg-circle circle-2"></div>
      
      <div className="container">
        <div className="main-footer-content">
          <div className="top-section">
            <div className="logo-area">
               <h1 className={`${fonts.imperial.className} footer-name`}>Léo</h1>
            </div>
            
            <div className="item">
              <h3>Professionnel</h3>
              <Link href="/projects">Projets scolaires</Link>
              <Link href="/brand">Ma marque</Link>
            </div>
            
            <div className="item">
              <h3>En savoir plus</h3>
              <Link href="/contact">Contact</Link>
              <Link href="/about">À propos</Link>
            </div>
          </div>

          <div className="portfolio-group">
            <h2 className="portfolio-title">PORTFOLIO</h2>
            <h2 className="portfolio-title faded-1">PORTFOLIO</h2>
            <h2 className="portfolio-title faded-2">PORTFOLIO</h2>
          </div>
        </div>

        <div className="footer-bottom">
           <p>
             <span className="bold">© Made by Léo Murail</span> - Politique de confidentialité - Mentions légales - 2025
           </p>
        </div>
      </div>
    </section>
  );
}
