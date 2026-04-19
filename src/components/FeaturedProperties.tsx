"use client";

import React from 'react';
import PropertyCard from './PropertyCard';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const properties = [
  {
    image: '/prop1.png',
    title: 'The Azure Villa',
    location: 'Malibu, California',
    price: '$8,500,000',
    beds: 5,
    baths: 6,
    sqft: '6,200',
    tag: 'FOR SALE'
  },
  {
    image: '/prop2.png',
    title: 'Skyline Penthouse',
    location: 'Manhattan, New York',
    price: '$12,000,000',
    beds: 4,
    baths: 4.5,
    sqft: '4,800',
    tag: 'FEATURED'
  },
  {
    image: '/prop3.png',
    title: 'Tropical Sanctuary',
    location: 'Bali, Indonesia',
    price: '$3,200,000',
    beds: 6,
    baths: 7,
    sqft: '8,500',
    tag: 'NEW LISTING'
  }
];

const FeaturedProperties = () => {
  return (
    <section id="properties" className="py-24 bg-slate-950 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Featured <span className="text-amber-500 italic font-serif">Properties</span></h2>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 text-white font-bold hover:text-amber-500 transition-colors group"
          >
            EXPLORE ALL PROPERTIES 
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PropertyCard {...prop} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
