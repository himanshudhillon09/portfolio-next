import { motion } from "framer-motion";
import { useState } from "react";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Skills data with proficiency levels
  const skills = [
    {
      name: "JavaScript",
      level: 90,
      color: "from-yellow-400 to-orange-500",
      icon: "🟨",
    },
    {
      name: "React.js",
      level: 85,
      color: "from-blue-400 to-cyan-500",
      icon: "⚛️",
    },
    {
      name: "Node.js",
      level: 80,
      color: "from-green-400 to-emerald-500",
      icon: "🟢",
    },
    {
      name: "Express.js",
      level: 75,
      color: "from-gray-400 to-gray-600",
      icon: "🚀",
    },
    {
      name: "Python",
      level: 85,
      color: "from-blue-500 to-purple-600",
      icon: "🐍",
    },
    {
      name: "MongoDB",
      level: 70,
      color: "from-green-500 to-teal-600",
      icon: "🍃",
    },
    {
      name: "SQL",
      level: 75,
      color: "from-green-600 to-emerald-700",
      icon: "📑",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const skillCardVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.5,
      },
    }),
  };

  return (
    <div className="min-h-screen slate-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 text-xl">
            Crafting digital experiences with modern technologies
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"
          />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-1"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={skillCardVariants}
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 },
              }}
              onHoverStart={() => setHoveredSkill(index)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <motion.span
                    animate={{
                      scale: hoveredSkill === index ? 1.2 : 1,
                      rotate: hoveredSkill === index ? 10 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className="text-2xl"
                  >
                    {skill.icon}
                  </motion.span>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {skill.name}
                  </h3>
                </div>
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-sm font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                >
                  {skill.level}%
                </motion.span>
              </div>

              {/* Progress Bar Container */}
              <div className="relative">
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={progressBarVariants}
                    custom={skill.level}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                  >
                    {/* Animated shine effect */}
                    <motion.div
                      animate={{
                        x: [-100, 400],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                        delay: 1 + index * 0.2,
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                    />
                  </motion.div>
                </div>

                {/* Floating particles on hover */}
                {hoveredSkill === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 0, scale: 0 }}
                        animate={{
                          opacity: [0, 1, 0],
                          y: -20,
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1,
                          delay: i * 0.1,
                          repeat: Infinity,
                          repeatDelay: 1,
                        }}
                        className="absolute w-2 h-2 bg-blue-400 rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Skill level indicator */}
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>Beginner</span>
                <span>Intermediate</span>
                <span>Advanced</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { label: "Years Experience", value: "1+", icon: "🚀" },
            { label: "Projects Completed", value: "10+", icon: "💼" },
            { label: "Technologies", value: "7+", icon: "⚡" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-800">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
