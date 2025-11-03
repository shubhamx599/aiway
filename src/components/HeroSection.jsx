// src/components/HeroSection.jsx
import React from "react";
import { RiRobot2Line, RiSparklingLine, RiPlayCircleLine, RiArrowRightLine, RiShieldCheckLine, RiStarLine, RiUserLine } from "@remixicon/react";
import "./HeroSection.css";

function HeroSection() {
  const stats = [
    { value: "500+", label: "AI Courses" },
    { value: "50K+", label: "Students" },
    { value: "4.8/5", label: "Rating" }
  ];

  const platforms = ["Coursera", "Udemy", "edX", "Pluralsight", "DataCamp", "LinkedIn Learning"];

  return (
    <section className="hero-section relative flex flex-col items-center justify-center min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20">
      {/* Background Effects - Mobile Optimized */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-blue-600/8 to-purple-600/5" />
      <div className="absolute top-20 left-4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-blue-500/10 rounded-full blur-2xl lg:blur-3xl pulse-slow" />
      <div className="absolute bottom-20 right-4 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-purple-500/10 rounded-full blur-2xl lg:blur-3xl pulse-slower" />
      
      {/* Floating AI Elements - Hidden on mobile, visible on tablet+ */}
      <div className="hidden sm:block absolute top-20 left-4 lg:left-10 opacity-40 hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
          <RiRobot2Line className="text-blue-400" size={16} lg:size={20} />
          <span className="text-white text-sm font-medium">ML Expert</span>
        </div>
      </div>
      
      <div className="hidden md:block absolute top-40 right-4 lg:right-16 opacity-40 hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
          <RiShieldCheckLine className="text-green-400" size={16} lg:size={20} />
          <span className="text-white text-sm font-medium">Verified</span>
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-40 left-4 lg:left-20 opacity-40 hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
          <RiStarLine className="text-yellow-400" size={16} lg:size={20} />
          <span className="text-white text-sm font-medium">Top Rated</span>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto text-center mt-4 lg:mt-8">
        {/* Badge - Mobile Optimized */}
        <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/20 shadow-lg sm:shadow-2xl">
          <div className="flex items-center gap-1 sm:gap-2">
            <RiSparklingLine className="text-yellow-400" size={14} sm:size={16} lg:size={20} />
            <span className="text-white text-xs sm:text-sm font-semibold">50K+ AI Learners</span>
          </div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full ping" />
        </div>

        {/* Main Heading - Mobile First Typography */}
        <h1 className="hero-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight sm:leading-tight mb-4 sm:mb-6">
          <span className="gradient-text-1 block sm:inline">
            Master
          </span>{" "}
          <span className="text-white block sm:inline">AI &</span>
          <br className="hidden sm:block" />
          <span className="gradient-text-2 block sm:inline">
            Machine Learning
          </span>
        </h1>

        {/* Subheading - Mobile Optimized */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-300 mb-6 sm:mb-8 md:mb-12 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed sm:leading-relaxed">
          Discover the perfect AI course across{" "}
          <span className="text-white font-semibold">6+ top platforms</span>. 
          Compare prices, curriculum, and reviews.
        </p>

        {/* Platform Logos - Scrollable on Mobile */}
        <div className="flex overflow-x-auto pb-4 mb-6 sm:mb-8 md:mb-12 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0 hide-scrollbar">
          {platforms.map((platform) => (
            <div
              key={platform}
              className="flex-shrink-0 flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full" />
              <span className="text-white font-medium text-xs sm:text-sm">{platform}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons - Stack on Mobile */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16 px-2 sm:px-0">
          <a
            href="/courses"
            className="group w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base md:text-lg shadow-lg sm:shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <RiPlayCircleLine size={18} sm:size={20} md:size={24} />
            <span>Explore Courses</span>
            <RiArrowRightLine className="group-hover:translate-x-1 transition-transform duration-200" size={14} sm:size={16} md:size={20} />
          </a>

          <a
            href="/compare"
            className="group w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-xl hover:bg-white/20 border border-white/20 hover:border-white/30 text-white px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 active:scale-95 relative"
          >
            <RiRobot2Line size={18} sm:size={20} md:size={24} />
            <span>Compare</span>
            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full bounce">
              AI
            </div>
          </a>
        </div>

        {/* Stats Section - Grid on Mobile */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-xs sm:max-w-md md:max-w-2xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-zinc-400 text-xs sm:text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges - Stack on Mobile */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-12 pt-6 sm:pt-8 border-t border-white/10 px-4 sm:px-0">
          <div className="flex items-center gap-2 text-zinc-400">
            <RiShieldCheckLine className="text-green-400" size={14} sm:size={16} />
            <span className="text-xs sm:text-sm">Verified Reviews</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-400">
            <RiUserLine className="text-blue-400" size={14} sm:size={16} />
            <span className="text-xs sm:text-sm">Student Feedback</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-400">
            <RiStarLine className="text-yellow-400" size={14} sm:size={16} />
            <span className="text-xs sm:text-sm">Expert Curated</span>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 lg:h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}

export default HeroSection;