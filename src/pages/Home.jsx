import React, { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturedSection from "../components/FeaturedSection";
import Footer from "../components/Footer";
import { RiSparkling2Line, RiArrowRightUpLine } from "@remixicon/react";

function Home() {

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      <Navbar />
      <HeroSection />

      {/* Featured Section */}
      <motion.section
        className="fade-section max-w-7xl mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <FeaturedSection />
      </motion.section>

      {/* CTA Banner */}
      <motion.section
        className="fade-section relative max-w-6xl mx-auto px-6 py-20 text-center overflow-hidden rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 via-blue-500/10 to-transparent backdrop-blur-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 to-transparent blur-3xl" />

        <motion.div
          className="relative z-10 flex flex-col items-center justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 text-indigo-400">
            <RiSparkling2Line size={22} />
            <span className="uppercase tracking-wide text-sm font-medium">Level Up</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-blue-500 text-transparent bg-clip-text">
            Compare Courses. Save Time. Learn Smarter.
          </h2>

          <p className="max-w-2xl text-zinc-500 dark:text-zinc-400">
            Explore AI, ML, and Prompt Engineering courses across top platforms like Coursera, Udemy, and more — all in one clean hub built for learners.
          </p>

          <motion.a
            href="/courses"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg transition-all"
          >
            Explore Courses <RiArrowRightUpLine size={20} />
          </motion.a>
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  );
}

export default Home;
