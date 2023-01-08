import { motion } from "framer-motion";
import { slide, slideIn, exits } from "../variants";
import { BsPhone } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { skillsArr } from "../data/skills";

const About = () => {
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
        <p className="text-white text-xs md:text-sm font-light">Brief</p>
        <h1 className="font-stretch text-primary uppercase text-2xl md:text-4xl">
          aboout
        </h1>
        <p className="text-white text-xs md:text-sm font-light">Me</p>
      </motion.div>
      <div className="w-full block lg:flex lg:justify-center lg:space-x-12">
        <motion.div
          variants={slideIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="bg-white w-8/12 mx-auto lg:mx-0 lg:w-5/12 md:h-80 overflow-hidden rounded-lg block md:flex items-center"
        >
          <div className="bg-primary w-32 h-32 rounded-full md:rounded-none mx-auto md:mx-0 md:w-2/5 md:h-full overflow-hidden md:overflow-visible mt-6 md:mt-0">
            <img
              src="https://res.cloudinary.com/dgdoymhtj/image/upload/v1673184072/my-portfolio/yo_ul1rh2.png"
              alt="I"
              className="object-cover md:object-cover h-full w-full"
            />
          </div>
          <div className="w-full md:w-3/5 flex flex-col items-center justify-center p-5">
            <p className="text-sm text-secondary text-center">
              My name is AYOOLA ADETOMIWA OGUNBASE, I'm from Lagos state
              Nigeria. I'm a web developer specialized in creating stunning
              UI/UX designs and websites. I've been working as a web developer
              since 2017 till date and I have worked on numerous projects with
              different companies.
            </p>
            <div className="flex mt-3 items-center space-x-3 md:space-x-6">
              <div className="">
                <a
                  href="tel:+2349120749746"
                  className="text-lg mx-auto text-primary bg-secondary rounded-full text-center w-10 h-10 flex items-center justify-center"
                >
                  <BsPhone />
                </a>
                <p className="font-medium text-secondary text-xs mt-2">
                  Call me
                </p>
              </div>
              <div className="">
                <a
                  href="mailto: tomiwa.code@gmail.com"
                  className="text-lg mx-auto text-primary bg-secondary rounded-full text-center w-10 h-10 flex items-center justify-center"
                >
                  <FaEnvelope />
                </a>
                <p className="font-medium text-secondary text-xs mt-2">
                  Send a mail
                </p>
              </div>
              <div className="">
                <a
                  href=" https://wa.me/+2349058419649?text=Hello%20Tomiwa,%20I%20saw%20portfolio%20and%20I..."
                  className="text-lg mx-auto text-primary bg-secondary rounded-full text-center w-10 h-10 flex items-center justify-center"
                >
                  <BsWhatsapp />
                </a>
                <p className="font-medium text-secondary text-xs mt-2">
                  Send a text
                </p>
              </div>
            </div>
            <p className="text-darkGrey text-xs text-center mt-4">
              I'm the man for the job.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={slideIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="bg-white w-8/12 mx-auto lg:mx-0 lg:w-4/12 py-4 overflow-hidden rounded-lg my-12 lg:my-0"
        >
          <h3 className="uppercase text-darkGrey text-lg text-center font-medium mb-3">
            skills
          </h3>
          <div className="block md:flex md:justify-evenly mx-5 md:mx-0 space-y-5 md:space-y-0">
            {skillsArr.map(({ id, heading, skills }) => {
              return (
                <div
                  className="w-full md:w-28 text-center md:text-left"
                  key={id}
                >
                  <p className="capitalize font-medium text-secondary pb-2 border-b-2 border-b-primary inline">
                    {heading}
                  </p>
                  <div className="md:space-y-3 mt-5 flex flex-wrap items-center justify-between md:block gap-y-4 md:gap-0">
                    {skills.map(({ id, name, color }) => {
                      return (
                        <div className="flex items-center" key={id}>
                          <div
                            className="w-3 h-3 mr-5"
                            style={{ background: color }}
                          ></div>
                          <p className="text-secondary text-sm font-medium">
                            {name}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
