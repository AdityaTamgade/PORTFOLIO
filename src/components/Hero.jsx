import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BgImage from "../assets/herobg.jpg";
import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  Torus,
  Box,
  Stars,
} from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ---------------- Floating 3D Object ---------------- */
function FloatingObject({
  type = "sphere",
  position = [0, 0, 0],
  color = "#4F46E5",
}) {
  const objRef = useRef();
  const [mouse, setMouse] = useState([0, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse([
        e.clientX / window.innerWidth - 0.5,
        e.clientY / window.innerHeight - 0.5,
      ]);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (!objRef.current) return;

    objRef.current.rotation.x += 0.002;
    objRef.current.rotation.y += 0.004;

    objRef.current.position.x = position[0] + mouse[0] * 2;
    objRef.current.position.y = position[1] + mouse[1] * 2;
    objRef.current.position.z =
      position[2] + Math.sin(Date.now() * 0.001) * 0.5;
  });

  const materialProps = {
    color,
    attach: "material",
    distort: 0.25,
    speed: 2,
  };

  return (
    <>
      {type === "sphere" && (
        <Sphere ref={objRef} args={[0.5, 64, 64]}>
          <MeshDistortMaterial {...materialProps} />
        </Sphere>
      )}

      {type === "cube" && (
        <Box ref={objRef} args={[0.7, 0.7, 0.7]}>
          <MeshDistortMaterial {...materialProps} />
        </Box>
      )}

      {type === "torus" && (
        <Torus ref={objRef} args={[0.5, 0.2, 16, 100]}>
          <MeshDistortMaterial {...materialProps} />
        </Torus>
      )}
    </>
  );
}

/* ---------------- Hero Section ---------------- */
export default function Hero() {
  const scrollToEducation = () => {
    document.getElementById("education")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero-section relative w-full min-h-screen flex flex-col justify-center items-center text-center px-6 sm:px-12 md:px-20 lg:px-60 overflow-visible mt-32">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-20 sm:opacity-30 md:opacity-40"
        style={{ backgroundImage: `url(${BgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-950 opacity-90 z-0" />

      {/* Three.js Scene */}
      <Canvas className="absolute inset-0 -z-10">
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />

        <Suspense fallback={null}>
          <FloatingObject
            type="sphere"
            position={[-2, 0, -2]}
            color="#4F46E5"
          />
          <FloatingObject type="cube" position={[2, 1, -3]} color="#6366F1" />
          <FloatingObject type="torus" position={[0, -1, -1]} color="#A78BFA" />
          <Stars radius={100} depth={50} count={5000} factor={4} fade />
        </Suspense>

        <OrbitControls enableZoom={false} />
      </Canvas>

      {/* Content */}
      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-5xl font-bold text-white leading-tight"
        >
          Hi, I’m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
            Aditya Tamgade
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg sm:text-3xl text-gray-300 mt-3"
        >
          Frontend & Full-Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-gray-400 max-w-2xl mt-4 text-base sm:text-lg"
        >
          I specialize in building modern, high-performance web applications
          with intuitive UI/UX, smooth animations, and scalable architectures.
          Currently exploring AI-powered web solutions.
        </motion.p>

        {/* Primary Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex gap-6 mt-6 flex-wrap justify-center"
        >
          <Link to="/work">
            <button className="px-5 py-2.5 border border-white text-white hover:bg-white hover:text-black transition rounded-full shadow-md">
              View Portfolio
            </button>
          </Link>

          <Link to="/contact">
            <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 transition rounded-full text-white shadow-md">
              Let’s Work Together
            </button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 2, duration: 2, repeat: Infinity }}
          className="mt-6 cursor-pointer"
          onClick={scrollToEducation}
        >
          <span className="text-indigo-500 text-3xl">↓</span>
        </motion.div>

        {/* Qualifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="flex justify-center mt-4"
        >
          <Link
            to="/qualification"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 text-white font-semibold px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
          >
            Experience & Qualifications
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
