// components/Footer.jsx

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white p-5  rounded-t-3xl shadow-md backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">Aditya Tamgade</h2>
          <p className="text-sm">
            Full Stack Developer | Data Analyst | Photographer
          </p>
        </div>
        <div className="flex space-x-6">
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
            href="https://www.instagram.com/adityatamgade_29/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Instagram
          </a>
        </div>
      </div>
      <p className="text-center text-xs mt-4 opacity-80">
        © {new Date().getFullYear()} Aditya Tamgade. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
