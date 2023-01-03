export const fadeIn = (props) => {
  return {
    initial: {
      opacity: 0,
      x: props === "left" ? -50 : 50,
    },
    animate: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.5,
        ease: "easeInOut",
      },
    }),
  };
};

export const slideInUpDown = (props) => {
  return {
    initial: {
      opacity: 0,
      y: props === "top" ? -50 : 50,
    },
    animate: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.5,
        ease: "easeOut",
      },
    }),
  };
};

export const fade = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1.9,
      ease: "easeOut",
    },
  },
};

export const enter = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const slideInSpring = (props) => {
  return {
    initial: {
      opacity: 0,
      y: props === "top" ? -50 : 50,
    },
    animate: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        delay: custom * 0.5,
        ease: "easeOut",
      },
    }),
  };
};

export const slideAcross = {
  animate: {
    width: ["0%", "100%", "0%"],
    left: ["0%", "0%", "100%"],
    transition: {
      ease: "easeInOut",
      duration: 0.5,
      delay: 1.7,
    },
  },
};

export const exits = {
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};
