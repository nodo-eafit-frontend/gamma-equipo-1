import React from "react";
import CauseItem from "./CauseItem";

const causes = [
  {
    id: 1,
    imgURL:
      "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/filantropia/FotoParaMiniaturaEquidadSocial.jpg",
    title: "Equidad social e inclusión",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aliquid voluptas inventore iste quasi voluptateseligendi velit recusandae. Natus, nam ut consequatur odio provident placeat eaque illo dolorum architecto sit.",
  },
  {
    id: 2,
    imgURL:
      "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/filantropia/FotoParaMiniaturaCienciaTecnologiaInnovacion.jpg",
    title: "Ciencia, tecnología e innovación",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aliquid voluptas inventore iste quasi voluptateseligendi velit recusandae. Natus, nam ut consequatur odio provident placeat eaque illo dolorum architecto sit.",
  },
  {
    id: 3,
    imgURL:
      "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/filantropia/FotoParaMiniaturaTransformacionHumanista.jpg",
    title: "Transformación humanista",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aliquid voluptas inventore iste quasi voluptateseligendi velit recusandae. Natus, nam ut consequatur odio provident placeat eaque illo dolorum architecto sit.",
  },
  {
    id: 4,
    imgURL:
      "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/Paginas/inicio/inspiramos.jpg",
    title: "Inspiración - voluntariado",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aliquid voluptas inventore iste quasi voluptateseligendi velit recusandae. Natus, nam ut consequatur odio provident placeat eaque illo dolorum architecto sit.",
  },
];

const Causes = () => {
  return (
    <section class="wide-tb-100" id="causas">
      <div class="container">
        <h1 class="heading-main">
          <small>Nuestras</small>
          Causas
        </h1>
        <div class="row">
          {causes?.map((cause) => {
            return (
              <CauseItem
                key={cause.id}
                link={cause.id}
                imgURL={cause.imgURL}
                title={cause.title}
                content={cause.content}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Causes;
