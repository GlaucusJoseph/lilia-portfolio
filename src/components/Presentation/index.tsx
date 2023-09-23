import React from "react";
import "./index.css";
import lilianPicture1 from "../../assets/img/lilian1.jpg";
import lilianPicture2 from "../../assets/img/lilian2.jpg";

const Presentation = () => {
  return (
    <section aria-label="About Section">
      <div className="container presentation-box">
        <div className="left-image">
          <img src={lilianPicture1} alt="Imagen 1" />
        </div>
        <div className="right-image">
          <img src={lilianPicture2} alt="Imagen 1" />
        </div>
        <div className="text-section">
          <p>
            Aquí puedes colocar tu texto. Este espacio está reservado para
            contenido de texto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
