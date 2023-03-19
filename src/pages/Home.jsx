import { useContext } from "react";
import { ThemeContext } from "../Context/Context";
import myResume from "../data/myresume.pdf";
import { motion } from "framer-motion";
import { slideHome, slideInHome } from "../variants";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        theme === "dark" ? "bg-darkSecondary" : "bg-lightSecondary"
      } w-screen h-screen flex flex-col items-center justify-center relative`}
    >
      <div className="md:mt-12 w-[70%]">
        <motion.p
          variants={slideInHome}
          initial="initial"
          animate="animate"
          className={`text-${theme}-500 text-sm text-left md:text-xl font-light`}
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          variants={slideHome}
          initial="initial"
          animate="animate"
          className={`font-stretch ${
            theme === "dark" ? "text-dark-200 " : "text-light-500"
          } uppercase text-3xl text-left md:text-7xl mt-5`}
        >
          toomiwa
        </motion.h1>
        <motion.p
          variants={slideHome}
          initial="initial"
          animate="animate"
          className={`${
            theme === "dark" ? "text-dark-100 " : "text-light-300 "
          } font-medium md:font-semibold  text-2xl text-left md:text-7xl mt-3`}
        >
          I build stunning websites.
        </motion.p>
        <motion.p
          variants={slideInHome}
          initial="initial"
          animate="animate"
          className={`${
            theme === "dark" ? "text-lightSecondary" : "text-light-500"
          } md:w-[500px] px-2 md:px-0 text-left text-sm md:text-lg font-light mt-5`}
        >
          I'm a frontend developer specialize in building and occasionally
          designing exceptional digital experiences.
        </motion.p>
        <motion.div
          variants={slideInHome}
          initial="initial"
          animate="animate"
          className="space-y-6 md:space-x-8 mt-6 text-left"
        >
          <button
            className={`btn rounded text-center font-medium relative hover:scale-95 duration-200 ${
              theme === "dark"
                ? "darkBtn text-darkSecondary"
                : "bg-light-500 text-lightSecondary lightBtn"
            }`}
          >
            <a
              href={myResume}
              target="_blank"
              rel="noreferrer"
              className="block w-[150px] py-4 md:w-[180px] md:py-5"
            >
              View Resumé
            </a>
          </button>
          <button
            className={`rounded text-center font-medium border-2 ${
              theme === "dark"
                ? "text-dark-500 border-dark-500 dBtn"
                : "border-light-500 text-light-500 lBtn hover:text-light-100"
            }`}
          >
            <a
              href="https://github.com/tomiwa-code"
              target="_blank"
              rel="noreferrer"
              className="block w-[150px] py-4 md:w-[180px] md:py-5 overflow-hidden v-btn"
            >
              View GitHub
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
