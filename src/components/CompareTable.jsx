import { motion } from "framer-motion";

function CompareTable({ compareList }) {
  if (!compareList || compareList.length === 0) {
    return (
      <div className="text-center py-10 text-zinc-500 dark:text-zinc-400">
        No courses selected for comparison.
      </div>
    );
  }

  const tableVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.div
      variants={tableVariant}
      initial="hidden"
      animate="visible"
      className="overflow-x-auto mt-6"
    >
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-zinc-200 dark:bg-zinc-800">
            <th className="p-3">Feature</th>
            {compareList.map((c) => (
              <th key={c.id} className="p-3 font-semibold text-zinc-900 dark:text-zinc-100">
                {c.name}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-zinc-300 dark:divide-zinc-700">
          <tr>
            <td className="p-3 font-medium text-zinc-700 dark:text-zinc-300">Platform</td>
            {compareList.map((c) => (
              <td key={c.id} className="p-3">{c.platform}</td>
            ))}
          </tr>

          <tr>
            <td className="p-3 font-medium text-zinc-700 dark:text-zinc-300">Duration</td>
            {compareList.map((c) => (
              <td key={c.id} className="p-3">{c.duration}</td>
            ))}
          </tr>

          <tr>
            <td className="p-3 font-medium text-zinc-700 dark:text-zinc-300">Price</td>
            {compareList.map((c) => (
              <td key={c.id} className="p-3">{c.price}</td>
            ))}
          </tr>

          <tr>
            <td className="p-3 font-medium text-zinc-700 dark:text-zinc-300">Tags</td>
            {compareList.map((c) => (
              <td key={c.id} className="p-3">
                <div className="flex flex-wrap gap-2">
                  {c.tags.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-md bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </td>
            ))}
          </tr>

          <tr>
            <td className="p-3 font-medium text-zinc-700 dark:text-zinc-300">Link</td>
            {compareList.map((c) => (
              <td key={c.id} className="p-3">
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7c5cff] hover:underline"
                >
                  Visit →
                </a>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </motion.div>
  );
}

export default CompareTable;
