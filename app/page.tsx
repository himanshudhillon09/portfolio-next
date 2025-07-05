"use client";

import { motion } from "framer-motion";
import Navbar from "./Sections/Navbar";
import Experience from "./Sections/Experience";
import ContactForm from "./Sections/ContactForm";
import HeroSection from "./Sections/HeroSection";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";

export default function Home() {
  return (
    <div className="relative w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen bg-cyan-300">
        <HeroSection />
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative min-h-screen p-12 from-slate-50">
        <Skills />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative min-h-screen p-12 bg-slate-900"
      >
        <Projects />
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative min-h-screen">
        <Experience />
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative min-h-screen bg-teal-100">
        <ContactForm />
      </section>
    </div>
  );
}
