//components
import HeroPart from "./home/hero-part/heroPart";
import SentencePart from "./home/sentence-part/sentencePart";
import LastProjectPart from "./home/last-project-part/lastProjectPart";
import ProjectPart from "./home/project-part/projectPart";
import JourneyPart from "@/ui/templates/journey-part/journeyPart";
import BrandPart from "@/ui/templates/brand-part/brandPart";
import WorkProcessPart from "./home/work-process-part/workProcessPart";

export default function Page() {
  return (
    <div id="home-page">
      <HeroPart />
      <SentencePart />
      <LastProjectPart />
      <JourneyPart />
      <BrandPart />
      <WorkProcessPart />
      <ProjectPart />
    </div>
  );
}
