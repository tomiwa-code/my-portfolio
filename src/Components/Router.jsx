import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Layout from "./Layout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "projects/",
        element: <Projects />,
      },
      {
        path: "about/",
        element: <About />,
      },
      {
        path: "contact/",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
