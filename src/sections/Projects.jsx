import React from "react";
import { motion } from "framer-motion";
import { Hotel, Utensils, Music, Stethoscope, Coffee } from "lucide-react";

const projects = [
  {
    title: "MERN - Hotel Booking App",
    desc: "Full stack hotel booking app using React, MongoDB, Express, Node.js & Tailwind CSS.",
    icon: <Hotel className="w-10 h-10 text-blue-500" />,
    videoSrc: "https://www.youtube.com/embed/GUufBK3qGuE",
  },
  {
    title: "MERN - Chat Application",
    desc: "Real-time chat app using React, MongoDB, Express, Node.js & Socket.io.",
    icon: <Hotel className="w-10 h-10 text-blue-500" />,
    videoSrc: "https://www.youtube.com/embed/Xu7CuPsNiY4",
    link: "https://chat-m6hs8.sevalla.app/login", // 🔗 Added clickable link
  },
  {
    title: "Anthony Taberna (Katunying Restaurant)",
    desc: "Katunying Payroll is a system designed to simplify employee salary management, attendance tracking, and payment processing.",
    icon: <Utensils className="w-10 h-10 text-green-500" />,
    videoSrc: "https://www.youtube.com/embed/UOM-5bilajk",
  },
  {
    title: "Instrument E-commerce Website",
    desc: "Online store for musical instruments using Bootstrap, PHP, and API integration.",
    icon: <Music className="w-10 h-10 text-purple-500" />,
    videoSrc: "https://www.youtube.com/embed/RO__kGxIMWo",
  },
  {
    title: "Clinic Appointment System",
    desc: "Pet clinic scheduler built with Oracle SQL Builder, SQL Reports, and VirtualBox.",
    icon: <Stethoscope className="w-10 h-10 text-red-500" />,
    videoSrc: "https://www.youtube.com/embed/_yx68jdYMe0",
  },
  {
    title: "Cafe Ordering App",
    desc: "Mobile app for cafe ordering system built with React.js.",
    icon: <Coffee className="w-10 h-10 text-yellow-500" />,
    videoSrc: "https://www.youtube.com/embed/k9jTvjuAVZg",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl sm:text-4xl font-serif font-bold text-center mb-12 
        bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text drop-shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="p-6 rounded-2xl border border-gray-200 dark:border-gray-700 
                       bg-white dark:bg-gray-800 shadow-lg 
                       hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] 
                       transition duration-300 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Icon */}
            <div className="mb-4">{p.icon}</div>

            {/* Title — clickable if link exists */}
            {p.link ? (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg md:text-xl font-bold mb-2 font-serif text-blue-500 hover:underline"
              >
                {p.title}
              </a>
            ) : (
              <h3 className="text-lg md:text-xl font-bold mb-2 font-serif">
                {p.title}
              </h3>
            )}

            {/* Video Preview */}
            {p.videoSrc && (
              <iframe
                width="100%"
                height="200"
                src={p.videoSrc}
                title={p.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow mb-4"
              />
            )}

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {p.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
