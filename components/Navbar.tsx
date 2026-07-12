"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Venues", href: "#venues" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`flex w-full max-w-6xl items-center justify-between rounded-full border transition-all duration-500 ${
          scrolled
            ? "border-line/60 bg-ivory/90 px-5 py-2.5 shadow-card backdrop-blur-md"
            : "border-transparent bg-transparent px-5 py-4"
        }`}
      >
        <a
          href="#home"
          className="font-display text-xl italic tracking-wide text-forest"
        >
          Evermore <span className="text-gold not-italic">&amp;</span> Co.
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="underline-grow font-body text-[13px] uppercase tracking-widest text-forest/80 transition-colors hover:text-forest"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden lg:inline-flex">
          <span className="inline-flex items-center justify-center rounded-full bg-forest px-6 py-2.5 font-body text-[13px] tracking-wide text-ivory transition-all duration-500 hover:bg-gold hover:shadow-soft">
            Begin Your Story
          </span>
        </a>

        <button
          onClick={() => setOpen(true)}
          className="lg:hidden text-forest"
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-forest-dark/98 backdrop-blur-sm"
          >
            <div className="flex justify-end p-6">
              <button
                onClick={() => setOpen(false)}
                className="text-ivory"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
              }}
              className="flex flex-col items-center gap-7 pt-10"
            >
              {links.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl italic text-ivory hover:text-gold-light transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
