import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { RiExternalLinkLine, RiAddLine, RiCheckLine } from "@remixicon/react";

function CourseCard({ course, onCompareSelect, isSelected, isDisabled }) {
  const cardRef = useRef(null);
  const [added, setAdded] = useState(isSelected || false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );
    }, cardRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    setAdded(isSelected);
  }, [isSelected]);

  const handleTagHover = (el, enter) => {
    gsap.to(el, {
      boxShadow: enter ? "0 0 10px #7c5cff60" : "0 0 0 transparent",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleCompareClick = () => {
    if (isDisabled) return; // prevent action if disabled
    setAdded((prev) => !prev);
    onCompareSelect(course);
  };

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`group relative bg-zinc-100 dark:bg-zinc-900 border border-zinc-300/40 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ${
        isDisabled ? "opacity-60 cursor-not-allowed" : ""
      }`}
    >
      <img
        src={course.thumbnail}
        alt={course.name}
        loading="lazy"
        className="w-full h-44 object-cover"
      />

      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-base leading-tight line-clamp-2">
          {course.name}
        </h3>

        <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
          <span className="capitalize">{course.platform}</span>
          <span>{course.duration}</span>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {course.tags?.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              onMouseEnter={(e) => handleTagHover(e.currentTarget, true)}
              onMouseLeave={(e) => handleTagHover(e.currentTarget, false)}
              className="text-xs px-2 py-1 rounded-md bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-shadow"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-3">
          <a
            href={course.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#7c5cff] text-sm font-medium hover:underline hover:text-[#6a4ce7] transition"
          >
            View <RiExternalLinkLine className="w-4 h-4" />
          </a>

          <motion.button
            whileTap={!isDisabled ? { scale: 0.9 } : {}}
            onClick={handleCompareClick}
            disabled={isDisabled}
            animate={{
              backgroundColor: added
                ? "#22c55e"
                : isDisabled
                ? "#a1a1aa" // grey
                : "#7c5cff",
              scale: added ? 1.05 : 1,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`p-2 text-white rounded-lg flex items-center justify-center shadow-md ${
              isDisabled
                ? "cursor-not-allowed opacity-70 shadow-none"
                : "shadow-[#7c5cff30] hover:opacity-90"
            } transition`}
          >
            <AnimatePresence mode="wait" initial={false}>
              {added ? (
                <motion.span
                  key="added"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-1 text-sm font-medium"
                >
                  <RiCheckLine className="w-4 h-4" />
                </motion.span>
              ) : (
                <motion.span
                  key="add"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <RiAddLine className="w-4 h-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <div
        className={`absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded-md ${
          course.price === "Free"
            ? "bg-emerald-500/90 text-white"
            : "bg-[#7c5cff]/90 text-white"
        } backdrop-blur-sm`}
      >
        {course.price}
      </div>
    </motion.div>
  );
}

export default CourseCard;
