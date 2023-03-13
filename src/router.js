import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Cause from "./components/Cause";
import Donate from "./components/Donate";
import Layout from "./components/Layout";

const causes = [
  {
    id: 1,
    imgURL:
      "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/filantropia/FotoParaMiniaturaEquidadSocial.jpg",
    title: "Equidad social e inclusión",
  },
  {
    id: 2,
    imgURL:
      "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/filantropia/FotoParaMiniaturaCienciaTecnologiaInnovacion.jpg",
    title: "Ciencia, tecnología e innovación",
  },
  {
    id: 3,
    imgURL:
      "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/filantropia/FotoParaMiniaturaTransformacionHumanista.jpg",
    title: "Transformación humanista",
  },
  {
    id: 4,
    imgURL:
      "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/Paginas/inicio/inspiramos.jpg",
    title: "Inspiración - voluntariado",
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/" + causes[0].id,
        element: <Cause title={causes[0].title} imgURL={causes[0].imgURL} />,
      },
      {
        path: "/" + causes[1].id,
        element: <Cause title={causes[1].title} imgURL={causes[1].imgURL} />,
      },
      {
        path: "/" + causes[2].id,
        element: <Cause title={causes[2].title} imgURL={causes[2].imgURL} />,
      },
      {
        path: "/" + causes[3].id,
        element: <Cause title={causes[3].title} imgURL={causes[3].imgURL} />,
      },
      {
        path: "/donate",
        element: <Donate />,
      },
    ],
  },
]);

export default router;
