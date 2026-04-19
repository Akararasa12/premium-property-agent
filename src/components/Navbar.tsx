"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Home, Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Properties', href: '#properties' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/80 backdrop-blur-md py-3 shadow-lg border-b border-white/10' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            <Home className="text-slate-900 w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">
            ELITE<span className="text-amber-500">ESTATES</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-amber-500 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
          <Link href="#contact" className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            <Phone size={16} />
            TALK TO US
          </Link>
        </div>


        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-300 hover:text-amber-500"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-amber-500 text-slate-900 px-6 py-3 rounded-xl font-bold text-center"
              >
                CONTACT NOW
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
