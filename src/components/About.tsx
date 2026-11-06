import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, Globe2, Compass, Award, ExternalLink, X, FileText } from 'lucide-react';
import { conferenceData } from '../data/conference';

export const About: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="about" className="py-24 bg-surface-soft relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-navy-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-primary/5 border border-navy-primary/10 text-navy-primary text-xs font-bold uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5 text-gold-accent" />
            <span>Institutional Vision & Mandate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-deep tracking-tight font-display leading-tight mb-6">
            Where Global Business Meets Opportunity
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-navy-primary to-gold-accent rounded-full mb-6" />
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Founded under the mandate of multilateral economic cooperation, the {conferenceData.name} provides 
            a neutral, high-level forum where chief executives, finance ministers, institutional investors, and pioneers convene to solve systemic commercial challenges.
          </p>
        </div>

        {/* Editorial Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Content & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-700 leading-relaxed text-base">
              <p>
                In an era characterized by accelerated geopolitical transformation, sovereign supply chain recalibration, 
                and rapid technological evolution, international collaboration is no longer optional—it is the bedrock of corporate resilience and sustainable economic longevity.
              </p>
              <p>
                The {conferenceData.edition} centers on four transformative imperatives: unlocking institutional capital for cross-border infrastructure, 
                establishing ethical governance for frontier technologies, navigating energy transition economics, and modernizing multilateral trade corridors.
              </p>
            </div>

            {/* Strategic Pillars List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:border-gold-accent/40 transition-colors">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy-deep text-sm">Multilateral Dialogue</h4>
                    <p className="text-xs text-slate-500 mt-1">Direct engagement between sovereign policymakers and multinational corporate leadership.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:border-gold-accent/40 transition-colors">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy-deep text-sm">Sustainable Capital Flow</h4>
                    <p className="text-xs text-slate-500 mt-1">Catalyzing private market deployment towards decarbonisation and vital infrastructure.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:border-gold-accent/40 transition-colors">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy-deep text-sm">Enterprise AI Governance</h4>
                    <p className="text-xs text-slate-500 mt-1">Formulating global standards for industrial intelligence, security, and productivity.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:border-gold-accent/40 transition-colors">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy-deep text-sm">Actionable Resolutions</h4>
                    <p className="text-xs text-slate-500 mt-1">Translating discussions into binding bilateral MoUs and commercial partnerships.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Supporting Statement / Executive Endorsement */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-navy-primary to-secondary-navy text-white shadow-lg border-l-4 border-gold-accent">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-gold-accent shrink-0 mt-1 hidden sm:block" />
                <blockquote className="space-y-2">
                  <p className="text-sm italic text-slate-200 leading-relaxed">
                    &ldquo;Our mission in Geneva is to bridge sovereign strategy with private sector capital, forging actionable frameworks that ensure prosperity across emerging and developed economies alike.&rdquo;
                  </p>
                  <footer className="text-xs text-gold-light font-bold uppercase tracking-wider">
                    — Co-Chairs Committee, International Institute for Business & Economic Affairs
                  </footer>
                </blockquote>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 bg-navy-primary hover:bg-secondary-navy text-white text-xs uppercase tracking-wider font-bold px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg"
              >
                <span>Learn More About the Forum</span>
                <ArrowRight className="w-4 h-4 text-gold-accent" />
              </button>

              <a
                href="#objectives"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-navy-primary hover:text-gold-dark px-4 py-3 transition-colors"
              >
                <span>View Core Objectives</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: High Quality Executive Imagery & Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Subtle gold offset frame */}
              <div className="absolute -inset-3 rounded-2xl border-2 border-gold-accent/30 -rotate-1 hidden sm:block pointer-events-none" />
              
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-navy-deep border border-slate-200/50">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80"
                  alt="Senior international business executives networking at conference hall"
                  className="w-full h-[460px] object-cover object-center filter saturate-[1.05] hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent" />
                
                {/* Floating Image Tag */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-navy-deep/90 border border-white/10 backdrop-blur-md text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-gold-accent font-bold">Geneva Diplomatic Quarter</p>
                      <p className="text-xs font-semibold text-white">Grand Imperial Congress & Exhibition Palace</p>
                    </div>
                    <span className="text-[10px] bg-white/10 px-2.5 py-1 rounded-full text-slate-300">
                      85+ Delegations
                    </span>
                  </div>
                </div>
              </div>

              {/* Top Floating Badge */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 hidden sm:flex">
                <div className="w-10 h-10 rounded-lg bg-gold-accent/15 border border-gold-accent/40 flex items-center justify-center">
                  <Award className="w-5 h-5 text-gold-accent" />
                </div>
                <div>
                  <p className="text-xs font-black text-navy-deep">14 Consecutive Years</p>
                  <p className="text-[11px] text-slate-500">Global Executive Summit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learn More Interactive Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-deep/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="bg-navy-primary px-6 py-5 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-gold-accent" />
                <h3 className="font-bold text-lg font-display">About {conferenceData.organizer.name}</h3>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto text-sm text-slate-700 leading-relaxed">
              <div className="p-3 bg-surface-lightblue/60 rounded-lg border border-slate-200 text-xs text-navy-deep">
                <strong>Organisational Note:</strong> All organisation descriptions, founding dates, and governance details below are editable configuration placeholders ready for your institutional specifics.
              </div>

              <h4 className="font-bold text-navy-primary text-base">Mandate and Charter</h4>
              <p>
                Established in {conferenceData.organizer.foundedYear} and headquartered in {conferenceData.organizer.headquarters}, 
                the {conferenceData.organizer.name} operates as an autonomous, multi-stakeholder convening body. It facilitates 
                bilateral trade accords, macroeconomic briefings, and executive working groups between G20/OECD economies and high-growth developing markets.
              </p>

              <h4 className="font-bold text-navy-primary text-base">Annual Summit Governance</h4>
              <p>
                The summit agenda is curated through continuous consultation with our international advisory board, 
                comprising distinguished economists, former heads of state, sovereign fund governors, and industrial leaders. 
                Sessions are structured under the Chatham House Rule where specified, fostering candid, high-level deliberation.
              </p>

              <h4 className="font-bold text-navy-primary text-base">Post-Summit Impact & Declarations</h4>
              <p>
                Outcomes from the summit feed directly into the annual Geneva Communiqué, distributed to multilateral bodies, 
                G7/G20 preparatory taskforces, and international banking associations.
              </p>
            </div>

            <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-end gap-3">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-navy-deep transition-colors"
              >
                Close
              </button>
              <a
                href="#registration"
                onClick={() => setModalOpen(false)}
                className="px-5 py-2 text-xs font-bold uppercase tracking-wider bg-gold-accent hover:bg-gold-light text-navy-deep rounded-lg transition-colors"
              >
                Apply for Delegate Accreditation
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

