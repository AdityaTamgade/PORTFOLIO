import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaCheckCircle } from "react-icons/fa";

export default function Qualification() {
  return (
    <div className="min-h-screen px-6 sm:px-12 md:px-20 lg:px-40 py-16 bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-8 text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-400 mb-16"
      >
        Experience and Qualification
      </motion.h1>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4 underline decoration-cyan-500 underline-offset-4">
          <FaGraduationCap className="text-cyan-400" />
          Education
        </h2>
        <ul className="space-y-3 text-lg text-gray-300 pl-6 list-disc">
          <li>
            Aggregate: 75.55% – B.Tech in Computer Science Engineering –{" "}
            <span className="text-white font-medium">RTMN University.</span>
          </li>
          <li>
            12th Grade: <span className="text-white font-medium">88.80%</span> –
            MACROON STUDENTS ACADEMY – MAHARASHRTA STATE BOARD (ENGLISH MEDIUM).
          </li>
          <li>
            10th Grade: <span className="text-white font-medium">72.40%</span> –
            ST. ANNE'S HIGH SCHOOL – MAHARASHRTA STATE BOARD (ENGLISH MEDIUM).
          </li>
        </ul>
      </motion.div>

      {/* Internship Experience */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4 underline decoration-fuchsia-500 underline-offset-4">
          <FaLaptopCode className="text-fuchsia-400" />
          Internship Experience
        </h2>
        <p className="text-lg text-gray-300">
          Web Development Intern at{" "}
          <span className="text-white font-medium">
            Ordnance Factory Chanda
          </span>{" "}
          – JUNE 2023 to AUGUST 2023
        </p>
        <p className="text-sm text-gray-400 mt-2 pl-1">
          Collaborated with cross-functional teams to ensure seamless
          functionality across applications, contributing to the operational
          efficiency of key government projects. Gained hands-on experience in
          managing large-scale employee data systems and developed a strong
          understanding of how high-load enterprise environments maintain
          accuracy and prevent system failures.
        </p>
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-6 underline decoration-purple-500 underline-offset-4">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            "HTML5/CSS3",
            "JavaScript/React",
            "TailwindCSS",
            "Node.js / Express",
            "MongoDB",
            "Python",
            "Power BI",
            "Git & GitHub",
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-xl p-4 flex items-center gap-3 shadow-md"
            >
              <FaCheckCircle className="text-green-400" />
              <span className="text-sm text-white">{skill}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
