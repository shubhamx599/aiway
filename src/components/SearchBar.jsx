import { useEffect, useRef, useState } from "react";
import { RiSearchLine } from "@remixicon/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Fuse from "fuse.js";

export default function SearchBar({ data = [], onResults }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const fuse = new Fuse(data, {
    keys: ["name", "platform", "tags"],
    threshold: 0.3,
  });

  useEffect(() => {
    const results = query ? fuse.search(query).map((r) => r.item) : data;
    onResults(results);
  }, [query]);

  useEffect(() => {
    gsap.fromTo(
      inputRef.current,
      { boxShadow: "0 0 0px #7c5cff" },
      {
        boxShadow: "0 0 10px #7c5cff40",
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative w-full max-w-xl mx-auto"
    >
      <RiSearchLine className="absolute left-3 top-3 text-zinc-400 dark:text-zinc-500 w-5 h-5" />
      <input
        ref={inputRef}
        type="text"
        placeholder="Search AI courses..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full pl-10 pr-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#7c5cff] transition-all"
      />
    </motion.div>
  );
}
