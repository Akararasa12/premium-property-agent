"use client";

import React from 'react';
import Link from 'next/link';
import { Home, MessageCircle, Send, Globe, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                <Home className="text-slate-900 w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tighter text-white">
                ELITE<span className="text-amber-500">ESTATES</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Redefining luxury real estate with unparalleled expertise and a global network of prestigious properties.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-amber-500 hover:text-slate-900 transition-all">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-amber-500 hover:text-slate-900 transition-all">
                <Send size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-amber-500 hover:text-slate-900 transition-all">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {['Properties', 'About Us', 'Our Agents', 'Latest News', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-400 text-sm hover:text-amber-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Prime Locations</h4>
            <ul className="flex flex-col gap-4">
              {['Malibu', 'Manhattan', 'London', 'Dubai', 'Bali'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-400 text-sm hover:text-amber-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Get In Touch</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4 text-slate-400">
                <MapPin size={20} className="text-amber-500 shrink-0" />
                <span className="text-sm">123 Luxury Avenue, Penthouse 5<br />Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-4 text-slate-400">
                <Phone size={20} className="text-amber-500 shrink-0" />
                <span className="text-sm">+1 (555) ELITE-00</span>
              </li>
              <li className="flex items-center gap-4 text-slate-400">
                <Mail size={20} className="text-amber-500 shrink-0" />
                <span className="text-sm">concierge@eliteestates.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-slate-500 text-xs mb-1">
              © 2026 Elite Estates. All rights reserved.
            </p>
            <p className="text-slate-600 text-[10px] font-medium tracking-widest uppercase">
              Created by <span className="text-amber-500/80">Alif Nugraha Digital</span> • Github: <a href="https://github.com/Akararasa12" target="_blank" className="hover:text-amber-500 transition-colors">Akararasa12</a>
            </p>
          </div>
          <div className="flex gap-8 text-slate-500 text-xs">
            <a href="#" className="hover:text-amber-500">Privacy Policy</a>
            <a href="#" className="hover:text-amber-500">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
