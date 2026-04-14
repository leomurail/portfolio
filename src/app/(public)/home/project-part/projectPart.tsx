//npm
import { Suspense } from "react";

//components
import ProjectCat from "./projectCat";
import Btn from "@/ui/components/btns/btn";
import Icon from "@/ui/components/illu/icon";
import SkeletonLoading from "@/ui/components/loading/skeleton-loading/skeletonLoading";

//constants
import { catsData } from "./constants";

//styles
import "./projectPart.css";

export default function ProjectPart() {
  const projectCats = Object.keys(catsData).map((param) => {
    const key = param as keyof typeof catsData;
    return (
      <li key={key} className="project-cat-li">
        <Suspense
          fallback={
            <SkeletonLoading
              width="90vw"
              height="440px"
              borderRadius={20}
              className="center"
            />
          }
        >
          <ProjectCat key={key} cat={key} />
        </Suspense>
      </li>
    );
  });

  return (
    <section id="project-part" className="project-part no-max-width">
      <div className="container">
        <div className="top desktop">
          <h2>MES PROJETS</h2>
          <Btn path="/projects" color="blue">
            Tous les projets <Icon picked="eye" size={20} />
          </Btn>
        </div>
        <ul className="project-cats">{projectCats}</ul>
      </div>
    </section>
  );
}
