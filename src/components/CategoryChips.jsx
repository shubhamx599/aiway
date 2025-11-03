import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const categories = [
  "All",
  "AI Basics",
  "Machine Learning",
  "Deep Learning",
  "Prompt Engineering",
  "AI Tools",
];

function CategoryChips({ active, onChange }) {
  const refs = useRef([]);

  useEffect(() => {
    refs.current.forEach((el) => {
      if (el)
        gsap.fromTo(
          el,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: "power2.out" }
        );
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap justify-center gap-3 my-6"
    >
      {categories.map((cat, i) => (
        <motion.button
          key={cat}
          ref={(el) => (refs.current[i] = el)}
          whileTap={{ scale: 0.9 }}
          onMouseEnter={() =>
            gsap.to(refs.current[i], {
              backgroundPositionX: "200%",
              duration: 1,
              repeat: 0,
              ease: "power2.inOut",
            })
          }
          onMouseLeave={() =>
            gsap.to(refs.current[i], {
              backgroundPositionX: "0%",
              duration: 0.5,
              ease: "power2.out",
            })
          }
          onClick={() => onChange(cat)}
          className={`px-4 py-2 text-sm rounded-full font-medium border transition-all duration-300 
            ${
              active === cat
                ? "bg-[#7c5cff] text-white border-transparent shadow-md"
                : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200/50 dark:border-zinc-700"
            }`}
          style={{
            backgroundImage:
              active === cat
                ? "linear-gradient(120deg, #7c5cff, #a788ff, #7c5cff)"
                : "none",
            backgroundSize: "200% auto",
          }}
        >
          {cat}
        </motion.button>
      ))}
    </motion.div>
  );
}

export default CategoryChips;
