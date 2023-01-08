import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const loc = useLocation();
  const active = loc.pathname.split("/")[1];

  return (
    <motion.div
      variants={fadeIn("left")}
      initial="initial"
      animate="animate"
      custom={1}
      className="fixed left-0 md:left-6 top-0 z-50 h-screen flex flex-col items-center justify-between"
    >
      <div className="w-0.5 bg-lightGrey h-36 md:h-44 opacity-40 md:opacity-60"></div>
      <div className="h-60 flex flex-col justify-between">
        <li className="list-none navbar -rotate-90">
          <Link
            to={"/contact"}
            className={`text-white text-xs md:text-sm font-light ${
              active === "contact" ? "active" : ""
            }`}
          >
            Contact
          </Link>
        </li>
        <li className="list-none navbar -rotate-90">
          <Link
            to={"/about"}
            className={`text-white text-xs md:text-sm font-light ${
              active === "about" ? "active" : ""
            }`}
          >
            About
          </Link>
        </li>
        <li className="list-none navbar -rotate-90">
          <Link
            to={"/projects"}
            className={`text-white text-xs md:text-sm font-light ${
              active === "projects" ? "active" : ""
            }`}
          >
            Project
          </Link>
        </li>
        <li className="list-none navbar -rotate-90">
          <Link
            to={"/"}
            className={`text-white text-xs font-light md:text-sm ${
              active === "" ? "active" : ""
            } `}
          >
            Home
          </Link>
        </li>
      </div>
      <div className="w-0.5 bg-lightGrey h-36 md:h-44 opacity-40  md:opacity-60"></div>
    </motion.div>
  );
};

export default Navbar;
