import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import CourseCard from "./CourseCard";

function FeaturedSection({ courses = [], onCompareSelect }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll(".featured-card");
    gsap.fromTo(
      cards,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
    );
  }, []);

  return (
    <section className="mt-10 px-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Trending Courses</h2>
        <span className="text-sm text-zinc-500 dark:text-zinc-400">
          Curated & Popular Picks
        </span>
      </div>

      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
      >
        {courses.length > 0 ? (
          courses.map((course, i) => (
            <div
              key={i}
              className="featured-card min-w-[280px] snap-start flex-shrink-0"
            >
              <CourseCard course={course} onCompareSelect={onCompareSelect} />
            </div>
          ))
        ) : (
          <div className="text-zinc-500 dark:text-zinc-400 text-sm">
            No featured courses.
          </div>
        )}
      </motion.div>
    </section>
  );
}

export default FeaturedSection;
