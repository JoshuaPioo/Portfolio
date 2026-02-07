import { motion } from "framer-motion";

const projects = [
  {
    title: "Hotel Booking App",
    desc: "Full-stack hotel booking system built with MERN stack.",
    video: "https://www.youtube.com/embed/GUufBK3qGuE",
  },
  {
    title: "Chat Application",
    desc: "Real-time chat app with authentication and live messaging.",
    video: "https://www.youtube.com/embed/Xu7CuPsNiY4",
    link: "https://https://chat-pio.vercel.app/",
  },
  {
    title: "Blogun",
    desc: "Social blog platform inspired by Facebook-style feeds.",
    link: "https://blogunto.vercel.app/",
  },
  {
    title: "Katunying Payroll",
    desc: "Payroll and attendance management system for a restaurant.",
    video: "https://www.youtube.com/embed/UOM-5bilajk",
  },
  {
    title: "Clinic Appointment",
    desc: "Clinic scheduling system for managing appointments.",
    video: "https://www.youtube.com/embed/_yx68jdYMe0",
  },
  {
    title: "Cafe Ordering App",
    desc: "Simple ordering system for cafes built with React.",
    video: "https://www.youtube.com/embed/k9jTvjuAVZg",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="rounded-xl border border-black/20 dark:border-white/20 shadow-md p-5"
    >
      <h2 className="text-xl font-bold mb-4 text-center">Projects</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="border border-black/20 dark:border-white/20 rounded-lg p-3 text-xs"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Title */}
            {p.link ? (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="font-bold underline"
              >
                {p.title}
              </a>
            ) : (
              <div className="font-bold">{p.title}</div>
            )}

            {/* Description */}
            <p className="mt-1 opacity-80 leading-relaxed">{p.desc}</p>

            {/* Video */}
            {p.video && (
              <iframe
                src={p.video}
                className="w-full h-32 mt-2 rounded"
                allowFullScreen
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
