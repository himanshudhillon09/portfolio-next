"use client";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  ChevronRight,
  Code,
  Rocket,
} from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Software Development Engineer",
      company: "Reticen8 Technologies",
      duration: "Sep 2024 - Present",
      type: "Full-time",
      status: "current",
      description: [
        "Led frontend development of enterprise-grade Data Loss Prevention (DLP) system using React.js, TypeScript, and Material-UI, enhancing user experience and security for 1000+ active users.",
        "Implemented secure authentication with JWT tokens, access/refresh token management, and Role-Based Access Control (RBAC) for fine-grained security.",
        "Built interactive dashboards using Chart.js for data visualization, policy violation tracking, and threat intelligence with real-time updates.",
        "Developed policy management interface using Material-UI Stepper component for complex DLP workflows, integrated REST APIs and ipify API for audit logging.",
        "Collaborated with cross-functional teams to deliver scalable and secure frontend applications.",
      ],
      skills: [
        "React.js",
        "TypeScript",
        "Material-UI",
        "Chart.js",
        "REST APIs",
      ],
      icon: <Rocket className="w-5 h-5" />,
    },
    {
      role: "Software Development Intern",
      company: "Reticen8 Technologies",
      duration: "May 2024 - Aug 2024",
      type: "Internship",
      status: "completed",
      description: [
        "Modernized legacy Flask application to high-performance Next.js application with server-side rendering (SSR) and SEO optimization, improving page load performance.",
        "Implemented email automation using Nodemailer and Node.js, built responsive contact forms with real-time validation and error handling.",
        "Designed file download system with server-side filtering and streaming, optimizing backend performance and reducing download latency by 50%.",
        "Collaborated in Agile development with cross-functional teams, participated in code reviews, and delivered production-ready features using version control.",
      ],
      skills: [
        "Next.js",
        "TailwindCss",
        "Node.js",
        "Framer-motion",
        "Nodemailer",
        "Git",
      ],
      icon: <Code className="w-5 h-5" />,
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
              className={`relative flex items-center mb-14 ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <motion.div
                variants={cardHoverVariants}
                whileHover="hover"
                className={`ml-0 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-10" : "md:ml-10"
                } w-[95vw] md:w-[90%] max-w-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-2xl rounded-2xl p-4 md:p-6 border border-white/10 shadow-2xl cursor-pointer group transition-all duration-300 min-h-0`}
                style={{ minHeight: 180, height: "auto" }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white shadow-md">
                      {experience.icon}
                    </div>
                    <div>
                      <h2 className="text-lg md:text-xl font-bold text-white mb-0.5">
                        {experience.role}
                      </h2>
                      <p className="text-blue-300 font-medium text-xs md:text-sm">
                        {experience.company}
                      </p>
                    </div>
                  </div>
                  {experience.status === "current" && (
                    <span className="px-2 py-0.5 bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs font-semibold rounded-full shadow">
                      Current
                    </span>
                  )}
                </div>

                {/* Duration and Type */}
                <div className="flex flex-wrap gap-3 mb-2">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Calendar className="w-4 h-4" />
                    <span className="text-xs">{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs">{experience.type}</span>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-1 mb-2">
                  {experience.description.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      className="flex items-start gap-2 text-slate-200 text-xs md:text-sm group-hover:text-white transition-colors"
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
                      transition={{ delay: idx * 0.06 }}
                      className="px-2 py-0.5 bg-white/10 border border-white/20 rounded-full text-xs font-semibold text-slate-300 cursor-pointer hover:bg-blue-500 hover:text-white transition-colors"
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
