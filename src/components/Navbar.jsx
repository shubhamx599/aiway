import React, { useState, useEffect, useRef } from "react";
import { RiBrainLine, RiMenu3Line, RiCloseLine } from "@remixicon/react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHover, setActiveHover] = useState(null);
  const location = useLocation();
  const navbarRef = useRef(null);

  // 📜 Scroll Detection with throttle
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔄 Auto Close Menu on Route Change
  useEffect(() => {
    setMenuOpen(false);
    setActiveHover(null);
  }, [location.pathname]);

  // 🎯 Click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { 
      name: "Home", 
      path: "/"
    },
    { 
      name: "Courses", 
      path: "/courses"
    },
    { 
      name: "Compare", 
      path: "/compare"
    },
    { 
      name: "Suggest", 
      path: "/suggest"
    },
    { 
      name: "About", 
      path: "/about"
    },
  ];

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-0 left-0 w-full z-[100] backdrop-blur-xl transition-all duration-500 ${
        scrolled
          ? "py-3 bg-white/80 dark:bg-zinc-900/60 shadow-2xl shadow-zinc-900/10"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-8">
        {/* Logo with enhanced animation */}
        <Link
          to="/"
          className="flex items-center gap-3 group select-none"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
            <RiBrainLine 
              className="text-white relative z-10" 
              size={28} 
            />
          </motion.div>
          <motion.span 
            className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            AIWay
          </motion.span>
        </Link>

        {/* 💻 Desktop Navigation - FIXED */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  isActive
                    ? "text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20"
                    : "text-zinc-600 dark:text-zinc-300 hover:text-indigo-600"
                }`
              }
              onMouseEnter={() => setActiveHover(item.path)}
              onMouseLeave={() => setActiveHover(null)}
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  
                  {/* Hover Background - Only show on hover, not on active state */}
                  {!isActive && activeHover === item.path && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 rounded-xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                  
                  {/* Active State Indicator */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-100 dark:border-indigo-800/50"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* 🔘 CTA Button Only */}
        <div className="hidden lg:flex items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
          >
            Get Started
          </motion.button>
        </div>

        {/* 📱 Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="lg:hidden relative p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={menuOpen ? "close" : "menu"}
              initial={{ rotate: -18, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {menuOpen ? (
                <RiCloseLine className="text-indigo-600" size={24} />
              ) : (
                <RiMenu3Line className="text-indigo-600" size={24} />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* 📱 Mobile Drawer Menu - Glass Morphism */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[-1]"
              onClick={() => setMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-zinc-200/50 dark:border-zinc-700/50 overflow-hidden"
            >
              <div className="p-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-xl border-b border-zinc-200 dark:border-zinc-800 last:border-b-0 transition-all duration-200 ${
                        isActive
                          ? "text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20"
                          : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                      }`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="font-medium">{item.name}</span>
                  </NavLink>
                ))}
                
                {/* Mobile CTA */}
                <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium shadow-lg shadow-indigo-500/25"
                  >
                    Get Started Free
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;