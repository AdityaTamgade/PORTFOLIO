import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white py-3 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-2">
        
        <div>
          <h2 className="text-sm font-medium">Aditya Tamgade</h2>
          <p className="text-xs opacity-80">
            Full Stack Developer | Data Analyst
          </p>
        </div>

        <div className="flex space-x-4 text-sm">
          <a
            href="https://github.com/AdityaTamgade"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/aditya-tamgade"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Instagram
          </a>
        </div>
      </div>

      <p className="text-center text-[10px] mt-2 opacity-70">
        © {new Date().getFullYear()} Aditya Tamgade
      </p>
    </footer>
  );
};

export default Footer;
