import React, { useState } from "react";
import { motion } from "framer-motion";
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.2 },
  };
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: string;
    text: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prevent multiple submissions
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

      // Basic client-side validation
      if (
        !trimmedFormData.senderEmail ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedFormData.senderEmail)
      ) {
        throw new Error("Please enter a valid email address.");
      }
      if (!trimmedFormData.message) {
        throw new Error("Message cannot be empty.");
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(trimmedFormData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong.");
      }

      setStatusMessage({
        type: "success",
        text: "✅ Your message has been sent!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: unknown) {
      if (error instanceof Error) {
        setStatusMessage({ type: "error", text: `❌ ${error.message}` });
      } else {
        setStatusMessage({
          type: "error",
          text: "❌ An unknown error occurred.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div {...fadeIn} className="text-lg max-w-2/5">
      <div className="bg-white shadow-md rounded-lgp-12 flex flex-col justify-center items-center text-left">
        <h3 className="text-3xl text-center font-semibold text-white mb-12">
          Get in touch
        </h3>

        {statusMessage && (
          <div
            className={`p-3 mb-4 rounded-md text-center ${
              statusMessage.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {statusMessage.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium ">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium ">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium ">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full px-4 py-2 font-semibold rounded-md text-white shadow-md transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-teal-400 hover:bg-green-400 focus:ring-blue-400 focus:ring-offset-2"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
