"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Building2, CircleDollarSign, Loader2 } from 'lucide-react';

const Hero = () => {
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    
    // Simulate a premium search experience
    setTimeout(() => {
      setIsSearching(false);
      const element = document.getElementById('properties');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1500);
  };

  return (
    <section id="home" className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: 'url("/premium-property-agent/hero.png")' }}
      >
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.3em] text-amber-500 uppercase border border-amber-500/30 bg-amber-500/10 rounded-full backdrop-blur-sm">
            Excellence in Real Estate
          </span>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
            Find Your <span className="text-amber-500 italic font-serif">Dream</span> <br /> 
            Sanctuary.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Curated selection of the most prestigious properties in the world's most desirable locations. Experience luxury like never before.
          </p>
        </motion.div>

        {/* Search Bar - Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto bg-white/10 backdrop-blur-2xl p-2 rounded-2xl border border-white/20 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            <div className="flex flex-col items-start px-6 py-3 border-b md:border-b-0 md:border-r border-white/10">
              <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-1 flex items-center gap-1">
                <MapPin size={10} /> Location
              </span>
              <input 
                type="text" 
                placeholder="Where to?" 
                className="bg-transparent text-white placeholder-slate-400 focus:outline-none w-full text-sm font-medium"
              />
            </div>
            <div className="flex flex-col items-start px-6 py-3 border-b md:border-b-0 md:border-r border-white/10">
              <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-1 flex items-center gap-1">
                <Building2 size={10} /> Type
              </span>
              <select className="bg-transparent text-white focus:outline-none w-full text-sm font-medium appearance-none cursor-pointer">
                <option className="bg-slate-900">Luxury Villa</option>
                <option className="bg-slate-900">Penthouse</option>
                <option className="bg-slate-900">Modern Mansion</option>
              </select>
            </div>
            <div className="flex flex-col items-start px-6 py-3 border-b md:border-b-0 md:border-r border-white/10">
              <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-1 flex items-center gap-1">
                <CircleDollarSign size={10} /> Budget
              </span>
              <select className="bg-transparent text-white focus:outline-none w-full text-sm font-medium appearance-none cursor-pointer">
                <option className="bg-slate-900">$1M - $5M</option>
                <option className="bg-slate-900">$5M - $20M</option>
                <option className="bg-slate-900">$20M+</option>
              </select>
            </div>
            <button 
              onClick={handleSearch}
              disabled={isSearching}
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all group disabled:opacity-80 disabled:cursor-not-allowed"
            >
              {isSearching ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  FINDING...
                </>
              ) : (
                <>
                  <Search size={20} className="group-hover:scale-110 transition-transform" />
                  SEARCH NOW
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold">Discover</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-amber-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
