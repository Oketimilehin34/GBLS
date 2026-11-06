import React from 'react';
import { Calendar, MapPin, Award, ArrowRight, BookOpen, ChevronDown, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { conferenceData } from '../data/conference';

interface HeroProps {
  onRegisterClick: () => void;
  onExploreProgrammeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegisterClick, onExploreProgrammeClick }) => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-navy-deep">
      {/* Background Photography with Navy Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2000&q=85"
          alt="International Business Summit Auditorium and Leaders Convening"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.45] contrast-110"
        />
        {/* Multi-layered executive navy gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-primary/90 to-navy-deep/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/60" />
        <div className="absolute inset-0 bg-[radial-gradient(#C6A45C_1px,transparent_1px)] opacity-[0.06] [background-size:24px_24px]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-accent/15 border border-gold-accent/40 backdrop-blur-md mb-6">
            <Sparkles className="w-3.5 h-3.5 text-gold-accent" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-gold-light uppercase">
              {conferenceData.theme}
            </span>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-gold-accent/60" />
            <span className="hidden sm:inline-block text-[11px] text-slate-300 font-medium">
              {conferenceData.edition}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 font-display">
            Connecting Global Leaders.{' '}
            <span className="block mt-1 gold-gradient-text">
              Shaping the Future of Business.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mb-10 font-normal">
            {conferenceData.supportingText}
          </p>

          {/* Event Information Pill Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-10 max-w-3xl">
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-navy-secondary/60 border border-white/10 backdrop-blur-md shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-gold-accent/10 border border-gold-accent/30 flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5 text-gold-accent" />
              </div>
              <div className="text-left">
                <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Summit Dates</p>
                <p className="text-sm font-bold text-white">{conferenceData.displayDates}</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-navy-secondary/60 border border-white/10 backdrop-blur-md shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-gold-accent/10 border border-gold-accent/30 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-gold-accent" />
              </div>
              <div className="text-left">
                <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Location</p>
                <p className="text-sm font-bold text-white">{conferenceData.city}, {conferenceData.country}</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-navy-secondary/60 border border-white/10 backdrop-blur-md shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-gold-accent/10 border border-gold-accent/30 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-gold-accent" />
              </div>
              <div className="text-left">
                <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Venue</p>
                <p className="text-sm font-bold text-white truncate max-w-[170px]" title={conferenceData.venueName}>
                  {conferenceData.venueName}
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onRegisterClick}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold-accent via-gold-light to-gold-accent hover:from-gold-light hover:to-gold-accent text-navy-deep font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl hover:shadow-gold-glow transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Register for Conference</span>
              <ArrowRight className="w-4 h-4 text-navy-deep" />
            </button>

            <button
              onClick={onExploreProgrammeClick}
              className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm px-7 py-4 rounded-xl border border-white/20 backdrop-blur-sm transition-all duration-300 hover:border-gold-accent/50"
            >
              <BookOpen className="w-4 h-4 text-gold-light" />
              <span>Explore the Programme</span>
            </button>

            <div className="hidden lg:flex items-center gap-2 pl-4 text-xs text-slate-300 border-l border-white/15">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Delegate Accreditation Now Open</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Bottom Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 flex items-center justify-between text-slate-400 text-xs">
        <div className="hidden md:flex items-center gap-2">
          <span className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">
            CONFIDENTIAL BRIEFING &bull; STRICTLY ACCREDITED DELEGATIONS
          </span>
        </div>

        <a
          href="#countdown"
          className="mx-auto md:mr-0 inline-flex items-center gap-2 text-slate-300 hover:text-gold-light transition-colors py-2 px-3 rounded-full bg-navy-secondary/40 border border-white/10"
        >
          <span className="text-xs uppercase tracking-wider">Scroll to Discover</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-gold-accent" />
        </a>
      </div>
    </section>
  );
};

