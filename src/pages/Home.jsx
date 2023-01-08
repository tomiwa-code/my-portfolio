import { motion } from "framer-motion";
import myresume from "../data/myresume.pdf";
import { madre, slideInSpring } from "../variants";

const Home = () => {
  return (
    <div className="bg-secondary w-screen h-screen flex flex-col justify-center items-center relative">
      <motion.div
        variants={madre}
        initial="initial"
        animate="animate"
        className="z-20 text-center space-y-3 md:mt-12"
      >
        <motion.p
          variants={slideInSpring("right")}
          className="text-white text-xs md:text-sm font-light"
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          variants={slideInSpring("left")}
          className="font-stretch text-primary uppercase text-2xl md:text-4xl"
        >
          toomiwa
        </motion.h1>
        <motion.p
          variants={slideInSpring("right")}
          className="text-white w-2/3 mx-auto text-center text-xs md:text-sm font-light"
        >
          I'm a software developer specialize in building and occasionally
          designing exceptional digital experiences.
        </motion.p>
        <motion.div
          variants={slideInSpring("left")}
          className="flex flex-col md:block p-4 space-y-6 md:space-x-8 buttons"
        >
          <a href={myresume} download={"My Resume"}>
            <button
              className="btn-flip w-36 text-sm md:w-40 h-10 md:h-12 relative text-center font-medium"
              data-back="My Resumé"
              data-front="Download CV"
            ></button>
          </a>
          <a href="https://github.com/tomiwa-code">
            <button
              custom={2.4}
              className="text-primary text-sm w-36 h-12 md:w-40 font-medium view relative"
            >
              <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%" />
              </svg>
              View GitHub
            </button>
          </a>
        </motion.div>
        <motion.div
          variants={slideInSpring("right")}
          className="flex items-center justify-center yo relative w-48 h-52 md:w-64 md:h-56 mx-auto"
        >
          <div className="bg-primary holder w-full h-full overflow-hidden hover:cursor-crosshair">
            <img
              src="https://res.cloudinary.com/dgdoymhtj/image/upload/v1673184072/my-portfolio/yo_ul1rh2.png"
              alt="yo"
              className="w-64 h-56 object-cover duration-300"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
