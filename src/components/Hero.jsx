// src/components/Hero.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BgImage from "../assets/herobg.jpg"; // adjust path based on your folder structure

export default function Hero() {
  const scrollToEducation = () => {
    const section = document.getElementById("education");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-6 sm:px-12 md:px-20 lg:px-60 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-20 sm:opacity-30 md:opacity-40"
        style={{ backgroundImage: `url(${BgImage})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-950 opacity-90 z-0" />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-6xl font-bold text-white leading-tight"
        >
          Hi, I'm{" "}
          <span className="mt-5 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
            Aditya Tamgade
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-xl sm:text-3xl text-gray-300 mt-4"
        >
          A Passionate{" "}
          <span className="text-indigo-300">
            Frontend & Fullstack Developer
          </span>
        </motion.h2>

        {/* About text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-gray-400 max-w-2xl mt-6 text-base sm:text-lg"
        >
          I design and build modern, engaging web interfaces with top-notch user
          experiences. Currently exploring AI integrations, clean UI/UX, and
          real-time applications.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex gap-6 mt-8 flex-wrap justify-center"
        >
          <Link to="/work">
            <button className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition rounded-full shadow-md">
              View Projects
            </button>
          </Link>
          <Link to="/contact">
            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 transition rounded-full text-white shadow-md">
              Hire Me
            </button>
          </Link>
        </motion.div>

        {/* Down arrow animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 2, duration: 2, repeat: Infinity }}
          className="mt-12 cursor-pointer"
          onClick={scrollToEducation}
        >
          <span className="text-indigo-500 text-3xl animate-bounce">↓</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex gap-6 mt-8 flex-wrap justify-center"
        >
          <Link
            to="/qualification"
            className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
          >
            Experience and Qualifications
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
