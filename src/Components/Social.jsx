import { FiGithub } from "react-icons/fi";
import { TfiLinkedin } from "react-icons/tfi";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";
import { BsDashLg } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn, slideIn, socialMadre } from "../variants";
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../Context/Context";

const Social = () => {
  const [status, setStatus] = useState(true);
  const showIcons = () => {
    setStatus(!status);
  };
  const { theme } = useContext(ThemeContext);

  const socialArr = [
    {
      id: 1,
      link: "https://github.com/tomiwa-code",
      icon: <FiGithub />,
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/ayoola-ogunbase-96694715b",
      icon: <TfiLinkedin />,
    },
    {
      id: 3,
      link: "https://www.twitter.com/crownkvnq",
      icon: <BsTwitter />,
    },
    {
      id: 4,
      link: "https://www.instagram.com/crown.kvnq",
      icon: <BsInstagram />,
    },
  ];
  const classes =
    "text-md md:text-xl text-secondary rounded-full bg-white block relative w-9 h-9 flex items-center justify-center duration-150";

  return (
    <motion.div
      variants={fadeIn("right")}
      initial="initial"
      animate="animate"
      custom={1.5}
      className="fixed z-50 bottom-8 right-3 md:right-12 flex flex-col items-center justify-center"
    >
      <AnimatePresence>
        {status && (
          <motion.div
            variants={socialMadre}
            className="flex flex-col items-center justify-between h-52 mb-5 md:mb-7"
            exit={{ x: 100, opacity: 0 }}
          >
            {socialArr.map(({ id, link, icon }) => {
              return (
                <motion.li
                  className="list-none social"
                  variants={slideIn}
                  key={id}
                >
                  <a href={link} className={classes}>
                    {icon}
                  </a>
                </motion.li>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className={`w-12 h-12 ${
          theme === "dark" ? "bg-dark-500" : "bg-light-500 text-lightSecondary"
        } rounded-full flex items-center justify-center`}
      >
        {status ? (
          <motion.div
            animate={status ? { rotate: 360 } : { rotate: 0 }}
            className="cursor-pointer"
            onClick={showIcons}
          >
            <BsDashLg />
          </motion.div>
        ) : (
          <motion.div
            animate={status ? { rotate: 180 } : { rotate: 0 }}
            className="cursor-pointer"
            onClick={showIcons}
          >
            <BsPlusLg />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Social;
