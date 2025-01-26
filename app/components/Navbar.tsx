import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-center mt-3 bg-slate-200 md:max-w-7xl rounded-3xl px-4 py-2 sm:px-6 z-50 lg:px-8">
      {/* Navbar Container */}
      <div className="flex justify-center">
        {/* Hamburger Icon */}
        <motion.button
          className="md:hidden flex flex-col justify-center items-center gap-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-8 h-1 bg-white rounded"></div>
          <div className="w-8 h-1 bg-white rounded"></div>
          <div className="w-8 h-1 bg-white rounded"></div>
        </motion.button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 rounded-2xl ">
          {["Home", "About", "Projects", "Experience", "Skills", "Contact"].map(
            (item, index) => (
              <Link
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-slate-900 hover:bg-yellow-400 rounded-3xl px-3 py-2 transition duration-200"
              >
                {item}
              </Link>
            )
          )}
        </nav>
      </div>

      {/* Full-Screen Mobile Menu */}
      <motion.div
        className={`fixed inset-0 bg-slate-500 text-white flex flex-col items-center justify-center ${
          isMenuOpen ? "block" : "hidden"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={() => setIsMenuOpen(false)}
        >
          ✕
        </button>

        {/* Menu Items */}
        <nav className="space-y-6 flex flex-col text-center">
          {["Home", "About", "Projects", "Experience", "Skills", "Contact"].map(
            (item, index) => (
              <Link
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-xl hover:bg-yellow-400 rounded-3xl px-4 py-2 transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            )
          )}
        </nav>
      </motion.div>
    </div>
  );
};

export default Navbar;
