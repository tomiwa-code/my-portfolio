import yo from "../img/yo.png";
import { motion } from "framer-motion";
import {
  fadeIn,
  slideInUpDown,
  slideAcross,
  fade,
  exits,
  enter,
} from "../variants";

const Home = () => {
  return (
    <motion.div
      variants={enter}
      initial="initial"
      animate="animate"
      className="bg-secondary w-screen h-screen flex flex-col justify-center items-center relative"
    >
      <motion.div
        variants={exits}
        exit="exit"
        className="z-20 text-center space-y-3 md:mt-12"
      >
        <motion.p
          variants={slideInUpDown("top")}
          initial="initial"
          animate="animate"
          custom={1.7}
          className="text-white text-xs md:text-sm font-light"
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          variants={slideInUpDown("bottom")}
          initial="initial"
          animate="animate"
          custom={2.5}
          className="font-stretch text-primary uppercase text-2xl md:text-4xl"
        >
          toomiwa
        </motion.h1>
        <motion.p
          variants={fade}
          initial="initial"
          animate="animate"
          custom={2.9}
          className="text-white w-2/3 mx-auto text-center text-xs md:text-sm font-light"
        >
          I'm a software developer specialize in building and occasionally
          designing exceptional digital experiences.
        </motion.p>
        <div className="flex flex-col md:block p-4 space-y-6 md:space-x-8 buttons">
          <a href="github">
            <motion.button
              href="myResume"
              variants={fadeIn("left")}
              initial="initial"
              animate="animate"
              custom={2.2}
              className="btn-flip w-36 text-sm md:w-40 h-10 md:h-12 relative text-center font-medium"
              data-back="My Resumé"
              data-front="Download CV"
            ></motion.button>
          </a>
          <a href="github">
            <motion.button
              href="myResume"
              variants={fadeIn("right")}
              initial="initial"
              animate="animate"
              custom={2.4}
              className="text-primary text-sm w-36 h-12 md:w-40 font-medium view relative"
            >
              <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%" />
              </svg>
              View GitHub
            </motion.button>
          </a>
        </div>
        <div className="flex items-center justify-center yo relative w-48 h-52 md:w-64 md:h-56 mx-auto">
          <motion.div
            variants={slideAcross}
            animate="animate"
            className="bg-primary h-full md:w-64 md:h-56 absolute"
          ></motion.div>
          <motion.div
            variants={fade}
            initial="initial"
            animate="animate"
            className="bg-primary holder w-full h-full overflow-hidden hover:cursor-crosshair"
          >
            <img
              src={yo}
              alt="yo"
              className="w-64 h-56 object-cover duration-300"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
