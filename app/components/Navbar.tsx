import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; // Adjust based on your routing library (e.g., React Router or Next.js Link)

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Animation variants for the navbar
  const navItemVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 },
  };

  const hamburgerVariants = {
    open: { rotate: 45, y: 6, transition: { duration: 0.3 } },
    close: { rotate: 0, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <header className="bg-violet-500 shadow-md sticky min-w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="text-white text-xl font-bold">
            <Link href="/">Himanshu's Portfolio</Link>
          </div>

          {/* Desktop Menu */}
          <motion.nav
            className="hidden md:flex space-x-6"
            initial="initial"
            animate="animate"
          >
            <motion.div variants={navItemVariants}>
              <Link href="/" className="text-white hover:text-yellow-300 transition duration-200">Home</Link>
            </motion.div>
            <motion.div variants={navItemVariants}>
              <Link href="/about" className="text-white hover:text-yellow-300 transition duration-200">About</Link>
            </motion.div>
            <motion.div variants={navItemVariants}>
              <Link href="/projects" className="text-white hover:text-yellow-300 transition duration-200">Projects</Link>
            </motion.div>
            <motion.div variants={navItemVariants}>
              <Link href="/contact" className="text-white hover:text-yellow-300 transition duration-200">Contact</Link>
            </motion.div>
          </motion.nav>

          {/* Mobile Menu Button (Hamburger Icon) */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            initial="close"
            animate={isMenuOpen ? "open" : "close"}
          >
            <motion.div className="w-8 h-1 bg-white mb-2" variants={hamburgerVariants} />
            <motion.div className="w-8 h-1 bg-white mb-2" variants={hamburgerVariants} />
            <motion.div className="w-8 h-1 bg-white" variants={hamburgerVariants} />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden bg-blue-500 text-white absolute top-0 left-0 right-0 px-6 py-4 ${isMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.nav>
          <motion.div variants={navItemVariants}>
            <Link href="/" className="block py-2">Home</Link>
          </motion.div>
          <motion.div variants={navItemVariants}>
            <Link href="/about" className="block py-2">About</Link>
          </motion.div>
          <motion.div variants={navItemVariants}>
            <Link href="/projects" className="block py-2">Projects</Link>
          </motion.div>
          <motion.div variants={navItemVariants}>
            <Link href="/contact" className="block py-2">Contact</Link>
          </motion.div>
        </motion.nav>
      </motion.div>
    </header>
  );
};

export default Navbar;
