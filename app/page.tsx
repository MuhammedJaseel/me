"use client"; // This must be the first line

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Works from "./componensts/works";
import DownloadButton from "./componensts/cv";

const works = [
  {
    project: "Static web site",
    title: "ANO Labs solutions",
    bg: "https://anolabs.site/public/gallery/bg1.png",
    desc: "A complate static web site devloper in html, css etc...",
    stacks: ["HTML", "CSS", "JS", "Tailwind"],
    link: "https://anolabs.site",
    quote1: {
      head: '"Simplicity, Engineered"',
      body: "I specialize in crafting clean, high-performance code that mirrors the elegance of the user interface. By stripping away the unnecessary, I build digital products that are as robust as they are intuitive.",
    },
  },
  {
    project: "Next application",
    title: "MANO chain website",
    bg: "https://anolabs.site/public/gallery/bg4.png",
    desc: "A dynamic next.js/nest.js application with some real time response",
    stacks: ["NEXT.js", "JS", "Tailwind", "web-socket"],
    link: "https://m.anolabs.site",
  },
  {
    project: "ReactJs+Vite",
    title: "Block explorer",
    bg: "https://anolabs.site/public/gallery/bg2.png",
    desc: "A dynamic next application with some real time response",
    stacks: ["NEXT.js", "JS", "Tailwind", "web-socket"],
    link: "https://scanm.anolabs.site",
  },
  {
    project: "ReactJs+Vite",
    title: "DApp web3/blockchain",
    bg: "https://anolabs.site/public/gallery/bg3.png",
    desc: "A dynamic next application with some real time response",
    stacks: ["React.js", "TS", "Tailwind", "web3"],
    link: "https://dapp.anolabs.site",
  },
  // {
  //   project: "Featured Project",
  //   title: "NeuralFlow Dashboard",
  //   desc: "An AI-driven analytics platform visualizing real-time data streams.",
  //   stacks: ["React", "Next.js", "TS", "Tailwind"],
  //   link: "https://anolabs.site",
  // },
];

const Portfolio = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1 },
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-xl tracking-tighter">
            MUHAMMED JASEEL
          </span>
          <div className="space-x-8 text-sm font-medium text-slate-600">
            <a href="#work" className="hover:text-blue-600 transition-colors">
              Work
            </a>
            <a href="#about" className="hover:text-blue-600 transition-colors">
              About
            </a>
            <a
              href="mailto:jaseelmanamulli@gmail.com"
              className="bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <motion.section
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="mb-20"
        >
          <div className="flex flex-wrap items-center min-h-[calc(100vh-200px)]">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6">
                Designing <span className="text-blue-600">digital</span>{" "}
                experiences.
              </h1>
              <p className="text-xl text-slate-500 max-w-xl leading-relaxed">
                I’m a Full-Stack Developer with 6+ years of experience building
                web, mobile, and Web3 applications. I have hands-on experience
                with React, Next.js, Node/NestJS, and blockchain integrations
                using Ethers.js and Web3.js across EVM networks. I’ve worked on
                dApps, wallet integrations, and scalable backend APIs, and I
                enjoy owning features end-to-end from frontend UX to backend
                logic and smart-contract interactions. I’m particularly
                interested in roles where I can contribute to real-world Web3
                products while continuing to grow in blockchain and
                decentralized technologies. I’d be excited to discuss how my
                skills and experience could add value to your team.
              </p>
            </div>
            <img
              src="https://anolabs.site/public/gallery/me2.webp"
              alt="JASEEL"
              className="w-100 h-100 rounded-full border-8 border-blue-300"
            />
          </div>
        </motion.section>

        {/* ABOUT us */}
        <section id="work" className="flex flex-col gap-40">
          {works.map((it, k) => (
            <Works work={it} key={k} />
          ))}
        </section>

        <motion.section
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="pt-40 mb-20"
          id="about"
        >
          <div className="flex flex-col items-center min-h-[calc(100vh-200px)]">
            <span className="font-bold text-xl tracking-tighter">ABOUT ME</span>
            <br />
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6 text-center max-w-4xl">
              Muhammed Jaseel.
            </h1>
            <span className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-center text-blue-600">
              Full Stack Developer / (web3, Node.js).
            </span>
            <br /> <br />
            <p className="text-xl text-slate-500 max-w-5xl leading-relaxed text-center">
              I’m a Full-Stack Developer with 6+ years of experience building
              web, mobile, and Web3 applications. I have hands-on experience
              with React, Next.js, Node/NestJS, and blockchain integrations
              using Ethers.js and Web3.js across EVM networks. I’ve worked on
              dApps, wallet integrations, and scalable backend APIs, and I enjoy
              owning features end-to-end from frontend UX to backend logic and
              smart-contract interactions. I’m particularly interested in roles
              where I can contribute to real-world Web3 products while
              continuing to grow in blockchain and decentralized technologies.
              I’d be excited to discuss how my skills and experience could add
              value to your team.
            </p>
            <br /> <br />
            <DownloadButton />
          </div>
        </motion.section>

        {/* Footer/Contact */}
        <footer className="mt-32 pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-400 text-sm">
            © 2026 Muhammed Jaseel. Built with Love and Coffee.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/MuhammedJaseel" target="_blank">
              <Github className="text-slate-400 hover:text-slate-900 cursor-pointer transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/jaseel-muhammed-7609251b3/">
              <Linkedin className="text-slate-400 hover:text-slate-900 cursor-pointer transition-colors" />
            </a>
            <a href="mailto:jaseelmanamulli@gmail.com">
              <Mail className="text-slate-400 hover:text-slate-900 cursor-pointer transition-colors" />
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Portfolio;
