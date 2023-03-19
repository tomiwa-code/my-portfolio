import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../Context/Context";
import Navbar from "./Navbar";
import Social from "./Social";
import Switch from "./Switch";

const Layout = () => {
  const [theme, setTheme] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("theme"));
    if (saved) {
      return saved;
    }
    return "dark";
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    const getTheme = JSON.parse(localStorage.getItem("theme"));
    if (getTheme === "light") {
      localStorage.setItem("theme", JSON.stringify("dark"));
    } else {
      localStorage.setItem("theme", JSON.stringify("light"));
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Navbar />
      <Switch />
      <Outlet />
      <Social />
    </ThemeContext.Provider>
  );
};

export default Layout;
