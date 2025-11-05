// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { RiSparklingLine, RiPlayCircleLine, RiArrowRightLine, RiRobot2Line } from "@remixicon/react";

function HeroSection() {
  const platforms = ["Coursera", "Udemy", "edX", "Pluralsight", "DataCamp", "LinkedIn Learning"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl mx-auto text-center mt-4 lg:mt-8"
      >
        {/* Trust Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/20 shadow-lg">
          <div className="flex items-center gap-1 sm:gap-2">
            <RiSparklingLine className="text-yellow-400" size={14} />
            <span className="text-white text-xs sm:text-sm font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent tracking-wider">
              TRUSTED BY 50K+ AI LEARNERS
            </span>
          </div>
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1 variants={itemVariants} className="hero-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent bg-300% animate-gradient">
            MASTER
          </span>{' '}
          <span className="text-white">AI &</span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent bg-300% animate-gradient">
            MACHINE LEARNING
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p variants={itemVariants} className="hero-subtitle text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-12 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto">
          Discover the perfect AI course across{' '}
          <span className="text-white font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            top platforms
          </span>. Compare prices, curriculum, and make informed decisions.
        </motion.p>

        {/* Platform Tags */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16 px-2">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-3 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
            >
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
              <span className="text-white font-medium text-xs sm:text-sm">{platform}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-6 px-2 mb-8 sm:mb-12">
          <motion.a
            href="/courses"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-sm sm:text-base shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
          >
            <RiPlayCircleLine size={18} />
            <span>Explore Courses</span>
            <RiArrowRightLine className="group-hover:translate-x-1 transition-transform duration-200" size={16} />
          </motion.a>

          <motion.a
            href="/compare"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-xl hover:bg-white/20 border border-white/20 hover:border-white/30 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-300"
          >
            <RiRobot2Line size={18} />
            <span>Compare Platforms</span>
          </motion.a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}

export default HeroSection;