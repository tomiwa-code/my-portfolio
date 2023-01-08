import { motion } from "framer-motion";
import { slide, slideIn, exits } from "../variants";
import { projectArr } from "../data/projects";
import HoverVideoPlayer from "react-hover-video-player";

const Projects = () => {
  return (
    <motion.div
      variants={exits}
      exit="exit"
      className="relative pt-36"
    >
      <motion.div
        variants={slide}
        initial="initial"
        animate="animate"
        className="z-20 text-center space-y-3 w-96 mx-auto mb-14"
      >
        <p className="text-white text-xs md:text-sm font-light">Some of the</p>
        <h1 className="font-stretch text-primary uppercase text-2xl md:text-4xl">
          proojects
        </h1>
        <p className="text-white text-xs md:text-sm font-light">
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
              viewport={{ once: true }}
              className="w-60 md:w-64 lg:w-72 bg-white rounded-xl overflow-hidden mx-auto"
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
              <div className="pt-3 pb-5 px-3 md:px-6 space-y-2 md:space-y-3">
                <h3 className="capitalize text-secondary text-md md:text-lg text-center font-bold md:font-medium">
                  {name}
                </h3>
                <p className="text-darkGrey text-xs text-center">{utilities}</p>
                <div className="flex justify-evenly md:justify-between items-center">
                  <a
                    href={link1}
                    className="block bg-secondary text-white text-sm  rounded w-24 lg:w-28 h-10 leading-10 text-center"
                  >
                    View site
                  </a>
                  <a
                    href={link2}
                    className="block border border-secondary text-secondary font-medium text-sm  rounded w-24 lg:w-28 h-10 leading-10 text-center"
                  >
                    View code
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      <p className="text-xs text-lightGrey mb-12 md:mb-20 text-center w-2/4 mx-auto">
        Let me handle your projects and you'll be amazed.
      </p>
    </motion.div>
  );
};

export default Projects;
