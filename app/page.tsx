import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-xl tracking-tighter">STUDIO.JS</span>
          <div className="space-x-8 text-sm font-medium text-slate-600">
            <a href="#work" className="hover:text-blue-600 transition-colors">Work</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="mailto:hello@example.com" className="bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <motion.section 
          initial="initial" animate="animate" variants={fadeIn}
          className="mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
            Designing <span className="text-blue-600">digital</span> experiences.
          </h1>
          <p className="text-xl text-slate-500 max-w-xl leading-relaxed">
            I'm a Full-stack Developer specializing in building clean, functional, and user-centric interfaces. Currently based in the future.
          </p>
        </motion.section>

        {/* Bento Grid Layout */}
        <section id="work" className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          {/* Main Project Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-3 h-[400px] bg-slate-900 rounded-3xl p-8 text-white flex flex-col justify-end relative overflow-hidden group"
          >
            <div className="absolute top-8 right-8 bg-white/10 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <ExternalLink size={20} />
            </div>
            <span className="text-blue-400 font-mono text-sm mb-2 uppercase">Featured Project</span>
            <h3 className="text-3xl font-bold mb-4">NeuralFlow Dashboard</h3>
            <p className="text-slate-400 max-w-md">An AI-driven analytics platform visualizing real-time data streams.</p>
          </motion.div>

          {/* Skill Box */}
          <div className="md:col-span-1 bg-blue-600 rounded-3xl p-8 text-white flex flex-col justify-center items-center text-center">
            <h4 className="font-bold text-lg mb-4">Tech Stack</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {['React', 'Next.js', 'TS', 'Tailwind'].map(tag => (
                <span key={tag} className="bg-white/20 px-3 py-1 rounded-lg text-xs font-semibold">{tag}</span>
              ))}
            </div>
          </div>

          {/* About Box */}
          <div className="md:col-span-2 bg-white border border-slate-200 rounded-3xl p-8">
            <h4 className="font-bold text-xl mb-4 italic">"Simplicity is the ultimate sophistication."</h4>
            <p className="text-slate-500">I believe in writing code that is as beautiful as the UI it powers.</p>
          </div>

          {/* Secondary Project */}
          <div className="md:col-span-2 bg-slate-200 rounded-3xl p-8 flex items-end">
            <div>
              <h3 className="text-xl font-bold">VibeCheck App</h3>
              <p className="text-slate-600">A social experiment in community building.</p>
            </div>
          </div>
        </section>

        {/* Footer/Contact */}
        <footer className="mt-32 pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-400 text-sm">© 2026 Your Name. Built with Love and Coffee.</p>
          <div className="flex gap-6">
            <Github className="text-slate-400 hover:text-slate-900 cursor-pointer transition-colors" />
            <Linkedin className="text-slate-400 hover:text-slate-900 cursor-pointer transition-colors" />
            <Mail className="text-slate-400 hover:text-slate-900 cursor-pointer transition-colors" />
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Portfolio;