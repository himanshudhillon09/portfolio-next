import { motion } from "framer-motion";
import Image from "next/image";
import {
  ExternalLink,
  Github,
  Zap,
  Shield,
  ShoppingCart,
  Eye,
  Star,
  Code,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Real-Time Dashboard",
      description:
        "A comprehensive dashboard to monitor system performance in real-time using React, Redux, and Chart.js with live data visualization.",
      image:
        "https://www.geckoboard.com/uploads/Live-customer-support-dashboard-example.png",
      technologies: ["React", "Redux", "Chart.js", "WebSocket", "Node.js"],
      category: "Analytics",
      status: "Live",
      metrics: {
        views: "12.5K",
        stars: "234",
        commits: "127",
      },
      links: {
        demo: "#",
        github: "#",
      },
      icon: <Zap className="w-5 h-5" />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "DRM Protection System",
      description:
        "Enterprise-grade Digital Rights Management system with secure file upload, encryption, and access control mechanisms.",
      image:
        "https://bitmovin.com/wp-content/uploads/2019/10/scr-buydrm-drm.jpg",
      technologies: ["React", "Node.js", "MongoDB", "JWT", "AWS S3"],
      category: "Security",
      status: "In Development",
      metrics: {
        views: "8.2K",
        stars: "189",
        commits: "95",
      },
      links: {
        demo: "#",
        github: "#",
      },
      icon: <Shield className="w-5 h-5" />,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description:
        "Modern e-commerce solution with advanced features including real-time inventory, payment processing, and analytics dashboard.",
      image:
        "https://xdfile.com/wp-content/uploads/2021/03/eCommerce-Website-UI-Kit-Template-for-XD.jpg",
      technologies: ["Next.js", "Stripe", "Prisma", "TypeScript", "Tailwind"],
      category: "Web App",
      status: "Completed",
      metrics: {
        views: "15.7K",
        stars: "342",
        commits: "203",
      },
      links: {
        demo: "#",
        github: "#",
      },
      icon: <ShoppingCart className="w-5 h-5" />,
      gradient: "from-green-500 to-teal-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: -12,
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Live":
        return "bg-green-500";
      case "In Development":
        return "bg-yellow-500";
      case "Completed":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br bg-slate-900 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,#1e40af_0%,transparent_50%)] opacity-20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#7c3aed_0%,transparent_50%)] opacity-20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,#059669_0%,transparent_50%)] opacity-10"></div>

      <div className="relative z-10 p-6 md:p-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto">
            Showcasing innovative solutions and technical excellence across
            various domains
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              <motion.div
                variants={hoverVariants}
                className="bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-2xl cursor-pointer h-full flex flex-col"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(
                        project.status
                      )} shadow-lg`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div
                      className={`flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white text-xs font-medium shadow-lg`}
                    >
                      {project.icon}
                      <span>{project.category}</span>
                    </div>
                  </div>

                  {/* Overlay Links */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.links.demo}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.links.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-sm md:text-base mb-6 line-clamp-3 flex-grow">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex items-center gap-4 mb-6 text-slate-400 text-sm">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{project.metrics.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      <span>{project.metrics.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Code className="w-4 h-4" />
                      <span>{project.metrics.commits}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(59, 130, 246, 0.8)",
                          color: "#ffffff",
                        }}
                        className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-slate-300 cursor-pointer transition-all"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 text-lg mb-6">
            Interested in collaborating on exciting projects?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={()=>window.location.href = "https://github.com/himanshudhillon09"}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all"
          >
            View All Projects on GitHub
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
