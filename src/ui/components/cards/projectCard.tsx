//npm
import Image from "next/image";

//components
import Tag from "../tags/tag";
import Btn from "../btns/btn";

//css
import "./projectCard.css";

export interface props {
  portrait?: boolean;
  size?: "m" | "l";
  title?: string;
  tags?: {
    name: string;
    slug: string;
  }[];
  thumbnail?: {
    alt: string;
    path: string;
    width: number;
    height: number;
  };
  href: string;
}

const imgVectorEye = "https://www.figma.com/api/mcp/asset/a1706090-2857-4d96-80a8-f0d2d92f8354";

export default function ProjectCard({
  portrait = false,
  size,
  title = "Country Visualizer",
  tags = [
    {
      name: "No tag",
      slug: "no-tag",
    },
  ],
  thumbnail = {
    path: "/img/thumbnails/country-visualizer.webp",
    alt: "placeholder alt",
    width: 360,
    height: 300,
  },
  href = "https://leomurail.com",
}: props) {
  const cssVar = {
    "--background-card-image": "url(" + thumbnail.path + ")",
  } as React.CSSProperties;

  const tagsEl = tags.map((param, index) => (
    <li key={index} className="project-card-tag-item">
      <div className="project-card-tag">
        {param.name}
      </div>
    </li>
  ));

  return (
    <article
      className={`project-card ${size}-size ${portrait ? "portrait" : ""}`}
      style={cssVar}
    >
      {/* Blurred background with gradient */}
      <div className="project-card-bg">
        <div className="project-card-bg-blur"></div>
        <div className="project-card-bg-gradient"></div>
      </div>

      <div className="project-card-content">
        <div className="project-card-info">
          <h4 className="project-card-title">{title}</h4>
          <ul className="project-card-tags-list">
            {tagsEl}
            <li className="project-card-tag-item">
              <div className="project-card-tag">Professionnel</div>
            </li>
          </ul>
        </div>
        <div className="project-card-action">
          <Btn color="glass" path={href} className="project-card-btn">
            <div className="project-card-btn-content">
              <span>Voir</span>
              <img src={imgVectorEye} alt="" className="project-card-btn-icon" />
            </div>
          </Btn>
        </div>
      </div>
    </article>
  );
}
