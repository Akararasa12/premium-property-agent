"use client";

import React from 'react';
import { Bed, Bath, Move, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface PropertyProps {
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  tag: string;
}

const PropertyCard = ({ image, title, location, price, beds, baths, sqft, tag }: PropertyProps) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group bg-slate-900 rounded-3xl overflow-hidden border border-white/5 shadow-2xl relative"
    >
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-amber-500 text-slate-950 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {tag}
          </span>
        </div>
        
        <button className="absolute top-4 right-4 p-2.5 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-rose-500 transition-colors">
          <Heart size={18} />
        </button>
        
        <div className="absolute bottom-4 left-6">
          <p className="text-2xl font-bold text-white tracking-tight">{price}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-500 transition-colors">{title}</h3>
          <p className="text-slate-400 text-sm flex items-center gap-1">
            <Move size={14} className="text-amber-500" /> {location}
          </p>
        </div>

        <div className="flex justify-between items-center py-4 border-t border-white/5">
          <div className="flex items-center gap-2 text-slate-300">
            <Bed size={16} className="text-amber-500" />
            <span className="text-xs font-medium">{beds} Beds</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Bath size={16} className="text-amber-500" />
            <span className="text-xs font-medium">{baths} Baths</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Move size={16} className="text-amber-500" />
            <span className="text-xs font-medium">{sqft} sqft</span>
          </div>
        </div>

        <button className="w-full mt-2 py-3 bg-white/5 hover:bg-amber-500 text-white hover:text-slate-900 font-bold rounded-xl transition-all duration-300 text-sm uppercase tracking-widest">
          View Details
        </button>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
