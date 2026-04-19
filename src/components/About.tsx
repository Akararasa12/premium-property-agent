"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 px-6 md:px-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative w-full"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl aspect-[4/5] lg:aspect-auto lg:h-[600px]">
              <img 
                src="/premium-property-agent/about.png" 
                alt="Our Office" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
            </div>
            
            {/* Stats Badge */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -right-4 md:-right-8 bg-amber-500 p-8 rounded-3xl shadow-2xl z-20 max-w-[240px]"
            >
              <div className="flex items-center gap-4 mb-2 text-slate-950">
                <Award size={32} />
                <span className="font-bold text-2xl tracking-tight">#1</span>
              </div>
              <p className="text-slate-900 font-bold text-lg leading-tight mb-1">Luxury Agency</p>
              <p className="text-slate-800 text-xs font-medium uppercase tracking-widest">Global Awards 2026</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Redefining Excellence</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
              Crafting Legacies In <br />
              <span className="text-amber-500 italic font-serif text-5xl md:text-7xl">Exceptional</span> Spaces
            </h2>
            
            <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-xl">
              Since 1998, Elite Estates has been the premier choice for individuals seeking more than just a home—they seek a statement of success and a sanctuary of comfort.
            </p>

            <div className="space-y-6 mb-12">
              {[
                { icon: <CheckCircle2 className="text-amber-500" />, text: "Exclusive access to off-market luxury listings" },
                { icon: <CheckCircle2 className="text-amber-500" />, text: "Bespoke legal and financial consulting" },
                { icon: <CheckCircle2 className="text-amber-500" />, text: "Global network of over 5,000 elite partners" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-slate-200 font-medium">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-8 py-8 border-t border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-amber-500">
                  <Users size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">1.2k+</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Clients Served</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-amber-500">
                  <Award size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">25+</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Years Experience</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
