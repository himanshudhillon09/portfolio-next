"use client";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Software Development Engineer",
      company: "Reticen8 Technologies",
      duration: "Jan 2025 - Present",
      description: [
        "Developed full-stack applications using React and Node.js.",
        "Implemented robust containerization strategies using Docker and Kubernetes.",
        "Contributed to open-source projects to improve community libraries.",
        "Collaborated with cross-functional teams to deploy scalable web applications.",
        "Ensured continuous integration and delivery using CI/CD pipelines with GitLab and Jenkins.",
      ],
    },
    {
      role: "Junior Software Engineer",
      company: "Reticen8 Technologies",
      duration: "May 2024 - Sept 2024",
      description: [
        "Built scalable web applications with Next.js and Redis.",
        "Integrated CI/CD pipelines using GitHub Actions to streamline deployments.",
        "Developed browser extensions for Chrome and Firefox.",
        "Improved application performance by optimizing server-side rendering (SSR) with Next.js.",
        "Automated deployment processes using Docker for containerization.",
      ],
    },
    {
      role: "SDE Intern",
      company: "Reticen8 Technologies",
      duration: "May 2024 - Sept 2024",
      description: [
        "Assisted in building scalable web applications with Next.js, React, and Redis.",
        "Worked on containerizing applications using Docker for easier deployments.",
        "Integrated CI/CD pipelines using GitHub Actions.",
        "Developed features and optimized code to ensure high-quality performance and scalability.",
        "Participated in code reviews and team meetings to improve code quality and maintainability.",
      ],
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 p-16 flex flex-col items-center">
      <h1 className="text-4xl text-center mb-16 text-gray-800">Experience</h1>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <motion.div
          className="absolute w-48 h-48 bg-yellow-300 rounded-full opacity-70 animate-pulse"
          initial={{ left: "10%", top: "10%" }}
          animate={{
            left: ["10%", "90%"],
            top: ["10%", "90%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute w-36 h-36 bg-blue-500 rounded-full opacity-50 animate-pulse"
          initial={{ left: "80%", top: "50%" }}
          animate={{
            left: ["80%", "20%"],
            top: ["50%", "10%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative w-full max-w-5xl z-10">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            } items-center mb-32 relative`}
          >
            {/* Experience Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="bg-white shadow-2xl rounded-3xl p-12 w-2/3 transform hover:scale-105 hover:shadow-2xl transition-all"
              style={{
                borderLeft: "8px solid #3b82f6", // Add a left border for a modern look
                background: "rgba(255, 255, 255, 0.9)", // Slight transparency for modern effect
                backdropFilter: "blur(10px)", // Glassmorphism effect
              }}
            >
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                {experience.role}
              </h2>
              <p className="text-lg text-gray-600 font-medium">
                {experience.company}
              </p>
              <p className="text-sm text-gray-500 italic mb-6">
                {experience.duration}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {experience.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
