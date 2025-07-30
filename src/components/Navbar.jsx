import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-5 left-5 right-5 z-50 px-4">
      <div className="flex items-center justify-between rounded-xl backdrop-blur-md bg-white/1 border border-white/20 px-6 py-3 shadow-lg">
        {/* Logo or Text */}
        <Link
          to="/"
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-400 tracking-wide hover:scale-105 transition-transform"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          ADDYYY.DEV
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex gap-6 text-white font-light">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`hover:underline transition-all ${
                location.pathname === link.path ? "text-indigo-400" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div
          className="sm:hidden text-white text-xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 right-5 bg-black/80 backdrop-blur-md border border-white/20 p-4 rounded shadow text-white flex flex-col gap-2 sm:hidden z-50">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`hover:underline ${
                location.pathname === link.path ? "text-indigo-400" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
