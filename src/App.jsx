import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Social from "./Components/Social";
import { AnimatePresence } from "framer-motion";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Social />
    </>
  );
};

export default App;
