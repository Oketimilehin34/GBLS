import React, { useState } from 'react';
import { MapPin, Navigation, Compass, Plane, Train, Car, Hotel, ExternalLink, X, Building2 } from 'lucide-react';
import { conferenceData } from '../data/conference';

export const Venue: React.FC = () => {
  const [directionsModalOpen, setDirectionsModalOpen] = useState(false);

  return (
    <section id="venue" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-primary/5 border border-navy-primary/10 text-navy-primary text-xs font-bold uppercase tracking-widest mb-4">
              <Compass className="w-3.5 h-3.5 text-gold-accent" />
              <span>Location & Summit Venue</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-deep tracking-tight font-display">
              The Venue & Geneva Setting
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
              Situated in the heart of Europe’s premier diplomatic and international banking capital, 
              providing world-class conference facilities, private bilateral salons, and secure delegate surroundings.
            </p>
          </div>

          <button
            onClick={() => setDirectionsModalOpen(true)}
            className="inline-flex items-center gap-2 bg-navy-primary hover:bg-secondary-navy text-white text-xs uppercase tracking-wider font-bold px-6 py-3.5 rounded-xl transition-all shadow-md shrink-0"
          >
            <Navigation className="w-3.5 h-3.5 text-gold-accent" />
            <span>Travel & Directions Guide</span>
          </button>
        </div>

        {/* Venue Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Venue Photography & Specifications (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[16/10] bg-navy-deep group">
              <img
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80"
                alt="Grand Imperial Congress & Exhibition Palace, Geneva"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/20 to-transparent" />

              {/* Overlay Tags */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-navy-deep/90 border border-white/10 backdrop-blur-md text-white">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gold-accent">
                      [Placeholder Venue] Official Summit Campus
                    </span>
                    <h3 className="text-lg font-bold text-white font-display">
                      {conferenceData.venueName}
                    </h3>
                    <p className="text-xs text-slate-300 flex items-center gap-1.5 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-gold-light shrink-0" />
                      <span>{conferenceData.venueAddress}, {conferenceData.city}, {conferenceData.country}</span>
                    </p>
                  </div>
                  <div className="text-left sm:text-right shrink-0">
                    <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-slate-200 font-mono">
                      Security Perimeter Zone 1
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Venue Key Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-surface-soft border border-slate-200">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Plenary Capacity</p>
                <p className="text-lg font-extrabold text-navy-deep font-display mt-1">3,000 Delegates</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Auditorium Magna & Balconies</p>
              </div>

              <div className="p-4 rounded-xl bg-surface-soft border border-slate-200">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Bilateral Salons</p>
                <p className="text-lg font-extrabold text-navy-deep font-display mt-1">24 Private Suites</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Chatham House Soundproof</p>
              </div>

              <div className="p-4 rounded-xl bg-surface-soft border border-slate-200">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Airport Transfer</p>
                <p className="text-lg font-extrabold text-navy-deep font-display mt-1">15 Minutes</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Geneva Cointrin Airport (GVA)</p>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Map Integration Placeholder (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full rounded-3xl bg-navy-deep border border-navy-border p-6 text-white shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-gold-accent" />
                    <h3 className="font-bold text-base font-display">Summit District Map Preview</h3>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/10 text-gold-light">
                    [Map Integration Placeholder]
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Interactive GIS map component ready for Google Maps Platform, Mapbox, or OpenStreetMap SDK embed.
                </p>

                {/* Styled Vector Map Mockup with Points of Interest */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-navy-primary/80 h-64 flex items-center justify-center p-4">
                  {/* Grid Lines Pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:20px_20px]" />
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:24px_24px]" />

                  {/* Water feature curve representation for Lake Geneva */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-blue-500/10 blur-xl pointer-events-none" />

                  {/* Central Venue Marker */}
                  <div className="relative z-10 flex flex-col items-center animate-bounce">
                    <div className="w-12 h-12 rounded-2xl bg-gold-accent border-2 border-white shadow-gold-glow flex items-center justify-center text-navy-deep">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div className="mt-2 px-3 py-1 rounded-full bg-navy-deep/95 border border-gold-accent/40 text-[10px] font-bold text-white shadow-md text-center">
                      Grand Imperial Congress
                    </div>
                  </div>

                  {/* POI Markers */}
                  <div className="absolute top-6 left-6 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-navy-deep/80 border border-white/10 text-[10px] text-slate-300">
                    <Plane className="w-3 h-3 text-gold-light" />
                    <span>Geneva GVA (15m)</span>
                  </div>

                  <div className="absolute bottom-6 right-6 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-navy-deep/80 border border-white/10 text-[10px] text-slate-300">
                    <Hotel className="w-3 h-3 text-gold-light" />
                    <span>Partner Luxury Hotels</span>
                  </div>
                </div>
              </div>

              {/* Transit Recommendations */}
              <div className="mt-6 pt-5 border-t border-navy-border space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-2">
                    <Train className="w-4 h-4 text-gold-accent" />
                    Geneva Cornavin Central Station
                  </span>
                  <span className="font-mono text-white">8 mins (Direct Tram 15)</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-gold-accent" />
                    VIP Chauffeur & Limousine Drop-off
                  </span>
                  <span className="font-mono text-white">Private Gate B</span>
                </div>
              </div>

              <button
                onClick={() => setDirectionsModalOpen(true)}
                className="mt-6 w-full py-3 rounded-xl bg-gold-accent hover:bg-gold-light text-navy-deep font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <span>View Full Travel Logistics</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Travel & Directions Guide Modal */}
      {directionsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-deep/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="bg-navy-primary px-6 py-5 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Navigation className="w-5 h-5 text-gold-accent" />
                <h3 className="font-bold text-lg font-display">Geneva Transit & Logistics Guide</h3>
              </div>
              <button
                onClick={() => setDirectionsModalOpen(false)}
                className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto text-sm text-slate-700 leading-relaxed">
              <div className="p-3 bg-surface-lightblue/60 rounded-xl border border-navy-border/20 text-xs text-navy-deep">
                <strong>Venue Placeholder:</strong> {conferenceData.venueName}, {conferenceData.venueAddress}, {conferenceData.city}, {conferenceData.country}.
              </div>

              <div>
                <h4 className="font-bold text-navy-primary flex items-center gap-2 text-sm uppercase tracking-wider mb-2">
                  <Plane className="w-4 h-4 text-gold-dark" />
                  International Arrivals (Geneva Airport - GVA)
                </h4>
                <p className="text-xs text-slate-600">
                  Complimentary summit hospitality desks will be located in the Arrival Terminals of Geneva Airport from October 17. 
                  Executive shuttles depart every 20 minutes directly to partner hotels and the Grand Imperial Congress Centre.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-navy-primary flex items-center gap-2 text-sm uppercase tracking-wider mb-2">
                  <Hotel className="w-4 h-4 text-gold-dark" />
                  Accredited Delegate Accommodations
                </h4>
                <p className="text-xs text-slate-600">
                  Preferential rates have been pre-negotiated at premier 5-star partner hotels within walking distance of the venue. 
                  Registered delegates will receive a dedicated reservation link with booking codes in their confirmation dispatch.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-navy-primary flex items-center gap-2 text-sm uppercase tracking-wider mb-2">
                  <Car className="w-4 h-4 text-gold-dark" />
                  Diplomatic & Ministerial Motorcades
                </h4>
                <p className="text-xs text-slate-600">
                  State delegations requiring diplomatic protocol clearance, private police escort coordination, 
                  or secure motorcade parking should notify the Protocol Secretariat at least 14 days in advance.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setDirectionsModalOpen(false)}
                className="px-5 py-2.5 rounded-xl bg-navy-primary hover:bg-secondary-navy text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Understood &bull; Close Guide
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

