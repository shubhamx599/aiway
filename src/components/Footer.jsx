import React from "react";
import { motion } from "framer-motion";
import { RiGithubLine, RiLinkedinBoxLine, RiTwitterXLine, RiMailLine } from "@remixicon/react";
import { Link } from "react-router-dom";

function Footer() {
  const socials = [
    { icon: RiGithubLine, href: "https://github.com", label: "GitHub" },
    { icon: RiLinkedinBoxLine, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: RiTwitterXLine, href: "https://twitter.com", label: "Twitter" },
    { icon: RiMailLine, href: "mailto:contact@aiway.com", label: "Email" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative mt-20 border-t border-zinc-800/40 dark:border-zinc-700/40 backdrop-blur-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/10 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-blue-500 text-transparent bg-clip-text"
        >
          AIWay
        </Link>

        <div className="flex flex-wrap justify-center md:justify-end gap-8 text-sm font-medium text-zinc-500 dark:text-zinc-400">
          <Link to="/about" className="hover:text-indigo-400 transition-all">
            About
          </Link>
          <Link to="/courses" className="hover:text-indigo-400 transition-all">
            Courses
          </Link>
          <Link to="/compare" className="hover:text-indigo-400 transition-all">
            Compare
          </Link>
          <Link to="/suggest" className="hover:text-indigo-400 transition-all">
            Suggest
          </Link>
        </div>

        <div className="flex items-center gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2 }}
              className="p-2 rounded-full bg-zinc-900/10 dark:bg-zinc-100/10 hover:bg-indigo-500/10 transition-all"
            >
              <Icon
                size={22}
                className="text-zinc-500 dark:text-zinc-400 hover:text-indigo-500 transition-colors"
              />
            </motion.a>
          ))}
        </div>
      </div>

      <div className="border-t border-zinc-800/30 dark:border-zinc-700/30 text-center py-4 text-xs text-zinc-500">
        © {new Date().getFullYear()} AIWay. All rights reserved.
      </div>
    </motion.footer>
  );
}

export default Footer;
