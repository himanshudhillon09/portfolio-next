"use client";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  ChevronRight,
  Code,
  Users,
  Rocket,
} from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Software Development Engineer",
      company: "Reticen8 Technologies",
      duration: "Jan 2025 - Present",
      type: "Full-time",
      status: "current",
      description: [
        "Developed full-stack applications using React and Node.js.",
        "Implemented robust containerization strategies using Docker and Kubernetes.",
        "Contributed to open-source projects to improve community libraries.",
        "Collaborated with cross-functional teams to deploy scalable web applications.",
        "Ensured continuous integration and delivery using CI/CD pipelines with GitLab and Jenkins.",
      ],
      skills: ["React", "Node.js", "Docker", "Kubernetes", "CI/CD"],
      icon: <Rocket className="w-5 h-5" />,
    },
    {
      role: "Junior Software Engineer",
      company: "Reticen8 Technologies",
      duration: "May 2024 - Sept 2024",
      type: "Full-time",
      status: "completed",
      description: [
        "Built scalable web applications with Next.js and Redis.",
        "Integrated CI/CD pipelines using GitHub Actions to streamline deployments.",
        "Developed browser extensions for Chrome and Firefox.",
        "Improved application performance by optimizing server-side rendering (SSR) with Next.js.",
        "Automated deployment processes using Docker for containerization.",
      ],
      skills: ["Next.js", "Redis", "GitHub Actions", "Docker", "SSR"],
      icon: <Code className="w-5 h-5" />,
    },
    {
      role: "SDE Intern",
      company: "Reticen8 Technologies",
      duration: "May 2024 - Sept 2024",
      type: "Internship",
      status: "completed",
      description: [
        "Assisted in building scalable web applications with Next.js, React, and Redis.",
        "Worked on containerizing applications using Docker for easier deployments.",
        "Integrated CI/CD pipelines using GitHub Actions.",
        "Developed features and optimized code to ensure high-quality performance and scalability.",
        "Participated in code reviews and team meetings to improve code quality and maintainability.",
      ],
      skills: ["Next.js", "React", "Redis", "Docker", "GitHub Actions"],
      icon: <Users className="w-5 h-5" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.1,
      backgroundColor: "#3b82f6",
      color: "#ffffff",
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,#1e40af_0%,transparent_50%)] opacity-20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,#7c3aed_0%,transparent_50%)] opacity-20"></div>

      <div className="relative z-10 p-4 md:p-16 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4">
            Professional Experience
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
            A journey through innovative projects and technical excellence
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative w-full max-w-4xl"
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full z-20 ${
                  experience.status === "current"
                    ? "bg-gradient-to-r from-green-400 to-blue-500 shadow-lg shadow-green-400/50"
                    : "bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-400/50"
                }`}
              >
                <div className="absolute inset-0 rounded-full bg-white bg-opacity-20 animate-pulse"></div>
              </div>

              <motion.div
                variants={cardHoverVariants}
                whileHover="hover"
                className={`ml-12 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                } md:w-1/2 bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl cursor-pointer group`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white">
                      {experience.icon}
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
                        {experience.role}
                      </h2>
                      <p className="text-blue-300 font-medium text-sm md:text-base">
                        {experience.company}
                      </p>
                    </div>
                  </div>
                  {experience.status === "current" && (
                    <span className="px-3 py-1 bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs font-medium rounded-full">
                      Current
                    </span>
                  )}
                </div>

                {/* Duration and Type */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{experience.type}</span>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-3 mb-6">
                  {experience.description.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3 text-slate-200 text-sm md:text-base group-hover:text-white transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      variants={skillVariants}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      transition={{ delay: idx * 0.1 }}
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-slate-300 cursor-pointer"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
