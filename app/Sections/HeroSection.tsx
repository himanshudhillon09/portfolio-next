import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { Briefcase, Download, Github, Linkedin, Twitter } from "lucide-react";
import myPic from "../../public/mypic.jpg";
import Image from "next/image";

const HeroSection = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/himanshu095",
      icon: Linkedin,
      color: "text-blue-600 hover:text-blue-700",
      bg: "bg-blue-50 hover:bg-blue-100",
    },
    {
      href: "https://github.com/himanshudhillon09",
      icon: Github,
      color: "text-gray-700 hover:text-gray-900",
      bg: "bg-gray-50 hover:bg-gray-100",
    },
    {
      href: "https://x.com/Himanshu0952",
      icon: Twitter,
      color: "text-blue-400 hover:text-blue-600",
      bg: "bg-blue-50 hover:bg-blue-100",
    },
  ];

  const downloadResume = useCallback(async () => {
    setIsDownloading(true);
    try {
      const response = await fetch("/api/download", { method: "GET" });

      if (!response.ok) {
        throw new Error(
          `Failed to download: ${response.status} ${response.statusText}`
        );
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "himanshu_dhillon_resume.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download error:", error);
      alert("Sorry, something went wrong while downloading the resume.");
    } finally {
      setIsDownloading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-indigo-900">
      <section id="about" className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative inline-block mb-8"
          >
            <motion.div
              className="relative"
              initial={{ scale: 0 }}
              animate={hasLoaded ? { scale: 1, rotate: 360 } : { scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                rotate: 5,
                transition: { duration: 0.3 },
              }}
            >
              <Image
                src={myPic}
                alt="Himanshu Dhillon"
                height={192}
                width={192}
                className="w-48 h-48 rounded-full object-cover border-4 border-sky-200 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400/20 to-yellow-400/20" />
            </motion.div>
          </motion.div>

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-5xl lg:text-6xl font-light text-gray-800 mb-2">
              Hello,
            </h1>
            <p className="text-3xl lg:text-4xl font-light text-gray-200">
              I&apos;m{" "}
              <span className="font-bold text-sky-600">Himanshu Dhillon</span>
            </p>
            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-sky-500 to-yellow-400 mx-auto rounded-full" />
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
          >
            <motion.button
              variants={fadeInUp}
              className="group flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-600 to-sky-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "#contact")}
              aria-label="Hire Me"
            >
              <Briefcase className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Hire Me!
            </motion.button>

            <motion.button
              variants={fadeInUp}
              className="group flex items-center justify-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-full shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-sky-300 hover:bg-yellow-50 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadResume}
              disabled={isDownloading}
              aria-disabled={isDownloading}
              aria-label="Download CV"
            >
              <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              {isDownloading ? "Downloading..." : "Download CV"}
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="flex justify-center gap-4 mb-16"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                className={`${social.color} ${social.bg} p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Visit my ${
                  social.href.includes("linkedin")
                    ? "LinkedIn"
                    : social.href.includes("github")
                    ? "GitHub"
                    : "Twitter"
                }`}
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 lg:p-12 border border-sky-100">
              <motion.h2
                variants={fadeInLeft}
                initial="initial"
                animate="animate"
                className="text-3xl lg:text-4xl font-light text-gray-800 mb-6 text-center"
              >
                Professional Summary
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.2 }}
                className="text-lg lg:text-xl text-gray-600 leading-relaxed text-center"
              >
                Enthusiastic Full Stack Developer with 1 year of experience in
                building responsive web applications using React and Node.js.
                Skilled in developing efficient APIs and ensuring seamless user
                experiences. Quick learner with a strong focus on delivering
                high-quality solutions.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
