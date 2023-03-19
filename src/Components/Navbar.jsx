import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../Context/Context";

const Navbar = () => {
  const loc = useLocation();
  const active = loc.pathname.split("/")[1];
  const { theme } = useContext(ThemeContext);

  return (
    <motion.div
      variants={fadeIn("left")}
      initial="initial"
      animate="animate"
      custom={1}
      className="fixed left-0 md:left-6 top-0 z-50 h-screen flex flex-col items-center justify-between"
    >
      <div
        className={`w-0.5 ${
          theme === "dark" ? "bg-gray-100" : "bg-light-300"
        }  h-36 md:h-44 opacity-40 `}
      ></div>
      <div className="h-60 flex flex-col justify-between">
        <li className="list-none navbar -rotate-90">
          <Link
            to={"/contact"}
            className={`${
              theme === "dark" ? "dark text-lightSecondary font-light" : "light text-light-400"
            } text-xs md:text-sm ${active === "contact" ? "active" : ""}`}
          >
            Contact
          </Link>
        </li>
        <li className="list-none navbar -rotate-90">
          <Link
            to={"/about"}
            className={`${
              theme === "dark" ? "dark text-lightSecondary font-light" : "light text-light-400"
            } text-xs md:text-sm ${active === "about" ? "active" : ""}`}
          >
            About
          </Link>
        </li>
        <li className="list-none navbar -rotate-90">
          <Link
            to={"/projects"}
            className={`${
              theme === "dark" ? "dark text-lightSecondary font-light" : "light text-light-400"
            } text-xs md:text-sm ${active === "projects" ? "active" : ""}`}
          >
            Project
          </Link>
        </li>
        <li className="list-none navbar -rotate-90">
          <Link
            to={"/"}
            className={`${
              theme === "dark" ? "dark text-lightSecondary font-light" : "light text-light-400"
            } text-xs md:text-sm ${active === "" ? "active" : ""} `}
          >
            Home
          </Link>
        </li>
      </div>
      <div
         className={`w-0.5 ${
          theme === "dark" ? "bg-gray-100" : "bg-light-300"
        }  h-36 md:h-44 opacity-40 `}
      ></div>
    </motion.div>
  );
};

export default Navbar;
