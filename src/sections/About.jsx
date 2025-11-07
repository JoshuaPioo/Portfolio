import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaDatabase,
  FaLaptopCode,
  FaTools,
  FaLightbulb,
  FaBriefcase,
} from "react-icons/fa";

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.1 },
    }),
  };

  return (
    <section id="about" className="py-20 px-6 md:px-12 w-full">
      <motion.h2
        className="text-3xl sm:text-4xl font-serif font-bold text-center mb-12 
        bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text drop-shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Education */}
        <motion.div
          custom={0}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 
          shadow-lg rounded-xl p-6 flex flex-col items-center text-center 
          hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition duration-300"
        >
          <FaGraduationCap className="text-4xl text-blue-500 mb-4 drop-shadow-md" />
          <h3 className="text-xl font-serif font-semibold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Education
          </h3>
          <div className="mt-3 text-base font-sans text-gray-600 dark:text-gray-300 space-y-4">
            <div>
              <p className="font-semibold">
                Science, Technology, Engineering and Mathematics (STEM)
              </p>
              <p className="text-sm">June 2019 – April 2021</p>
              <p className="italic text-sm">Olivarez College (Parañaque City)</p>
            </div>
            <div>
              <p className="font-semibold">Bachelor of Science in Information Technology</p>
              <p className="text-sm">Aug 2021 – Aug 2025</p>
              <p className="italic text-sm">
                Technological Institute of the Philippines (Quezon City)
              </p>
            </div>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          custom={1}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 
          shadow-lg rounded-xl p-6 flex flex-col items-center text-center 
          hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] transition duration-300"
        >
          <FaBriefcase className="text-4xl text-amber-500 mb-4 drop-shadow-md" />
          <h3 className="text-xl font-serif font-semibold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
            Experience
          </h3>
          <div className="mt-3 text-base font-sans text-gray-600 dark:text-gray-300 space-y-4">
            <div>
              <p className="font-semibold">Backend Developer Intern</p>
              <p className="text-sm">Feb 2025 – Jun 2025</p>
              <p className="italic text-sm">8Box Solutions Inc.</p>
            </div>
            <div>
              <p className="font-semibold">Angkas Rider</p>
              <p className="text-sm">Feb 2022 – May 2025</p>
              <p className="italic text-sm">Angkas Inc.</p>
            </div>
            <div>
              <p className="font-semibold">Project Technical Assistant III - Local Field Personnel</p>
              <p className="text-sm">July 2025 – Oct 2025</p>
              <p className="italic text-sm">University of Science and Technology of Southern Philippines.</p>
            </div>
          </div>
        </motion.div>

        {/* Frontend */}
        <motion.div
          custom={2}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 
          shadow-lg rounded-xl p-6 flex flex-col items-center text-center 
          hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition duration-300"
        >
          <FaLaptopCode className="text-4xl text-purple-500 mb-4 drop-shadow-md" />
          <h3 className="text-xl font-serif font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Frontend
          </h3>
          <ul className="text-base font-sans text-gray-600 dark:text-gray-300 mt-3 space-y-1">
            <li>HTML / CSS</li>
            <li>React.js / JavaScript</li>
            <li>Tailwind CSS / Bootstrap</li>
          </ul>
        </motion.div>
        {/* Backend */}
        <motion.div
          custom={3}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 
          shadow-lg rounded-xl p-6 flex flex-col items-center text-center 
          hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] transition duration-300"
        >
          <FaDatabase className="text-4xl text-green-500 mb-4 drop-shadow-md" />
          <h3 className="text-xl font-serif font-semibold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            Backend
          </h3>
          <ul className="text-base font-sans text-gray-600 dark:text-gray-300 mt-3 space-y-1">
            <li>MongoDB / SQL</li>
            <li>Express.js / Node.js</li>
            <li>Firebase / PHP</li>
          </ul>
        </motion.div>

        {/* Tools */}
        <motion.div
          custom={4}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 
          shadow-lg rounded-xl p-6 flex flex-col items-center text-center 
          hover:shadow-[0_0_25px_rgba(234,179,8,0.5)] transition duration-300"
        >
          <FaTools className="text-4xl text-yellow-500 mb-4 drop-shadow-md" />
          <h3 className="text-xl font-serif font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Tools
          </h3>
          <ul className="text-base font-sans text-gray-600 dark:text-gray-300 mt-3 space-y-1">
            <li>Visual Studio / Blender</li>
            <li>Git / GitHub / Vercel</li>
            <li>Figma</li>
          </ul>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          custom={5}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 
          shadow-lg rounded-xl p-6 flex flex-col items-center text-center 
          hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] transition duration-300"
        >
          <FaLightbulb className="text-4xl text-pink-500 mb-4 drop-shadow-md" />
          <h3 className="text-xl font-serif font-semibold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
            Soft Skills
          </h3>
          <ul className="text-base font-sans text-gray-600 dark:text-gray-300 mt-3 space-y-1">
            <li>Problem Solving</li>
            <li>Team Collaboration</li>
            <li>Adaptability</li>
            <li>Time Management</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
