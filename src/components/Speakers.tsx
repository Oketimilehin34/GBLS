import React, { useState } from 'react';
import { Award, Building2, MapPin, ArrowRight, Sparkles, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { speakersData, Speaker } from '../data/speakers';
import { SpeakerModal } from './SpeakerModal';

export const Speakers: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [showAllSpeakers, setShowAllSpeakers] = useState<boolean>(false);

  const categories = [
    'All',
    'Keynote',
    'Policy & Economics',
    'Institutional Investor',
    'Technology & AI'
  ];

  const filteredSpeakers = speakersData.filter((speaker) => {
    if (selectedCategory === 'All') return true;
    return speaker.category === selectedCategory;
  });

  const displayedSpeakers = showAllSpeakers ? filteredSpeakers : filteredSpeakers.slice(0, 6);

  return (
    <section id="speakers" className="py-24 bg-surface-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-primary/5 border border-navy-primary/10 text-navy-primary text-xs font-bold uppercase tracking-widest mb-4">
              <Award className="w-3.5 h-3.5 text-gold-accent" />
              <span>International Leadership Faculty</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-deep tracking-tight font-display">
              Speakers & Special Guests
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
              Convening global finance ministers, sovereign fund governors, Fortune 500 chief executives, 
              and technological pioneers who are setting the trajectory for the international commercial architecture.
            </p>
          </div>

          {/* Replacement Notice Badge */}
          <div className="p-3 bg-white rounded-xl border border-slate-200/80 shadow-sm text-xs text-slate-500 max-w-xs shrink-0">
            <span className="font-semibold text-navy-deep block mb-1">
              [Editable Speaker Roster]
            </span>
            All speaker profiles and photographs are realistic placeholders ready for official faculty replacement.
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5" />
            Filter By Focus:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setShowAllSpeakers(false);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-navy-primary text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-navy-deep border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Speaker Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedSpeakers.map((speaker) => (
            <div
              key={speaker.id}
              onClick={() => setSelectedSpeaker(speaker)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-executive-hover hover:border-gold-accent/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Consistent 4:5 Aspect Ratio */}
                <div className="relative aspect-[4/5] overflow-hidden bg-navy-deep">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-navy-deep/80 text-gold-light border border-white/10 backdrop-blur-md">
                      <Sparkles className="w-3 h-3 text-gold-accent" />
                      {speaker.category}
                    </span>
                  </div>

                  {/* Country Pill Tag */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/90 text-navy-deep shadow-sm">
                      <MapPin className="w-3 h-3 text-gold-dark" />
                      {speaker.country}
                    </span>
                  </div>

                  {/* Bottom Image Overlay Details */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs text-gold-light font-medium tracking-wide">
                      {speaker.title}
                    </p>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-navy-deep group-hover:text-gold-dark transition-colors font-display">
                    {speaker.name}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-2 font-medium">
                    <Building2 className="w-3.5 h-3.5 text-navy-primary shrink-0" />
                    <span className="truncate">{speaker.organisation}</span>
                  </div>

                  <p className="text-xs text-slate-500 mt-3 line-clamp-2 leading-relaxed">
                    {speaker.bio}
                  </p>
                </div>
              </div>

              {/* Card Footer / CTA */}
              <div className="px-5 pb-5 pt-0 border-t border-slate-100 flex items-center justify-between mt-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-navy-primary group-hover:text-gold-dark transition-colors inline-flex items-center gap-1">
                  View Executive Bio
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  KEYNOTE FACULTY
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Speakers Toggle CTA */}
        {filteredSpeakers.length > 6 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAllSpeakers(!showAllSpeakers)}
              className="inline-flex items-center gap-2 bg-navy-primary hover:bg-secondary-navy text-white text-xs uppercase tracking-wider font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <span>
                {showAllSpeakers
                  ? 'Show Fewer Speakers'
                  : `View All ${filteredSpeakers.length} Distinguished Speakers`}
              </span>
              {showAllSpeakers ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}
      </div>

      {/* Interactive Speaker Profile Modal */}
      <SpeakerModal
        speaker={selectedSpeaker}
        onClose={() => setSelectedSpeaker(null)}
      />
    </section>
  );
};

