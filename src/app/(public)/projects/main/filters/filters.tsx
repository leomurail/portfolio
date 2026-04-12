"use client";

//components
import Btn from "@/ui/components/btns/btn";

//styles
import "./filters.css";

//types
import { Category } from "../../type";

interface props {
  categories: Category[];
  setCurrent: (param: string) => void;
  current: string;
}

const CATEGORY_ICONS: Record<string, string> = {
  "developpement-web": "https://www.figma.com/api/mcp/asset/8e666b72-8ae8-48d6-935d-25a267d698e5",
  "design-web": "https://www.figma.com/api/mcp/asset/6fcd4eaa-6f4b-475d-ac25-6437f1e5f261",
  "design-print": "https://www.figma.com/api/mcp/asset/5bbf2e9b-9e92-44df-8957-2e6c2443c240",
};

export default function Filters({ categories, setCurrent, current }: props) {
  const filterBtns = categories.map((param, index) => {
    const isSelected = current === param.slug;

    return (
      <li className={`filter-item ${isSelected ? "selected" : ""}`} key={index}>
        <Btn
          path={`#${param.slug}`}
          color="dark-grey"
          onClick={() => {
            setCurrent(param.slug);
          }}
        >
          <div className="filter-btn-content">
            <span className="filter-btn-name">{param.name}</span>
            {CATEGORY_ICONS[param.slug] && (
              <div className="filter-btn-icon-wrapper">
                <img src={CATEGORY_ICONS[param.slug]} alt="" className="filter-btn-icon" />
              </div>
            )}
          </div>
        </Btn>
      </li>
    );
  });

  return (
    <div className="filters-container">
      <ul className="filters-list">{filterBtns}</ul>
    </div>
  );
}
