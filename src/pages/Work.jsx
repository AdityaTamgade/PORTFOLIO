const projects = [
  {
    title: "Teacher management System",
    tags: ["React", "Node.js", "typescript", "Tailwind"],
    image: "./image.png",
    link: "https://teacher-management-theta.vercel.app/",
  },
  {
    title: "Portfolio",
    tags: ["React", "Tailwind CSS", "Vite"],
    image: "./6.png",
    link: "https://portfolio-khph.vercel.app",
  },
  {
    title: "Hotel Booking Cancellation Analysis",
    tags: ["Excel", "kaggle", "Dataset"],
    image: "./3.png",
    link: "https://github.com/AdityaTamgade/DATA-ANALYST.git",
  },
  {
    title: "HR Analytics Dashboard",
    tags: ["Power BI", "Excel", "Kaggle"],
    image: "./4.png",
    link: "https://github.com/AdityaTamgade/POWER-BI.git",
  },
  // {
  //   title: "Photo Video Manager",
  //   tags: ["Vite", "Firebase", "Glass UI"],
  //   image: "./5.png",
  //   link: "https://yourproject3.vercel.app",
  // },
  // {
  //   title: "Photo Video Manager",
  //   tags: ["Vite", "Firebase", "Glass UI"],
  //   image: "./2.png",
  //   link: "https://yourproject3.vercel.app",
  // },
];

export default function Work() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-20 sm:px-20">
      {/* Animated Heading */}
      <h2 className="mt-8 text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-400 mb-16 py-2">
        My Work
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/10 border border-white/20 backdrop-blur-lg p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-xl mb-5 transform group-hover:scale-105 transition duration-300"
            />

            {/* Project Title */}
            <h3 className="text-2xl font-semibold mb-3 text-indigo-400">
              {project.title}
            </h3>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-6">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-sm bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full shadow-inner border border-indigo-500/30"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Link Button */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
