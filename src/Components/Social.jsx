import { FiGithub } from "react-icons/fi";
import { TfiLinkedin } from "react-icons/tfi";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Social = () => {
  const classes =
    "text-md md:text-xl text-secondary rounded-full bg-white block relative w-9 h-9 flex items-center justify-center duration-150";

  return (
    <motion.div
      variants={fadeIn("right")}
      initial="initial"
      animate="animate"
      custom={1.5}
      className="fixed z-50 bottom-0 right-3 md:right-12 flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center justify-between h-52 mb-8">
        <li className="list-none social">
          <a href="https://github.com/tomiwa-code" className={classes}>
            <FiGithub />
          </a>
        </li>
        <li className="list-none social">
          <a href="https://www.linkedin.com/in/ayoola-ogunbase-96694715b" className={classes}>
            <TfiLinkedin />
          </a>
        </li>
        <li className="list-none social">
          <a href="https://www.twitter.com/crownkvnq" className={classes}>
            <BsTwitter />
          </a>
        </li>
        <li className="list-none social">
          <a href="https://www.instagram.com/crown.kvnq" className={classes}>
            <BsInstagram />
          </a>
        </li>
      </div>
      <div className="w-0.5 bg-lightGrey opacity-60 h-28 hidden md:block"></div>
    </motion.div>
  );
};

export default Social;
