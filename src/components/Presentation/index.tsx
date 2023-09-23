import "./index.css";
import lilianPicture1 from "../../assets/img/lilian1.jpg";
import { useState } from "react";

const Presentation = () => {
  const [activeCard, setActiveCard] = useState("About");

  const sections = ["About", "Premios", "Trabajo", "Arte", "Proyectos"];

  const hoverCard = (title: string) => {
    setActiveCard(title);
  };

  const unhoverCards = () => {
    setActiveCard("About");
  };

  return (
    <section aria-label="About Section">
      <div className="container presentation-box">
        {sections.map((title) => {
          return (
            <div
              className={`image-container ${
                title === activeCard ? "hovered" : ""
              }`}
            >
              <img
                src={lilianPicture1}
                alt="Descripción de la imagen"
                onMouseEnter={() => hoverCard(title)}
                onMouseLeave={unhoverCards}
              />
              <label className="description-text">Your Description Text</label>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Presentation;
