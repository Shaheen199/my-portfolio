import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
//import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Smart Home Automation System",
      tags: ["C++", "OOP"],
      desc: "A console-based automation system demonstrating OOP principles such as inheritance, polymorphism, and abstraction. Built with devices like lights, thermostats, and security cameras.",
    },
    {
      title: "MovieHub App",
      tags: ["Dart", "Flutter", "Figma"],
      desc: "A cross-platform movie app designed with Figma and developed using Flutter. Features movie browsing, search functionality, and responsive UI for Android and iOS.",
    },
    {
      title: "Cybersecurity Simulation (OWASP Top 10)",
      tags: ["Kali Linux", "VMware", "Cybersecurity"],
      desc: "Researched OWASP Top 10 vulnerabilities and executed a Brute Force attack using two Kali Linux virtual machines in VMware. Focused on security awareness and vulnerability mitigation.",
    },
    {
      title: "Portfolio Website",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      desc: "This portfolio website — a modern, responsive, and animated design showcasing my journey, projects, and skills.",
    },
  ];

  return (
    <main>
      <Navbar />
      <Section title="Projects" subtitle="A deeper look at what I’ve built and learned.">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </Section>
      <Footer />
    </main>
  );
}
