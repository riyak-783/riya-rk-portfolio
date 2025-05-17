import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Education", path: "/education" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white dark:bg-gray-900 shadow-md py-2" : "bg-white dark:bg-gray-900 md:bg-transparent md:py-4 py-4"}
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            Portfolio🌻
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-2 py-1 text-lg font-bold transition-colors ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-gray-700 dark:text-white hover:text-primary"
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 top-full h-0.5 w-full bg-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
            {/* Dark mode toggle */}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="ml-4 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors text-primary dark:text-yellow-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 dark:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pb-4 space-y-2"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? "bg-primary text-white"
                    : "text-gray-700 dark:text-white hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* Dark mode toggle for mobile */}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="mt-2 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors text-primary dark:text-yellow-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;