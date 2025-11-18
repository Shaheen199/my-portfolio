import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/* ===== PROJECTS SECTION ===== */}
      <Section 
        id="work" 
        title="Featured Work" 
        subtitle="Projects and ongoing training that reflect my skills across software engineering, mobile development, backend systems, and cybersecurity."
      >
        <div className="grid md:grid-cols-2 gap-6">

          <ProjectCard
            title="Smart Home Automation System"
            tags={["C++", "OOP", "SOLID"]}
            desc="A full OOP based smart home system using device inheritance (Camera, Thermostat, Light, Speaker) with a central DeviceManager and menu-driven interface."
          />

          <ProjectCard
            title="MovieHub Mobile App"
            tags={["Flutter", "Dart", "Android Studio", "Figma"]}
            desc="A cross platform movie browsing app designed in Figma and built using Flutter with search, categories, and responsive UI for Android and iOS."
          />

          <ProjectCard
            title="OWASP Top-10 Security Simulation"
            tags={["Kali Linux", "Cybersecurity", "VMware"]}
            desc="Two Kali Linux VM setup to simulate SQL Injection, brute-force attacks, and authentication failures. Includes documentation of exploits and mitigation strategies."
          />

          <ProjectCard
            title="Modern Portfolio (This Website)"
            tags={["Next.js", "Framer Motion", "TailwindCSS"]}
            desc="A portfolio featuring animations, glass UI, responsive layouts, and optimized Next.js page structure."
          />

          {/* ⭐ CURRENT TRAINING CARD ⭐ */}
          <ProjectCard
            title="Backend Engineer Training  (STEMLink Bootcamp)"
            tags={["Java", "Spring Boot", "PostgreSQL", "Docker", "Firebase", "React", "TailwindCSS"]}
            desc="Currently enrolled in a professional backend engineering program covering Java OOP, Spring Boot microservices, PostgreSQL, Docker containerization, Firebase auth, Git/GitHub workflows, and fullstack deployments with React."
          />

        </div>
      </Section>

      {/* ===== SKILLS SECTION ===== */}
      <Section 
        title="What I Work With" 
        subtitle="My evolving technical stack, built from technologies I have hands on experience with and am actively strengthening across frontend, backend, cloud, and security."
      >
        <div className="flex flex-wrap gap-3">
          {[
            // Programming & Core
            "Java", "C++", "Dart", "JavaScript", "TypeScript",

            // Frameworks
            "React", "Next.js", "Flutter", "Spring Boot",

            // Backend & Databases
            "Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase",

            // DevOps & Tools
            "Docker", "Git", "GitHub", "Render",

            // UI & Styling
            "TailwindCSS", "Framer Motion",

            // Cybersecurity
            "Kali Linux", "OWASP Top 10"
          ].map((skill) => (
            <span 
              key={skill} 
              className="text-sm px-3 py-2 rounded-full bg-white/5 border border-white/10"
            >
              {skill}
            </span>
          ))}
        </div>
      </Section>

      {/* ===== CONTACT SECTION ===== */}
      <Section 
        title="Get In Touch" 
        subtitle="Currently exploring internship and junior roles in fullstack, backend, mobile, and security engineering."
      >
        <div className="glass p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold">Let’s build something great.</h3>
            <p className="text-white/70">Based in Colombo (UTC+5:30). I reply fast.</p>
          </div>

          <div className="flex gap-3">
            <a className="btn" href="mailto:shaheenmunaz456@gmail.com">Email Me</a>
            <a className="btn" href="/cv/Shaheen_CV.pdf">Download CV</a>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
