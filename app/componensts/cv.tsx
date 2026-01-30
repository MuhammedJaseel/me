'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const DownloadButton = () => {
  const handleDownload = () => {
    // Replace with your actual CV file path
    const cvUrl = '/cv/Muhammed-Jaseel-FullStack-Developer-CV.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Muhammed-Jaseel-FullStack-Developer-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(16, 185, 129, 0.4)" }}
      whileTap={{ scale: 0.95 }}
      className="group relative flex items-center gap-3 px-8 py-4 bg-emerald-500/10 border border-emerald-500/50 rounded-xl text-emerald-400 font-mono font-bold tracking-wider overflow-hidden transition-all"
    >
      {/* Background Glow Sweep */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] transition-transform" />
      
      <Download size={20} className="group-hover:animate-bounce" />
      
      <span className="relative z-10">DOWNLOAD_CV.PDF</span>

      {/* Subtle Corner Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.button>
  );
};

export default DownloadButton;