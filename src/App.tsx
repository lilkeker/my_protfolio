/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Camera, Music, Map, GraduationCap, Mail, Instagram, Github, ArrowRight, ExternalLink, X, Utensils, Film, BookOpen, Coffee, Bike } from 'lucide-react';
import { PORTFOLIO_DATA } from './constants';
import { useRef, useState } from 'react';
import { Hobby } from './types';

const iconMap: Record<string, any> = {
  Camera,
  Music,
  Map,
  Bike,
  Utensils,
  Film,
  BookOpen,
  Coffee
};

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedHobby, setSelectedHobby] = useState<Hobby | null>(null);
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  return (
    <div ref={containerRef} className="min-h-screen selection:bg-accent/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xs font-mono tracking-widest uppercase"
        >
          {PORTFOLIO_DATA.name} // 2026
        </motion.div>
        <div className="flex gap-8">
          {['About', 'Hobbies', 'Gallery'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[10px] uppercase tracking-[0.2em] hover:text-accent transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center px-6 md:px-20 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full max-w-7xl mx-auto">
          <motion.div 
            style={{ opacity, scale }}
            className="relative z-10 md:col-span-7"
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-accent font-mono text-xs uppercase tracking-[0.3em] mb-4"
            >
              Available for Collaboration
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-7xl md:text-[10vw] font-serif italic leading-[0.85] tracking-tighter mb-8"
            >
              {PORTFOLIO_DATA.name.split(' ')[0]} <br />
              <span className="ml-[0.5em]">{PORTFOLIO_DATA.name.split(' ')[1]}</span>
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="max-w-md"
            >
              <p className="text-lg text-white/60 leading-relaxed font-light">
                {PORTFOLIO_DATA.title}
              </p>
            </motion.div>
          </motion.div>

          {PORTFOLIO_DATA.avatar && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="md:col-span-5 flex justify-center md:justify-end relative z-10"
            >
              <div className="relative w-full max-w-sm md:max-w-md aspect-[3/4]">
                <div className="absolute inset-0 border border-white/10 translate-x-4 translate-y-4 rounded-lg" />
                <img 
                  src={PORTFOLIO_DATA.avatar} 
                  alt={PORTFOLIO_DATA.name} 
                  className="w-full h-full object-cover rounded-lg transition-all duration-700 hover:scale-[1.02]"
                />
              </div>
            </motion.div>
          )}
        </div>

        {/* Background Decorative Element */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full opacity-20 pointer-events-none">
          <div className="w-full h-full bg-radial-gradient from-accent/20 to-transparent blur-3xl" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest font-mono">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-20 border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-xs font-mono uppercase tracking-[0.4em] text-white/40 mb-12 flex items-center gap-4">
              <div className="w-8 h-px bg-white/20" /> 01. Biography
            </h2>
            <p className="text-3xl md:text-4xl font-serif leading-tight text-balance">
              {PORTFOLIO_DATA.bio}
            </p>
          </div>
          
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="text-xs font-mono uppercase tracking-[0.4em] text-white/40 mb-12 flex items-center gap-4">
              <div className="w-8 h-px bg-white/20" /> 02. Education
            </h2>
            <div className="space-y-12">
              {PORTFOLIO_DATA.education.map((edu, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium group-hover:text-accent transition-colors">{edu.degree}</h3>
                    <span className="text-xs font-mono text-white/40 pt-1">{edu.period}</span>
                  </div>
                  <p className="text-sm text-white/60 mb-2">{edu.school}</p>
                  <p className="text-sm text-white/40 font-light leading-relaxed">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-32 px-6 md:px-20 bg-white/[0.02]">
        <h2 className="text-xs font-mono uppercase tracking-[0.4em] text-white/40 mb-20 text-center">
          Interests & Pursuits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.hobbies.map((hobby, i) => {
            const Icon = iconMap[hobby.icon] || Map;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedHobby(hobby)}
                className="p-10 border border-white/10 rounded-2xl hover:border-accent/50 transition-all group cursor-pointer active:scale-95"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-8 group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-medium mb-4">{hobby.name}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{hobby.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.4em] text-white/40 mb-6">
              03. Visual Works
            </h2>
            <h3 className="text-5xl font-serif italic">Photography Gallery</h3>
          </div>
          <p className="max-w-xs text-sm text-white/40 font-light leading-relaxed">
            A curated selection of moments captured across various landscapes and urban environments.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {PORTFOLIO_DATA.photos.map((photo, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-xl bg-white/5"
            >
              <img 
                src={photo.url} 
                alt={photo.title}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-[10px] uppercase tracking-widest font-mono text-accent mb-2">{photo.category}</span>
                <h4 className="text-xl font-serif italic">{photo.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 md:px-20 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-serif italic mb-4">Let's connect.</h2>
            <p className="text-white/40 font-light">Open for new opportunities and creative dialogues.</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
              <Github size={18} />
            </a>
            <a href="mailto:hello@example.com" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
              <Mail size={18} />
            </a>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-white/20">
          <p>© 2026 {PORTFOLIO_DATA.name}. All Rights Reserved.</p>
          <p>Built with Passion & Code</p>
        </div>
      </footer>

      {/* Hobby Modal */}
      <AnimatePresence>
        {selectedHobby && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedHobby(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#101010] border border-white/10 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
            >
              <div className="p-6 md:p-8 border-b border-white/10 flex justify-between items-center bg-[#101010]">
                <div>
                  <h3 className="text-2xl font-serif italic mb-1">{selectedHobby.name}</h3>
                  <p className="text-sm text-white/40">{selectedHobby.description}</p>
                </div>
                <button 
                  onClick={() => setSelectedHobby(null)}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                {/* Music Section */}
                {selectedHobby.music && selectedHobby.music.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-sm font-mono uppercase tracking-widest text-white/40 mb-4 flex items-center gap-2">
                       <Music size={14} /> My Playlist
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedHobby.music.map((song, i) => (
                        <a 
                          key={i}
                          href={song.url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-accent/10 border border-white/5 hover:border-accent/30 transition-all group min-w-0"
                        >
                          <div className="flex items-center gap-3 overflow-hidden min-w-0">
                            <div className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-white/40 group-hover:text-accent transition-colors shrink-0">
                              <Music size={14} />
                            </div>
                            <div className="truncate min-w-0 flex-1">
                              <p className="font-medium text-sm truncate group-hover:text-accent transition-colors">{song.title}</p>
                              <p className="text-[10px] text-white/40 truncate">{song.artist}</p>
                            </div>
                          </div>
                          <ExternalLink size={12} className="text-white/20 group-hover:text-accent transition-colors shrink-0 ml-2" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Photos Section */}
                {selectedHobby.photos && selectedHobby.photos.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedHobby.photos.map((photo, i) => (
                      <div key={i} className="aspect-square bg-white/5 rounded-lg overflow-hidden group">
                        <img 
                          src={photo} 
                          alt={`${selectedHobby.name} ${i + 1}`} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  !selectedHobby.music && (
                    <div className="h-40 flex items-center justify-center text-white/20 italic">
                      暂无照片 / No photos available
                    </div>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
