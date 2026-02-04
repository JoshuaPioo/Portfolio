import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import profile from "../assets/Joshua3.png";
import Card from "./Card";

const Home = () => {
  return (
    <div id="home" className="scroll-mt-24">
      <Card className="p-0 overflow-hidden">
        <div className="p-6 md:p-8 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          {/* LEFT SIDE */}
          <div className="flex-1 text-center md:text-left">
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Hi, I’m{" "}
              <span className="underline underline-offset-8">
                Joshua Tablon
              </span>
            </motion.h1>

            <motion.div
              className="mt-3 text-sm sm:text-base md:text-lg font-semibold opacity-80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
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
              className="mt-4 text-xs sm:text-sm md:text-base leading-relaxed opacity-80 max-w-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              viewport={{ once: true }}
            >
              I build modern and responsive web applications with React and
              Tailwind. I love creating clean, scalable, and user-friendly
              experiences.
            </motion.p>

            <motion.a
              href="/Joshua_Tablon_Resume.pdf"
              className="mt-6 inline-flex items-center justify-center px-4 py-2.5 rounded-xl
                         border border-black/20 dark:border-white/20
                         hover:opacity-80 transition text-xs sm:text-sm font-semibold"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Download my resume
            </motion.a>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            className="flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={profile}
              alt="Joshua Tablon"
              className="w-36 h-36 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-2xl
                         border border-black/20 dark:border-white/20 shadow-md object-cover"
            />
          </motion.div>
        </div>
      </Card>
    </div>
  );
};

export default Home;
