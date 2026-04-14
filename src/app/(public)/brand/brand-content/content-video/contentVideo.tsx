//components
import Iframe from "@/ui/components/iframe/iframe";
import Image from "next/image";

//styles
import "./contentVideo.css";

const items = [
  {
    type: "image",
    src: "/img/pages/brand/products/cliver-tee-green.webp",
  },
  {
    type: "video",
    src: "https://www.youtube.com/embed/sVH37zZR8j8",
  },
  {
    type: "image",
    src: "/img/pages/brand/products/cliver-sweatshirt-white.webp",
  },
  {
    type: "video",
    src: "https://www.youtube.com/embed/EPttaijosF0",
  },
  {
    type: "image",
    src: "/img/pages/brand/products/cliver-hoodie-grey.webp",
  },
  {
    type: "video",
    src: "https://www.youtube.com/embed/oD46i8WfHAQ",
  },
];

export default function ContentVideo() {
  return (
    <section className="bottom content-video">
      <div className="container">
        <div className="content-video-header">
          <h3>Brand content</h3>
          <p className="sub-title">@made by @leomurail</p>
        </div>
        <div className="content-video-grid">
          {items.map((item, index) => (
            <div key={index} className="grid-item">
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={`Product image ${index}`}
                  width={800}
                  height={800}
                  className="grid-image"
                />
              ) : (
                <Iframe src={item.src} height={888} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
