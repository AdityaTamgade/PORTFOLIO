<section className="relative w-full min-h-screen flex items-center justify-center text-center px-4 sm:px-6 md:px-12 lg:px-20 pt-28 md:pt-32 overflow-hidden">

  {/* Background */}
  <div
    className="absolute inset-0 bg-cover bg-center z-0 opacity-25"
    style={{ backgroundImage: `url(${BgImage})` }}
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-black via-indigo-950 to-purple-950 opacity-95" />

  {/* 3D Canvas */}
  {!isMobile && (
    <Canvas className="absolute inset-0 z-0">
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 8, 2]} intensity={1} />
      <Suspense fallback={null}>
        <FloatingObject type="sphere" position={[-2, 0, -2]} />
        <FloatingObject type="cube" position={[2, 1, -3]} color="#6366F1" />
        <FloatingObject type="torus" position={[0, -1, -1]} color="#A78BFA" />
        <Stars radius={100} depth={50} count={1500} factor={3} fade />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )}

  {/* Content */}
  <div className="relative z-10 max-w-3xl w-full mx-auto flex flex-col items-center justify-center space-y-6">

    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
    >
      Hi, I’m{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
        Aditya Tamgade
      </span>
    </motion.h1>

    {/* Role */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 1 }}
      className="text-lg sm:text-2xl text-gray-300 font-medium"
    >
      Data Analyst • Python Developer • Problem Solver
    </motion.h2>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 1 }}
      className="text-gray-400 max-w-xl text-sm sm:text-lg leading-relaxed"
    >
      I transform raw data into actionable insights using Python, SQL, and Power BI.
      With hands-on experience in data analysis and visualization, I build solutions
      that help businesses make smarter, data-driven decisions.
    </motion.p>

    {/* Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 1 }}
      className="flex flex-col sm:flex-row gap-4 mt-4"
    >
      <Link to="/work">
        <button className="px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition">
          View Projects
        </button>
      </Link>

      <Link to="/contact">
        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:scale-105 transition">
          Hire Me
        </button>
      </Link>
    </motion.div>

    {/* Scroll */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [0, 10, 0] }}
      transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
      className="mt-6 cursor-pointer"
      onClick={scrollToEducation}
    >
      <span className="text-indigo-400 text-2xl">↓</span>
    </motion.div>

    {/* Extra Button */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 1 }}
    >
      <Link
        to="/qualification"
        className="inline-block px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:scale-105 transition"
      >
        Experience & Certifications
      </Link>
    </motion.div>

  </div>
</section>
