import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import CourseCard from "./CourseCard";

function CourseGrid({ courses = [], onCompareSelect }) {
  const gridRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;
    gsap.fromTo(
      gridRef.current.children,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out",
      }
    );
  }, [courses]);

  return (
    <motion.div
      ref={gridRef}
      layout
      transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
      className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 py-8"
    >
      <AnimatePresence mode="popLayout">
        {courses.length > 0 ? (
          courses.map((course) => (
            <motion.div
              key={course.name}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
            >
              <CourseCard course={course} onCompareSelect={onCompareSelect} />
            </motion.div>
          ))
        ) : (
          <motion.div
            className="col-span-full text-center text-zinc-500 dark:text-zinc-400 py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No courses found.
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default CourseGrid;
