import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { RiMailLine, RiUserLine, RiMessage3Line, RiSendPlane2Line } from "@remixicon/react";
import gsap from "gsap";

function Contact() {
  useEffect(() => {
    gsap.from(".contact-header", { opacity: 0, y: 40, duration: 0.8, ease: "power3.out" });
    gsap.from(".contact-form", { opacity: 0, y: 50, duration: 1, delay: 0.3, ease: "power3.out" });
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] text-zinc-900 dark:text-zinc-100 flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <motion.div
          className="contact-header text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-blue-600 text-transparent bg-clip-text mb-4">
            Get in Touch
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">
            Have a question, collaboration idea, or feedback? Let’s build the future of AI learning together.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="contact-form backdrop-blur-xl bg-white/30 dark:bg-zinc-900/40 rounded-2xl p-8 shadow-lg border border-zinc-700/30 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div>
            <label className="block text-sm font-medium mb-2 flex items-center gap-2">
              <RiUserLine size={20} className="text-indigo-500" /> Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 flex items-center gap-2">
              <RiMailLine size={20} className="text-indigo-500" /> Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 flex items-center gap-2">
              <RiMessage3Line size={20} className="text-indigo-500" /> Message
            </label>
            <textarea
              placeholder="Type your message..."
              rows="5"
              className="w-full px-4 py-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 text-sm resize-none"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="flex items-center justify-center gap-2 w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all"
          >
            <RiSendPlane2Line size={20} /> Send Message
          </motion.button>
        </motion.form>

        {/* Contact Info Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            Prefer email? Reach out directly at{" "}
            <a href="mailto:hello@aicademy.com" className="text-indigo-500 hover:underline">
              hello@aicademy.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
