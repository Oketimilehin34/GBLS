import React, { useState } from 'react';
import { Landmark, Globe2, Shield, Network, Zap, Cpu, Radio, Building, Handshake, ArrowRight, X, Mail } from 'lucide-react';
import { sponsorTiers } from '../data/sponsors';

export const Sponsors: React.FC = () => {
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'bank':
        return Landmark;
      case 'globe':
        return Globe2;
      case 'shield':
        return Shield;
      case 'network':
        return Network;
      case 'energy':
        return Zap;
      case 'chip':
        return Cpu;
      case 'media':
        return Radio;
      case 'council':
      default:
        return Building;
    }
  };

  return (
    <section id="sponsors" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-primary/5 border border-navy-primary/10 text-navy-primary text-xs font-bold uppercase tracking-widest mb-4">
              <Handshake className="w-3.5 h-3.5 text-gold-accent" />
              <span>Sovereign & Corporate Alliances</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-deep tracking-tight font-display">
              Sponsors & Strategic Partners
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
              Convened in collaboration with leading multilateral development institutions, 
              global banking groups, energy leaders, and premier international financial media.
            </p>
          </div>

          <button
            onClick={() => setPartnerModalOpen(true)}
            className="inline-flex items-center gap-2 bg-navy-primary hover:bg-secondary-navy text-white text-xs uppercase tracking-wider font-bold px-6 py-3.5 rounded-xl transition-all shadow-md shrink-0"
          >
            <span>Become a Sponsor</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold-accent" />
          </button>
        </div>

        {/* Tiers Container */}
        <div className="space-y-16">
          {sponsorTiers.map((tier, idx) => (
            <div key={idx} className="space-y-6">
              {/* Tier Heading */}
              <div className="flex items-center gap-4">
                <div className="h-px bg-slate-200 flex-1" />
                <div className="text-center">
                  <h3 className="text-base sm:text-lg font-bold text-navy-deep uppercase tracking-wider font-display">
                    {tier.tierName}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 max-w-lg mx-auto">
                    {tier.description}
                  </p>
                </div>
                <div className="h-px bg-slate-200 flex-1" />
              </div>

              {/* Sponsor Grid */}
              <div
                className={`grid gap-4 sm:gap-6 ${
                  tier.tierName === 'Strategic Partners'
                    ? 'grid-cols-1 md:grid-cols-3'
                    : tier.tierName === 'Platinum Sponsors'
                    ? 'grid-cols-2 md:grid-cols-4'
                    : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
                }`}
              >
                {tier.sponsors.map((sponsor, sIdx) => {
                  const Icon = getIcon(sponsor.iconType);
                  return (
                    <div
                      key={sIdx}
                      className="p-5 sm:p-6 rounded-2xl bg-surface-soft border border-slate-200/90 hover:border-gold-accent/50 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col items-center text-center justify-between group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-navy-primary group-hover:border-gold-accent group-hover:text-gold-dark transition-colors shadow-sm mb-3">
                        <Icon className="w-6 h-6" />
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-navy-deep font-display group-hover:text-navy-primary transition-colors">
                          {sponsor.name}
                        </h4>
                        <p className="text-[11px] text-slate-500 mt-1">
                          {sponsor.category}
                        </p>
                      </div>

                      <div className="mt-4 pt-2 border-t border-slate-200/60 w-full">
                        <span className="text-[9px] uppercase tracking-wider font-mono text-slate-400">
                          {sponsor.placeholderNote}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Informational Callout */}
        <div className="mt-16 p-6 rounded-2xl bg-surface-lightblue/60 border border-navy-border/20 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-4">
          <p>
            <strong className="text-navy-deep">Compliance & Trademark Notice:</strong> All sponsor brandings and entity names above are clean placeholders designed to demonstrate tier hierarchy. No unauthorized trademarks or corporate endorsements are simulated.
          </p>
          <button
            onClick={() => setPartnerModalOpen(true)}
            className="text-xs font-bold text-navy-primary hover:text-gold-dark underline shrink-0"
          >
            Request 2027 Prospectus
          </button>
        </div>
      </div>

      {/* Become a Sponsor Modal */}
      {partnerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-deep/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Handshake className="w-5 h-5 text-gold-accent" />
                <h3 className="font-bold text-lg text-navy-deep font-display">
                  Corporate Partnership Inquiry
                </h3>
              </div>
              <button
                onClick={() => setPartnerModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-navy-deep transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-600 mb-6 leading-relaxed">
              Align your institution with 2,400+ international C-suite executives and sovereign delegations. 
              Our Corporate Partnership Directorate will transmit the confidential 2027 Summit Prospectus.
            </p>

            <div className="space-y-4">
              <div className="p-3 bg-surface-soft rounded-lg text-xs space-y-1">
                <p className="font-bold text-navy-deep">Direct Inquiries:</p>
                <p className="text-slate-600">Email: partnerships@iibea-summit.org</p>
                <p className="text-slate-600">Diplomatic Desk: +41 22 819 9400</p>
              </div>

              <a
                href="mailto:partnerships@iibea-summit.org?subject=Partnership%20Inquiry%20-%20Global%20Summit%202027"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gold-accent hover:bg-gold-light text-navy-deep font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
              >
                <Mail className="w-4 h-4" />
                <span>Email Partnership Directorate</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

