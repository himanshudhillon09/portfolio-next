import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  User,
  Mail,
  MessageSquare,
  Tag,
  CheckCircle,
  XCircle,
} from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatusMessage(null);

    try {
      const trimmedFormData = {
        name: formData.name.trim(),
        senderEmail: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      };

      if (
        !trimmedFormData.senderEmail ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedFormData.senderEmail)
      ) {
        throw new Error("Please enter a valid email address.");
      }
      if (!trimmedFormData.message) {
        throw new Error("Message cannot be empty.");
      }

      await new Promise((resolve) => setTimeout(resolve, 2000));

      setStatusMessage({
        type: "success",
        text: "Your message has been sent successfully!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatusMessage({
        type: "error",
        text: error.message || "An error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputFields = [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      icon: User,
      placeholder: "Enter your full name",
      required: true,
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      icon: Mail,
      placeholder: "Enter your email address",
      required: true,
    },
    {
      name: "subject",
      label: "Subject",
      type: "text",
      icon: Tag,
      placeholder: "What is this about?",
      required: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="w-full max-w-2xl"
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-10 p-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get in{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              Touch
            </span>
          </h2>
          <p className="text-gray-300 text-lg">
            Have a question or want to work together? I&#39;d love to hear from
            you.
          </p>
        </motion.div>

        {/* Status Message */}
        {statusMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`flex items-center gap-3 p-4 mb-6 rounded-xl border ${
              statusMessage.type === "success"
                ? "bg-green-500/20 border-green-500/30 text-green-300"
                : "bg-red-500/20 border-red-500/30 text-red-300"
            }`}
          >
            {statusMessage.type === "success" ? (
              <CheckCircle className="h-5 w-5" />
            ) : (
              <XCircle className="h-5 w-5" />
            )}
            <span>{statusMessage.text}</span>
          </motion.div>
        )}

        {/* Form */}
        <motion.form
          variants={staggerChildren}
          initial="initial"
          animate="animate"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Input Fields */}
          {inputFields.map((field) => (
            <motion.div key={field.name} variants={fadeInUp}>
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                {field.label}{" "}
                {field.required && <span className="text-red-400">*</span>}
              </label>
              <div className="relative">
                <field.icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.required}
                  placeholder={field.placeholder}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}

          {/* Message Field */}
          <motion.div variants={fadeInUp}>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Message <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project or just say hello..."
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
              />
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={fadeInUp}>
            <motion.button
              type="submit"
              disabled={loading}
              className={`w-full py-4 px-6 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 ${
                loading
                  ? "bg-gray-600 cursor-not-allowed opacity-50"
                  : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 hover:shadow-xl"
              }`}
              whileHover={!loading ? { scale: 1.02 } : {}}
              whileTap={!loading ? { scale: 0.98 } : {}}
            >
              <div className="flex items-center justify-center gap-3">
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </div>
            </motion.button>
          </motion.div>
        </motion.form>

        {/* Footer */}
        <motion.div
          variants={fadeInUp}
          className="mt-8 pt-6 border-t border-white/20 text-center"
        >
          <p className="text-gray-400 text-sm">
            I typically respond within 24 hours. Looking forward to connecting
            with you!
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactForm;
