"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Key, Headset } from 'lucide-react';

const services = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Secure Transactions',
    description: 'We ensure every deal is legally sound and protected, giving you peace of mind throughout the process.'
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Market Analysis',
    description: 'Data-driven insights into property values and investment trends to maximize your returns.'
  },
  {
    icon: <Key className="w-8 h-8" />,
    title: 'Property Management',
    description: 'Full-service management for your luxury assets, from maintenance to tenant relations.'
  },
  {
    icon: <Headset className="w-8 h-8" />,
    title: 'Expert Consulting',
    description: 'Personalized advice from seasoned industry professionals to find your perfect match.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-900 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full -mr-48 -mt-48"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            Why Choose Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Exquisite Services for <span className="text-amber-500 italic font-serif">Elite</span> Clients
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-white/5 hover:border-amber-500/30 transition-all duration-300 group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-amber-500 group-hover:text-slate-900">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
