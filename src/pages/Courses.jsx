import React, { useEffect, useState } from "react";
import Fuse from "fuse.js";
import { motion } from "framer-motion";
import coursesData from "../data/courses.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import { RiSearch2Line, RiFilter3Line } from "@remixicon/react";

function Courses() {
  const [query, setQuery] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(coursesData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPlatform, setSelectedPlatform] = useState("All");
  const [priceFilter, setPriceFilter] = useState("All");
  const [durationFilter, setDurationFilter] = useState("All");

  const fuse = new Fuse(coursesData, {
    keys: ["name", "tags", "platform"],
    threshold: 0.3,
  });

  const categories = ["All", "AI Basics", "Machine Learning", "Deep Learning", "Prompting", "AI Tools"];
  const platforms = ["All", "Coursera", "Udemy", "YouTube", "edX", "Skillshare"];
  const durations = ["All", "≤5 hrs", "5–10 hrs", "10–20 hrs", "20+ hrs"];
  const prices = ["All", "Free", "Paid"];

  useEffect(() => {
    let results = query ? fuse.search(query).map((r) => r.item) : coursesData;

    if (selectedCategory !== "All") {
      results = results.filter((c) => c.tags.includes(selectedCategory));
    }
    if (selectedPlatform !== "All") {
      results = results.filter((c) => c.platform === selectedPlatform);
    }
    if (priceFilter !== "All") {
      results = results.filter((c) => c.price === priceFilter);
    }
    if (durationFilter !== "All") {
      results = results.filter((c) => {
        const d = parseInt(c.duration);
        if (durationFilter === "≤5 hrs") return d <= 5;
        if (durationFilter === "5–10 hrs") return d > 5 && d <= 10;
        if (durationFilter === "10–20 hrs") return d > 10 && d <= 20;
        if (durationFilter === "20+ hrs") return d > 20;
        return true;
      });
    }

    setFilteredCourses(results);
  }, [query, selectedCategory, selectedPlatform, priceFilter, durationFilter]);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-blue-500 text-transparent bg-clip-text"
        >
          Explore AI Courses
        </motion.h1>
        <p className="mt-3 text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
          Filter and compare the best AI, ML, and Data Science courses from multiple platforms.
        </p>
      </section>

      {/* Search & Filters */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto px-6 flex flex-col gap-6"
      >
        {/* Search Bar */}
        <div className="relative">
          <RiSearch2Line className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for courses..."
            className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-300/20 dark:border-zinc-700/30 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
          />
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <RiFilter3Line className="text-indigo-500" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "border-zinc-300/30 dark:border-zinc-700/30 hover:bg-indigo-500/10"
              } transition-all`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dropdown Filters */}
        <div className="flex flex-wrap gap-4 mt-2">
          <select
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
            className="px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-300/20 dark:border-zinc-700/30 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
          >
            {platforms.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>

          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-300/20 dark:border-zinc-700/30 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
          >
            {prices.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>

          <select
            value={durationFilter}
            onChange={(e) => setDurationFilter(e.target.value)}
            className="px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-300/20 dark:border-zinc-700/30 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
          >
            {durations.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
        </div>
      </motion.div>

      {/* Course Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.03 }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center text-zinc-500 py-16">
            No courses found matching your filters.
          </div>
        )}
      </motion.div>

      <Footer />
    </div>
  );
}

export default Courses;
