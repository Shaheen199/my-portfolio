
"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 w-full"
    >
      <div className="glass container-p py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide">
          <span className="text-white/80">Shaheen</span>{" "}
          <span className="text-accent">Munaz</span>
        </Link>
        <div className="flex items-center gap-4 text-white/80">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white">
              {l.label}
            </Link>
          ))}
          <a href="/cv/Shaheen_CV.pdf" className="btn">Download CV</a>
        </div>
      </div>
    </motion.nav>
  );
}
