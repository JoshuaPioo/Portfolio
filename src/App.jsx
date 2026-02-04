import { useEffect, useState } from "react";

import Navbar from "./Components/Navbar";
import DarkModeToggle from "./Components/DarkModeToggle";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-4xl mx-auto px-8 md:px-12 lg:px-16 py-10 space-y-8">
        {/* Top Bar */}
        <div className="flex justify-between items-center">
          <Navbar />
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        <Home />
        <About />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
