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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToEducation = () => {
    document.getElementById("education")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12 lg:px-20 pt-24 md:pt-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-20 sm:opacity-30"
        style={{ backgroundImage: `url(${BgImage})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-indigo-950 to-purple-950 opacity-90" />

      {/* 3D Canvas (Disabled on Mobile) */}
      {!isMobile && (
        <Canvas className="absolute inset-0 z-0">
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 8, 2]} intensity={1} />
          <Suspense fallback={null}>
            <FloatingObject type="sphere" position={[-2, 0, -2]} />
            <FloatingObject type="cube" position={[2, 1, -3]} color="#6366F1" />
            <FloatingObject
              type="torus"
              position={[0, -1, -1]}
              color="#A78BFA"
            />
            <Stars radius={100} depth={50} count={1500} factor={3} fade />
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto space-y-6 sm:space-y-8">
        {/* Heading */}
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

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg sm:text-2xl text-gray-300"
        >
          Frontend & Full-Stack Developer
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-gray-400 max-w-md sm:max-w-xl mx-auto text-sm sm:text-lg leading-relaxed"
        >
          I turn raw data into meaningful insights using Python, SQL, and Power BI. With experience in both data analytics and full-stack development, I design scalable solutions that drive smarter business decisions through data visualization and automation. Currently focused on advancing in AI-powered analytics..
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Secondary */}
          <Link to="/work">
            <button className="px-6 py-3 text-sm sm:text-base rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition whitespace-nowrap">
              View Portfolio
            </button>
          </Link>

          {/* Primary */}
          <Link to="/contact">
            <button className="px-6 py-3 text-sm sm:text-base rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:scale-105 transition whitespace-nowrap">
              Let’s Work Together
            </button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
          className="mt-8 cursor-pointer"
          onClick={scrollToEducation}
        >
          <span className="text-indigo-400 text-2xl">↓</span>
        </motion.div>

        {/* Qualification Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-6"
        >
          <Link
            to="/qualification"
            className="inline-block px-6 py-2.5 text-base rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:scale-105 transition whitespace-nowrap"
          >
            Experience & Qualifications
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
