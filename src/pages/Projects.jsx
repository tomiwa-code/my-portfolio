import { motion } from "framer-motion";
import { slide, slideIn, exits } from "../variants";
import { projectArr } from "../data/projects";
import HoverVideoPlayer from "react-hover-video-player";
import { useContext } from "react";
import { ThemeContext } from "../Context/Context";

const Projects = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <motion.div
      variants={exits}
      exit="exit"
      className={`${
        theme === "dark" ? "bg-darkSecondary" : "bg-lightSecondary"
      } relative pt-36`}
    >
      <motion.div
        variants={slide}
        initial="initial"
        animate="animate"
        className="text-center space-y-3 w-96 mx-auto mb-14"
      >
        <p
          className={`${
            theme === "dark"
              ? "text-lightSecondary font-light"
              : "text-light-500"
          } text-xs md:text-sm`}
        >
          Some of the
        </p>
        <h1
          className={`font-stretch ${
            theme === "dark" ? "text-dark-500 font-light" : "text-light-500"
          } uppercase text-2xl md:text-4xl`}
        >
          proojects
        </h1>
        <p
          className={`${
            theme === "dark"
              ? "text-lightSecondary font-light"
              : "text-light-500"
          } text-xs md:text-sm`}
        >
          I've worked on so far
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 w-full md:w-9/12 lg:w-2/4 gap-y-12 md:gap-x-10 md:gap-y-14 lg:gap-16 mx-auto mb-20">
        {projectArr.map(({ id, name, utilities, video, img, link1, link2 }) => {
          return (
            <motion.div
              variants={slideIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
              className={`w-60 md:w-64 lg:w-[295px] ${
                theme === "dark" ? "bg-lightSecondary" : "bg-white"
              }  text-lightSecondary rounded-xl overflow-hidden mx-auto`}
              key={id}
            >
              <div className="w-full h-36 md:h-40 lg:h-44 overflow-hidden cursor-pointer">
                <HoverVideoPlayer
                  style={{
                    height: "101%",
                  }}
                  videoSrc={video}
                  pausedOverlay={
                    <img
                      src={img}
                      alt="cover"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  }
                  loadingOverlay={
                    <div className="loading-overlay">
                      <div className="loading-spinner" />
                    </div>
                  }
                  restartOnPaused
                  unloadVideoOnPaused
                  disablePictureInPicture={false}
                  playbackStartDelay={500}
                />
              </div>
              <div className="pt-3 pb-5 px-3 md:px-6">
                <h3
                  className={`capitalize ${
                    theme === "dark" ? "text-darkSecondary" : "text-light-500"
                  }  text-md md:text-lg text-center font-bold md:font-medium mt-1`}
                >
                  {name}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm text-center mt-2">
                  {utilities}
                </p>
                <div className="flex justify-evenly md:justify-between items-center mt-5">
                  <a
                    href={link1}
                    target="_blank"
                    rel="noreferrer"
                    className={`block ${
                      theme === "dark" ? "bg-darkSecondary" : "bg-light-500"
                    } text-lightSecondary text-sm  rounded w-24 lg:w-28 h-10 leading-10 text-center`}
                  >
                    View site
                  </a>
                  <a
                    href={link2}
                    target="_blank"
                    rel="noreferrer"
                    className={`block ${
                      theme === "dark"
                        ? "border-darkSecondary text-darkSecondary"
                        : "border-light-500 text-light-500"
                    } border font-medium text-sm  rounded w-24 lg:w-28 h-10 leading-10 text-center`}
                  >
                    View code
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      <p className="text-xs text-gray-400 pb-12 md:pb-20 text-center w-2/4 mx-auto">
        Let me handle your projects and you'll be amazed.
      </p>
    </motion.div>
  );
};

export default Projects;
