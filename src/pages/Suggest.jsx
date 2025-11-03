import React from "react";
import { motion } from "framer-motion";
import { RiExternalLinkLine } from "@remixicon/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Suggest() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] text-zinc-900 dark:text-zinc-100 transition-colors duration-300 flex flex-col">
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Main Section */}
      <main className="flex-1 flex flex-col items-center justify-start pt-28 pb-16 px-6 md:px-12 lg:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl w-full"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-blue-600 text-transparent bg-clip-text">
            Suggest a Course
          </h1>

          <p className="text-zinc-500 dark:text-zinc-400 mb-10 leading-relaxed">
            Help us expand AICademy’s collection! <br />
            If you’ve found a great AI-related course that should be listed here,
            please share it using the form below. We’ll review and add it to our platform.
          </p>

          {/* ✅ Embedded Google Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-zinc-300/40 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/50 shadow-lg backdrop-blur-xl"
          >
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfD_demo_form_url/viewform?embedded=true"
              width="100%"
              height="650"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Suggest a Course"
              className="w-full rounded-2xl"
            >
              Loading…
            </iframe>
          </motion.div>

          {/* ✅ Open in New Tab Button */}
          <div className="mt-10 flex justify-center">
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#7c5cff] hover:bg-[#6a4ce7] text-white rounded-xl font-medium shadow-md shadow-[#7c5cff40] transition-all"
            >
              Open Form in New Tab <RiExternalLinkLine size={18} />
            </a>
          </div>
        </motion.div>
      </main>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
}

export default Suggest;
