import { motion } from "framer-motion";
import { RiLightbulbFlashLine, RiTeamLine, RiRocketLine, RiBook2Line } from "@remixicon/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      {/* ✅ Navbar same as Compare.jsx */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-blue-500 text-transparent bg-clip-text"
        >
          About AIWay
        </motion.h1>
        <p className="mt-3 text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
          Your gateway to mastering Artificial Intelligence — designed to simplify your learning
          journey and help you pick the right path.
        </p>
      </section>

      {/* Mission Section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 text-center mb-20"
      >
        <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2">
          <RiLightbulbFlashLine className="w-6 h-6 text-indigo-500" /> Our Mission
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          We aim to make AI learning **accessible, transparent, and fun**.  
          AIWay bridges the gap between curiosity and knowledge — helping learners discover
          curated courses, compare them effectively, and stay ahead in the world of Artificial
          Intelligence.
        </p>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 pb-20"
      >
        {[
          {
            icon: <RiBook2Line className="w-8 h-8 text-indigo-500" />,
            title: "Course Comparison",
            desc: "Easily compare AI & ML courses side-by-side across top learning platforms.",
          },
          {
            icon: <RiRocketLine className="w-8 h-8 text-indigo-500" />,
            title: "Smart Recommendations",
            desc: "Get intelligent course suggestions tailored to your skills and interests.",
          },
          {
            icon: <RiTeamLine className="w-8 h-8 text-indigo-500" />,
            title: "Community & Mentorship",
            desc: "Connect with fellow learners and mentors to grow your AI knowledge together.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ y: -5 }}
            className="bg-zinc-100 dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-300/40 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center space-y-3">
              {item.icon}
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ✅ Footer same as Compare.jsx */}
      <Footer />
    </div>
  );
}
