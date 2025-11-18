
"use client";
import { motion } from "framer-motion";

export default function ProjectCard({ title, tags = [], desc, href }) {
  return (
    <motion.a
      href={href || "#"}
      target={href ? "_blank" : "_self"}
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass rounded-2xl p-6 hover:shadow-glow block"
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">
              {t}
            </span>
          ))}
        </div>
      </div>
      <p className="text-white/70 mt-3">{desc}</p>
    </motion.a>
  );
}
