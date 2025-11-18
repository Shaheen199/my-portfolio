
"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const submit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:shaheenmunaz456@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message + "\n\nReply to: " + form.email)}`;
  };
  return (
    <main>
      <Navbar />
      <Section title="Contact">
        <form onSubmit={submit} className="glass p-6 rounded-2xl grid gap-4 max-w-xl">
          <input className="bg-transparent border border-white/10 rounded-xl px-4 py-3" placeholder="Your name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})}/>
          <input className="bg-transparent border border-white/10 rounded-xl px-4 py-3" placeholder="Your email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})}/>
          <textarea rows="5" className="bg-transparent border border-white/10 rounded-xl px-4 py-3" placeholder="Message" value={form.message} onChange={e=>setForm({...form, message:e.target.value})}/>
          <button className="btn" type="submit">Send</button>
        </form>
      </Section>
      <Footer />
    </main>
  );
}
