//components
import Icon from "@/ui/components/illu/icon";
import ProjectCard from "@/ui/components/cards/projectCard";
import StrateSlider from "@/ui/templates/sliders/card-slider/strateSlider";
import Btn from "@/ui/components/btns/btn";

//const
import { catsData } from "./constants";

//db
import prisma from "@/lib/prisma";

//styles
import "./projectCat.css";

//type
interface props {
  cat: keyof typeof catsData;
}

export default async function ProjectCat({ cat }: props) {
  const current = catsData[cat];

  const data = await prisma.projects.findMany({
    where: {
      category_id: current.category_id,
    },
    select: {
      name: true,
      slug: true,
      url: true,
      desc: true,
      other_url: true,
      thumbnail: {
        select: {
          path: true,
          width: true,
          height: true,
          alt: true,
        },
      },
      category: {
        select: {
          name: true,
        },
      },
      tags_join: {
        select: {
          tags: {
            select: {
              name: true,
              slug: true,
            },
          },
        },
      },
    },
  });

  let pickedIcon = "";

  switch (current.slug) {
    case "web-development":
      pickedIcon = "code-editing";
      break;
    case "print-design":
      pickedIcon = "print-design";
      break;
    case "web-design":
      pickedIcon = "web-design";
      break;
  }

  if (data.length === 0) {
    return (
      <div className="project-cat">
        <div className="desktop title">
          {pickedIcon && <Icon size={45} picked={pickedIcon} />}
          <h3>{current.title}</h3>
        </div>
        <div className="no-data">
          <p>Aucun projet trouvé dans cette catégorie.</p>
        </div>
      </div>
    );
  }

  const projects = data.map((project, index) => (
    <ProjectCard
      key={index}
      title={project.name}
      href={"/projects/" + project.slug}
      tags={project.tags_join.map((item) => item.tags)}
      thumbnail={project.thumbnail}
    />
  ));

  return (
    <div className="project-cat">
      <div className="desktop title">
        {pickedIcon && <Icon size={45} picked={pickedIcon} />}
        <h3>{current.title}</h3>
      </div>
      <StrateSlider step={300}>{projects}</StrateSlider>
      <section className="min-width">
        <Btn path="/projects" color="grey">
          Voir plus
        </Btn>
      </section>
    </div>
  );
}
