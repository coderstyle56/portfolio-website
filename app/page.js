"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ProjectCard = ({ title, summary, techStack, description }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-gray-800 p-5 rounded-lg shadow-lg flex flex-col h-full">
      <h4 className="text-xl font-bold">{title}</h4>
      
      {/* Summary Section */}
      <p className="text-gray-300 mt-2">{summary}</p>

      {/* Tech Stack Section */}
      <p className="text-gray-400">Tech Stack: {techStack}</p>

      {showDetails && (
        <p className="text-gray-300 mt-2">{description}</p>
      )}

      {/* Button and Link Wrapper */}
      <div className="mt-auto flex justify-between items-center">
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 cursor-pointer"
        >
          {showDetails ? "Read Less" : "Read More"}
        </button>

        <a href="#" className="text-blue-400">GitHub Repository</a>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-5 bg-gray-800 shadow-lg">
        <h1 className="text-2xl font-bold">Rohit Kumar</h1>
        <div className="space-x-4">
          <Link href="#projects" className="hover:text-blue-400">Projects</Link>
          <Link href="#about" className="hover:text-blue-400">About</Link>
          <Link href="#contact" className="hover:text-blue-400">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center h-screen text-center p-10">
        <motion.h2
          className="text-5xl font-extrabold mb-5"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Full-Stack Developer | SDE | Backend Engineer
        </motion.h2>
        <p className="text-lg text-gray-400 mb-5">
          Specializing in Java, Next.js, Spring Boot, and Scalable Systems.
        </p>
        <motion.a
          href="#projects"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700"
          whileHover={{ scale: 1.1 }}
        >
          View My Work
        </motion.a>
      </header>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-10">
        <h3 className="text-4xl font-bold text-center mb-10">Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ProjectCard 
            title="Ecommerce Microservices"
            summary="A scalable e-commerce system with JWT authentication and RabbitMQ messaging."
            techStack="Node.js, Express.js, MongoDB, RabbitMQ, JWT, bcrypt.js"
            description="Developed a scalable e-commerce system with secure authentication (JWT, bcrypt.js) and asynchronous messaging (RabbitMQ). Optimized API performance by 40%."
          />

          <ProjectCard 
            title="Transaction Dashboard"
            summary="A real-time dashboard with interactive charts for transaction monitoring."
            techStack="React.js, Node.js, Express.js"
            description="Built a real-time transaction monitoring dashboard with interactive charts and fast API responses. Improved frontend performance by 30%."
          />

          <ProjectCard 
            title="SalonX"
            summary="A responsive salon booking platform with an optimized user experience."
            techStack="Next.js, React.js, JavaScript"
            description="Created a responsive salon booking platform with seamless UI/UX and optimized API calls, improving booking efficiency by 35%."
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-10 text-center">
        <h3 className="text-4xl font-bold mb-5">About Me</h3>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          A problem solver at heart, I thrive on tackling complex challenges and designing efficient, scalable systems. 
          With expertise in Java, backend technologies, and cloud-based microservices, I build robust, future-proof applications. 
          My curiosity drives me to continuously learn and adapt to new technologies, making me capable of handling any challenge. 
          Given an opportunity, I don’t just complete tasks—I innovate, optimize, and exceed expectations.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-10 text-center bg-gray-800">
        <h3 className="text-4xl font-bold mb-5">Contact</h3>
        <p className="text-gray-400">Phone: +91-63987-25324</p>
        <p className="text-gray-400">Email: kumar.rohitrk2505@gmail.com</p>
        <p className="text-gray-400">LinkedIn: linkedin.com/in/devloperrohit</p>
      </section>
    </div>
  );
}




