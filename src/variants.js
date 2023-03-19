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

export const slide = {
  initial: {
    opacity: 0,
    x: "100vw",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 8,
      mass: 0.4,
    },
  },
};

export const slideIn = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 150,
    },
  },
};

export const madre = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const slideInSpring = (prop) => {
  return {
    initial: {
      x: prop === "right" ? 500 : -500,
      opacity: 0,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 8,
        mass: 0.4,
      },
    },
  };
};

export const notification = {
  initial: {
    opacity: 0,
    x: 500,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 8,
      mass: 0.4,
    },
  },
};

export const socialMadre = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

export const slideHome = {
  initial: {
    opacity: 0,
    x: -500,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 8,
      mass: 0.4,
    },
  },
};

export const slideInHome = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 150,
    },
  },
};
