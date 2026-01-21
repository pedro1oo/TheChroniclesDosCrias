"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sword, Shield, Zap } from "lucide-react";

interface CardProps {
  name: string;
  power: number;
  provision: number;
  rarity: "gold" | "silver" | "bronze";
  type: "unit" | "spell" | "artifact";
  image?: string;
  description: string;
  lore: string;
}

export const Card3D: React.FC<CardProps> = ({
  name,
  power,
  provision,
  rarity,
  type,
  image,
  description,
  lore,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const rarityColor = {
    gold: "border-gold shadow-gold/20",
    silver: "border-slate-300 shadow-slate-300/20",
    bronze: "border-orange-700 shadow-orange-700/20",
  };

  const bgGradient = {
    gold: "from-yellow-900/80 to-black",
    silver: "from-slate-700/80 to-black",
    bronze: "from-orange-900/80 to-black",
  };

  return (
    <div
      className="relative w-64 h-96 cursor-pointer perspective-1000 group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-transform duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        whileHover={{ scale: 1.05 }}
      >
        {/* Front */}
        <div
          className={`absolute w-full h-full backface-hidden rounded-xl border-2 ${rarityColor[rarity]} bg-stone overflow-hidden flex flex-col`}
        >
          {/* Card Header (Power & Provision) */}
          <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
            <div className="w-10 h-10 rounded-full bg-abyss border-2 border-red-500 flex items-center justify-center font-bold text-white text-lg shadow-lg">
              {power}
            </div>
            {type === "unit" && (
                <div className="w-8 h-8 rounded-full bg-abyss border border-stone flex items-center justify-center text-xs text-stone-300">
                    <Sword size={14} />
                </div>
            )}
          </div>
          
          <div className="absolute top-2 right-2 z-10">
             <div className="w-8 h-8 flex items-center justify-center font-display text-gold drop-shadow-md text-xl">
                 {provision}
             </div>
          </div>

          {/* Image Area */}
          <div className={`h-3/5 w-full bg-gradient-to-b ${bgGradient[rarity]} relative`}>
            {image ? (
                <img src={image} alt={name} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
            ) : (
                <div className="w-full h-full flex items-center justify-center text-stone-500">
                    <span className="font-display opacity-20 text-4xl">ART</span>
                </div>
            )}
          </div>

          {/* Text Area */}
          <div className="h-2/5 p-3 flex flex-col gap-2 bg-abyss/95 relative">
            <h3 className={`font-serif font-bold text-lg leading-tight ${rarity === 'gold' ? 'text-gold' : 'text-stone-200'}`}>
                {name}
            </h3>
            <p className="text-xs text-stone-400 font-sans leading-snug line-clamp-4">
                {description}
            </p>
            
            {/* Rarity Gem */}
            <div className={`absolute bottom-2 right-2 w-3 h-3 rotate-45 ${rarity === 'gold' ? 'bg-gold' : rarity === 'silver' ? 'bg-slate-300' : 'bg-orange-700'}`}></div>
          </div>
        </div>

        {/* Back (Lore) */}
        <div
          className={`absolute w-full h-full backface-hidden rounded-xl border-2 ${rarityColor[rarity]} bg-stone p-6 rotate-y-180 flex flex-col justify-center items-center text-center`}
          style={{ transform: "rotateY(180deg)" }}
        >
          <h4 className="font-serif text-gold text-xl mb-4 border-b border-gold/30 pb-2 w-full">{name}</h4>
          <p className="font-serif italic text-stone-300 text-sm leading-relaxed">
            "{lore}"
          </p>
          <div className="mt-auto text-xs text-stone-500 uppercase tracking-widest">
            As Crônicas dos Crias
          </div>
        </div>
      </motion.div>
    </div>
  );
};
