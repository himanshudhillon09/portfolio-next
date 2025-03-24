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

  const hoverEffect = {
    scale: 1.05,
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3 },
  };

  return (
    <div className="min-h-screen bg-slate-800 p-4 md:p-16 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl text-center mb-8 md:mb-16 text-white font-bold">
        Experience
      </h1>

      <div className="relative min-w-full p-4 max-w-2xl z-10">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`flex items-center mb-8 md:mb-16 ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              whileHover={hoverEffect}
              className="bg-white shadow-lg md:shadow-2xl rounded-2xl md:rounded-3xl p-3 md:p-8 md:w-3/5 transform transition-all cursor-pointer"
              style={{
                borderLeft: "6px solid #3b82f6",
                background: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(10px)",
              }}
            >
              <h2 className="text-xl md:text-3xl font-semibold text-gray-800 mb-2 md:mb-4">
                {experience.role}
              </h2>
              <p className="text-base md:text-lg text-gray-600 font-medium">
                {experience.company}
              </p>
              <p className="text-sm text-gray-500 italic mb-4 md:mb-6">
                {experience.duration}
              </p>
              <ul className="list-disc list-inside space-y-1 md:space-y-2 text-sm md:text-base text-gray-700">
                {experience.description.map((item, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ scale: 1.02, color: "#3b82f6" }}
                    transition={{ duration: 0.2 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
