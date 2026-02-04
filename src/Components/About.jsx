import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaLaptopCode,
  FaDatabase,
  FaTools,
  FaLightbulb,
} from "react-icons/fa";

const Card = ({ icon, title, subtitle, years, text, delay = 0 }) => (
  <motion.div
    className="h-full rounded-xl border border-black/20 dark:border-white/20 
               shadow-md p-5 text-center flex flex-col justify-center"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    <div className="text-3xl mb-3 opacity-80 mx-auto">{icon}</div>

    <h3 className="text-sm font-semibold">{title}</h3>

    {subtitle && <p className="text-xs mt-1 opacity-70">{subtitle}</p>}

    {years && <p className="text-[11px] mt-1 opacity-60">{years}</p>}

    <p className="text-xs mt-3 opacity-80 leading-relaxed">{text}</p>
  </motion.div>
);

const About = () => {
  return (
    <div id="about" className="space-y-6">
      <h2 className="text-xl font-bold text-center">About</h2>

      {/* GRID WITH EQUAL ROW HEIGHTS */}
      <div className="grid lg:grid-cols-3 gap-6 auto-rows-fr">
        {/* LEFT COLUMN */}
        <div className="grid grid-rows-2 gap-6">
          <Card
            icon={<FaGraduationCap />}
            title="Education"
            subtitle="Bachelor of Science in Information Technology"
            years="2021 – 2025"
            text="Technological Institute of the Philippines"
            delay={0}
          />
          <Card
            icon={<FaBriefcase />}
            title="Experience"
            subtitle="Backend Developer Intern"
            years="Feb 2025 – Jun 2025"
            text="8Box Solutions Inc."
            delay={0.1}
          />
        </div>

        {/* MIDDLE COLUMN */}
        <div className="grid grid-rows-2 gap-6">
          <Card
            icon={<FaLaptopCode />}
            title="Frontend"
            text="React, Next.js, Tailwind CSS, JavaScript, HTML, CSS"
            delay={0.2}
          />
          <Card
            icon={<FaDatabase />}
            title="Backend"
            text="Node.js, Express.js, PHP, SQL, PostgreSQL, Supabase"
            delay={0.3}
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="grid grid-rows-2 gap-6">
          <Card
            icon={<FaTools />}
            title="Tools & Platforms"
            text="VS Code, Git, GitHub, Postman, Vercel, Oracle VirtualBox"
            delay={0.4}
          />
          <Card
            icon={<FaLightbulb />}
            title="Soft Skills"
            text="Problem-solving, collaboration, communication, time management"
            delay={0.5}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
