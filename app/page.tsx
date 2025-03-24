"use client"; // Ensures this file is client-side only
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "./Sections/Navbar";
import Experience from "./Sections/Experience";
import ContactForm from "./Sections/ContactForm";
import HeroSection from "./Sections/HeroSection";
import Skills from "./Sections/Skills";

export default function Home() {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.2 },
  };

  return (
    <div className="min-w-full">
      {/* Hero Section  */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-blue-300 px-6">
        <Navbar />
        <HeroSection />
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills w-full mb-12">
        <Skills />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="projects grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
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
              Created a Digital Rights Management system using React and secure
              file upload mechanisms.
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
      <section id="experience" className="experience min-w-full mb-12">
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

        <motion.div {...fadeIn} className="text-lg text-gray-600">
          <ContactForm />
        </motion.div>
      </section>
    </div>
  );
}
