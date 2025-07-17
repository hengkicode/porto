"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white scroll-smooth">
      {/* ✅ NAVBAR */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 to-gray-950 bg-opacity-90 backdrop-blur shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold text-white">Hengki Candra</div>

          {/* Toggle Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg
                className="w-8 h-8 text-purple-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8 text-purple-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-300 font-semibold">
            <li>
              <a href="#home" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-white">
                Skills
              </a>
            </li>
            <li>
              <a href="#certificates" className="hover:text-white">
                Certificates
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-60 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
          } overflow-hidden bg-gray-950`}
        >
          <ul className="flex flex-col space-y-4 text-center text-gray-300 font-semibold">
            <li>
              <a href="#home" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-white">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* ✅ HOME SECTION */}
      <section
        id="home"
        className="scroll-mt-24 pt-24 text-center px-6 min-h-screen flex flex-col justify-center relative overflow-hidden"
      >
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-30 animate-pulse"></div>

        <motion.h1
          className="text-5xl font-bold text-gradient bg-clip-text text-transparent text-white relative z-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to My Portfolio
        </motion.h1>

        <motion.p
          className="mt-4 text-gray-400 text-lg relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          I’m a developer who loves building modern web applications and
          Desktop.
        </motion.p>

        <motion.div
          className="mt-8 relative z-10 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <img
            src="/profile.jpg"
            alt="Hengki Candra"
            className="w-60 h-60 rounded-full border-4 border-white shadow-lg"
          />
        </motion.div>
      </section>

      {/* ✅ ABOUT SECTION */}
      <section id="about" className="scroll-mt-24 pt-24 px-6 py-20 bg-gray-800">
        <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-center">
          I have experience in web development using technologies like Next.js,
          Tailwind CSS, and more. I love clean UI and performant code.
        </p>
      </section>

      {/* ✅ SKILLS SECTION */}
      <section
        id="skills"
        className="scroll-mt-24 pt-24 px-6 py-20 bg-gray-800"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Desktop Application */}
          <div className="bg-gray-700 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Desktop Application</h3>
            <p className="text-gray-400">C#, WINUI3</p>
          </div>

          {/* Web Development */}
          <div className="bg-gray-700 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-400">Laravel, PHP, Node.js, Next.js</p>
          </div>

          {/* Mobile Development */}
          <div className="bg-gray-700 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
            <p className="text-gray-400">Flutter, Kotlin, Android Studio</p>
          </div>

          {/* RESTful API */}
          <div className="bg-gray-700 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">RESTful API</h3>
            <p className="text-gray-400">Lumen, Golang, Rust </p>
          </div>

          {/* DevOps */}
          <div className="bg-gray-700 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">DevOps</h3>
            <p className="text-gray-400">Jenkins2, Kafka</p>
          </div>

          {/* Compute Architecture */}
          <div className="bg-gray-700 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Compute Architecture</h3>
            <p className="text-gray-400">
              Cloud Architecture, Distributed Systems, High-Performance
              Computing (HPC), Infrastructure as Code (IaC)
            </p>
          </div>
        </div>
      </section>

      {/* ✅ CERTIFICATES SECTION */}
      <section
        id="certificates"
        className="scroll-mt-24 pt-24 px-6 py-20 bg-gray-800 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Certificates</h2>
        <p className="text-gray-300 mb-8">
          These are some of my professional certifications, categorized by
          platform.
        </p>

        {/* ✅ Facebook Certificates */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-purple-400">Facebook</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-700 rounded-lg p-4 shadow-lg">
              <img
                src="/sertifikat/fb1.jpg"
                alt="Facebook Certificate"
                className="rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-white">
                Bagaimana Saya Dikenal Biaya Untuk Akun Facebook Saya
              </h4>
              <p className="text-gray-400 text-sm">Issued by Facebook (Meta)</p>
            </div>

            <div className="bg-gray-700 rounded-lg p-4 shadow-lg">
              <img
                src="/sertifikat/fb2.jpg"
                alt="Facebook Certificate"
                className="rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-white">
                Bangun Merek Anda dengan Iklan Video
              </h4>
              <p className="text-gray-400 text-sm">Issued by Facebook (Meta)</p>
            </div>

            <div className="bg-gray-700 rounded-lg p-4 shadow-lg">
              <img
                src="/sertifikat/fb3.jpg"
                alt="Facebook Certificate"
                className="rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-white">
                Facebook untuk Marketer B2B
              </h4>
              <p className="text-gray-400 text-sm">Issued by Facebook (Meta)</p>
            </div>

            <div className="bg-gray-700 rounded-lg p-4 shadow-lg">
              <img
                src="/sertifikat/fb4.jpg"
                alt="Facebook Certificate"
                className="rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-white">
                Enchance Your Direct Response Campaigns With Audienece Network
              </h4>
              <p className="text-gray-400 text-sm">Issued by Facebook (Meta)</p>
            </div>

            <div className="bg-gray-700 rounded-lg p-4 shadow-lg">
              <img
                src="/sertifikat/fb5.jpg"
                alt="Facebook Certificate"
                className="rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-white">
                OnBoarding Pengelola Monetisasi
              </h4>
              <p className="text-gray-400 text-sm">Issued by Facebook (Meta)</p>
            </div>

            <div className="bg-gray-700 rounded-lg p-4 shadow-lg">
              <img
                src="/sertifikat/fb6.jpg"
                alt="Facebook Certificate"
                className="rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-white">
                Ads in Instagram Store
              </h4>
              <p className="text-gray-400 text-sm">Issued by Facebook (Meta)</p>
            </div>

            <div className="bg-gray-700 rounded-lg p-4 shadow-lg">
              <img
                src="/sertifikat/fb7.jpg"
                alt="Facebook Certificate"
                className="rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-white">
                Ads in Instagram Stories
              </h4>
              <p className="text-gray-400 text-sm">Issued by Facebook (Meta)</p>
            </div>

            <div className="bg-gray-700 rounded-lg p-4 shadow-lg">
              <img
                src="/sertifikat/fb8.jpg"
                alt="Facebook Certificate"
                className="rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-white">
                Penyampaian Certia Imersif dengan Artikel Instan
              </h4>
              <p className="text-gray-400 text-sm">Issued by Facebook (Meta)</p>
            </div>

            <div className="bg-gray-700 rounded-lg p-4 shadow-lg">
              <img
                src="/sertifikat/fb9.jpg"
                alt="Facebook Certificate"
                className="rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-white">
                Cara Jurnalis Dapat Memaksimalkan Penggunaan Facebook dan
                instagram
              </h4>
              <p className="text-gray-400 text-sm">Issued by Facebook (Meta)</p>
            </div>

            <div className="bg-gray-700 rounded-lg p-4 shadow-lg">
              <img
                src="/sertifikat/fb10.jpg"
                alt="Facebook Certificate"
                className="rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-white">
                Meta Front-End Developer
              </h4>
              <p className="text-gray-400 text-sm">Issued by Facebook (Meta)</p>
            </div>

            <div className="bg-gray-700 rounded-lg p-4 shadow-lg">
              <img
                src="/sertifikat/fb11.jpg"
                alt="Facebook Certificate"
                className="rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-white">
                Meta Front-End Developer
              </h4>
              <p className="text-gray-400 text-sm">Issued by Facebook (Meta)</p>
            </div>
            {/* Tambah lagi kalau ada */}
          </div>
        </div>

        {/* ✅ Udemy Certificates */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-green-400">Udemy</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-700 rounded-lg p-4 shadow-lg">
              <img
                src="/sertifikat/udemy.jpg"
                alt="Udemy Certificate"
                className="rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-white">
                Facebook Ads Fundations
              </h4>
              <p className="text-gray-400 text-sm">Issued by Udemy</p>
            </div>

            <div className="bg-gray-700 rounded-lg p-4 shadow-lg">
              <img
                src="/sertifikat/udemy2.jpg"
                alt="Udemy Certificate"
                className="rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-white">
                After Effects CC for Beginners
              </h4>
              <p className="text-gray-400 text-sm">Issued by Udemy</p>
            </div>

            <div className="bg-gray-700 rounded-lg p-4 shadow-lg">
              <img
                src="/sertifikat/udemy3.jpg"
                alt="Udemy Certificate"
                className="rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-white">
                CyberCriminals Want Your Information: stop them cold!
              </h4>
              <p className="text-gray-400 text-sm">Issued by Udemy</p>
            </div>
          </div>
        </div>

        {/* ✅ MySkill Certificates */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-yellow-400">MySkill</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-700 rounded-lg p-4 shadow-lg">
              <img
                src="/sertifikat/myskill.jpg"
                alt="MySkill Certificate"
                className="rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-white">
                Website Development Fundamental
              </h4>
              <p className="text-gray-400 text-sm">Issued by MySkill</p>
            </div>

            <div className="bg-gray-700 rounded-lg p-4 shadow-lg">
              <img
                src="/sertifikat/myskill2.jpg"
                alt="MySkill Certificate"
                className="rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-white">
                Frontend - React
              </h4>
              <p className="text-gray-400 text-sm">Issued by MySkill</p>
            </div>

            <div className="bg-gray-700 rounded-lg p-4 shadow-lg">
              <img
                src="/sertifikat/myskillnode.jpg"
                alt="MySkill Certificate"
                className="rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-white">
                Backend - Node.js
              </h4>
              <p className="text-gray-400 text-sm">Issued by MySkill</p>
            </div>

            <div className="bg-gray-700 rounded-lg p-4 shadow-lg">
              <img
                src="/sertifikat/myskilluserinterface.jpg"
                alt="MySkill Certificate"
                className="rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-white">
                User Interface Design
              </h4>
              <p className="text-gray-400 text-sm">Issued by MySkill</p>
            </div>

            <div className="bg-gray-700 rounded-lg p-4 shadow-lg">
              <img
                src="/sertifikat/myskillsql.jpg"
                alt="MySkill Certificate"
                className="rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-white">
                Sql For Data Analysis
              </h4>
              <p className="text-gray-400 text-sm">Issued by MySkill</p>
            </div>

             <div className="bg-gray-700 rounded-lg p-4 shadow-lg">
              <img
                src="/sertifikat/myskilldatascience.jpg"
                alt="MySkill Certificate"
                className="rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-white">
                Data Science
              </h4>
              <p className="text-gray-400 text-sm">Issued by MySkill</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-white-400">Cybrary</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-700 rounded-lg p-4 shadow-lg">
              <img
                src="/sertifikat/cynetwork.jpg"
                alt="Network Fundamentals"
                className="rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-white">
                Network Fundamentals
              </h4>
              <p className="text-gray-400 text-sm">Issued by Cybrary</p>
            </div>
          </div>
        </div>

        {/* ✅ Tambah Kategori Lain */}
        {/* Bisa buat kategori tambahan sesuai kebutuhan */}
      </section>

      {/* ✅ PROJECTS SECTION */}
      <section id="projects" className="scroll-mt-24 pt-24 px-6 py-20">
        <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8 max-w-6xl mx-auto">
          {/* POSK Project */}
          <div className="bg-gray-800 rounded-lg p-6 shadow hover:shadow-xl transition">
            {/* Video YouTube */}
            <div className="mb-4">
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/dftHoBKXkK4?si=EIUC37aTEjKx3uTy`} // Ganti dengan ID YouTube POSK
                title="POSK"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Project Title */}
            <h3 className="text-xl font-semibold mb-2">POSK</h3>

            {/* Project Description */}
            <p className="text-gray-400">
              This is a POSK project, showcasing a modern point-of-sale system
              designed for efficient operations.
            </p>
          </div>

          {/* POS Cafe Project */}
          <div className="bg-gray-800 rounded-lg p-6 shadow hover:shadow-xl transition">
            {/* Video YouTube */}
            <div className="mb-4">
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/YOUR_VIDEO_ID_POS_CAFE`} // Ganti dengan ID YouTube POS Cafe
                title="POS Cafe"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Project Title */}
            <h3 className="text-xl font-semibold mb-2">POS Cafe</h3>

            {/* Project Description */}
            <p className="text-gray-400">
              This project is a cafe management system that integrates sales and
              inventory management features.
            </p>
          </div>

          {/* Klinik Project */}
          <div className="bg-gray-800 rounded-lg p-6 shadow hover:shadow-xl transition">
            {/* Video YouTube */}
            <div className="mb-4">
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/YOUR_VIDEO_ID_KLINIK`} // Ganti dengan ID YouTube Klinik
                title="Klinik"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Project Title */}
            <h3 className="text-xl font-semibold mb-2">Klinik</h3>

            {/* Project Description */}
            <p className="text-gray-400">
              Klinik project for managing patient information, appointments, and
              healthcare services.
            </p>
          </div>

          {/* Website Project */}
          <div className="bg-gray-800 rounded-lg p-6 shadow hover:shadow-xl transition">
            {/* Video YouTube */}
            <div className="mb-4">
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/YOUR_VIDEO_ID_WEBSITE`} // Ganti dengan ID YouTube Website
                title="Website"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Project Title */}
            <h3 className="text-xl font-semibold mb-2">Website</h3>

            {/* Project Description */}
            <p className="text-gray-400">
              A responsive website designed for a portfolio, showcasing web
              development skills.
            </p>
          </div>

          {/* POS Cafe Project */}
          <div className="bg-gray-800 rounded-lg p-6 shadow hover:shadow-xl transition">
            {/* Video YouTube */}
            <div className="mb-4">
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/YOUR_VIDEO_ID_POS_CAFE`} // Ganti dengan ID YouTube POS Cafe
                title="POS Cafe"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Project Title */}
            <h3 className="text-xl font-semibold mb-2">POS Dekstop</h3>

            {/* Project Description */}
            <p className="text-gray-400">
              This project is a pos dekstop management system that integrates
              sales and inventory management features.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ CONTACT SECTION */}
      <section
        id="contact"
        className="scroll-mt-24 pt-24 px-6 py-20 bg-gray-800 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-300">
          Reach out via email:{" "}
          <a
            href="mailto:hengkycode@gmail.com"
            className="text-blue-400 underline"
          >
            hengkycode@gmail.com
          </a>
        </p>
        <p className="text-gray-300 mt-4">
          Or message me on WhatsApp:{" "}
          <a
            href="https://wa.me/628215876677"
            className="text-green-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            082158766777
          </a>
        </p>
      </section>

      {/* ✅ FOOTER */}
      <footer className="text-center text-gray-500 py-8">
        © {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </footer>
    </div>
  );
}
