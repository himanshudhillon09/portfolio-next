"use client"; // Ensures this file is client-side only
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import ContactForm from "./components/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
export default function Home() {
  // State to trigger the rotation on first load
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // Set to true after first load
    setHasLoaded(true);
  }, []);

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
    <div className="min-w-full">
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800 px-6">
        <Navbar />
        {/* Intro Section */}
        <section
          id="about"
          className="intro w-full flex flex-col mt-28 items-center justify-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative mb-6"
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
              onAnimationComplete={() => setHasLoaded(true)} // Ensures rotation happens once on load
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
          <motion.div {...fadeIn} className="flex justify-center gap-4 mt-6">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/himanshu095"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition-all transform hover:scale-110 hover:rotate-6 p-3 bg-blue-100 rounded-full shadow-md hover:shadow-xl"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/himanshudhillon09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-all transform hover:scale-110 hover:rotate-6 p-3 bg-gray-100 rounded-full shadow-md hover:shadow-xl"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>

            {/* Twitter */}
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
            className="text-4xl font-semibold text-center text-white mt-4"
          >
            Hello,
            <br /> I&apos;m Himanshu Dhillon
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-white mt-4 text-center"
          >
            I&apos;m a passionate software developer specializing in full-stack
            development, React.js, and Python. I love solving complex problems
            and building impactful software solutions.
          </motion.p>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills w-full mb-12">
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
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="projects w-3/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          <motion.h2
            {...fadeIn}
            className="text-4xl font-semibold text-white col-span-full mb-6 text-center"
          >
            Projects
          </motion.h2>

          {/* Project 1 */}
          <motion.div
            {...fadeIn}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all flex flex-col"
          >
            <Image
              src="https://www.geckoboard.com/uploads/Live-customer-support-dashboard-example.png"
              alt="Real-Time Dashboard"
              style={{ objectFit: "contain" }}
              width={1000}
              height={1000}
            />
            <div className="p-6 flex-grow">
              <motion.h3
                {...fadeIn}
                className="text-xl font-semibold text-gray-800"
              >
                Real-Time Dashboard
              </motion.h3>
              <motion.p {...fadeIn} className="text-gray-600 mt-4">
                A dashboard to monitor system performance in real-time using
                React, Redux, and Chart.js.
              </motion.p>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            {...fadeIn}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all flex flex-col"
          >
            <Image
              src="https://bitmovin.com/wp-content/uploads/2019/10/scr-buydrm-drm.jpg"
              alt="DRM System"
              style={{ objectFit: "contain" }}
              width={1000}
              height={1000}
            />
            <div className="p-6 flex-grow">
              <motion.h3
                {...fadeIn}
                className="text-xl font-semibold text-gray-800"
              >
                DRM System
              </motion.h3>
              <motion.p {...fadeIn} className="text-gray-600 mt-4">
                Created a Digital Rights Management system using React and
                secure file upload mechanisms.
              </motion.p>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            {...fadeIn}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all flex flex-col"
          >
            <Image
              src="https://xdfile.com/wp-content/uploads/2021/03/eCommerce-Website-UI-Kit-Template-for-XD.jpg"
              alt="Project 3"
              style={{ objectFit: "contain" }}
              width={1000}
              height={1000}
            />
            <div className="p-6 flex-grow">
              <motion.h3
                {...fadeIn}
                className="text-xl font-semibold text-gray-800"
              >
                Ecommerce Website
              </motion.h3>
              <motion.p {...fadeIn} className="text-gray-600 mt-4">
                Discover 5000+ Ecommerce Website designs on Dribbble. Your
                resource to discover and connect with designers worldwide.
              </motion.p>
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="experience w-3/5 mb-12">
          <Experience />
        </section>
        {/* Contact Section */}
        <section id="contact" className="contact w-full text-center mb-12">
          <motion.h2
            {...fadeIn}
            className="text-4xl font-semibold text-white mb-6"
          >
            Contact Me
          </motion.h2>

          <motion.div {...fadeIn} className="text-lg max-w-3/5 text-gray-600">
            <ContactForm />
          </motion.div>
        </section>
      </div>
    </div>
  );
}
