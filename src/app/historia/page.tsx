"use client";

import { useState } from "react";
import Link from "next/link";
import { chapters as unsortedChapters } from "@/data/chapters/index";
import { Button } from "@/components/ui/Button";
import { ChevronLeft, ChevronRight, BookOpen, ScrollText, ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const chapters = [...unsortedChapters].sort((a, b) => a.id - b.id);

export default function HistoriaPage() {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentChapter = chapters[currentChapterIndex];
  const totalChapters = chapters.length;

  const nextChapter = () => {
    if (currentChapterIndex < totalChapters - 1) {
      setCurrentChapterIndex(currentChapterIndex + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevChapter = () => {
    if (currentChapterIndex > 0) {
      setCurrentChapterIndex(currentChapterIndex - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <main className="min-h-screen bg-abyss text-stone-200 font-sans selection:bg-neon-purple/30 pb-20">
      {/* Navigation Bar */}
      <nav className="fixed w-full z-50 glass-panel border-b border-white/5 top-0 left-0 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-abyss/80">
        <Link href="/" className="font-serif text-2xl text-gold font-bold tracking-tighter hover:text-white transition-colors">
          ACdC
        </Link>
        <div className="flex gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ChevronLeft className="w-4 h-4 mr-2" /> Voltar
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Header for Story */}
      <div className="relative pt-32 pb-16 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/4 w-full h-full bg-neon-purple/5 blur-[120px] -z-10 pointer-events-none" />
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="container mx-auto max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-display tracking-widest text-gold mb-6">
            <BookOpen className="w-3 h-3" />
            <span>CRÔNICAS</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-tight">
            A História até aqui
          </h1>
          <p className="text-stone-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Mergulhe nas origens dos campeões, nas traições e nas alianças que forjaram o mundo das Crônicas.
          </p>
        </motion.div>
      </div>

      {/* Chapter Content */}
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentChapter.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-black/20 border border-white/5 rounded-2xl p-6 md:p-12 shadow-2xl backdrop-blur-sm relative overflow-hidden"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>

            {/* Chapter Header */}
            <header className="mb-12 text-center border-b border-white/10 pb-8">
              <span className="block text-neon-purple font-display tracking-[0.2em] text-sm mb-2 uppercase">
                Capítulo {currentChapter.id}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight">
                {currentChapter.title.split(": ")[1] || currentChapter.title}
              </h2>
            </header>

            {/* Sections */}
            <div className="space-y-12">
              {currentChapter.sections.map((section: { title: string; content: React.ReactNode; location?: string }, index: number) => (
                <section key={index} className="relative">
                   <div className="flex items-center gap-4 mb-6">
                     <span className="text-4xl font-marker text-white/10 select-none absolute -left-4 -top-2 md:-left-8 md:-top-2">
                       {index + 1}
                     </span>
                     <div className="ml-6 md:ml-0">
                       <h3 className="text-xl font-bold text-gold font-serif">
                         {section.title.replace(/^\d+\.\s*/, "")}
                       </h3>
                       {section.location && (
                         <div className="flex items-center gap-2 text-xs text-tech-cyan mt-1 font-mono uppercase tracking-wide">
                            <span className="w-1.5 h-1.5 rounded-full bg-tech-cyan/50 animate-pulse" />
                            {section.location}
                         </div>
                       )}
                     </div>
                   </div>

                   <div className="prose prose-invert prose-stone max-w-none leading-relaxed text-stone-300">
                     {section.content}
                   </div>
                </section>
              ))}
            </div>

            {/* Chapter Footer / Pagination */}
            <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 gap-4 md:flex md:justify-between md:items-center">
              <div className="col-span-1 order-2 md:order-1">
                <Button
                  variant="outline"
                  disabled={currentChapterIndex === 0}
                  onClick={prevChapter}
                  className={`flex items-center justify-center w-full md:w-auto gap-2 ${currentChapterIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Anterior
                </Button>
              </div>

              <div className="relative col-span-2 order-1 md:order-2 w-full md:w-auto">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="bg-black/40 hover:bg-white/5 hover:border-white/20 border border-white/10 rounded-lg px-4 py-2 text-sm text-stone-300 flex items-center justify-between gap-3 w-full md:min-w-[240px] transition-all duration-300 backdrop-blur-md group"
                >
                  <span className="truncate flex-1 text-left">
                    <span className="text-stone-500 mr-2 font-mono text-xs">#{currentChapter.id}</span>
                    {currentChapter.title.split(": ")[1] || currentChapter.title}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-stone-500 group-hover:text-white transition-transform duration-300 flex-shrink-0 ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <>
                      {/* Backdrop to close when clicking outside */}
                      <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)} />
                      
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-full md:w-72 max-h-[60vh] overflow-y-auto bg-[#0f0f0f] border border-white/10 rounded-xl shadow-2xl shadow-black/80 p-2 z-50 custom-scrollbar ring-1 ring-white/5"
                      >
                         <div className="px-2 py-1.5 text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1">
                           Navegar Capítulos
                         </div>
                        {chapters.map((chapter, index) => (
                          <button
                            key={chapter.id}
                            onClick={() => {
                              setCurrentChapterIndex(index);
                              setIsDropdownOpen(false);
                              window.scrollTo(0, 0);
                            }}
                            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm flex items-center justify-between transition-all group ${
                              index === currentChapterIndex
                                ? "bg-neon-purple/10 text-neon-purple ring-1 ring-neon-purple/20"
                                : "text-stone-400 hover:bg-white/5 hover:text-white"
                            }`}
                          >
                            <span className="truncate pr-4">
                              <span className={`mr-2 font-mono text-xs ${index === currentChapterIndex ? "text-neon-purple/70" : "text-stone-600 group-hover:text-stone-400"}`}>
                                {String(chapter.id).padStart(2, '0')}
                              </span>
                              {chapter.title.split(": ")[1] || chapter.title}
                            </span>
                            {index === currentChapterIndex && (
                              <Check className="w-3.5 h-3.5 text-neon-purple flex-shrink-0" />
                            )}
                          </button>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

               <div className="col-span-1 order-2 md:order-3">
                 <Button
                  variant={currentChapterIndex < totalChapters - 1 ? "primary" : "outline"}
                  disabled={currentChapterIndex >= totalChapters - 1}
                  onClick={nextChapter}
                  className={`flex items-center justify-center w-full md:w-auto gap-2 ${currentChapterIndex >= totalChapters - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  Próximo
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

    </main>
  );
}
