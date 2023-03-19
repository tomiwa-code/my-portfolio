import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { slide, slideIn, notification } from "../variants";
import emailjs from "@emailjs/browser";
import { useContext } from "react";
import { ThemeContext } from "../Context/Context";

const Contact = () => {
  const [msg, setMsg] = useState({});
  const [mail, setMail] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { theme } = useContext(ThemeContext);

  const formSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_p0bzn9a", "template_irt9f7c", mail, "7XYo08YpLvvcOo7Rf")
      .then((res) => {
        if (res) {
          setMsg({
            text: "Thanks, message received. I'll get back as soon as possible.",
            color: "bg-green-500",
            status: true,
            textColor: "text-lightSecondary",
          });
          e.target.reset();
        }
      })
      .catch((err) => {
        if (err) {
          setMsg({
            text: "Sorry, message was not sent. Please check your network and try again.",
            color: "bg-red-500",
            status: true,
            textColor: "text-lightSecondary",
          });
        }
      });
  };

  useEffect(() => {
    if (msg.status) {
      setTimeout(() => {
        setMsg((prev) => ({
          ...prev,
          status: false,
        }));
      }, 3500);
    }
  }, [msg.status]);

  return (
    <>
      <motion.div
        variants={notification}
        initial={"initial"}
        animate={msg.status ? "animate" : ""}
        onClick={() =>
          setMsg((prev) => ({
            ...prev,
            status: false,
          }))
        }
        className={`${msg.color} w-80 px-5 py-4 cursor-pointer rounded absolute right-10 top-10 z-50`}
      >
        <p className={`text-sm ${msg.textColor} font-medium`}>{msg.text}</p>
      </motion.div>
      <div
        className={`${
          theme === "dark" ? "bg-darkSecondary" : "bg-lightSecondary"
        } relative pt-36 min-h-screen pb-12 md:pb-0`}
      >
        <motion.div
          variants={slide}
          initial="initial"
          animate="animate"
          className="z-20 text-center space-y-3 w-96 mx-auto mb-14"
        >
          <p
            className={`${
              theme === "dark"
                ? "text-lightSecondary font-light"
                : "text-light-500"
            } text-xs md:text-sm`}
          >
            Fastest way to{" "}
          </p>
          <h1
            className={`font-stretch ${
              theme === "dark" ? "text-dark-500 font-light" : "text-light-500"
            } uppercase text-2xl md:text-4xl`}
          >
            coontact
          </h1>
          <p
            className={`${
              theme === "dark"
                ? "text-lightSecondary font-light"
                : "text-light-500"
            } text-xs md:text-sm`}
          >
            Me
          </p>
        </motion.div>
        <motion.form
          onSubmit={formSubmit}
          variants={slideIn}
          initial="initial"
          whileInView="animate"
          className="w-8/12 lg:w-5/12 mx-auto"
        >
          <div className="block md:flex md:items-center md:justify-between mb-5 md:mb-10">
            <div className="mb-5 md:mb-0 md:space-y-2 w-full md:w-5/12">
              <p
                className={`text-xs ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }  capitalize md:mb-1`}
              >
                your name
              </p>
              <input
                type="text"
                className={`text-sm ${
                  theme === "dark"
                    ? "text-gray-300 placeholder:text-gray-300"
                    : "text-gray-500 placeholder:text-gray-500"
                }  text-sm py-3 border-b border-b-gray-400 w-full bg-transparent focus:outline-none`}
                placeholder="Enter your name"
                onChange={(e) =>
                  setMail((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
                required
              />
            </div>
            <div className="md:space-y-2 w-full md:w-5/12">
              <p
                className={`text-xs ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }  capitalize md:mb-1`}
              >
                email address
              </p>
              <input
                type="email"
                className={`text-sm ${
                  theme === "dark"
                    ? "text-gray-300 placeholder:text-gray-300"
                    : "text-gray-500 placeholder:text-gray-500"
                }  text-sm py-3 border-b border-b-gray-400 w-full bg-transparent focus:outline-none`}
                placeholder="Enter your email address"
                onChange={(e) =>
                  setMail((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
                required
              />
            </div>
          </div>
          <div className="w-full">
            <p
              className={`text-xs ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }  capitalize md:mb-1`}
            >
              your message
            </p>
            <textarea
              className={`text-sm ${
                theme === "dark"
                  ? "text-gray-300 placeholder:text-gray-300"
                  : "text-gray-500 placeholder:text-gray-500"
              }  text-sm py-3 border-b border-b-gray-400 w-full bg-transparent focus:outline-none h-20 md:h-16 resize-none`}
              placeholder="Hi, we need a website for our Company X. How soon can you hop on to discuss this?"
              onChange={(e) =>
                setMail((prev) => ({
                  ...prev,
                  message: e.target.value,
                }))
              }
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              className={`border-2 ${
                theme === "dark"
                  ? "border-dark-500 hover:bg-dark-500 hover:text-darkSecondary text-dark-500"
                  : "border-light-500 hover:bg-light-500 hover:text-lightSecondary text-light-500"
              } duration-200 uppercase w-44 py-4 font-medium text-xs rounded mt-8 md:mt-10`}
            >
              send a message
            </button>
          </div>
        </motion.form>
      </div>
    </>
  );
};

export default Contact;
