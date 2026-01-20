import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter"; 
import profile from "../assets/Joshua.png"; 

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-6 md:px-12 max-w-6xl mx-auto"
    >
      {/* LEFT SIDE: Text */}
      <div className="flex-1 text-center md:text-left">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text leading-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Hi, I’m{" "}
          <span className="text-blue-600 dark:text-blue-400 font-serif">
            Joshua Tablon
          </span>
        </motion.h1>

        {/* Typing Effect */}
        <motion.div
          className="mt-4 text-lg sm:text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typewriter
            words={[
              "Web Developer",
              "Front End Developer",
              "Information Technology",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.div>

        <motion.p
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          I build modern and responsive web applications with React and
          Tailwind. I love creating clean, scalable, and user-friendly
          experiences.
        </motion.p>

        <motion.a
          href="/Joshua-Tablon-Resume.pdf"
          className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition text-sm sm:text-base"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download my resume
        </motion.a>
      </div>

      {/* RIGHT SIDE: Image */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end mb-10 md:mb-0"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src={profile}
          alt="Joshua Tablon"
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full shadow-lg object-cover mt-20 md:mt-0"
        />
      </motion.div>
    </section>
  );
};

export default Home;
