import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.2 },
  };

  return (
    <div>
      {/* Intro Section */}
      <section id="about" className="intro w-full flex flex-col mt-28  mb-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center mb-6"
        >
          {/* Professional Photo with Rotation on Page Load and Hover */}
          <motion.img
            src="mypic.jpg" // Add your image path here
            alt="Himanshu Dhillon"
            className="rounded-2xl w-40 h-40 object-cover border-4 border-violet-800 shadow-xl"
            initial={{ opacity: 0, scale: 0 }} // Set scale to 0 initially, but opacity 0 makes it invisible at first
            animate={
              hasLoaded
                ? { opacity: 1, scale: 1, rotate: 360 }
                : { opacity: 1, scale: 1, rotate: 0 }
            } // Rotate on page load
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{
              scale: 1.1,
              rotate: 15, // Adds a slight rotation on hover
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            }}
          />
        </motion.div>

        <motion.div {...fadeIn} className="flex justify-center gap-6 mt-6">
          {/* Hire Me! Button */}
          <button className="flex items-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition">
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
            Hire Me!
          </button>

          {/* Download CV Button */}
          <button className="flex items-center px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition">
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            Download CV
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div {...fadeIn} className="flex justify-center gap-4 mt-6">
          <a
            href="https://www.linkedin.com/in/himanshu095"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition-all transform hover:scale-110 hover:rotate-6 p-3 bg-blue-100 rounded-full shadow-md hover:shadow-xl"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>

          <a
            href="https://github.com/himanshudhillon09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition-all transform hover:scale-110 hover:rotate-6 p-3 bg-gray-100 rounded-full shadow-md hover:shadow-xl"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>

          <a
            href="https://x.com/Himanshu0952"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition-all transform hover:scale-110 hover:rotate-6 p-3 bg-blue-100 rounded-full shadow-md hover:shadow-xl"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl text-center font-light mt-4"
        >
          Hello,
        </motion.h1>

        <span className="text-3xl font-light text-center mt-4">
          I&apos;m <span className="font-bold"> Himanshu Dhillon </span>
        </span>
        <div className="mt-4 p-4 max-w-6xl ml-14">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-cursive mt-12"
          >
            Professional Summary
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg mt-6 font-sans"
          >
            Enthusiastic Full Stack Developer with 1 year of experience in
            building responsive web applications using React and Node.js.
            Skilled in developing efficient APIs and ensuring seamless user
            experiences. Quick learner with a strong focus on delivering
            high-quality solutions.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
