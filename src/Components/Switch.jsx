import { useContext } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { ThemeContext } from "../Context/Context";

const Switch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="absolute z-10 top-8 right-5 md:right-10">
      {theme === "dark" ? (
        <div className="flex space-x-2 items-center">
          <p className="text-dark-500 hidden md:block">Dark mode</p>
          <BsMoonFill
            className="text-dark-500 text-xl cursor-pointer"
            onClick={() => toggleTheme()}
          />
        </div>
      ) : (
        <div className="flex space-x-2 items-center">
          <p className="text-light-500 hidden md:block">Light mode</p>
          <BsSunFill
            className="text-light-500 text-xl cursor-pointer"
            onClick={() => toggleTheme()}
          />
        </div>
      )}
    </div>
  );
};

export default Switch;
