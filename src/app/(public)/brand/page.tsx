//components
import BrandHero from "./brand-hero/brandHero";
import BrandPart from "@/ui/templates/brand-part/brandPart";
import BrandContent from "./brand-content/brandContent";
import AboutBrand from "./about-brand/aboutBrand";

//styles
import "./brand.css";

export default function Page() {
  return (
    <section id="brand" className="no-max-width">
      <BrandHero />
      <BrandPart />
      <BrandContent />
      <AboutBrand />
    </section>
  );
}
