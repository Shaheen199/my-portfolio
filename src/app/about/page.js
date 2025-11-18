
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

export default function About() {
  return (
    <main>
      <Navbar />
      <Section title="About Me">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="glass p-6 rounded-2xl">
            <h3 className="text-2xl font-semibold">Hi, I’m Shaheen.</h3>
            <p className="text-white/70 mt-3">
              I’m passionate and motivated Software Engineering undergraduate specializing in full stack web development. 
              I enjoy turning ideas into clean, functional, and user friendly web applications using modern technologies like React, Node.js, and Tailwind CSS. 
              I’m constantly learning and building projects to strengthen my skills, while exploring areas such as DevOps, cloud automation, and cybersecurity. 
              My goal is to grow into a well rounded full stack developer, contribute to meaningful projects, and add value to any team I join.
            </p>
            <ul className="mt-4 space-y-2 text-white/80">
              <li>• Email: shaheenmunaz456@gmail.com</li>
              <li>• Phone: +94 76 416 8821</li>
              <li>• Linkedin: www.linkedin.com/in/shaheen-munaz-584157232</li>
              <li>• GitHub: github.com/Shaheen199</li>
              <li>• Wellawatte, Colombo, Sri Lanka (00600)</li>
            </ul>
          </div>
          <div className="glass p-6 rounded-2xl">
            <h3 className="text-2xl font-semibold">Core Strengths</h3>
            <ul className="mt-3 space-y-2 text-white/80">
              <li>• Quick Learner – Able to learn new technologies and tools rapidly.</li>
              <li>• Problem Solver – Approaches challenges logically and finds practical solutions.</li>
              <li>• Adaptable – Comfortable working in any software role: frontend, backend, or DevOps-related tasks.</li>
              <li>• Team Player – Works well with others and communicates clearly.</li>
              <li>• Self Driven – Takes initiative and learns independently to improve skills.</li>
              <li>• Strong Communication – Can explain technical ideas simply and effectively.</li>
              <li>• Positive Mindset – Stays calm, focused, and motivated even under pressure.</li>
              <li>• Continuous Learner – Actively improving skills in web development, cloud, and cybersecurity.</li>
            </ul>
          </div>
        </div>
      </Section>
      <Footer />
    </main>
  );
}
