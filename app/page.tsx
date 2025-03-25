"use client"; // Ensures this file is client-side only

import { motion } from "framer-motion";
import Navbar from "./Sections/Navbar";
import Experience from "./Sections/Experience";
import ContactForm from "./Sections/ContactForm";
import HeroSection from "./Sections/HeroSection";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
export default function Home() {
  return (
    <div className="min-w-full">
      {/* Hero Section  */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-blue-300">
        <Navbar />
        <HeroSection />
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="skills min-w-full min-h-screen p-12 bg-blue-800"
      >
        <Skills />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="projects min-w-full min-h-screen p-12 bg-blue-400"
      >
        <Projects />
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience min-w-full min-h-screen">
        <Experience />
      </section>
      {/* Contact Section */}
      <section
        id="contact"
        className="contact min-h-screen bg-cyan-500"
      >
        <ContactForm />
      </section>
    </div>
  );
}
