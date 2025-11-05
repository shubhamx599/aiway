import { useState } from "react";
import { RiExternalLinkLine, RiAddLine, RiCheckLine } from "@remixicon/react";

function CourseCard({ course, onCompareSelect, isSelected, isDisabled }) {
  const [added, setAdded] = useState(isSelected || false);

  const handleCompareClick = () => {
    if (isDisabled) return;
    setAdded((prev) => !prev);
    onCompareSelect(course);
  };

  return (
    <div
      className={`group relative bg-zinc-100 dark:bg-zinc-900 border border-zinc-300/40 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
        isDisabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <img
        src={course.thumbnail}
        alt={course.name}
        loading="lazy"
        className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
      />

      <div className="p-4 space-y-2">
        {/* Course Title - Explicitly font-sans and text-size to override theme */}
        <h3 className="font-semibold text-[1rem]! leading-tight line-clamp-2 font-sans! tracking-wide!">
          {course.name}
        </h3>

        {/* Platform & Duration - Inter font */}
        <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 font-sans">
          <span className="capitalize">{course.platform}</span>
          <span>{course.duration}</span>
        </div>

        {/* Tags - Inter font */}
        <div className="flex flex-wrap gap-2 mt-2">
          {course.tags?.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-md bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/20 font-sans"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions - Inter font */}
        <div className="flex items-center justify-between mt-3 font-sans">
          <a
            href={course.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#7c5cff] text-sm font-medium hover:underline hover:text-[#6a4ce7] transition-colors duration-200"
          >
            View <RiExternalLinkLine className="w-4 h-4" />
          </a>

          <button
            onClick={handleCompareClick}
            disabled={isDisabled}
            className={`p-2 text-white rounded-lg flex items-center justify-center transition-all duration-200 ${
              added
                ? "bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/30"
                : isDisabled
                ? "bg-zinc-500 cursor-not-allowed opacity-70"
                : "bg-[#7c5cff] hover:bg-[#6a4ce7] shadow-lg shadow-purple-500/30 hover:scale-105"
            }`}
          >
            {added ? (
              <RiCheckLine className="w-4 h-4" />
            ) : (
              <RiAddLine className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Price Badge - Inter font */}
      <div
        className={`absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded-md font-sans ${
          course.price === "Free"
            ? "bg-emerald-500/90 text-white"
            : "bg-[#7c5cff]/90 text-white"
        } backdrop-blur-sm`}
      >
        {course.price}
      </div>
    </div>
  );
}

export default CourseCard;