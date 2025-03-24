import { motion } from "framer-motion";

const Skills = () => {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.2 },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.2, staggerChildren: 0.2 },
  };

  const hoverEffect = {
    whileHover: {
      scale: 1.05,
      rotate: 3,
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    },
  };

  return (
    <div>
      <motion.h2
        {...fadeIn}
        className="text-4xl font-semibold text-white mb-6 text-center"
      >
        Skills
      </motion.h2>
      <motion.ul
        {...fadeInUp}
        className="flex flex-wrap justify-center gap-6 text-lg text-gray-600"
      >
        <motion.li
          {...hoverEffect}
          className="bg-blue-100 px-4 py-2 rounded-full"
        >
          JavaScript
        </motion.li>
        <motion.li
          {...hoverEffect}
          className="bg-blue-100 px-4 py-2 rounded-full"
        >
          React.js
        </motion.li>
        <motion.li
          {...hoverEffect}
          className="bg-blue-100 px-4 py-2 rounded-full"
        >
          Node.js
        </motion.li>
        <motion.li
          {...hoverEffect}
          className="bg-blue-100 px-4 py-2 rounded-full"
        >
          Express.js
        </motion.li>
        <motion.li
          {...hoverEffect}
          className="bg-blue-100 px-4 py-2 rounded-full"
        >
          Python
        </motion.li>
        <motion.li
          {...hoverEffect}
          className="bg-blue-100 px-4 py-2 rounded-full"
        >
          MongoDB
        </motion.li>
        <motion.li
          {...hoverEffect}
          className="bg-blue-100 px-4 py-2 rounded-full"
        >
          Django
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default Skills;
