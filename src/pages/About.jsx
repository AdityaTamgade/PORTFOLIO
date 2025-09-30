import profilePic from "../assets/profile.jpg";
import githubDashboard from "../assets/githubdashboard.png";
import linkedinDashboard from "../assets/linkedindashboard.png";
import photo1 from "../assets/photo1.jpg"; 
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo5 from "../assets/photo5.jpg";
import photo6 from "../assets/photo6.jpg";
import photo7 from "../assets/photo7.jpg";

import Photo8 from "../assets/Photo8.jpg";
import Photo9 from "../assets/Photo9.jpg";
import Photo10 from "../assets/Photo10.jpg";
import Photo11 from "../assets/Photo11.jpg";

import { motion } from "framer-motion";

export default function About() {
  const tools = [
    "html",
    "css",
    "javascript",
    "react",
    "tailwind",
    "node",
    "vite",
  ];

  const Photos = [
    {
      src: Photo8,
      title: "GOVERNMENT INTERNSHIP CERTIFICATE",
      description:
        "Awarded for practical experience gained during a government-affiliated program. Collaborated with cross-functional teams to ensure seamless functionality across applications.",
    },
    {
      src: Photo9,
      title: "C++ CERTIFICATE",
      description:
        "C++ programming language certificate from I-Tech Computer Academy. Gained more knowledge about programming. C++ is likly to be a very beginner friendly language helps the new coders to achive there fundamentals in programming.",
    },
    {
      src: Photo10,
      title: "RESEARCH PAPER PUBLISHMENT",
      description:
        "A certificate of participation and publication for a research paper presented at the 2nd National Conference on Emerging Trends in Engineering & Technology - SPARK 2021, hosted by KDK College of Engineering, Nagpur.",
    },
    {
      src: Photo11,
      title: "SALESFORCE INTERNSHIP CERTIFICATE",
      description:
        "Salesforce Internship Certificate, signifying completion of an internship program with Salesforce.",
    },
  ];

  const photos = [
    {
      src: photo2,
      title: "Perched Predator",
      description:
        "A keen-eyed raptor, likely a hawk or eagle, surveys its surroundings from a sturdy branch, its plumage a beautiful mosaic against the blurred green backdrop of the trees.",
    },
    {
      src: photo3,
      title: "Lakeside Sentinel",
      description:
        "A large bird, possibly a Grey-headed Fish Eagle, sits poised on a branch overlooking a vast expanse of water, its silhouette sharp against the calm surface..",
    },
    {
      src: photo1,
      title: "Resting Monarch",
      description:
        "A majestic tiger, with its striking stripes, is captured at ease, resting serenely amidst the verdant undergrowth of the forest.",
    },
    {
      src: photo5,
      title: "Riverside Companions",
      description:
        "A graceful spotted deer stands alert at the water's edge, sharing the tranquil riverside with a pristine white egret wading in the shallow waters.",
    },
    {
      src: photo6,
      title: "Submerged Hunter",
      description:
        " A crocodile's eyes and snout break the surface of the water, its hidden body hinting at its stealthy presence, with skeletal tree branches providing a stark foreground.",
    },
    {
      src: photo7,
      title: "Woodland Watcher",
      description:
        "A large owl, with its distinctive facial disc and captivating eyes, gazes intently from its perch high within the dense canopy of a leafy tree, blending almost seamlessly with its surroundings.",
    },
  ];

  return (
    <div className="min-h-screen px-4 sm:px-16 py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Title */}
      <h2 className="mt-8 text-4xl sm:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-fuchsia-500 to-cyan-400 mb-16 bg-clip-text text-transparent">
        About Me
      </h2>

      {/* Profile + Bio */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          src={profilePic}
          alt="Profile"
          className="w-40 h-40 sm:w-64 sm:h-64 rounded-full object-cover border-4 border-purple-500 shadow-lg hover:scale-105 transition-transform duration-300"
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl backdrop-blur-md bg-white/10 p-6 rounded-2xl text-center sm:text-left shadow-lg border border-white/10"
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            👋 I'm a frontend developer passionate about creating beautiful,
            responsive, and high-performance web interfaces. <br />
            <br />✨ I specialize in{" "}
            <span className="text-indigo-400 font-semibold">React</span> and{" "}
            <span className="text-pink-400 font-semibold">Tailwind CSS</span>.
            Always eager to explore cutting-edge web technologies and turn ideas
            into reality!
          </p>
        </motion.div>
      </div>

      {/* Dashboards */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://github.com/AdityaTamgade"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer rounded-xl overflow-hidden shadow-lg border border-purple-600"
        >
          <img
            src={githubDashboard}
            alt="GitHub Dashboard"
            className="w-full h-auto"
          />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://www.linkedin.com/in/adityatamgade/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer rounded-xl overflow-hidden shadow-lg border border-blue-600"
        >
          <img
            src={linkedinDashboard}
            alt="LinkedIn Dashboard"
            className="w-full h-auto"
          />
        </motion.a>
      </div>

      {/* Resume Button */}
      <div className="mt-16 text-center">
        <a
          href="/MYRESUME.pdf"
          download
          className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 hover:from-pink-600 hover:to-purple-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
        >
          Download Resume
        </a>
      </div>

      {/* CERTIFICATION Section */}
      <div className="mt-28">
        <h3 className="text-3xl font-bold text-center mb-10 text-white bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Certifications.
        </h3>

        <h3 className="text-1xl font-bold text-center mb-5 text-white bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Certifications are like moon in the sky it, Certifications add more
          value to our Portfolio.
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 px-4">
          {Photos.map((Photo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden shadow-xl border border-white/10 backdrop-blur-md bg-white/5"
            >
              <img
                src={Photo.src}
                alt={Photo.title}
                className="w-full h-74 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-white mb-2">
                  {Photo.title}
                </h4>
                <p className="text-gray-300 text-sm">{Photo.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hobbies Section */}
      <div className="mt-28">
        <h3 className="text-3xl font-bold text-center mb-10 text-white bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          My Photography.
        </h3>

        <h3 className="text-1xl font-bold text-center mb-5 text-white bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          I immerse myself in nature to capture the untamed beauty of animals in
          their natural habitats. It's a passion that combines patience,
          observation, and a deep appreciation for the diverse ecosystems around
          us.
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden shadow-xl border border-white/10 backdrop-blur-md bg-white/5"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-white mb-2">
                  {photo.title}
                </h4>
                <p className="text-gray-300 text-sm">{photo.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mt-20">
        <h3 className="text-2xl font-semibold mb-8 text-center text-white">
          TECH I USE
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
          {tools.map((tool) => (
            <motion.img
              key={tool}
              whileHover={{ scale: 1.2 }}
              src={`/tech/${tool}.svg`}
              alt={tool}
              className="w-14 h-14 drop-shadow-lg transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
