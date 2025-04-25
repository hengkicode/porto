'use client';

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white scroll-smooth">
      {/* ✅ NAVBAR */}
      <nav className="sticky top-0 z-50 bg-gray-950 bg-opacity-90 backdrop-blur shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold">MyPortfolio</div>
          <ul className="flex space-x-6 text-gray-300">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* ✅ HOME SECTION */}
      <section id="home" className="scroll-mt-24 pt-24 text-center px-6 min-h-screen flex flex-col justify-center">
        <motion.h1 className="text-5xl font-bold" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          Welcome to My Portfolio
        </motion.h1>
        <motion.p className="mt-4 text-gray-400 text-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
          I’m a developer who loves building modern web applications.
        </motion.p>
      </section>

      {/* ✅ ABOUT SECTION */}
      <section id="about" className="scroll-mt-24 pt-24 px-6 py-20 bg-gray-800">
        <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-center">
          I have experience in web development using technologies like Next.js, Tailwind CSS, and more. I love clean UI and performant code.
        </p>
      </section>

      {/* ✅ PROJECTS SECTION */}
      <section id="projects" className="scroll-mt-24 pt-24 px-6 py-20">
        <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-800 rounded-lg p-6 shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">Project {i}</h3>
              <p className="text-gray-400">This is a description of project {i}. It showcases some skills and tools I’ve used.</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ CONTACT SECTION */}
      <section id="contact" className="scroll-mt-24 pt-24 px-6 py-20 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-300">Reach out via email: <a href="mailto:you@example.com" className="text-blue-400 underline">you@example.com</a></p>
      </section>

      {/* ✅ FOOTER */}
      <footer className="text-center text-gray-500 py-8">
        © {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </footer>
    </div>
  );
}
