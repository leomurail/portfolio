//components
import AboutHero from "./about-hero/aboutHero";
import HistoryPart from "./history-part/historyPart";
import SkillsPart from "./skills-part/skillsPart";
import TotemsPart from "./totems-part/totemsPart";
import JourneyPart from "@/ui/templates/journey-part/journeyPart";
import MorePart from "./more-part/morePart";

export default function Page() {
  return (
    <section id="about" className="no-max-width">
      <AboutHero />
      <HistoryPart />
      <SkillsPart />
      <TotemsPart />
      <JourneyPart />
      <MorePart />
    </section>
  );
}
