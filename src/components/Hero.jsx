
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="container-p pt-20 pb-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="inline-block px-3 py-1 text-sm rounded-full border border-white/10 bg-white/5">
            Software Engineering Undergraduate • Colombo
          </span>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Building <span className="text-accent">modern</span>, scalable & intelligent web experiences.
          </h1>
          <p className="text-white/70 text-lg">
            I craft clean UI/UX, robust APIs, and cloud‑ready solutions. Focused on
            full‑stack development, automation, and security‑minded engineering.
          </p>
          <div className="flex gap-3">
            <a className="btn" href="#work">View Work</a>
            <Link className="btn" href="/contact">Hire Me</Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="size-64 md:size-80 rounded-3xl glass flex items-center justify-center shadow-glow relative">
            <Image src="/avatar.svg" alt="Avatar" width={260} height={260} className="opacity-90" />
            <div className="absolute -inset-4 rounded-3xl blur-2xl bg-primary opacity-20 -z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
