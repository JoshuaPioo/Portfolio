import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";


const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white flex flex-col">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="flex-1 px-6">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
